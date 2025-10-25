import { createEvent } from "ics";
import { NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "Text input is required" },
        { status: 400 }
      );
    }

    if (!GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "Google API key not configured" },
        { status: 500 }
      );
    }

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Extract events from text. Return ONLY JSON array:
[
  {
    "title": "string",
    "description": "string", 
    "location": "string",
    "start": "ISO 8601 datetime",
    "end": "ISO 8601 datetime"
  }
]

Rules:
- Return ONLY JSON array, no markdown
- Extract multiple events if present
- Extract addresses/locations from text
- If no time mentioned, assume reasonable defaults
- If no duration, assume 1 hour
- ALWAYS include a location - if not specified, use context clues
- Return valid ISO 8601 datetime strings
- Use current year (2025) if year not specified
- Extract venue names, building names, street addresses, cities, countries

Description Guidelines (CRITICAL - ALWAYS BE DETAILED):
- Include ALL relevant context from the original text
- Add meeting agenda items, topics, and discussion points
- Include participant information (who's attending)
- Add any special instructions, requirements, or preparation needed
- Preserve complete details from the source text
- If it's a meeting invitation, include full invitation context and purpose
- If it's an event announcement, include all event details and description
- Add context about the event's purpose, agenda, or expectations
- Include any links, documents, or resources mentioned
- NEVER leave description empty - always extract meaningful content

Location Guidelines (CRITICAL - ALWAYS TRY TO ENTER):
- ALWAYS attempt to extract a location - never use empty string
- Extract specific addresses when available (street, city, state, country)
- Include building names, room numbers, floor numbers
- Extract venue names (restaurants, hotels, conference centers, offices)
- Use "Virtual" or "Online" for remote meetings
- Include meeting links/URLs in location if provided
- If location not specified but context suggests it:
  - Default to "Location TBD" if it's a tentative event
  - Use "Virtual Meeting" if there's a video call link
  - Include city/country if event is location-specific
- Use context clues from the message to infer location

Text to process: ${text}`,
                },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0.1,
          },
        }),
      }
    );

    if (!geminiResponse.ok) {
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const geminiData = await geminiResponse.json();
    const message =
      geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

    // Clean the message to extract JSON (remove markdown if present)
    let cleanMessage = message.trim();
    if (cleanMessage.startsWith("```json")) {
      cleanMessage = cleanMessage
        .replace(/^```json\s*/, "")
        .replace(/\s*```$/, "");
    } else if (cleanMessage.startsWith("```")) {
      cleanMessage = cleanMessage.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }

    const eventsData = JSON.parse(cleanMessage);

    // Ensure we have an array
    if (!Array.isArray(eventsData)) {
      return NextResponse.json(
        { error: "Expected array of events" },
        { status: 400 }
      );
    }

    // Validate required fields for each event
    for (const event of eventsData) {
      if (!event.title || !event.start || !event.end) {
        return NextResponse.json(
          { error: "Failed to extract required event information" },
          { status: 400 }
        );
      }
    }

    // Process each event
    const processedEvents = eventsData.map((eventData) => {
      // Create Google Calendar link
      const formatDateForGoogleCalendar = (dateString: string) => {
        const date = new Date(dateString);
        return date
          .toISOString()
          .replace(/[-:]/g, "")
          .replace(/\.\d{3}/, "");
      };

      const gcal = new URL("https://www.google.com/calendar/render");
      gcal.searchParams.set("action", "TEMPLATE");
      gcal.searchParams.set("text", eventData.title);
      gcal.searchParams.set("details", eventData.description || "");
      gcal.searchParams.set("location", eventData.location || "");
      gcal.searchParams.set(
        "dates",
        `${formatDateForGoogleCalendar(
          eventData.start
        )}/${formatDateForGoogleCalendar(eventData.end)}`
      );

      // Create Outlook Calendar link
      const formatDateForOutlook = (dateString: string) => {
        const date = new Date(dateString);
        return date
          .toISOString()
          .replace(/[-:]/g, "")
          .replace(/\.\d{3}/, "");
      };

      const outlookUrl = new URL(
        "https://outlook.live.com/calendar/0/deeplink/compose"
      );
      outlookUrl.searchParams.set("subject", eventData.title);
      outlookUrl.searchParams.set("body", eventData.description || "");
      outlookUrl.searchParams.set("location", eventData.location || "");
      outlookUrl.searchParams.set(
        "startdt",
        formatDateForOutlook(eventData.start)
      );
      outlookUrl.searchParams.set("enddt", formatDateForOutlook(eventData.end));

      // Create .ics file
      const startDate = new Date(eventData.start);
      const endDate = new Date(eventData.end);

      const { error, value } = createEvent({
        title: eventData.title,
        description: eventData.description || "",
        location: eventData.location || "",
        start: [
          startDate.getFullYear(),
          startDate.getMonth() + 1,
          startDate.getDate(),
          startDate.getHours(),
          startDate.getMinutes(),
        ],
        end: [
          endDate.getFullYear(),
          endDate.getMonth() + 1,
          endDate.getDate(),
          endDate.getHours(),
          endDate.getMinutes(),
        ],
      });

      if (error) {
        throw new Error(
          `Failed to create ICS for event "${eventData.title}": ${error.message}`
        );
      }

      return {
        googleCalendarLink: gcal.toString(),
        outlookCalendarLink: outlookUrl.toString(),
        icsFile: Buffer.from(value!).toString("base64"),
        eventData: {
          title: eventData.title,
          description: eventData.description || "",
          location: eventData.location || "",
          start: eventData.start,
          end: eventData.end,
        },
      };
    });

    // Create bulk Google Calendar link with all events
    const bulkGcal = new URL("https://www.google.com/calendar/render");
    bulkGcal.searchParams.set("action", "TEMPLATE");

    // Combine all events into a single calendar entry
    const allTitles = processedEvents.map((e) => e.eventData.title).join(", ");
    const allLocations = processedEvents
      .map((e) => e.eventData.location)
      .filter((l) => l)
      .join(", ");

    // Use the earliest start time and latest end time
    const allStartTimes = processedEvents.map((e) =>
      new Date(e.eventData.start).getTime()
    );
    const allEndTimes = processedEvents.map((e) =>
      new Date(e.eventData.end).getTime()
    );
    const earliestStart = new Date(Math.min(...allStartTimes));
    const latestEnd = new Date(Math.max(...allEndTimes));

    // Format dates for Google Calendar
    const formatDateForGoogleCalendar = (date: Date) => {
      return date
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "");
    };

    bulkGcal.searchParams.set("text", `Multiple Events: ${allTitles}`);
    bulkGcal.searchParams.set(
      "details",
      `Events:\n${processedEvents
        .map(
          (e, i) =>
            `${i + 1}. ${e.eventData.title} - ${new Date(
              e.eventData.start
            ).toLocaleString()} to ${new Date(
              e.eventData.end
            ).toLocaleString()}${
              e.eventData.location ? ` at ${e.eventData.location}` : ""
            }${
              e.eventData.description ? `\n   ${e.eventData.description}` : ""
            }`
        )
        .join("\n\n")}`
    );
    bulkGcal.searchParams.set("location", allLocations);
    bulkGcal.searchParams.set(
      "dates",
      `${formatDateForGoogleCalendar(
        earliestStart
      )}/${formatDateForGoogleCalendar(latestEnd)}`
    );

    return NextResponse.json({
      events: processedEvents,
      count: processedEvents.length,
    });
  } catch (error) {
    console.error("Error processing event:", error);
    return NextResponse.json(
      { error: "Failed to process event" },
      { status: 500 }
    );
  }
}

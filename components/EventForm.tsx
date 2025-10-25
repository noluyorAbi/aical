"use client";
import { useState } from "react";
import { Button, Textarea, Card, Alert, Badge } from "@/components/ui";
import {
  Mail,
  Calendar,
  Users,
  Clock,
  AlertTriangle,
  Lightbulb,
  Download,
  Plus,
  ExternalLink,
} from "lucide-react";

interface EventResult {
  googleCalendarLink: string;
  outlookCalendarLink: string;
  icsFile: string;
  eventData: {
    title: string;
    description: string;
    location: string;
    start: string;
    end: string;
  };
}

interface ApiResponse {
  events: EventResult[];
  count: number;
  bulkGoogleCalendarLink?: string;
}

export default function EventForm() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Provide more specific error messages based on the error
        if (res.status === 400) {
          throw new Error(
            "Please provide a valid event description. Try being more specific about the time, date, or event details."
          );
        } else if (res.status === 429) {
          throw new Error(
            "Too many requests. Please wait a moment and try again."
          );
        } else if (res.status === 500) {
          throw new Error(
            "Our AI is having trouble processing your request. Please try rephrasing your event description."
          );
        } else {
          throw new Error(
            data.error ||
              "Failed to process event. Please try again with a clearer description."
          );
        }
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-6">
      {/* Helpful Examples */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-slate-200">
            Just paste message content:
          </h4>
          <div className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-800/30">
            🔒 Privacy First
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400" />
              <p className="text-slate-300 font-medium">Meeting invitations:</p>
            </div>
            <p className="text-slate-400 italic">
              Paste entire Outlook/Google Calendar invites
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <p className="text-slate-300 font-medium">Event announcements:</p>
            </div>
            <p className="text-slate-400 italic">
              Paste company event messages
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-400" />
              <p className="text-slate-300 font-medium">RSVP messages:</p>
            </div>
            <p className="text-slate-400 italic">
              Paste party/wedding invitation messages
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <p className="text-slate-300 font-medium">
                Appointment reminders:
              </p>
            </div>
            <p className="text-slate-400 italic">
              Paste doctor, dentist, service appointments
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
          className="min-h-[120px]"
          placeholder="Subject: Team Standup Meeting&#10;&#10;Hi everyone,&#10;&#10;Let's have our weekly standup tomorrow at 2pm in Conference Room A. We'll discuss the current sprint progress and blockers.&#10;&#10;See you there!&#10;John"
          disabled={loading}
        />
        <div className="flex justify-between items-center">
          <div className="text-xs text-slate-500 bg-slate-800/40 px-3 py-1 rounded-full border border-slate-700/50">
            {text.length} characters •{" "}
            {text.trim() ? text.trim().split(/\s+/).length : 0} words
          </div>
          <div className="text-xs text-slate-500 bg-green-900/20 px-3 py-1 rounded-full border border-green-800/30">
            🔒 No data saved by us • Privacy protected
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading || !text.trim()}
        loading={loading}
        size="lg"
        className="w-full"
      >
        {loading ? "AI is processing your event..." : "Create Calendar Events"}
      </Button>

      {/* Empty state guidance */}
      {!text.trim() && !loading && !result && !error && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">✏️</div>
          <h3 className="text-lg font-semibold text-slate-200 mb-2">
            Ready to create your event?
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Just paste message content above or describe your event naturally.
            Our AI will extract all the details and create calendar-ready events
            for you.
          </p>
        </div>
      )}

      {error && (
        <Alert variant="error">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <div className="flex-1">
                <p className="font-semibold text-red-200 mb-2">
                  Processing Failed
                </p>
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-3 mt-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-red-200" />
                <p className="text-xs text-red-200 font-medium mb-2">
                  Tips to fix this:
                </p>
              </div>
              <ul className="text-xs text-red-300 space-y-1">
                <li>
                  • Include a specific time (e.g., &ldquo;2pm&rdquo;,
                  &ldquo;tomorrow at 3pm&rdquo;)
                </li>
                <li>
                  • Mention a date or relative time (e.g., &ldquo;next
                  Tuesday&rdquo;, &ldquo;tomorrow&rdquo;)
                </li>
                <li>
                  • Be clear about what the event is (meeting, appointment,
                  party, etc.)
                </li>
                <li>• Try rephrasing with more details</li>
              </ul>
            </div>
          </div>
        </Alert>
      )}

      {result && (
        <div className="space-y-6">
          <Alert variant="success">
            <div className="flex items-center justify-between w-full">
              <span className="font-semibold">
                {result.count === 1
                  ? "Event Created Successfully!"
                  : `${result.count} Events Created Successfully!`}
              </span>
              {result.count > 1 && (
                <Badge variant="primary" size="sm">
                  {result.count} events
                </Badge>
              )}
            </div>

            {result.count > 1 && (
              <div className="mt-4">
                <Button
                  onClick={() => {
                    result.events.forEach((event, index) => {
                      setTimeout(() => {
                        window.open(event.googleCalendarLink, "_blank");
                      }, index * 500); // Stagger opening by 500ms
                    });
                  }}
                  variant="secondary"
                  size="sm"
                  className="mr-3"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                    Add All Events to Google Calendar
                  </div>
                </Button>
                <p className="text-xs text-green-600 mt-2">
                  This opens each event in Google Calendar with details
                  pre-filled - just click "Save"
                </p>
              </div>
            )}
          </Alert>

          <div className="space-y-4">
            {result.events.map((event, index) => (
              <Card
                key={index}
                hover
                gradient
                className="p-6 bg-white/5 border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {result.count > 1 ? `Event ${index + 1}: ` : ""}
                      {event.eventData.title}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      {event.eventData.description && (
                        <p>
                          <span className="font-medium text-gray-200">
                            Description:
                          </span>{" "}
                          {event.eventData.description}
                        </p>
                      )}
                      {event.eventData.location && (
                        <p>
                          <span className="font-medium text-gray-200">
                            Location:
                          </span>{" "}
                          {event.eventData.location}
                        </p>
                      )}
                      <p>
                        <span className="font-medium text-gray-200">
                          Start:
                        </span>{" "}
                        {new Date(event.eventData.start).toLocaleString()}
                      </p>
                      <p>
                        <span className="font-medium text-gray-200">End:</span>{" "}
                        {new Date(event.eventData.end).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    href={event.googleCalendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="flex-1"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          fill="#4285F4"
                        />
                      </svg>
                      Add to Google Calendar
                    </div>
                  </Button>
                  <Button
                    href={event.outlookCalendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7zm2 2h6v2H9V6zm0 4h6v2H9v-2zm0 4h4v2H9v-2z" />
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          fill="#0078D4"
                        />
                      </svg>
                      Add to Outlook
                    </div>
                  </Button>
                  <Button
                    href={`data:text/calendar;base64,${event.icsFile}`}
                    download={`event-${index + 1}.ics`}
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download ICS
                    </div>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 mt-6">
        <div className="flex items-start gap-3">
          <div className="text-green-400 text-lg">🔒</div>
          <div>
            <h5 className="text-sm font-semibold text-slate-200 mb-2">
              Your Privacy is Protected
            </h5>
            <div className="text-xs text-slate-400 space-y-1">
              <p>
                • <strong>No data storage:</strong> We don't save your messages
                or personal information
              </p>
              <p>
                • <strong>Local processing:</strong> Your data is processed
                securely and discarded immediately
              </p>
              <p>
                • <strong>No tracking:</strong> We don't track or monitor your
                usage
              </p>
              <p>
                • <strong>Secure transmission:</strong> All data is encrypted
                during processing
              </p>
              <p className="text-blue-300">
                • <strong>AI Processing:</strong> We use Google's AI Studio API
                to process your messages - Google's privacy policy applies to AI
                processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

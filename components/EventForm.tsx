"use client";
import { useState } from "react";
import { Button, Textarea, Card, Alert } from "@/components/ui";
import {
  Mail,
  Calendar,
  Users,
  Clock,
  AlertTriangle,
  Lightbulb,
  Download,
} from "lucide-react";
import { SiGooglecalendar } from "react-icons/si";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

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
            "Please provide a valid event description. Try being more specific about the time, date, or event details.",
          );
        } else if (res.status === 429) {
          throw new Error(
            "Too many requests. Please wait a moment and try again.",
          );
        } else if (res.status === 500) {
          throw new Error(
            "Our AI is having trouble processing your request. Please try rephrasing your event description.",
          );
        } else {
          throw new Error(
            data.error ||
              "Failed to process event. Please try again with a clearer description.",
          );
        }
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.",
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
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
          onKeyDown={handleKeyPress}
          className="min-h-[120px]"
          placeholder="Subject: Team Standup Meeting

Hi everyone,

Let's have our weekly standup tomorrow at 2pm in Conference Room A. We'll discuss the current sprint progress and blockers.

See you there!
John"
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
                  • Include a specific time (e.g., &quot;2pm&quot;,
                  &quot;tomorrow at 3pm&quot;)
                </li>
                <li>
                  • Mention a date or relative time (e.g., &quot;next
                  Tuesday&quot;, &quot;tomorrow&quot;)
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
            <span className="font-semibold">
              {result.count === 1
                ? "Event Created Successfully!"
                : `${result.count} Events Created Successfully!`}
            </span>
          </Alert>

          <div className="space-y-4">
            {result.events.map((event: EventResult, index: number) => (
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
                      <SiGooglecalendar className="w-4 h-4" />
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
                      <PiMicrosoftOutlookLogo className="w-4 h-4" />
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
                • <strong>No data storage:</strong> We don&apos;t save your
                messages or personal information
              </p>
              <p>
                • <strong>Local processing:</strong> Your data is processed
                securely and discarded immediately
              </p>
              <p>
                • <strong>No tracking:</strong> We don&apos;t track or monitor
                your usage
              </p>
              <p>
                • <strong>Secure transmission:</strong> All data is encrypted
                during processing
              </p>
              <p className="text-blue-300">
                • <strong>AI Processing:</strong> We use Google&apos;s AI Studio
                API to process your messages - Google&apos;s privacy policy
                applies to AI processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "AI Calendar Events - Free AI tool that transforms messages into Google Calendar and Outlook events instantly. Paste emails, texts, or messages and get calendar links.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #0ea5e9 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "80px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Calendar + AI Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              gap: "20px",
            }}
          >
            <div style={{ fontSize: "100px" }}>📅</div>
            <div
              style={{
                fontSize: "60px",
                background: "linear-gradient(135deg, #38bdf8, #3b82f6)",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✨
            </div>
            <div style={{ fontSize: "100px" }}>🤖</div>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #38bdf8, #3b82f6, #06b6d4)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 30px 0",
              lineHeight: "1.1",
              textAlign: "center",
            }}
          >
            AI Calendar Events
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "36px",
              color: "#94a3b8",
              margin: "0 0 50px 0",
              maxWidth: "1000px",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            Paste emails, texts, or messages → Get calendar events instantly
          </p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: "80px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "48px" }}>🤖</div>
              <span
                style={{
                  color: "#f8fafc",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                AI Powered
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "48px" }}>📅</div>
              <span
                style={{
                  color: "#f8fafc",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Google & Outlook
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "48px" }}>🆓</div>
              <span
                style={{
                  color: "#f8fafc",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                100% Free
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "48px" }}>⚡</div>
              <span
                style={{
                  color: "#f8fafc",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Lightning Fast
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Brand */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#64748b",
            fontSize: "16px",
          }}
        >
          <span>Built by Alperen Adatepe</span>
          <span>•</span>
          <span>Powered by Google Gemini AI</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "AI Calendar Events - Transform messages into calendar events instantly. AI-powered tool that converts any text into Google Calendar links and ICS files.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage() {
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
            padding: "60px",
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
              marginBottom: "30px",
              gap: "16px",
            }}
          >
            <div style={{ fontSize: "80px" }}>📅</div>
            <div
              style={{
                fontSize: "48px",
                background: "linear-gradient(135deg, #38bdf8, #3b82f6)",
                borderRadius: "50%",
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✨
            </div>
            <div style={{ fontSize: "80px" }}>🤖</div>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #38bdf8, #3b82f6, #06b6d4)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 25px 0",
              lineHeight: "1.1",
              textAlign: "center",
            }}
          >
            AI Calendar Events
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              margin: "0 0 35px 0",
              maxWidth: "700px",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            Transform messages into calendar events instantly
          </p>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
              padding: "16px 32px",
              borderRadius: "16px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            Try It Now →
          </div>
        </div>

        {/* Bottom Brand */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          <span>@alperenadatepe</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

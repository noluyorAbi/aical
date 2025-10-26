import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          position: "relative",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Modern Calendar Icon */}
        <div
          style={{
            position: "relative",
            width: "22px",
            height: "22px",
            backgroundColor: "white",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Calendar Header with Rings */}
          <div
            style={{
              width: "100%",
              height: "6px",
              backgroundColor: "#0ea5e9",
              borderRadius: "4px 4px 0 0",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {/* Ring holes */}
            <div
              style={{
                width: "2px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Calendar Body */}
          <div
            style={{
              flex: 1,
              padding: "2px",
              display: "flex",
              flexDirection: "column",
              gap: "1px",
            }}
          >
            {/* Calendar Grid Rows */}
            <div
              style={{
                display: "flex",
                gap: "1px",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  width: "2px",
                  height: "2px",
                  backgroundColor: "#e2e8f0",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  width: "2px",
                  height: "2px",
                  backgroundColor: "#e2e8f0",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  width: "2px",
                  height: "2px",
                  backgroundColor: "#0ea5e9",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "1px",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  width: "2px",
                  height: "2px",
                  backgroundColor: "#e2e8f0",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  width: "2px",
                  height: "2px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  width: "2px",
                  height: "2px",
                  backgroundColor: "#e2e8f0",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>

        {/* AI Indicator - Modern Sparkle */}
        <div
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
            width: "10px",
            height: "10px",
            background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div style={{ color: "white", fontSize: "5px" }}>✨</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

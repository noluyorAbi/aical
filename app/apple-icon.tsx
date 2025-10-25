import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #3b82f6, #06b6d4)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          position: "relative",
        }}
      >
        {/* Calendar Icon Background */}
        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Calendar Header */}
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#0ea5e9",
              borderRadius: "8px 8px 0 0",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Calendar Rings */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ width: "4px", height: "12px", backgroundColor: "white", borderRadius: "2px" }} />
              <div style={{ width: "4px", height: "12px", backgroundColor: "white", borderRadius: "2px" }} />
              <div style={{ width: "4px", height: "12px", backgroundColor: "white", borderRadius: "2px" }} />
            </div>
          </div>
          
          {/* Calendar Body */}
          <div
            style={{
              width: "100px",
              height: "80px",
              backgroundColor: "white",
              borderRadius: "0 0 8px 8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {/* Calendar Grid */}
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#0ea5e9", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", backgroundColor: "#64748b", borderRadius: "50%" }} />
            </div>
          </div>
        </div>
        
        {/* AI Sparkle Effect */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            color: "white",
            fontSize: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            backdropFilter: "blur(10px)",
          }}
        >
          ✨
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // React Bits inspired palette
        bits: {
          primary: "#0EA5E9", // Sky blue
          secondary: "#0F172A", // Slate 900
          accent: "#38BDF8", // Sky 400
          background: "#020617", // Slate 950
          surface: "#0F172A", // Slate 900
          border: "#1E293B", // Slate 800
          "border-light": "#334155", // Slate 700
          text: "#F8FAFC", // Slate 50
          "text-muted": "#94A3B8", // Slate 400
          "text-subtle": "#64748B", // Slate 500
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter Tight", "system-ui", "sans-serif"],
      },
      boxShadow: {
        chronos: "0 0 40px -10px rgba(90, 95, 255, 0.3)",
        "chronos-lg": "0 0 60px -10px rgba(90, 95, 255, 0.4)",
        "chronos-xl": "0 0 80px -10px rgba(90, 95, 255, 0.5)",
        glow: "0 0 30px -5px rgba(90, 95, 255, 0.4)",
        "glow-lg": "0 0 50px -5px rgba(90, 95, 255, 0.6)",
      },
      backgroundImage: {
        "gradient-chronos":
          "linear-gradient(135deg, #5A5FFF 0%, #3B82F6 50%, #06B6D4 100%)",
        "gradient-chronos-subtle":
          "linear-gradient(135deg, rgba(90, 95, 255, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        gradient: "gradient 8s ease infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(90, 95, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(90, 95, 255, 0.6)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

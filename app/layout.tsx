import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiCal - AI-Powered Calendar Events",
  description:
    "Transform any message into calendar events with AI. Paste emails, texts, or messages and get Google Calendar links, Outlook links, and ICS files instantly. Free AI-powered calendar assistant for professionals.",
  keywords: [
    "AI calendar",
    "calendar automation",
    "Google Calendar",
    "Outlook calendar",
    "ICS files",
    "event extraction",
    "natural language processing",
    "productivity tool",
    "scheduling assistant",
    "calendar events",
    "Google Gemini AI",
    "calendar generator",
    "email to calendar",
    "message to calendar",
    "AI scheduling",
    "calendar AI",
    "free calendar tool",
    "calendar converter",
    "event parser",
    "smart calendar",
  ],
  authors: [{ name: "Alperen Adatepe" }],
  creator: "Alperen Adatepe",
  publisher: "Alperen Adatepe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aical.adatepe.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AiCal - AI-Powered Calendar Events",
    description:
      "Transform any message into calendar events with AI. Paste emails, texts, or messages and get Google Calendar links, Outlook links, and ICS files instantly. Free AI-powered calendar assistant.",
    url: "https://aical.adatepe.dev",
    siteName: "AiCal",
    images: [
      {
        url: "https://aical.adatepe.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AiCal - AI-powered web app that turns natural language into calendar entries",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiCal - AI-Powered Calendar Events",
    description:
      "Transform any message into calendar events with AI. Paste emails, texts, or messages and get Google Calendar links, Outlook links, and ICS files instantly. Free AI tool.",
    creator: "@alperenadatepe",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

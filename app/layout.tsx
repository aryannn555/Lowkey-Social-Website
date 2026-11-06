import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Lowkey: Lowkey into someone?",
  description:
    "The dating app where everyone is from your campus. Verified college-email-only signup for Indian students. Private, safe, and campus-exclusive.",
  metadataBase: new URL("https://lowkeysocial.in"),
  openGraph: {
    title: "Lowkey: Lowkey into someone?",
    description:
      "The dating app where everyone is from your campus. Verified. Real. Yours.",
    url: "https://lowkeysocial.in",
    siteName: "Lowkey Social",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lowkey - Campus Exclusive Connections",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lowkey: Lowkey into someone?",
    description: "The dating app where everyone is from your campus.",
    creator: "@lowkeysocial",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-[#080808] text-white selection:bg-[#E8589A]/30 selection:text-white">
        {/* Film grain noise overlay */}
        <div className="film-grain" aria-hidden="true" />
        {/* Glowing pink cursor dot */}
        <CustomCursor />
        {/* Smooth scroll wrapper */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

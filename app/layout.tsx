import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Lowkey Social · College-exclusive dating for Indian students",
  description:
    "The dating app where everyone is from your campus. Verified college-email-only signup for Indian students. Private, safe, and campus-exclusive.",
  metadataBase: new URL("https://lowkeysocial.in"),
  openGraph: {
    title: "Lowkey Social · College-exclusive dating for Indian students",
    description:
      "The dating app where everyone is from your campus. Verified. Real. Yours.",
    url: "https://lowkeysocial.in",
    siteName: "Lowkey Social",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBD2E0",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400..700&display=swap"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "../components/Header";
import FloatingWidgets from "../components/FloatingWidgets";
import BackgroundLayers from "../components/BackgroundLayers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_BASE_URL || "http://localhost:3001"),
  applicationName: "TRADERSPOOL",
  title: {
    default: "TRADERSPOOL — AI‑Engineered Collaborative Trading Hub",
    template: "%s | TRADERSPOOL"
  },
  description:
    "Dive into the ultimate AI‑powered hub—connect with pro traders, unlock elite signals and bots, and dominate markets with cutting‑edge multi‑agent tech.",
  authors: [{ name: "Traderspool" }],
  keywords: [
    "trading",
    "crypto",
    "signals",
    "bots",
    "AI",
    "multi‑agent",
    "Traderspool",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "TRADERSPOOL",
    title: "TRADERSPOOL — AI‑Engineered Collaborative Trading Hub",
    description:
      "Connect with pro traders, unlock elite signals & bots, and trade smarter with multi‑agent AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRADERSPOOL — AI‑Engineered Collaborative Trading Hub",
    description:
      "Connect with pro traders, unlock elite signals & bots, and trade smarter with multi‑agent AI.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <head />
      <body suppressHydrationWarning className="antialiased dark:bg-gray-900 transition-colors duration-300 min-h-screen pb-safe">
        <BackgroundLayers />
        <Header />
        <ClientBody>{children}</ClientBody>
        <FloatingWidgets />
      </body>
    </html>
  );
}

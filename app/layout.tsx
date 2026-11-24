import type { Metadata, Viewport } from "next";
import { Geist, Inter_Tight } from "next/font/google";
import "./reference.css";
import "./site.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-geist", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter-tight", display: "swap" });

export const metadata: Metadata = {
  title: "Meridian Law — Trusted counsel, proven results",
  description:
    "Experienced New York attorneys delivering practical, results-driven legal counsel for individuals, families and businesses since 1999.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#123b32" };

// Gate pre-animation hidden states on JS; if init never runs, reveal everything after 4s.
const BOOT = `document.documentElement.classList.add('js');setTimeout(function(){document.documentElement.classList.add('ready')},4000);`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${interTight.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}

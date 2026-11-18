import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selbe Mall | Худалдаа • Хоол • Зугаа цэнгэл",
  description:
    "Selbe Mall - Улаанбаатарын төвд байрлах орчин үеийн худалдааны төв. Давхар бүрийн төлөвлөлт, брэнд дэлгүүр, ресторан, кино театр.",
};

export const viewport: Viewport = {
  themeColor: "#14110f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

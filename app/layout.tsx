import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Barlow, Barlow_Condensed } from "next/font/google";
import { site } from "@/content/site";
import { sheetScript } from "./_components/sheet-script";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = Azeret_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.purpose,
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/brand/mark.png` },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E4E4E4" },
    { media: "(prefers-color-scheme: dark)", color: "#151514" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: sheetScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

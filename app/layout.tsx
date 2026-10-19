import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Barlow, Barlow_Condensed } from "next/font/google";
import { site } from "@/content/site";
import {
  SHEET_FILM,
  defaultSheet,
  sheetScript,
} from "./_components/sheet-script";
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
  colorScheme: defaultSheet === "light" ? "light" : "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      data-theme={defaultSheet ?? undefined}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="theme-color"
          content={SHEET_FILM[defaultSheet ?? "light"]}
        />
        <script dangerouslySetInnerHTML={{ __html: sheetScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

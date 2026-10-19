import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Barlow, Barlow_Condensed } from "next/font/google";
import { site } from "@/content/site";
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
  icons: { icon: "/brand/mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#ECEBE6",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

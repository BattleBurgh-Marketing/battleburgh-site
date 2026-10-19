import { site, type Sheet } from "@/content/site";

export const SHEET_KEY = "sheet";

/** Toggle order. */
export const SHEETS: Sheet[] = ["halloween", "light", "dark"];

/** Browser chrome colour per sheet (matches each sheet's --film). */
export const SHEET_FILM: Record<Sheet, string> = {
    halloween: "#120d17",
    light: "#e4e4e4",
    dark: "#151514",
};

/** The sheet the server renders, or null to follow the system. */
export const defaultSheet: Sheet | null =
    site.theme === "system" ? null : site.theme;

/** Runs in <head> before paint: applies a saved sheet and matches the browser chrome. */
export const sheetScript = `(function(){var d=document.documentElement,f=${JSON.stringify(SHEET_FILM)};try{var t=localStorage.getItem("${SHEET_KEY}");if(f[t])d.setAttribute("data-theme",t)}catch(e){}var s=d.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",f[s])})()`;

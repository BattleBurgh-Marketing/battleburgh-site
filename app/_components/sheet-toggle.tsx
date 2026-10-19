"use client";

import { useSyncExternalStore } from "react";
import type { Sheet } from "@/content/site";
import { SHEETS, SHEET_FILM, SHEET_KEY, defaultSheet } from "./sheet-script";

const FLIP = "sheetchange";

const NAMES: Record<Sheet, string> = {
    halloween: "Hallowe'en",
    light: "Light",
    dark: "Dark",
};

function currentSheet(): Sheet {
    const set = document.documentElement.getAttribute("data-theme");
    if (SHEETS.includes(set as Sheet)) return set as Sheet;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function subscribe(onChange: () => void) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", onChange);
    window.addEventListener(FLIP, onChange);
    return () => {
        media.removeEventListener("change", onChange);
        window.removeEventListener(FLIP, onChange);
    };
}

/** Cycles the drawing through its sheets: Hallowe'en → Light → Dark. */
export function SheetToggle() {
    const sheet = useSyncExternalStore(
        subscribe,
        currentSheet,
        () => defaultSheet ?? "light",
    );
    const next = SHEETS[(SHEETS.indexOf(sheet) + 1) % SHEETS.length];

    const flip = () => {
        const to = SHEETS[(SHEETS.indexOf(currentSheet()) + 1) % SHEETS.length];
        document.documentElement.setAttribute("data-theme", to);
        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", SHEET_FILM[to]);
        try {
            localStorage.setItem(SHEET_KEY, to);
        } catch {}
        window.dispatchEvent(new Event(FLIP));
    };

    return (
        <button
            type="button"
            className="sheet-toggle"
            onClick={flip}
            aria-label={`Theme: ${NAMES[sheet]}. Switch to ${NAMES[next]}`}
            title={`Switch to ${NAMES[next]}`}
        >
            {/* The mark is picked in CSS from data-theme, so it is right before hydration. */}
            <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="6.25" />
                <path className="i-dark icon-fill" d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" />
                <g className="i-halloween">
                    <path d="M8 1.75 8.9.4" />
                    <path className="icon-fill" d="M4.6 7.3h2.1L5.65 5.5zM9.3 7.3h2.1l-1.05-1.8z" />
                    <path d="M4.9 9.9l1.03 1.1 1.04-1.1 1.03 1.1 1.04-1.1 1.03 1.1 1.03-1.1" />
                </g>
                <path className="i-light" d="M8 8h0" />
            </svg>
        </button>
    );
}

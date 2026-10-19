"use client";

import { useSyncExternalStore } from "react";
import { SHEET_KEY } from "./sheet-script";

type Sheet = "light" | "dark";

const FLIP = "sheetchange";

function currentSheet(): Sheet {
    const set = document.documentElement.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
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

/** Swaps the drawing between the light sheet and the night sheet. */
export function SheetToggle() {
    const sheet = useSyncExternalStore(subscribe, currentSheet, () => null);

    const flip = () => {
        const next: Sheet = currentSheet() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem(SHEET_KEY, next);
        } catch { }
        window.dispatchEvent(new Event(FLIP));
    };

    return (
        <button
            type="button"
            className="sheet-toggle"
            onClick={flip}
            aria-label="Dark theme"
            aria-pressed={sheet === "dark"}
        >
            <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="6.25" />
                <path className="icon-fill" d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" />
            </svg>
        </button>
    );
}

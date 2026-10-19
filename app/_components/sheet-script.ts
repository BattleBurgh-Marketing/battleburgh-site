export const SHEET_KEY = "sheet";

/** Runs in <head> before paint, so a saved sheet never flashes the other one. */
export const sheetScript = `(function(){try{var t=localStorage.getItem("${SHEET_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

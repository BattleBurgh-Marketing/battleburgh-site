---
name: Battleburgh
description: Edinburgh University's first robot fighting society, drawn as one general-arrangement engineering sheet.
colors:
  film: "#ecebe6"
  film-deep: "#e3e2dc"
  ink: "#151515"
  ink-2: "#44433f"
  ink-3: "#64635e"
  rule: "#2b2b29"
  hatch: "#b9b8b1"
  red: "#c9202a"
  red-deep: "#a3161f"
  blue: "#2457e6"
  blue-deep: "#1a43b8"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.5rem, 8.4vw, 8.75rem)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3rem, 8vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.84
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 0.9
  caps:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.02em"
  action:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.03em"
  field-label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.05em"
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "11.5px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
  spec:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  circle: "50%"
spacing:
  hairline: "1px"
  frame: "2px"
  gutter: "20px"
  cell: "24px"
  pad: "28px"
  margin: "40px"
  strip: "60px"
components:
  button-email:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-accent}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "36px"
  button-email-hover:
    backgroundColor: "{colors.red-deep}"
  button-join-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-accent}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
  button-join-red-hover:
    backgroundColor: "{colors.red-deep}"
  button-join-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-accent}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
  button-join-blue-hover:
    backgroundColor: "{colors.blue-deep}"
  button-apply:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.film}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
  button-apply-hover:
    backgroundColor: "{colors.ink-2}"
  button-mail-address:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "36px"
  nav-link-hover:
    backgroundColor: "{colors.film-deep}"
  email-cell:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.none}"
    padding: "20px 20px 18px"
  cell:
    backgroundColor: "{colors.film}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.pad}"
  chip-skill:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "3px 9px"
  icon-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "32px"
  icon-link-hover:
    backgroundColor: "{colors.film-deep}"
    textColor: "{colors.blue}"
  balloon:
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "52px"
  balloon-small:
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "34px"
---

# Design System: Battleburgh

## Overview

**Creative North Star: "The Drawing Sheet"**

The whole society is one general-arrangement engineering drawing. A 2px ink frame sits inside a margin that carries zone references: column numbers 1 to 8 along the top and bottom edge, zone letters A to F down the left edge, one letter per section. Inside the frame, every region is a ruled view: hairline-divided cells on drafting film, headed by a condensed capital title, a leader line and a circled balloon letter. The page ends where a drawing ends, in a title block: the society name, its purpose, the channel cells and the email cell.

Density is that of a working drawing: many small labelled fields, big uppercase view titles, and real build photos plotted into traced frames. Colour is almost entirely ink on film. Two accent inks do the coding work: blue for the control/Unibot programme, red for the fighting bots, their join actions and every email action. Nothing is lifted, rounded or glowing; depth comes only from ruling and the 2px frame. The world rejects the dark neon combat-robot hero and the full-bleed-photo-under-headline society template.

All copy, links, photos and committee entries come from one file, `content/site.ts`; the page renders entirely from it. A photo set to `null` renders as a section-hatched "Photo to add" view, so missing imagery is drawn honestly rather than faked.

**Key Characteristics:**
- Light drafting-film ground with near-black ink; one 2px frame, everything else 1px hairlines.
- An 8-column zone grid that the margin numbers literally label.
- Zone letters A–F in the left margin; balloon letters on view titles match the zone they head.
- Blue codes Unibot/control; red codes fighting bots and the email action; ink carries the committee application.
- Barlow Condensed uppercase for every title and action, Barlow for reading, Azeret Mono for zone markers, specs and captions.
- Square corners on every rectangle; circles only for balloons and leader terminals.
- One signature motion: frames trace in, photos plot in, leaders extend, balloons land, once, below the fold only.

## Colors

Ink and drafting film, with two coding inks used by meaning, never by decoration.

### Primary
- **Plotter Red** (`red`): the fighting-bot code (Antweight and Beetleweight view titles, beetleweight team titles, their join buttons and arrows) and the single colour of every email action: the strip's EMAIL US button, the title block's email cell, the footer address button. Darkens to **Deep Plotter Red** (`red-deep`) on hover.

### Secondary
- **Control Blue** (`blue`): the Unibot/control programme code (its view title, quick-link row, join button), plus focus outlines, text selection and footer link hover. Darkens to **Deep Control Blue** (`blue-deep`) on hover.

### Neutral
- **Drafting Film** (`film`): the page and every cell background. Also the browser theme colour.
- **Film Shade** (`film-deep`): hover fill for neutral links and cells, empty image ground, scrollbar track.
- **Drawing Ink** (`ink`): body text, the 2px sheet frame, the 2px title-block top border, balloon outlines, leader lines, photo trace strokes.
- **Ink Two** (`ink-2`): secondary text: purpose paragraph, mono captions, field labels, specs.
- **Ink Three** (`ink-3`): tertiary text: zone numbers and letters, placeholder captions. Holds 5:1 on film; it is the lightest colour allowed for text.
- **Rule** (`rule`): the 1px hairlines that divide every ruled grid, the strip's bottom edge, skill-chip and person-photo borders.
- **Hatch** (`hatch`): section-hatching lines, margin zone dividers, field-list dividers, footer link underlines. Never text.
- **On-Accent White** (`on-accent`): text on red and blue fills only.

### Named Rules
**The Coding Ink Rule.** Blue means control/Unibot; red means fighting bots or email. A colour is chosen by what the element belongs to, carried through a single `--tone` / `--tone-deep` pair set by `tone-blue` or `tone-red`. Never pick an accent for variety.

**The Red Email Rule.** Every email action is a solid red fill with white text. There is no outline or ghost email button, and red fills are not used for anything that is not email or a fighting-bot join action. The committee application is an ink action, never red.

**The Hatch Is Not Ink Rule.** Hatch (1.67:1 on film) draws dividers and hatching only; any text uses ink, ink-2 or ink-3.

## Typography

**Display Font:** Barlow Condensed (500/600/700, with sans-serif fallback)
**Body Font:** Barlow (400/500/600, with system-ui fallback)
**Label/Mono Font:** Azeret Mono (400/500, with ui-monospace fallback)

**Character:** Condensed industrial capitals for anything a drafter would letter on the sheet, a plain humanist sans for the reading copy, and a mono for numbers, specs and captions the way a drawing prints its notes. Body text uses tabular numerals throughout.

### Hierarchy
- **Display** (700, clamp(3.5rem, 8.4vw, 8.75rem), 0.84, uppercase): the society name in the title block only; 15.5vw on phones.
- **Headline** (700, clamp(3rem, 8vw, 7.5rem), 0.84, uppercase): view titles for each zone and the committee title, coloured by tone; clamp(2.75rem, 14vw, 4.5rem) on phones.
- **Title** (700, clamp(2rem, 3.2vw, 3.25rem), 0.9, uppercase): first-viewport view links. The same band (roughly 2–3.5rem, line-height 0.86–0.92) carries team titles, the EMAIL US cell and the footer call.
- **Caps** (600, 20–24px, uppercase): tagline, social cell labels, person names, footer links, join-lead names.
- **Action** (600, 18px, 0.03em, uppercase): nav links and buttons; 16px nav on phones.
- **Field label** (600, 14px, 0.05em, uppercase, ink-2): names a field (What you'd do, Skills, Lead, committee role, footer column).
- **Lead** (400, 20px, 1.45, max 46ch): the summary paragraph opening each bot zone; 18px on phones.
- **Body** (400, 17px, 1.55): reading copy; 16px on phones. Purpose paragraph capped at 62ch.
- **Label** (Azeret Mono 400, 11.5px, 0.06em, uppercase, ink-2): figure captions, the strip's tagline, the academic year, the footer strip.
- **Spec** (Azeret Mono 400, 12–13px, 0.04em, uppercase): specs beside view titles and in view links. Zone markers use the mono at 11–12px in ink-3.

### Named Rules
**The Lettered Caps Rule.** Every h1–h3, nav item, button and field label is uppercase Barlow Condensed. Sentence-case is for Barlow reading copy only.

**The Mono Is Data Rule.** Azeret Mono carries zones, specs, captions and the email address, never sentences of prose.

## Layout

The sheet is centred at a 1680px maximum with a 40px margin (16px on phones) that holds the zone markers. A row of eight numbered columns sits above and below the frame; the 8-column grid inside the frame matches it, so the hero, title block, bot bodies and footer all span columns by those numbers.

Ruled grids are the core layout device: a grid with a 1px gap over a rule-coloured background, whose children are film-coloured cells, so the gaps read as hairlines. Cell padding is 28px (`pad`, 18px on phones), photo groups gap 20px, team cells pad 24px.

First viewport: photo view in columns 1–5, three stacked view links in 6–8, then a full-width title block under a 2px ink border (name 1–5, social cells 6–7, red email cell 8). The strip is sticky at 60px (54px on phones) with a 1px rule beneath it; anchor scrolling offsets by its height.

Bot zones split 3/5 columns, text and photos, with the Antweight zone mirrored. Beetleweight teams sit in three columns; committee in five, with the last row left short when the roster doesn't fill it.

Responsive: at 1180px the email cell becomes a full-width row, bot zones split 4/4, teams go 2+1, committee to four. At 760px everything is one column, the title block dissolves into the hero and reorders to name, email cell, view links, photo, social cells; photos move above text in bot zones; committee is two-up; the strip drops the wordmark and email button.

## Elevation & Depth

The sheet is flat. Depth is conveyed only by line weight: the 2px ink frame and 2px title-block border outrank the 1px rule hairlines, which outrank the lighter hatch dividers. The one `box-shadow` in the build (committee person cells) is a zero-blur 1px offset in rule colour, used to draw the cell rulings of that grid, not to lift anything.

### Shadow Vocabulary
- **Ruling** (`box-shadow: 1px 0 0 var(--rule), 0 1px 0 var(--rule), 1px 1px 0 var(--rule)`): draws hairlines between cells where the gap-over-background technique can't be used. Lines only.

### Named Rules
**The Line Weight Rule.** Hierarchy of structure is 2px ink, then 1px rule, then 1px hatch. No blur, no lift, no glow.

## Shapes

Every rectangle has square corners: cells, buttons, chips, photo frames, the email cell. The only curves are the drawing's own: circular balloons (1.5px ink outline, 52px; 34px small; 42px on phones) and the 7px filled dot that terminates each leader line. Empty photo views are filled with 45° section hatching (1px hatch lines every 10px) with a small bordered mono tag. Arrows and icons are inline 16-unit SVG strokes (1.6 width, square caps), never glyphs or icon fonts. Brand marks are redrawn in that stroke rather than pasted as logos: LinkedIn is a stroked square frame around a stroked "in".

## Components

### Buttons
Solid, square, lettered.
- **Shape:** square corners (0px).
- **Email:** red fill, white Action caps with a trailing arrow, 36px tall in the strip; 12px 16px with the mono address in the footer.
- **Join:** tone fill (red or blue per team), white Action caps, 9px 14px, labelled "Join [team]" with a trailing arrow, opening the member application form. It sits at the foot of each team cell, beside the team lead's name, over a 1px rule.
- **Apply (committee):** an ink fill with film-coloured Action caps, 9px 14px, labelled "This could be you" with a trailing arrow, opening the committee application form. It takes the place of the name on any committee seat whose `name` is empty, so a vacancy reads as an invitation rather than "To be announced". Hover lightens to ink-2. On phones it fills the cell width at 16px and wraps onto two lines, with the arrow held at the right.
- **Hover / Focus:** fill darkens to the deep tone over 200ms; the arrow nudges 3–4px along its direction over 300ms. Focus is a 2px blue outline offset 2px (on the red email cell, ink, inset 4px).

### Chips
- **Style:** skill chips are 1px rule-bordered boxes, no fill, Barlow Condensed 500 15px uppercase, 3px 9px, 6px apart. Static, not interactive.

### Cards / Containers
- **Corner Style:** square.
- **Background:** film.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** provided by the ruled grid's 1px gaps.
- **Internal Padding:** 28px text cells, 24px team and photo cells, 18px person cells.

### Navigation
- **Strip:** sticky, film ground, 1px rule bottom edge; brand mark (34px), wordmark in 22px condensed caps, the society's tagline in mono behind a hatch divider (hidden under 1180px). Three Action-caps links, 36px tall, film-deep fill on hover; red EMAIL US button at the end.
- **Footer links:** stacked 20px condensed caps rows with hatch underlines; text turns blue on hover.

### View Title (signature)
A headline in the zone's tone, a 1px ink leader running from a dot terminal across to a circled balloon bearing the zone letter, and a right-aligned mono spec line ("View B · Autonomous · Unibots competition"). The committee head uses the same leader with an ink title and "Academic year 2026–27" as its label.

### View Link (signature)
First-viewport row per programme: tone-coloured Title, small balloon with the zone letter, mono spec with a tone arrow. Hover tints the cell 7% toward the tone and slides the arrow 4px.

### Photo View (signature)
A framed slot with a 1px ink trace rectangle over the image and a mono caption beneath ("Unibot · 1", "Detail 1 · In the workshop"). Below the fold it draws in once: the frame strokes on over 1100ms, then the image wipes in left to right over 1000ms after 450ms. Content is fully drawn by default; only elements starting below the fold are set pending, and reduced motion removes all transitions.

### Field List
A field label over hatch-ruled rows (7px vertical padding), or over inline skill chips.

### Profile Link
A committee member's LinkedIn link: a 32px square cell with a 1px rule border holding the 18px stroked LinkedIn mark in ink, set at the right end of the name row. Hover fills film-deep and turns the mark blue over 200ms. It renders only when that person's `linkedin` URL is filled in `content/site.ts`, and is labelled "[Name] on LinkedIn" for screen readers.

### Email Cell
The title block's eighth column: a red cell with an EMAIL US title in the Title band, a 15px note, and the mono address pushed to the bottom behind a 50% white hairline. Becomes a horizontal row at tablet width.

## Do's and Don'ts

### Do:
- **Do** draw new sections as a zone: a 1px rule top edge, the next zone letter in the left margin, a View Title whose balloon carries the same letter.
- **Do** build cell layouts as ruled grids (1px gap over `rule`, film cells) on the 8-column zone grid.
- **Do** colour by programme: `tone-blue` for control/Unibot, `tone-red` for fighting bots; email is always red.
- **Do** render every string, link and photo from `content/site.ts`, and let a `null` photo fall back to the hatched "Photo to add" view.
- **Do** caption every photo view with a mono label, and keep imagery to real build and meeting photos.
- **Do** keep the trace-in motion on `cubic-bezier(0.16, 1, 0.3, 1)`, once per element, below the fold only, and off under reduced motion.

### Don't:
- **Don't** round rectangle corners; circles are reserved for balloons and leader terminals.
- **Don't** use blurred or offset shadows for depth; box-shadow is allowed only as zero-blur 1px rulings.
- **Don't** set text in `hatch`, or any text lighter than `ink-3` on film.
- **Don't** use solid red or blue fills for surfaces or decoration; solid tone fills belong to email and join actions (blue also marks text selection), and the committee application is ink.
- **Don't** introduce a dark theme, neon glow or a headline set over a full-bleed photo.
- **Don't** use glyph or icon-font arrows; use the inline stroked SVG arrow.

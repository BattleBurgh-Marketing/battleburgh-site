# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Prospective members:** University of Edinburgh students deciding whether to get involved with a combat-robotics society. They want to know what the society builds, which team they could join, and who runs it.
- **Sponsors / industry:** companies that could back the society with money, parts, or machining. They need to see a credible, organised team doing real engineering, and a clear way to make contact.

## Product Purpose
Battleburgh is the University of Edinburgh's newly founded battle-bot society. The site introduces the society, explains its three competition programmes (Unibot, Antweight, Beetleweight), presents the committee, and routes visitors to its channels. Success means a visitor gets in touch, either a student who wants to join or a company that wants to sponsor.

Primary action: **contact by email**. Instagram, Linktree and Discord are secondary channels.

## Positioning
Edinburgh's first robot-fighting society. In its first semester it designed and built a robot from scratch. It runs three programmes at once: an autonomous Unibot, a 4-person Antweight team, and a Beetleweight bot split into weapons, chassis and drive sub-teams.

## Operating Context
- Competition categories this year: **Unibot** (Unibots competition, run by the control team), **Antweight** (team of 4), **Beetleweight** (sub-teams: weapons, chassis, drive).
- Committee roles (10): President, Vice President, Secretary, Treasurer, Antweight bot lead, Control lead (Unibots), Beetleweight Weapons lead, Chassis lead and Drive lead, Social Media lead.
- Channels: Instagram, Linktree, email, Discord. EUSA (Edinburgh University Students' Association) is the affiliated body.
- Committee members each have an optional LinkedIn profile link, shown with their entry. It does two jobs: sponsors see named, real people behind the society, and students get a direct way to reach a lead. Email stays the primary action.

## Capabilities and Constraints
- Single-page site. Sections in order: top bar with links (title, the three bot sections, committee); title (name, purpose, social links); Unibot / control; Antweight; Beetleweight (three sub-teams: weapons, chassis, drive); committee; footer with all links and socials.
- All copy, links and image paths must live in one editable content/config file so non-developers can update the site. Keep that file updated as the design changes.
- Stack: Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. This Next version has breaking changes, so check `node_modules/next/dist/docs/` before writing code.
- **Undecided:** final link URLs, contact email address, which robot was the one built in the first semester, deploy target.

## Brand Commitments
- Name: **Battleburgh** (the logo lockup reads "BATTLE BURGH").
- Logo: `.claude/logo.webp`. A hexagon made of two mirrored "B" forms, red on the left and blue on the right, with the wordmark in cream underneath.
- Visual references the user gathered: `.claude/design1.png` through `design5.png`/`.gif`/`.jpg`/`.webp`. They are inputs for new-work, not binding rules.

## Evidence on Hand
- Committee photos, names and LinkedIn URLs (to be supplied).
- Photos of meetings and of robot builds in progress. These are the only kinds of imagery available.
- **Absent and must not be fabricated:** competition results or placings, sponsors or partner logos, testimonials, member counts, staged or hero "robot in arena" shots.

## Product Principles
1. **Show the workshop.** Real build and meeting photos are the proof. Lean on process and honest progress, not claims of victories.
2. **Every path ends in contact.** Students and sponsors should both reach the email action with no friction.
3. **Three programmes, one society.** Unibot, Antweight and Beetleweight are distinct teams with their own identity, but they sit inside one coherent brand.
4. **Editable by the committee.** Content lives in one config file, and the structure must survive yearly committee turnover.
5. **New but serious.** Be honest about being a first-year society while still showing engineering credibility to sponsors.

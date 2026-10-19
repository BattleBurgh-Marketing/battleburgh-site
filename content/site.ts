/**
 * ─────────────────────────────────────────────────────────────────────────
 *  BATTLEBURGH SITE CONTENT
 *  Everything the website shows comes from this file. Edit it, save, and
 *  the site updates (instantly with `npm run dev`; on the next deploy live).
 *
 *  PHOTOS
 *  1. Put the image in  public/photos/   e.g.  public/photos/build-night.jpg
 *  2. Reference it here as  "/photos/build-night.jpg"   (no "public")
 *  3. Always write an `alt` — a short description of what's in the photo.
 *  Set a photo to `null` and the site shows a hatched "photo to add" box.
 *
 *  Search this file for "TODO" to find everything still missing.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Photo = { src: string; alt: string } | null;

export type Person = {
    role: string;
    /** Leave as "" until the role is filled — the site shows "To be announced". */
    name: string;
    /** Full profile URL, e.g. "https://www.linkedin.com/in/jane-doe".
     *  Leave as "" and no LinkedIn icon is shown for that person. */
    linkedin: string;
    photo: Photo;
};

export type Team = {
    /** Short name used in labels, e.g. "Weapons". */
    name: string;
    /** One or two sentences on what this team works on. */
    summary: string;
    /** What a member actually does week to week. 2–5 short items. */
    work: string[];
    /** Skills you'd use or pick up. 2–6 short items. */
    skills: string[];
    /** Must match a `role` in `committee` below — that person is shown as lead. */
    leadRole: string;
    photo: Photo;
};

export const site = {
    name: "Battleburgh",
    /** Shown under the name in the title block. */
    tagline: "Edinburgh University’s first robot fighting society",
    /** Short paragraph beside the name: who you are and what you do. */
    purpose:
        "We design, build and fight robots. In our first semester we went from an empty workshop to a robot built from scratch. This year we’re competing in three categories, and there’s a team for you whatever you study.",
    /** Year shown in the footer and title block. */
    year: 2026,
    /** Academic year shown next to the committee. */
    session: "2026–27",

    /** ── LINKS ─────────────────────────────────────────────────────────── */
    links: {
        // TODO: replace with the society's real address
        email: "battleburgh@example.com",
        // TODO: replace with real URLs
        instagram: "https://instagram.com/",
        /** TODO: your handle, e.g. "@battleburgh". Leave "" to show "Follow us". */
        instagramHandle: "",
        linktree: "https://linktr.ee/",
        discord: "https://discord.gg/",
        /** Optional — the society's EUSA page. Set to "" to hide it. */
        eusa: "",
    },

    /** Big photo in the first screen. Best: a wide shot of a build session. */
    heroPhoto: null as Photo, // TODO e.g. { src: "/photos/build-night.jpg", alt: "Members wiring the robot's drive system in the workshop" }

    /** ── UNIBOT (control team) ─────────────────────────────────────────── */
    unibot: {
        title: "Unibot",
        spec: "Autonomous · Unibots competition",
        summary:
            "An autonomous robot for the Unibots university competition. There’s no driver: the control team writes the code and builds the electronics that let it sense the arena and decide what to do on its own.",
        work: [
            "Write and test the robot’s control code",
            "Wire sensors, motor drivers and the main controller",
            "Run test sessions and tune behaviour between them",
        ],
        skills: ["Programming", "Electronics", "Sensors", "Control systems"],
        leadRole: "Control Lead",
        photos: [] as Photo[], // add up to 3, e.g. [{ src: "/photos/x.jpg", alt: "…" }]
    },

    /** ── ANTWEIGHT ─────────────────────────────────────────────────────── */
    antweight: {
        title: "Antweight",
        spec: "150 g limit · team of 4",
        summary:
            "A combat robot that weighs no more than 150 grams. Four people take it from first sketch to a working fighter, so everyone gets hands on with every part of the build.",
        work: [
            "Design the robot in CAD and 3D-print the parts",
            "Pick and fit motors, battery and receiver",
            "Repair, rebuild and improve between fights",
        ],
        skills: ["CAD", "3D printing", "Soldering", "Driving"],
        leadRole: "Antweight Lead",
        photos: [] as Photo[], // add up to 3, e.g. [{ src: "/photos/x.jpg", alt: "…" }]
    },

    /** ── BEETLEWEIGHT ─────────────────────────────────────────────────── */
    beetleweight: {
        title: "Beetleweight",
        spec: "1.5 kg limit · 3 sub-teams",
        summary:
            "Our biggest robot. At 1.5 kg it needs real engineering, so the work is split between three sub-teams that design their part of the robot and bring it together.",
        teams: [
            {
                name: "Weapons",
                summary:
                    "Designs the weapon system that does the damage, and makes sure it survives hitting back.",
                work: [
                    "Design and model the weapon",
                    "Spec motors and drive belts",
                    "Test impacts safely",
                ],
                skills: ["Mechanical design", "CAD", "Machining"],
                leadRole: "Weapons Lead",
                photo: null,
            },
            {
                name: "Chassis",
                summary:
                    "Builds the frame and armour that hold everything together and take the hits.",
                work: [
                    "Design the frame and armour",
                    "Choose materials",
                    "Fabricate and assemble",
                ],
                skills: ["Structural design", "Fabrication", "Materials"],
                leadRole: "Chassis Lead",
                photo: null,
            },
            {
                name: "Drive",
                summary:
                    "Gets the robot moving: motors, wheels, power and the electronics that control them.",
                work: [
                    "Choose motors and wheels",
                    "Build the power and speed-controller system",
                    "Tune handling",
                ],
                skills: ["Electronics", "Power systems", "Driving"],
                leadRole: "Drive Lead",
                photo: null,
            },
        ] as Team[],
    },

    /** ── COMMITTEE ─────────────────────────────────────────────────────────
     *  Grouped as they appear on the site. Add `name`, `linkedin` and `photo`
     *  for each (TODO).
     *  Square photos (e.g. 800×800) look best.
     */
    committee: [
        {
            group: "Executive",
            people: [
                { role: "President", name: "me", linkedin: "", photo: null },
                { role: "Vice President", name: "", linkedin: "", photo: null },
                { role: "Secretary", name: "", linkedin: "", photo: null },
                { role: "Treasurer", name: "", linkedin: "", photo: null },
            ],
        },
        {
            group: "Robot leads",
            people: [
                { role: "Control Lead", name: "", linkedin: "", photo: null },
                { role: "Antweight Lead", name: "", linkedin: "", photo: null },
                { role: "Weapons Lead", name: "", linkedin: "", photo: null },
                { role: "Chassis Lead", name: "", linkedin: "", photo: null },
                { role: "Drive Lead", name: "", linkedin: "", photo: null },
            ],
        },
        {
            group: "Media",
            people: [{ role: "Social Media Lead", name: "", linkedin: "", photo: null }],
        },
    ] as { group: string; people: Person[] }[],

    /** Closing line in the footer. */
    footerCall: "Want to build with us, or back us? One email does it.",
};

export type Site = typeof site;

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

export type Sheet = "halloween" | "light" | "dark";

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

    /** Theme a first-time visitor sees: "halloween", "light", "dark", or
     *  "system" (follows their device's light/dark setting). The button in
     *  the top bar cycles Halloween → Light → Dark, and remembers the choice. */
    theme: "halloween" as Sheet | "system",

    /** ── LINKS ─────────────────────────────────────────────────────────── */
    links: {
        // TODO: replace with the society's real address
        email: "Battleburgh@gmail.com",
        // TODO: replace with real URLs
        instagram: "https://www.instagram.com/battleburgh/",
        /** TODO: your handle, e.g. "@battleburgh". Leave "" to show "Follow us". */
        instagramHandle: "@battleburgh",
        linktree: "https://linktr.ee/battleburgh?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
        discord: "https://tr.ee/_jZsx5RwhJ",
        /** Optional — the society's EUSA page. Set to "" to hide it. */
        eusa: "https://www.eusa.ed.ac.uk/activities/view/battleburgh",
    },

    memberApplicationFormLink: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=sAafLmkWiUWHiRCgaTTcYeKNX3nibZFCqxA5uxBHthFURERGUlI0WVpITjk5TjNWMEdQNVRaRFJITi4u&route=shorturl",
    committeeApplicationFormLink: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=sAafLmkWiUWHiRCgaTTcYeKNX3nibZFCqxA5uxBHthFURTdIUUJHSDhONUE5OTNFQUlNMTZBNjNVTC4u&route=shorturl",

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
        photos: [
            // { src: "/photos/unibots.png", alt: "unibots" }, 
            { src: "/photos/rpi.jpg", alt: "Respberry PI" },
            // { src: "/photos/python.jpg", alt: "Python" }
        ] as Photo[], // add up to 3, e.g. [{ src: "/photos/x.jpg", alt: "…" }]
    },

    /** ── ANTWEIGHT ─────────────────────────────────────────────────────── */
    antweight: {
        title: "Antweight",
        spec: "250 g limit · team of 4",
        summary:
            "This semester focuses on equipping members with the skills needed to design, prototype, and build their dream combat robot from scratch. Culminating in an internal tournament where teams of 4-5 fight it out with their weapons of choice, small teams ensure that everyone gets the chance to gain hands-on experience to produce an antweight scalable to other weight classes for future tournaments.",
        work: [
            "design your robot from scratch; experience the entire engineering workflow from design to final product",
            "gain cadding skills; both structural and electrical",
            "gain hands-on experience with soldering and assembly",
            "get familiar with the combat robotics scene and try out new ideas for a little, budget-friendly robot"
        ],
        skills: ["CAD", "3D printing", "Soldering", "Assembly", "Design", "Cooperation"],
        leadRole: "Antweight Lead",
        photos: [] as Photo[], // add up to 3, e.g. [{ src: "/photos/x.jpg", alt: "…" }]
    },

    /** ── BEETLEWEIGHT ─────────────────────────────────────────────────── */
    beetleweight: {
        title: "Beetleweight",
        spec: "1.5 kg limit · 3 sub-teams",
        summary:
            "Our biggest robot at 1.5 kg. The work is split between three sub-teams that design their part of the robot and bring it together.",
        teams: [
            {
                name: "Weapons",
                summary:
                    "Idealise, design and build the weapon for the robot (including CAD and Manufacturing)",
                work: [
                    "Come up with ideas for different weapon types",
                    "Collaborate with the other teams to finalize the optimal weapon design",
                    "Design the weapon in CAD and test in FEA.",
                    "Build and manufacture the weapon alongside the other teams"
                ],
                skills: ["CAD", "FEA", "Material Analysis", "Physics"],
                leadRole: "Weapons Lead",
                photo: {
                    src: "/photos/weapons.jpg",
                    alt: "weapons design"
                } as Photo,
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
                photo: {
                    src: "/photos/drive.webp",
                    alt: "wheels being 3D printed"
                },
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
                { role: "President", name: "Calvin Lee", linkedin: "", photo: null },
                { role: "Vice President", name: "Abdulwahid Yaich El Yahyaoui", linkedin: "", photo: null },
                { role: "Secretary", name: "Fanhua (David) Huang", linkedin: "", photo: null },
                { role: "Treasurer", name: "", linkedin: "", photo: null },
            ],
        },
        {
            group: "Robot leads",
            people: [
                { role: "Control Lead", name: "Kyle Oaks", linkedin: "", photo: null },
                { role: "Antweight Lead", name: "Ray", linkedin: "", photo: null },
                { role: "Weapons Lead", name: "Leonardo Maffei Mercalli", linkedin: "https://www.linkedin.com/in/leonardo-maffei-mercalli-85546724b/?isSelfProfile=false", photo: null },
                { role: "Chassis Lead", name: "Ishaq Imran", linkedin: "", photo: null },
                { role: "Drive Lead", name: "", linkedin: "", photo: null },
            ],
        },
        {
            group: "Media",
            people: [
                { role: "Social Media Lead", name: "", linkedin: "", photo: null },
                { role: "Sponsorship Lead", name: "", linkedin: "", photo: null },
                { role: "Marketing Lead", name: "", linkedin: "", photo: null },
                { role: "Business and Logistics Officer", name: "", linkedin: "", photo: null },
            ],
        },
    ] as { group: string; people: Person[] }[],

    /** Closing line in the footer. */
    footerCall: "Want to build with us, or back us? One email does it.",
};

export type Site = typeof site;

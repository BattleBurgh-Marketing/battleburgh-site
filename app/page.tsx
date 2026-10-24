import Image from "next/image";
import { site, type Photo } from "@/content/site";
import {
    Arrow,
    FieldList,
    JoinCmtLink,
    JoinLink,
    LinkedInIcon,
    PhotoView,
    ViewTitle,
    mailto,
} from "./_components/drawing";
import { Trace } from "./_components/trace";
import { SheetToggle } from "./_components/sheet-toggle";
import Link from "next/link";

const people = site.committee.flatMap((g) => g.people);
const leadFor = (role: string) => people.find((p) => p.role === role);

const nav = [
    { href: "#top", label: "About" },
    { href: "#bots", label: "The Bots" },
    { href: "#committee", label: "Committee" },
];

const socials = [
    {
        label: "Instagram",
        detail: site.links.instagramHandle || "Follow us",
        href: site.links.instagram,
    },
    { label: "Linktree", detail: "Application forms", href: site.links.linktree },
    { label: "Discord", detail: "Join the server", href: site.links.discord },
    ...(site.links.eusa
        ? [{ label: "EUSA", detail: "Society page", href: site.links.eusa }]
        : []),
];

const views = [
    {
        href: "#unibot",
        letter: "B",
        title: site.unibot.title,
        spec: site.unibot.spec,
        tone: "blue",
    },
    {
        href: "#antweight",
        letter: "C",
        title: site.antweight.title,
        spec: site.antweight.spec,
        tone: "red",
    },
    {
        href: "#beetleweight",
        letter: "D",
        title: site.beetleweight.title,
        spec: site.beetleweight.spec,
        tone: "red",
    },
] as const;

function PhotoPair({ photos, label }: { photos: Photo[]; label: string }) {
    const shown = photos.length ? photos : [null];
    return (
        <div className={`photo-set count-${Math.min(shown.length, 3)}`}>
            {shown.slice(0, 3).map((photo, i) => (
                <PhotoView
                    key={photo?.src ?? `empty-${i}`}
                    photo={photo}
                    label={`${label} · ${i + 1}`}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                />
            ))}
        </div>
    );
}

export default function Home() {
    const { links } = site;

    return (
        <div className="sheet">
            <a className="skip" href="#main">
                Skip to content
            </a>

            <div className="frame">
                <header className="strip">
                    <a
                        className="strip-brand"
                        href="#top"
                        aria-label={`${site.name}, back to top`}
                    >
                        <Image
                            src="/brand/mark.png"
                            alt=""
                            width={282}
                            height={254}
                            className="strip-mark"
                            preload
                        />
                        <span className="strip-name">{site.name}</span>
                        <span className="strip-dwg mono-label">Edinburgh University’s first battlebot society</span>
                    </a>
                    <nav aria-label="Sections">
                        <ul>
                            {nav.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a className="strip-mail" href={mailto(links.email)}>
                        Email us
                        <Arrow />
                    </a>
                    <SheetToggle />
                </header>

                <main id="main">
                    {/* ── ZONE A · title ─────────────────────────────────────────── */}
                    <section className="zone hero" id="top" aria-labelledby="site-title">
                        <div className="hero-photo cell">
                            <svg className="haunt" viewBox="0 0 150 200" aria-hidden="true">
                                <path className="haunt-web" d="M150 0L150.0 116.0 M150 0L120.0 112.0 M150 0L92.0 100.5 M150 0L68.0 82.0 M150 0L49.5 58.0 M150 0L38.0 30.0 M150 0L34.0 0.0 M150.0 26.0Q147.1 22.2 143.3 25.1Q141.4 20.7 137.0 22.5Q136.4 17.7 131.6 18.4Q132.3 13.6 127.5 13.0Q129.3 8.6 124.9 6.7Q127.8 2.9 124.0 0.0 M150.0 52.0Q144.2 44.3 136.5 50.2Q132.9 41.3 124.0 45.0Q122.8 35.5 113.2 36.8Q114.5 27.2 105.0 26.0Q108.7 17.1 99.8 13.5Q105.7 5.8 98.0 0.0 M150.0 80.0Q141.0 68.2 129.3 77.3Q123.7 63.6 110.0 69.3Q108.1 54.6 93.4 56.6Q95.4 41.9 80.7 40.0Q86.4 26.3 72.7 20.7Q81.8 9.0 70.0 0.0 M150.0 110.0Q137.7 93.8 121.5 106.3Q113.8 87.4 95.0 95.3Q92.4 75.1 72.2 77.8Q74.9 57.6 54.7 55.0Q62.6 36.2 43.7 28.5Q56.2 12.3 40.0 0.0" />
                                <line className="haunt-thread" x1="43.7" y1="28.5" x2="43.7" y2="146" />
                                <g transform="translate(-49.3 -36)">
                                    <g className="haunt-spider">
                                        <path d="M90.5 189l-4-3-2-4M90 191l-5-1-2-3M90 193l-5 1-2 3M90.5 195l-4 3-2 4M95.5 189l4-3 2-4M96 191l5-1 2-3M96 193l5 1 2 3M95.5 195l4 3 2 4" />
                                        <ellipse cx="93" cy="186" rx="2.2" ry="2" />
                                        <ellipse cx="93" cy="192.5" rx="3.4" ry="4.4" />
                                    </g>
                                </g>
                            </svg>
                            <PhotoView
                                photo={site.heroPhoto}
                                label="Detail 1 · In the workshop"
                                sizes="(min-width: 1024px) 62vw, 100vw"
                                eager
                                className="fill"
                            />
                        </div>

                        <ul className="hero-views">
                            {views.map((v) => (
                                <li key={v.href} className="cell">
                                    <a href={v.href} className={`view-link tone-${v.tone}`}>
                                        <span className="view-link-title">{v.title}</span>
                                        <span
                                            className="balloon small"
                                            aria-label={`View ${v.letter}`}
                                        >
                                            {v.letter}
                                        </span>
                                        <span className="view-link-spec">
                                            {v.spec}
                                            <Arrow />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="title-block">
                            <div className="tb-name cell">
                                <h1 id="site-title">{site.name}</h1>
                                <p className="tb-tagline">{site.tagline}</p>
                                <p className="tb-purpose">{site.purpose}</p>
                            </div>
                            <ul className="tb-links">
                                {socials.map((s) => (
                                    <li key={s.label} className="cell">
                                        <a href={s.href} target="_blank" rel="noopener noreferrer">
                                            <span className="tb-link-label">{s.label}</span>
                                            <span className="tb-link-detail">{s.detail}</span>
                                            <Arrow external />
                                        </a>
                                    </li>
                                ))}
                                {/* <li className="cell tb-meta mono-label"> */}
                                {/*     <span>Scale 1:1</span> */}
                                {/*     <span>Rev A · {site.year}</span> */}
                                {/* </li> */}
                            </ul>
                            <a className="tb-email" href={mailto(links.email)}>
                                <span className="tb-email-title">Email us</span>
                                <span className="tb-email-note">
                                    Join a team or sponsor the society
                                </span>
                                <span className="tb-email-addr">
                                    {links.email.split("@")[0]}@<wbr />
                                    {links.email.split("@")[1]}
                                    <Arrow />
                                </span>
                            </a>
                        </div>
                    </section>

                    <div id="bots">
                        {/* ── ZONE B · Unibot ──────────────────────────────────────── */}
                        <section className="zone bot" aria-labelledby="unibot">
                            <ViewTitle
                                id="unibot"
                                letter="B"
                                title={site.unibot.title}
                                spec={site.unibot.spec}
                                tone="blue"
                            />
                            <div className="bot-body">
                                <div className="bot-text cell">
                                    <p className="bot-summary">{site.unibot.summary}</p>
                                    <FieldList label="What you’d do" items={site.unibot.work} />
                                    <FieldList label="Skills" items={site.unibot.skills} inline />
                                    <JoinLink
                                        link={site.memberApplicationFormLink}
                                        team={site.unibot.title}
                                        lead={leadFor(site.unibot.leadRole)}
                                        tone="blue"
                                    />
                                </div>
                                <div className="bot-photos cell">
                                    <PhotoPair photos={site.unibot.photos} label="Unibot" />
                                </div>
                            </div>
                        </section>

                        {/* ── ZONE C · Antweight ───────────────────────────────────── */}
                        <section className="zone bot mirror" aria-labelledby="antweight">
                            <ViewTitle
                                id="antweight"
                                letter="C"
                                title={site.antweight.title}
                                spec={site.antweight.spec}
                                tone="red"
                            />
                            <div className="bot-body">
                                <div className="bot-text cell">
                                    <p className="bot-summary">{site.antweight.summary}</p>
                                    <FieldList
                                        label="What you’d do"
                                        items={site.antweight.work}
                                    />
                                    <FieldList
                                        label="Skills"
                                        items={site.antweight.skills}
                                        inline
                                    />
                                    <JoinLink
                                        link={site.memberApplicationFormLink}
                                        team={site.antweight.title}
                                        lead={leadFor(site.antweight.leadRole)}
                                        tone="red"
                                    />
                                </div>
                                <div className="bot-photos cell">
                                    <PhotoPair photos={site.antweight.photos} label="Antweight" />
                                </div>
                            </div>
                        </section>

                        {/* ── ZONE D · Beetleweight ───────────────────────────────── */}
                        <section className="zone beetle" aria-labelledby="beetleweight">
                            <ViewTitle
                                id="beetleweight"
                                letter="D"
                                title={site.beetleweight.title}
                                spec={site.beetleweight.spec}
                                tone="red"
                            />
                            <p className="beetle-summary cell">
                                {site.beetleweight.summary}
                            </p>
                            <ol className="teams">
                                {site.beetleweight.teams.map((team, i) => (
                                    <li key={team.name} className="team cell">
                                        <h3>
                                            {team.name}
                                            <span
                                                className="balloon small"
                                                aria-label={`Detail D${i + 1}`}
                                            >
                                                D{i + 1}
                                            </span>
                                        </h3>
                                        <PhotoView
                                            photo={team.photo}
                                            label={`${team.name} team`}
                                            sizes="(min-width: 1024px) 30vw, 100vw"
                                        />
                                        <p>{team.summary}</p>
                                        <FieldList label="What you’d do" items={team.work} />
                                        <FieldList label="Skills" items={team.skills} inline />
                                        <JoinLink
                                            link={site.memberApplicationFormLink}
                                            team={team.name}
                                            lead={leadFor(team.leadRole)}
                                            tone="red"
                                        />
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>

                    {/* ── ZONE E · committee ─────────────────────────────────────── */}
                    <section className="zone committee" aria-labelledby="committee">
                        <div className="committee-head cell" data-trace>
                            <h2 id="committee">The Committee</h2>
                            <span className="leader" aria-hidden="true" />
                            <p className="mono-label">Academic year {site.session}</p>
                        </div>
                        <ul className="people">
                            {site.committee.flatMap((group) =>
                                group.people.map((p) => (
                                    <li key={p.role} className="person">
                                        <div className="person-photo">
                                            {p.photo ? (
                                                <Image
                                                    src={p.photo.src}
                                                    alt={p.photo.alt}
                                                    fill
                                                    sizes="(min-width: 1024px) 18vw, 45vw"
                                                />
                                            ) : (
                                                <div
                                                    className="photo-empty"
                                                    role="img"
                                                    aria-label="Photo coming soon"
                                                />
                                            )}
                                        </div>
                                        <p className="field-label">{p.role}</p>
                                        <div className="person-row">
                                            {p.name ? (
                                                <p className={p.name ? "person-name" : "person-name tba"}>
                                                    {p.name}
                                                </p>

                                            ) : (
                                                <JoinCmtLink link={site.committeeApplicationFormLink} />
                                            )}
                                            {p.linkedin && (
                                                <a
                                                    className="person-linkedin"
                                                    href={p.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${p.name || p.role} on LinkedIn`}
                                                    title="LinkedIn"
                                                >
                                                    <LinkedInIcon />
                                                </a>
                                            )}
                                        </div>
                                    </li>
                                )),
                            )}
                        </ul>
                    </section>
                </main>

                {/* ── ZONE F · footer ──────────────────────────────────────────── */}
                <footer className="zone footer">
                    <div className="footer-call cell">
                        <p>{site.footerCall}</p>
                        <a className="footer-mail" href={mailto(links.email)}>
                            {links.email}
                            <Arrow />
                        </a>
                    </div>
                    <div className="footer-links cell">
                        <p className="field-label">Contact</p>
                        <ul>
                            <li>
                                <a href={mailto(links.email)}>Email</a>
                            </li>
                            {socials.map((s) => (
                                <li key={s.label}>
                                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-links cell">
                        <p className="field-label">On this sheet</p>
                        <ul>
                            {nav.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="footer-strip mono-label">
                        <span>{site.name}</span>
                        <span>
                            © {site.year} {site.name}. All rights reserved.
                        </span>
                    </p>
                </footer>
            </div>

            <Trace />
        </div>
    );
}

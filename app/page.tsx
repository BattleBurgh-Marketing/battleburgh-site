import Image from "next/image";
import { site, type Photo } from "@/content/site";
import {
  Arrow,
  FieldList,
  JoinLink,
  LinkedInIcon,
  PhotoView,
  ViewTitle,
  mailto,
} from "./_components/drawing";
import { Trace } from "./_components/trace";

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
  { label: "Linktree", detail: "All our links", href: site.links.linktree },
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

function ZoneMark({ letter }: { letter: string }) {
  return (
    <span className="zone-mark" aria-hidden="true">
      {letter}
    </span>
  );
}

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

      <div className="zone-row" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

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
            <span className="strip-dwg mono-label">DWG BB-GA-001</span>
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
        </header>

        <main id="main">
          {/* ── ZONE A · title ─────────────────────────────────────────── */}
          <section className="zone hero" id="top" aria-labelledby="site-title">
            <ZoneMark letter="A" />
            <div className="hero-photo cell">
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
                <li className="cell tb-meta mono-label">
                  <span>Scale 1:1</span>
                  <span>Rev A · {site.year}</span>
                </li>
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
              <ZoneMark letter="B" />
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
                    email={links.email}
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
              <ZoneMark letter="C" />
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
                    email={links.email}
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
              <ZoneMark letter="D" />
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
                      email={links.email}
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
            <ZoneMark letter="E" />
            <div className="committee-head cell" data-trace>
              <h2 id="committee">The Committee</h2>
              <span className="leader" aria-hidden="true" />
              <p className="mono-label">Session {site.session}</p>
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
                      <p className={p.name ? "person-name" : "person-name tba"}>
                        {p.name || "To be announced"}
                      </p>
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
          <ZoneMark letter="F" />
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
            <span>{site.name} · DWG BB-GA-001 · Rev A</span>
            <span>
              © {site.year} {site.name}. All rights reserved.
            </span>
          </p>
        </footer>
      </div>

      <div className="zone-row" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
      <Trace />
    </div>
  );
}

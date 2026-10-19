import Image from "next/image";
import type { Photo } from "@/content/site";

type Tone = "blue" | "red";

export function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      {external ? (
        <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" />
      ) : (
        <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
      )}
    </svg>
  );
}

/** A framed photo slot. The frame is traced on entry, then the image is plotted in. */
export function PhotoView({
  photo,
  label,
  sizes,
  eager = false,
  className = "",
}: {
  photo: Photo;
  label: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <figure className={`photo-view ${className}`} data-trace>
      <div className="photo-plot">
        <div className="photo-ink">
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={sizes}
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : "auto"}
            />
          ) : (
            <div
              className="photo-empty"
              role="img"
              aria-label="Photo coming soon"
            >
              <span>Photo to add</span>
            </div>
          )}
        </div>
        <svg className="trace" aria-hidden="true">
          <rect x="0.5" y="0.5" width="100%" height="100%" pathLength={1} />
        </svg>
      </div>
      <figcaption className="mono-label">{label}</figcaption>
    </figure>
  );
}

/** Section heading drawn as a view title with a leader line out to its balloon. */
export function ViewTitle({
  id,
  letter,
  title,
  spec,
  tone,
}: {
  id: string;
  letter: string;
  title: string;
  spec: string;
  tone: Tone;
}) {
  return (
    <div className={`view-title tone-${tone}`} data-trace>
      <h2 id={id}>{title}</h2>
      <span className="leader" aria-hidden="true" />
      <span className="balloon" aria-hidden="true">
        {letter}
      </span>
      <p className="view-spec">
        <span className="mono-label">View {letter}</span>
        <span>{spec}</span>
      </p>
    </div>
  );
}

export function FieldList({
  label,
  items,
  inline = false,
}: {
  label: string;
  items: string[];
  inline?: boolean;
}) {
  return (
    <div className="field">
      <p className="field-label">{label}</p>
      <ul className={inline ? "field-inline" : "field-list"}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function mailto(email: string, subject?: string) {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

export function JoinLink({
  email,
  team,
  lead,
  tone,
}: {
  email: string;
  team: string;
  lead: { role: string; name: string } | undefined;
  tone: Tone;
}) {
  return (
    <div className={`join tone-${tone}`}>
      <p className="join-lead">
        <span className="field-label">Lead</span>
        <span>{lead?.name || "To be announced"}</span>
      </p>
      <a className="join-link" href={mailto(email, `Joining the ${team} team`)}>
        <span>Join {team}</span>
        <Arrow />
      </a>
    </div>
  );
}

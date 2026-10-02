import { PIN_LINE } from "@/components/PinArt"

/** The stethoscope draped across the fabric panels. */
export function Stethoscope({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 170" className={className} aria-hidden="true" fill="none" strokeLinecap="round">
      <path d="M8 6 C30 128 150 150 196 70" stroke="#23252e" strokeWidth="15" />
      <path
        d="M8 6 C30 128 150 150 196 70"
        stroke="#5a5f70"
        strokeWidth="4"
        opacity="0.7"
        transform="translate(-2 -3)"
      />
      <circle cx="196" cy="62" r="18" fill="#cfd5df" stroke="#23252e" strokeWidth="7" />
      <circle cx="196" cy="62" r="7" fill="#aeb6c3" />
    </svg>
  )
}

/** A four-point twinkle centred on (x, y). */
function star(x: number, y: number, s: number) {
  const k = s * 0.3
  return `M${x} ${y - s} L${x + k} ${y - k} L${x + s} ${y} L${x + k} ${y + k} L${x} ${y + s} L${x - k} ${y + k} L${x - s} ${y} L${x - k} ${y - k} Z`
}

/**
 * Hand-drawn doodles over the hero fabric. By day: hearts and motion ticks,
 * like the reference. By night: a moon, stars and a few z's. The viewBox is
 * 5:4 to match the hero panel, so nothing stretches.
 */
export function Sparkles({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" className={className} aria-hidden="true">
      <g
        className="shift-day"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 14 c-1.6-2.2-5-1-4 1.6 c.7 1.8 4 3.6 4 3.6 s3.3-1.8 4-3.6 c1-2.6-2.4-3.8-4-1.6z" />
        <path d="M88 52 c-1.4-1.9-4.3-.9-3.4 1.4 c.6 1.5 3.4 3.1 3.4 3.1 s2.8-1.6 3.4-3.1 c.9-2.3-2-3.3-3.4-1.4z" />
        <path d="M36 9 l2-4 M40 11 l3-3 M42 15 l4-1" />
        <path d="M82 46 l2-3 M85 48 l3-2" />
        <path d="M10 66 l3-1 M11 71 l3 1" />
      </g>
      <g className="shift-night">
        <path d="M18 7 a9 9 0 1 0 9 13 a7 7 0 1 1 -9 -13z" fill="#fff4cf" />
        <g fill="#ffffff">
          <path d={star(30, 26, 1.6)} />
          <path d={star(84, 10, 2.4)} opacity="0.9" />
          <path d={star(92, 30, 1.4)} opacity="0.7" />
          <path d={star(8, 44, 1.8)} opacity="0.8" />
          <path d={star(90, 70, 2)} />
          <path d={star(14, 72, 1.3)} opacity="0.6" />
        </g>
        <text
          x="78"
          y="58"
          fill="#ffffff"
          fontSize="5"
          opacity="0.85"
          style={{ fontFamily: "var(--font-display), cursive" }}
        >
          z
        </text>
        <text
          x="82"
          y="52"
          fill="#ffffff"
          fontSize="7"
          opacity="0.85"
          style={{ fontFamily: "var(--font-display), cursive" }}
        >
          Z
        </text>
      </g>
    </svg>
  )
}

/** A small enamel heart pin for the story panel. */
export function HeartPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 92" className={className} aria-hidden="true">
      <path
        d="M50 86 C20 66 6 48 6 30 C6 14 18 6 30 6 C40 6 46 12 50 20 C54 12 60 6 70 6 C82 6 94 14 94 30 C94 48 80 66 50 86 Z"
        fill="#f28b82"
        stroke={PIN_LINE}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M24 26 Q26 16 36 15" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}

import type { PinVariant } from "@/lib/types"

/**
 * Enamel-pin illustrations for the first draft, drawn after Evelyn's three
 * real pins: teal scrubs, purple bow, and the JMO flag. Every shape shares
 * one dark "metal line" stroke so they read as pins rather than stickers.
 *
 * Night Shift Mode: each pin carries a day face and a night face (sleepy
 * eyes, eye bags, a coffee). CSS shows the one matching `data-shift`. The
 * "night" variant is the night-only pin and is always sleepy.
 *
 * Placeholder art: real product photography replaces these in the build
 * phase, and nothing else depends on the drawings.
 */

export const PIN_LINE = "#2d2f3b"
const WHITE = "#ffffff"
const SHADE = "#eceef4"

const PALETTE = {
  teal: { scrubs: "#3fa9b6", blush: "#f7c690" },
  bow: { scrubs: "#9b3f9f", blush: "#f7c690" },
  jmo: { scrubs: "#d9534f", blush: "#f6a8b8" },
  night: { scrubs: "#2f3f78", blush: "#f7c690" },
} as const

const LABELS: Record<PinVariant, string> = {
  teal: "Marshmallow doctor pin in teal scrubs",
  bow: "Marshmallow doctor pin with a purple bow",
  jmo: "Marshmallow JMO pin carrying a flag",
  night: "Night Shift marshmallow pin with a sleep mask and a coffee",
  mystery: "Mystery pin, next drop",
}

interface PinArtProps {
  variant: PinVariant
  className?: string
  title?: string
}

export function PinArt({ variant, className = "", title }: PinArtProps) {
  const label = title ?? LABELS[variant]
  switch (variant) {
    case "mystery":
      return <MysteryPin className={className} label={label} />
    case "jmo":
      return <JmoPin className={className} label={label} />
    default:
      return <DoctorPin variant={variant} className={className} label={label} />
  }
}

function DoctorPin({
  variant,
  className,
  label,
}: {
  variant: "teal" | "bow" | "night"
  className: string
  label: string
}) {
  const c = PALETTE[variant]
  const lashes = variant === "bow"
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label={label}>
      <Body scrubs={c.scrubs} feet={WHITE} />
      <Head />
      {variant === "night" ? (
        <>
          <SleepyFace blush={c.blush} />
          <SleepMask />
          <Coffee />
        </>
      ) : (
        <>
          <g className="shift-day">
            <HappyFace blush={c.blush} lashes={lashes} />
          </g>
          <g className="shift-night">
            <SleepyFace blush={c.blush} lashes={lashes} />
            <Coffee />
          </g>
        </>
      )}
      {variant === "bow" && <Bow color={c.scrubs} />}
    </svg>
  )
}

function JmoPin({ className, label }: { className: string; label: string }) {
  const c = PALETTE.jmo
  return (
    <svg viewBox="0 0 240 290" className={className} role="img" aria-label={label}>
      {/* Flag pole, held on the left */}
      <path d="M56 24 L72 272" stroke={PIN_LINE} strokeWidth="11" strokeLinecap="round" />
      <path d="M56 24 L72 272" stroke="#b8925a" strokeWidth="5" strokeLinecap="round" />
      <circle cx="56" cy="20" r="7" fill="#e2c172" stroke={PIN_LINE} strokeWidth="3.5" />
      {/* Flag */}
      <path
        d="M60 30 C98 12 132 44 176 24 L182 84 C140 102 106 68 66 88 Z"
        fill="#2f3f78"
        stroke={PIN_LINE}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <text
        x="121"
        y="70"
        textAnchor="middle"
        fill={WHITE}
        fontSize="32"
        fontWeight="900"
        transform="rotate(-6 121 58)"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", letterSpacing: "1px" }}
      >
        JMO
      </text>
      <g transform="translate(40 66)">
        <Body scrubs={c.scrubs} feet={c.scrubs} leftArm={40} />
        <Head />
        <g className="shift-day">
          <DeterminedFace blush={c.blush} />
        </g>
        <g className="shift-night">
          <TiredDeterminedFace blush={c.blush} />
          <Coffee />
        </g>
      </g>
      {/* Fist on the pole */}
      <ellipse cx="71" cy="244" rx="13" ry="11" fill={WHITE} stroke={PIN_LINE} strokeWidth="4" />
    </svg>
  )
}

function MysteryPin({ className, label }: { className: string; label: string }) {
  const fill = "#e4e8f1"
  const line = "#9aa3b8"
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label={label}>
      <g fill={fill} stroke={line} strokeWidth="4" strokeDasharray="8 7" strokeLinejoin="round">
        <rect x="72" y="194" width="24" height="22" rx="11" />
        <rect x="104" y="194" width="24" height="22" rx="11" />
        <path d="M62 140 Q62 128 74 128 H126 Q138 128 138 140 L143 194 Q143 204 133 204 H67 Q57 204 57 194 Z" />
        <rect x="28" y="14" width="144" height="122" rx="32" />
      </g>
      <text
        x="100"
        y="104"
        textAnchor="middle"
        fill={line}
        fontSize="68"
        style={{ fontFamily: "var(--font-display), cursive" }}
      >
        ?
      </text>
    </svg>
  )
}

/* ── Shared parts, all in the 200×240 doctor coordinate space ─────────── */

function Body({
  scrubs,
  feet,
  leftArm = 16,
  rightArm = -16,
}: {
  scrubs: string
  feet: string
  leftArm?: number
  rightArm?: number
}) {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Feet peek out below the coat */}
      <rect x="72" y="194" width="24" height="22" rx="11" fill={feet} stroke={PIN_LINE} strokeWidth="4" />
      <rect x="104" y="194" width="24" height="22" rx="11" fill={feet} stroke={PIN_LINE} strokeWidth="4" />
      {/* Arms sit behind the coat */}
      <rect
        x="40"
        y="146"
        width="22"
        height="42"
        rx="11"
        fill={WHITE}
        stroke={PIN_LINE}
        strokeWidth="4"
        transform={`rotate(${leftArm} 51 167)`}
      />
      <rect
        x="138"
        y="146"
        width="22"
        height="42"
        rx="11"
        fill={WHITE}
        stroke={PIN_LINE}
        strokeWidth="4"
        transform={`rotate(${rightArm} 149 167)`}
      />
      {/* White coat */}
      <path
        d="M62 140 Q62 128 74 128 H126 Q138 128 138 140 L143 194 Q143 204 133 204 H67 Q57 204 57 194 Z"
        fill={WHITE}
        stroke={PIN_LINE}
        strokeWidth="4"
      />
      {/* Scrubs showing at the neck */}
      <path d="M84 128 H116 L100 158 Z" fill={scrubs} stroke={PIN_LINE} strokeWidth="3" />
      {/* Lapels, placket, pockets */}
      <path
        d="M84 128 L95 166 M116 128 L105 166 M100 158 V202 M68 174 H86 M114 174 H132"
        fill="none"
        stroke={PIN_LINE}
        strokeWidth="3"
      />
      {/* Stethoscope */}
      <path
        d="M79 131 C70 156 82 176 100 180 C118 176 130 156 121 131"
        fill="none"
        stroke={PIN_LINE}
        strokeWidth="5"
      />
      <path d="M100 180 V186" stroke={PIN_LINE} strokeWidth="4" />
      <circle cx="100" cy="192" r="7" fill="#c9cfd9" stroke={PIN_LINE} strokeWidth="3" />
    </g>
  )
}

function Head() {
  return (
    <g>
      <rect x="28" y="14" width="144" height="122" rx="32" fill={WHITE} />
      {/* Side shading gives the marshmallow its cylinder */}
      <path d="M150 20 Q170 24 170 54 V104 Q170 130 150 134 Q160 106 160 78 Q160 44 150 20 Z" fill={SHADE} />
      <rect x="28" y="14" width="144" height="122" rx="32" fill="none" stroke={PIN_LINE} strokeWidth="5" />
      {/* The flat top of the marshmallow */}
      <path
        d="M42 38 Q100 56 158 38"
        fill="none"
        stroke={PIN_LINE}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
    </g>
  )
}

function Eye({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx="14" ry="16" fill={PIN_LINE} />
      <circle cx={cx + 5} cy={cy - 6} r="5.5" fill={WHITE} />
      <circle cx={cx - 5} cy={cy + 7} r="2.6" fill={WHITE} />
    </g>
  )
}

/** Half-closed under a heavy lid, with an eye bag. 3 a.m. eyes. */
function SleepyEye({ cx, cy, r = 14 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <path d={`M${cx - r} ${cy} Q${cx} ${cy + r * 1.15} ${cx + r} ${cy} Z`} fill={PIN_LINE} />
      <path d={`M${cx - r - 1} ${cy} H${cx + r + 1}`} stroke={PIN_LINE} strokeWidth="4" strokeLinecap="round" />
      <circle cx={cx + r * 0.35} cy={cy + r * 0.3} r={r * 0.17} fill={WHITE} />
      <path
        d={`M${cx - r * 0.7} ${cy + r * 1.2} Q${cx} ${cy + r * 1.55} ${cx + r * 0.7} ${cy + r * 1.2}`}
        fill="none"
        stroke={PIN_LINE}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </g>
  )
}

function HappyFace({ blush, lashes = false }: { blush: string; lashes?: boolean }) {
  return (
    <g>
      <ellipse cx="54" cy="104" rx="12" ry="7" fill={blush} />
      <ellipse cx="146" cy="104" rx="12" ry="7" fill={blush} />
      <Eye cx={76} cy={84} />
      <Eye cx={124} cy={84} />
      {lashes && (
        <path
          d="M63 75 L55 69 M62 82 L54 80 M137 75 L145 69 M138 82 L146 80"
          stroke={PIN_LINE}
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}
      <path
        d="M88 103 Q100 106 112 103 Q111 122 100 122 Q89 122 88 103 Z"
        fill="#7b2f3a"
        stroke={PIN_LINE}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M93 115 Q100 110 107 115 Q105 121 100 121 Q95 121 93 115 Z" fill="#f08c94" />
    </g>
  )
}

function SleepyFace({ blush, lashes = false }: { blush: string; lashes?: boolean }) {
  return (
    <g>
      <ellipse cx="54" cy="106" rx="12" ry="7" fill={blush} />
      <ellipse cx="146" cy="106" rx="12" ry="7" fill={blush} />
      <SleepyEye cx={76} cy={86} />
      <SleepyEye cx={124} cy={86} />
      {lashes && (
        <path d="M61 86 L54 82 M139 86 L146 82" stroke={PIN_LINE} strokeWidth="3" strokeLinecap="round" />
      )}
      {/* A yawn */}
      <ellipse cx="100" cy="116" rx="6.5" ry="8" fill="#7b2f3a" stroke={PIN_LINE} strokeWidth="2.5" />
    </g>
  )
}

function DeterminedFace({ blush }: { blush: string }) {
  return (
    <g>
      <ellipse cx="54" cy="106" rx="12" ry="7" fill={blush} />
      <ellipse cx="146" cy="106" rx="12" ry="7" fill={blush} />
      <path d="M58 66 L92 78 M142 66 L108 78" stroke={PIN_LINE} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="78" cy="92" rx="9" ry="11" fill={PIN_LINE} />
      <ellipse cx="122" cy="92" rx="9" ry="11" fill={PIN_LINE} />
      <circle cx="81" cy="88" r="3" fill={WHITE} />
      <circle cx="125" cy="88" r="3" fill={WHITE} />
      <path d="M90 116 Q100 108 110 116" fill="none" stroke={PIN_LINE} strokeWidth="4" strokeLinecap="round" />
    </g>
  )
}

/** Still holding the line at 3 a.m. — same brows, heavier eyes. */
function TiredDeterminedFace({ blush }: { blush: string }) {
  return (
    <g>
      <ellipse cx="54" cy="108" rx="12" ry="7" fill={blush} />
      <ellipse cx="146" cy="108" rx="12" ry="7" fill={blush} />
      <path d="M58 70 L92 80 M142 70 L108 80" stroke={PIN_LINE} strokeWidth="6" strokeLinecap="round" />
      <SleepyEye cx={78} cy={90} r={11} />
      <SleepyEye cx={122} cy={90} r={11} />
      <path d="M92 118 H108" stroke={PIN_LINE} strokeWidth="4" strokeLinecap="round" />
    </g>
  )
}

/** A takeaway coffee in the right hand. */
function Coffee() {
  const cup = "M146 172 H170 L166 204 Q165 208 161 208 H155 Q151 208 150 204 Z"
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path d="M154 160 q-5 -7 0 -14 M163 160 q-5 -7 0 -14" fill="none" stroke={PIN_LINE} strokeWidth="2.5" opacity="0.5" />
      <path d="M168 182 Q178 183 177 192 Q176 200 167 198" fill="none" stroke={PIN_LINE} strokeWidth="4" />
      <path d={cup} fill={WHITE} />
      <path d="M147.5 184 H168.5 L167.2 194 H148.8 Z" fill="#c8956b" />
      <path d={cup} fill="none" stroke={PIN_LINE} strokeWidth="4" />
      <rect x="143" y="166" width="30" height="8" rx="4" fill="#e9e2d6" stroke={PIN_LINE} strokeWidth="3.5" />
    </g>
  )
}

/** Pushed up onto the forehead: the night-only pin's signature. */
function SleepMask() {
  const lilac = "#b9a8e6"
  return (
    <g stroke={PIN_LINE} strokeLinejoin="round">
      <path d="M30 50 Q100 30 170 50" fill="none" strokeWidth="9" />
      <path d="M30 50 Q100 30 170 50" fill="none" stroke={lilac} strokeWidth="5" />
      <path d="M56 46 Q58 32 77 32 Q96 32 97 46 Q96 58 77 58 Q58 58 56 46 Z" fill={lilac} strokeWidth="3.5" />
      <path d="M103 46 Q104 32 123 32 Q142 32 144 46 Q142 58 123 58 Q104 58 103 46 Z" fill={lilac} strokeWidth="3.5" />
      <path d="M66 44 Q77 50 88 44 M112 44 Q123 50 134 44" fill="none" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  )
}

function Bow({ color }: { color: string }) {
  return (
    <g stroke={PIN_LINE} strokeWidth="4" strokeLinejoin="round">
      <path d="M60 22 L36 6 Q27 22 36 40 Z" fill={color} />
      <path d="M60 22 L84 6 Q93 22 84 40 Z" fill={color} />
      <circle cx="60" cy="22" r="8" fill={color} />
    </g>
  )
}

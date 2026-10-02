import Link from "next/link"
import { PIN_LINE } from "@/components/PinArt"
import { site } from "@/content/site"

/** Head-and-shoulders marshmallow for the header, footer and ID badge. Dozes off at night. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M14 60 Q14 47 25 46 H39 Q50 47 50 60 Z"
        fill="#ffffff"
        stroke={PIN_LINE}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M27 46 H37 L32 54 Z" fill="#3fa9b6" stroke={PIN_LINE} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="9" y="5" width="46" height="41" rx="12" fill="#ffffff" stroke={PIN_LINE} strokeWidth="2.5" />
      <path d="M14 14 Q32 20 50 14" fill="none" stroke={PIN_LINE} strokeWidth="1.4" opacity="0.3" />
      <ellipse cx="18.5" cy="33" rx="3.5" ry="2" fill="#f7c690" />
      <ellipse cx="45.5" cy="33" rx="3.5" ry="2" fill="#f7c690" />
      <g className="shift-day">
        <ellipse cx="25" cy="27" rx="3.6" ry="4.2" fill={PIN_LINE} />
        <circle cx="26.3" cy="25.4" r="1.3" fill="#ffffff" />
        <ellipse cx="39" cy="27" rx="3.6" ry="4.2" fill={PIN_LINE} />
        <circle cx="40.3" cy="25.4" r="1.3" fill="#ffffff" />
        <path d="M29 33 Q32 37.5 35 33" fill="none" stroke={PIN_LINE} strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="shift-night" fill="none" stroke={PIN_LINE} strokeWidth="2" strokeLinecap="round">
        <path d="M21.5 27 Q25 30 28.5 27 M35.5 27 Q39 30 42.5 27" />
        <path d="M30 34.5 H34" />
      </g>
    </svg>
  )
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.brand.name} home`}>
      <LogoMark className="h-12 w-12 shrink-0" />
      <span className="leading-none">
        <span className="block font-display text-[1.7rem] leading-none">{site.brand.name}</span>
        <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.3em] text-brand-muted">
          {site.brand.descriptor}
        </span>
      </span>
    </Link>
  )
}

import { LogoMark } from "@/components/Logo"
import { PIN_LINE, PinArt } from "@/components/PinArt"
import { site } from "@/content/site"

/**
 * Static teaser for the lanyard builder. The pins sit exactly on the strap:
 * the container is 4:5 and the SVG viewBox is 100×125, so a CSS percentage
 * and an SVG coordinate describe the same point.
 */
export function LanyardTeaser() {
  const { lanyard } = site
  return (
    <section id="lanyard" className="scroll-mt-24 py-20">
      <div className="container-wide grid items-center gap-12 md:grid-cols-2">
        <LanyardArt />
        <div className="max-w-md">
          <p className="caption">{lanyard.eyebrow}</p>
          <h2 className="mt-3 text-5xl leading-none">{lanyard.title}</h2>
          <p className="mt-5 leading-relaxed text-brand-ink/80">{lanyard.body}</p>
          <ol className="mt-6 space-y-3 text-sm font-semibold">
            {lanyard.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-sky text-xs font-extrabold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <span className="mt-8 inline-flex rounded-full bg-brand-ink px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-brand-inverse">
            {lanyard.badge}
          </span>
        </div>
      </div>
    </section>
  )
}

function LanyardArt() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
      <svg viewBox="0 0 100 125" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M12 0 L50 78 L88 0" fill="none" stroke={PIN_LINE} strokeWidth="13" strokeLinejoin="round" />
        <path d="M12 0 L50 78 L88 0" fill="none" stroke="#7fb0dc" strokeWidth="10" strokeLinejoin="round" />
        <path
          d="M12 0 L50 78 L88 0"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <rect x="45" y="74" width="10" height="13" rx="3" fill="#c9cfd9" stroke={PIN_LINE} strokeWidth="1.6" />
      </svg>

      {/* A physical badge: fixed colours, it doesn't dim at night (but its marshmallow dozes off). */}
      <div className="absolute left-1/2 top-[67%] w-[52%] -translate-x-1/2 overflow-hidden rounded-2xl border-2 border-[#2d2f3b] bg-white text-[#1e2b4a] shadow-card">
        <div className="bg-[#8fbadf] py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.22em]">
          Staff
        </div>
        <div className="flex items-center gap-2 p-2.5">
          <LogoMark className="h-9 w-9 shrink-0" />
          <div className="leading-tight">
            <p className="font-display text-base">Dr You</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#69718a]">JMO · Emergency</p>
          </div>
        </div>
      </div>

      <PinArt
        variant="teal"
        className="absolute left-[25%] top-[22%] w-[21%] -translate-x-1/2 -translate-y-1/2 -rotate-[24deg] drop-shadow-pin"
      />
      <PinArt
        variant="jmo"
        className="absolute left-[37%] top-[42%] w-[24%] -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] drop-shadow-pin"
      />
      <PinArt
        variant="bow"
        className="absolute left-[71%] top-[29%] w-[21%] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] drop-shadow-pin"
      />
    </div>
  )
}

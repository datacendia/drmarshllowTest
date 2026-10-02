import Link from "next/link"
import { Sparkles, Stethoscope } from "@/components/Decor"
import { ArrowRightIcon } from "@/components/icons"
import { PinArt } from "@/components/PinArt"
import { ShiftText } from "@/components/ShiftText"
import { site } from "@/content/site"

const secondaryLink =
  "text-sm font-bold underline decoration-brand-blue decoration-2 underline-offset-4 transition hover:decoration-brand-ink"

export function Hero() {
  const { hero, night } = site
  return (
    <section className="relative overflow-hidden bg-brand-sky">
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-white/30 blur-2xl"
      />
      <div className="container-wide relative grid items-center gap-10 py-12 md:grid-cols-[1fr_1.1fr] md:py-20">
        <div className="max-w-xl">
          <p className="caption text-brand-ink/70">
            <ShiftText day={hero.eyebrow} night={night.hero.eyebrow} />
          </p>
          <h1 className="mt-4 text-[3.5rem] leading-[0.95] sm:text-7xl">
            <ShiftText
              day={
                <>
                  {hero.titleLines[0]}
                  <br />
                  {hero.titleLines[1]}
                </>
              }
              night={
                <>
                  {night.hero.titleLines[0]}
                  <br />
                  {night.hero.titleLines[1]}
                </>
              }
            />
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-brand-ink/80">
            <ShiftText day={hero.body} night={night.hero.body} />
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/shop" className="btn-primary">
              {hero.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/#lanyard" className={`shift-day ${secondaryLink}`}>
              {hero.secondaryCta}
            </Link>
            <Link href={night.pinHref} className={`shift-night ${secondaryLink}`}>
              {night.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="fabric-scrubs relative aspect-[5/4] w-full overflow-hidden rounded-[2.5rem] shadow-card md:rounded-[3rem]">
          <Stethoscope className="absolute -right-8 -top-6 w-[50%]" />
          <Sparkles className="absolute inset-0 h-full w-full" />
          <PinArt variant="teal" className="absolute left-[7%] top-[34%] w-[26%] -rotate-12 drop-shadow-pin" />
          <PinArt variant="jmo" className="absolute left-[33%] top-[9%] w-[32%] rotate-[4deg] drop-shadow-pin" />
          <PinArt variant="bow" className="absolute right-[6%] top-[42%] w-[26%] rotate-[10deg] drop-shadow-pin" />
        </div>
      </div>
    </section>
  )
}

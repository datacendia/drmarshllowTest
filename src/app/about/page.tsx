import type { Metadata } from "next"
import { PinArt } from "@/components/PinArt"
import { StorySection } from "@/components/StorySection"
import { site } from "@/content/site"

export const metadata: Metadata = { title: "About" }

export default function AboutPage() {
  const { about } = site
  return (
    <>
      <section className="bg-brand-sky py-16 md:py-24">
        <div className="container-wide grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="caption text-brand-ink/70">{about.eyebrow}</p>
            <h1 className="mt-3 text-6xl leading-none md:text-7xl">{about.title}</h1>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-brand-ink/85">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm rounded-full bg-brand-card/60">
            <PinArt variant="teal" className="absolute left-[8%] top-[20%] w-[42%] -rotate-6 drop-shadow-pin" />
            <PinArt variant="bow" className="absolute right-[6%] top-[30%] w-[42%] rotate-6 drop-shadow-pin" />
          </div>
        </div>
      </section>
      <StorySection className="py-20" />
    </>
  )
}

import { HeartPin, Stethoscope } from "@/components/Decor"
import { PinArt } from "@/components/PinArt"
import { ShiftText } from "@/components/ShiftText"
import { site } from "@/content/site"

export function StorySection({ className = "" }: { className?: string }) {
  const { story } = site
  return (
    <section className={className}>
      <div className="container-wide grid items-stretch gap-8 md:grid-cols-2">
        <div className="fabric-denim relative aspect-[4/3] overflow-hidden rounded-[2.5rem] md:aspect-auto md:min-h-[340px]">
          <PinArt variant="teal" className="absolute left-[12%] top-[16%] w-[25%] -rotate-12 drop-shadow-pin" />
          <PinArt variant="jmo" className="absolute left-[42%] top-[8%] w-[29%] rotate-6 drop-shadow-pin" />
          <HeartPin className="absolute bottom-[14%] left-[24%] w-[15%] -rotate-[8deg] drop-shadow-pin" />
          <Stethoscope className="absolute -bottom-10 -right-8 w-[48%] rotate-[160deg]" />
        </div>
        <div className="relative flex items-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2.5rem] bg-brand-sky md:rounded-[46%_54%_42%_58%/58%_42%_58%_42%]"
          />
          <div className="relative mx-auto max-w-md px-8 py-16 text-center">
            <h2 className="text-5xl leading-none">{story.title}</h2>
            <p className="mt-5 leading-relaxed text-brand-ink/80">{story.body}</p>
            <p className="mt-6 font-display text-2xl">
              <ShiftText day={story.signoff} night={site.night.storySignoff} />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

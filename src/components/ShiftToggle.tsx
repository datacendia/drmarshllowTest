"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@/components/icons"
import { currentShift, setShift, SHIFT_EVENT, type Shift } from "@/lib/shift"
import { site } from "@/content/site"

/** The moon switch: lets anyone (Evelyn, in daylight) try Night Shift Mode. */
export function ShiftToggle() {
  const [shift, setLocalShift] = useState<Shift>("day")

  useEffect(() => {
    setLocalShift(currentShift())
    const onChange = (e: Event) => setLocalShift((e as CustomEvent<Shift>).detail)
    window.addEventListener(SHIFT_EVENT, onChange)
    return () => window.removeEventListener(SHIFT_EVENT, onChange)
  }, [])

  const night = shift === "night"

  return (
    <button
      type="button"
      onClick={() => setShift(night ? "day" : "night", { manual: true })}
      aria-pressed={night}
      aria-label={site.night.toggleLabel}
      title={site.night.toggleLabel}
      className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-brand-sky"
    >
      {/* Icons swap via CSS so the server render never disagrees with the client. */}
      <MoonIcon className="shift-day h-[22px] w-[22px]" />
      <SunIcon className="shift-night h-[22px] w-[22px]" />
    </button>
  )
}

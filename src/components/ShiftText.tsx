import type { ReactNode } from "react"

/**
 * Day and night versions of a piece of copy. Both render; CSS shows the one
 * matching `data-shift` (see globals.css), so there is no hydration mismatch.
 */
export function ShiftText({ day, night }: { day: ReactNode; night: ReactNode }) {
  return (
    <>
      <span className="shift-day">{day}</span>
      <span className="shift-night">{night}</span>
    </>
  )
}

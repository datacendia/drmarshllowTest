export type Shift = "day" | "night"

/**
 * Which hours count as "nights"? This one rule drives the whole of Night
 * Shift Mode: the palette, the sleepy marshmallows, the night copy, and when
 * the night-only pin can be bought.
 *
 * Decisions inside it:
 *   - The window. A 10 p.m.–7 a.m. night shift? Or start earlier to catch
 *     evening shifts?
 *   - Whose clock. `now.getHours()` is the visitor's local time, which is right
 *     for "you're up at 3 a.m.". Sydney time would mean a Perth doctor gets
 *     night mode at 7 p.m.
 *   - Whether weekends are any different.
 *
 * Two constraints:
 *   - It must be self-contained: no imports, no module-level constants. It is
 *     stringified into the pre-paint <head> script (src/lib/shift-boot.ts),
 *     where nothing else from this file exists. Write the numbers inline.
 *   - Keep `site.night.windowLabel` in src/content/site.ts matching your window.
 */
export function isNightShift(now: Date): boolean {
  // TODO(Stuart): write the night window (5–10 lines). Until then night mode
  // only turns on from the moon switch or ?shift=night.
  return false
}

export const SHIFT_STORAGE_KEY = "drmarshllow-shift"
export const SHIFT_EVENT = "drmarshllow:shift"

export function currentShift(): Shift {
  return document.documentElement.dataset.shift === "night" ? "night" : "day"
}

/** A manual choice made with the moon switch, pinned for the rest of the visit. */
export function readShiftOverride(): Shift | null {
  try {
    const value = window.sessionStorage.getItem(SHIFT_STORAGE_KEY)
    return value === "night" || value === "day" ? value : null
  } catch {
    return null
  }
}

/** Switch shift on the open page and tell listeners (toggle, toast). */
export function setShift(shift: Shift, { manual = false }: { manual?: boolean } = {}) {
  document.documentElement.dataset.shift = shift
  if (manual) {
    try {
      window.sessionStorage.setItem(SHIFT_STORAGE_KEY, shift)
    } catch {
      // Storage blocked: the switch still works until the next page load.
    }
  }
  window.dispatchEvent(new CustomEvent<Shift>(SHIFT_EVENT, { detail: shift }))
}

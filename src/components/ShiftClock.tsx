"use client"

import { useEffect, useState } from "react"
import { currentShift, isNightShift, readShiftOverride, setShift, SHIFT_EVENT, type Shift } from "@/lib/shift"
import { site } from "@/content/site"

/**
 * Keeps the shift honest while a page stays open: at handover (7 a.m.) the
 * lights come back up without a reload. Also announces every change, whether
 * from the clock or the moon switch.
 */
export function ShiftClock() {
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => {
      if (readShiftOverride()) return // a manual moon-switch choice wins for this visit
      const next: Shift = isNightShift(new Date()) ? "night" : "day"
      if (next !== currentShift()) setShift(next)
    }
    const onChange = (e: Event) => {
      const shift = (e as CustomEvent<Shift>).detail
      setToast(shift === "night" ? site.night.lightsDown : site.night.handover)
    }
    window.addEventListener(SHIFT_EVENT, onChange)
    const id = window.setInterval(tick, 60_000)
    return () => {
      window.removeEventListener(SHIFT_EVENT, onChange)
      window.clearInterval(id)
    }
  }, [])

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(null), 5000)
    return () => window.clearTimeout(id)
  }, [toast])

  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      {toast && (
        <p className="rounded-full bg-brand-ink px-5 py-3 text-center text-sm font-bold text-brand-inverse shadow-card">
          {toast}
        </p>
      )}
    </div>
  )
}

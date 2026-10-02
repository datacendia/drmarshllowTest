import { isNightShift, SHIFT_STORAGE_KEY } from "@/lib/shift"

/**
 * Inline <head> script that sets `data-shift` on <html> before first paint,
 * so a 3 a.m. visitor never sees a flash of the day palette. Precedence:
 *   1. `?shift=night` / `?shift=day` in the URL (handy for demos; pinned for the visit)
 *   2. a manual moon-switch choice from earlier in this visit
 *   3. isNightShift(now)
 * Any failure falls back to day. Server-only: client bundles never carry it.
 */
export const shiftBootScript = `(function(){var K=${JSON.stringify(SHIFT_STORAGE_KEY)},r=document.documentElement,m=null;try{var q=new URLSearchParams(location.search).get("shift");if(q==="night"||q==="day")m=q}catch(e){}try{if(m)sessionStorage.setItem(K,m);else m=sessionStorage.getItem(K)}catch(e){}var n=false;if(m==="night")n=true;else if(m!=="day"){try{n=!!(${isNightShift.toString()})(new Date())}catch(e){}}r.dataset.shift=n?"night":"day"})()`

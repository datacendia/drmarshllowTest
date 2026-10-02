"use client"

import { useState, type FormEvent } from "react"
import { PinArt } from "@/components/PinArt"
import { site } from "@/content/site"

/**
 * Teases the next drop and collects interest. Draft only: the email isn't
 * stored anywhere yet. In the build it writes to a Payload `waitlist`
 * collection with explicit consent (Spam Act 2003).
 */
export function NextDropCard() {
  const [joined, setJoined] = useState(false)
  const { nextDrop } = site

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setJoined(true)
  }

  return (
    <article className="flex flex-col">
      <div className="relative grid aspect-[5/4] place-items-center overflow-hidden rounded-[1.75rem] border-2 border-dashed border-brand-skydeep bg-tile-mint">
        <span className="absolute left-4 top-4 rounded-full bg-brand-card px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em]">
          {nextDrop.label}
        </span>
        <PinArt variant="mystery" className="w-[40%]" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-sans text-[0.95rem] font-bold">{nextDrop.title}</h3>
        <p className="mt-1 text-sm text-brand-muted">{nextDrop.body}</p>
        {joined ? (
          <p role="status" className="mt-4 text-sm font-bold">
            You&apos;re on the list ♡
            <span className="block text-xs font-normal text-brand-muted">(Draft preview, not saved yet)</span>
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <label htmlFor="drop-email" className="sr-only">
              Email address
            </label>
            <input
              id="drop-email"
              type="email"
              required
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-full border border-brand-line bg-brand-card px-4 py-2 text-sm outline-none transition focus:border-brand-blue"
            />
            <button type="submit" className="btn-outline px-4">
              Notify me
            </button>
          </form>
        )}
      </div>
    </article>
  )
}

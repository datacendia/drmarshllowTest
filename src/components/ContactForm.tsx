"use client"

import { useState, type FormEvent } from "react"
import { site } from "@/content/site"

/** Draft only: nothing is sent anywhere. In the build it posts to a Payload collection and emails Evelyn. */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div role="status" className="grid place-items-center rounded-[2rem] bg-brand-card p-10 text-center shadow-card">
        <p className="font-display text-3xl">{site.contact.sentNote}</p>
      </div>
    )
  }

  const field =
    "mt-2 w-full rounded-2xl border border-brand-line bg-brand-card px-4 py-3 text-base outline-none transition focus:border-brand-blue"

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[2rem] bg-brand-card p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-bold">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm font-bold">
        What&apos;s it about?
        <select name="topic" className={field} defaultValue={site.contact.topics[0]}>
          {site.contact.topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-bold">
        Message
        <textarea name="message" required rows={5} className={field} />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>
    </form>
  )
}

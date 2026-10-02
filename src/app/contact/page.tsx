import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { site } from "@/content/site"

export const metadata: Metadata = { title: "Contact" }

export default function ContactPage() {
  const { contact } = site
  return (
    <section className="py-16">
      <div className="container-wide grid gap-12 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="caption">{contact.eyebrow}</p>
          <h1 className="mt-3 text-6xl leading-none">{contact.title}</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-ink/80">{contact.body}</p>
          <div className="mt-8 rounded-[2rem] bg-brand-sky p-6">
            <h2 className="text-3xl">{contact.bulkTitle}</h2>
            <p className="mt-2 text-brand-ink/80">{contact.bulkBody}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

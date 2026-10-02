import { InstagramIcon, TikTokIcon } from "@/components/icons"
import { site } from "@/content/site"

export const SOCIAL_ICONS = { tiktok: TikTokIcon, instagram: InstagramIcon } as const

export function SocialStrip() {
  const { social } = site
  return (
    <section className="bg-brand-sky/60 py-14">
      <div className="container-wide flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-4xl">{social.title}</h2>
          <p className="mt-2 text-brand-ink/80">{social.body}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {social.links.map((link) => {
            const Icon = SOCIAL_ICONS[link.platform]
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-card px-5 py-3 text-sm font-bold shadow-card transition hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
                {link.handle}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

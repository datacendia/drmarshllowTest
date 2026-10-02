import Link from "next/link"
import { Logo } from "@/components/Logo"
import { ShiftText } from "@/components/ShiftText"
import { SOCIAL_ICONS } from "@/components/SocialStrip"
import { site } from "@/content/site"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-brand-line bg-brand-sky/40">
      <div className="container-wide grid gap-8 py-10 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-12">
        <Logo />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex gap-2">
          {site.social.links.map((link) => {
            const Icon = SOCIAL_ICONS[link.platform]
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.brand.name} on ${link.platform === "tiktok" ? "TikTok" : "Instagram"}`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-brand-card transition hover:-translate-y-0.5"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="container-wide flex flex-col gap-2 border-t border-brand-line/70 py-5 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.brand.name}. All rights reserved.
        </p>
        {/* Policy pages land in the build phase; plain text until they exist. */}
        <p>{site.footer.legal.join(" · ")}</p>
        <p>
          <ShiftText day={site.footer.tagline} night={site.night.footerTagline} />
        </p>
      </div>
    </footer>
  )
}

import { GiftIcon, HeartIcon, ShieldIcon, TruckIcon } from "@/components/icons"
import { site } from "@/content/site"

const ICONS = { truck: TruckIcon, heart: HeartIcon, shield: ShieldIcon, gift: GiftIcon } as const

export function TrustBar() {
  return (
    <section aria-label={`Why ${site.brand.name}`} className="border-b border-brand-line">
      <ul className="container-wide grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4 md:divide-x md:divide-brand-line">
        {site.trust.map((item) => {
          const Icon = ICONS[item.icon]
          return (
            <li key={item.title} className="flex flex-col items-center px-3 text-center">
              <Icon className="h-9 w-9 text-brand-blue" />
              <p className="mt-3 text-sm font-bold">{item.title}</p>
              <p className="text-sm text-brand-muted">{item.body}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

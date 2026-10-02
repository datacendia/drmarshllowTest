"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Logo } from "@/components/Logo"
import { ShiftToggle } from "@/components/ShiftToggle"
import { BagIcon, CloseIcon, MenuIcon } from "@/components/icons"
import { useCart } from "@/lib/cart"
import { site } from "@/content/site"

/**
 * Search and account icons from the reference are intentionally left out:
 * with three pins search is clutter, and guest checkout converts better for
 * a $15 impulse buy than asking people to make an account.
 */
export function Header() {
  const pathname = usePathname()
  const { count, open } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line/80 bg-brand-bone/90 backdrop-blur">
      <div className="container-wide flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm font-semibold">
            {site.nav.map((item) => {
              const active = isActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 transition hover:text-brand-ink ${
                      active
                        ? "text-brand-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-blue"
                        : "text-brand-ink/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ShiftToggle />
          <button
            type="button"
            onClick={open}
            className="relative grid h-11 w-11 place-items-center rounded-full transition hover:bg-brand-sky"
            aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
          >
            <BagIcon className="h-6 w-6" />
            <span className="absolute right-0.5 top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-ink px-1 text-[10px] font-extrabold text-brand-inverse">
              {count}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-brand-sky md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-brand-line bg-brand-bone md:hidden">
          <ul className="container-wide flex flex-col py-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block py-3 font-display text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

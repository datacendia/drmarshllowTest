import type { Metadata } from "next"
import { Nunito, Patrick_Hand } from "next/font/google"
import { CartDrawer } from "@/components/CartDrawer"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ShiftClock } from "@/components/ShiftClock"
import { ShiftText } from "@/components/ShiftText"
import { CartProvider } from "@/lib/cart"
import { shiftBootScript } from "@/lib/shift-boot"
import { site } from "@/content/site"
import "./globals.css"

const display = Patrick_Hand({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" })
const sans = Nunito({ subsets: ["latin"], variable: "--font-sans", display: "swap" })

export const metadata: Metadata = {
  title: {
    default: `${site.brand.name} · Enamel pins made for doctors`,
    template: `%s · ${site.brand.name}`,
  },
  description: "Tiny marshmallow doctors for your lanyard. Enamel pins made for doctors, posted from Australia.",
  // Draft: keep it out of search until launch.
  robots: { index: false, follow: false },
}

/**
 * `translate="no"` plus `notranslate` opt the page out of browser
 * auto-translate, which mutates the DOM mid-render and breaks React
 * hydration (same fix as rl-templates `_base`).
 *
 * `suppressHydrationWarning` on <html> is for `data-shift`, which the boot
 * script sets before React hydrates. It only covers <html>'s own attributes.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      translate="no"
      className={`notranslate ${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google" content="notranslate" />
        <script dangerouslySetInnerHTML={{ __html: shiftBootScript }} />
      </head>
      <body translate="no" className="notranslate min-h-screen">
        <CartProvider>
          <p className="bg-brand-ink px-4 py-2 text-center text-xs font-semibold text-brand-inverse">
            <ShiftText day={site.draftNote} night={site.night.draftNote} />
          </p>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <ShiftClock />
        </CartProvider>
      </body>
    </html>
  )
}

"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { PinArt } from "@/components/PinArt"
import { ShiftText } from "@/components/ShiftText"
import { CloseIcon, MinusIcon, PlusIcon } from "@/components/icons"
import { useCart } from "@/lib/cart"
import { formatAUD } from "@/lib/money"
import { TILE_BG } from "@/lib/tiles"
import { site } from "@/content/site"

export function CartDrawer() {
  const { lines, subtotalCents, isOpen, close, setQty, remove } = useCart()
  const closeRef = useRef<HTMLButtonElement>(null)
  const [showCheckoutNote, setShowCheckoutNote] = useState(false)

  // While open: focus the close button, close on Escape, lock page scroll.
  useEffect(() => {
    if (!isOpen) {
      setShowCheckoutNote(false)
      return
    }
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, close])

  return (
    <div inert={!isOpen} className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}>
      <div
        onClick={close}
        className={`absolute inset-0 bg-brand-scrim/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={site.cart.title}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-brand-bone shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-brand-line px-6 py-5">
          <h2 className="text-3xl">{site.cart.title}</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-brand-sky"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <PinArt variant="teal" className="w-24 opacity-70" />
            <p className="font-display text-2xl">
              <ShiftText day={site.cart.empty} night={site.night.cartEmpty} />
            </p>
            <Link href="/shop" onClick={close} className="btn-primary">
              {site.cart.browse}
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-brand-line overflow-y-auto px-6">
              {lines.map((line) => (
                <li key={line.slug} className="flex gap-4 py-5">
                  <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl ${TILE_BG[line.tile]}`}>
                    <PinArt variant={line.art} className="w-12 drop-shadow-pin" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-bold">{line.name}</p>
                      <p className="font-extrabold">{formatAUD(line.priceCents * line.qty)}</p>
                    </div>
                    <p className="text-sm text-brand-muted">{formatAUD(line.priceCents)} each</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center rounded-full border border-brand-line bg-brand-card">
                        <button
                          type="button"
                          onClick={() => setQty(line.slug, line.qty - 1)}
                          aria-label={`One fewer ${line.name}`}
                          className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-brand-sky"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold" aria-live="polite">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(line.slug, line.qty + 1)}
                          aria-label={`One more ${line.name}`}
                          className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-brand-sky"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.slug)}
                        className="text-xs font-bold uppercase tracking-[0.12em] text-brand-muted underline-offset-4 transition hover:text-brand-ink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-brand-line px-6 py-6">
              <div className="flex items-baseline justify-between">
                <p className="font-bold">Subtotal</p>
                <p className="text-xl font-extrabold">
                  {formatAUD(subtotalCents)} <span className="text-xs font-bold text-brand-muted">AUD</span>
                </p>
              </div>
              <p className="mt-1 text-sm text-brand-muted">{site.cart.shippingNote}</p>
              <button type="button" onClick={() => setShowCheckoutNote(true)} className="btn-primary mt-5 w-full">
                {site.cart.checkout}
              </button>
              {showCheckoutNote && (
                <p role="status" className="mt-3 rounded-2xl bg-brand-sky px-4 py-3 text-sm">
                  {site.cart.checkoutNote}
                </p>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

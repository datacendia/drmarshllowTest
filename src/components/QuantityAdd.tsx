"use client"

import { useState } from "react"
import { AddToCartButton } from "@/components/AddToCartButton"
import { MinusIcon, PlusIcon } from "@/components/icons"
import type { CartItem } from "@/lib/types"

/** Quantity stepper plus add-to-cart, for the product page. */
export function QuantityAdd({ item, max, disabled = false }: { item: CartItem; max: number; disabled?: boolean }) {
  const [qty, setQty] = useState(1)
  const limit = Math.max(1, Math.min(10, max))

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center rounded-full border border-brand-line bg-brand-card">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
          className="grid h-12 w-12 place-items-center rounded-full transition hover:bg-brand-sky"
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="w-10 text-center font-bold" aria-live="polite">
          {qty}
        </span>
        <button
          type="button"
          onClick={() => setQty((q) => Math.min(limit, q + 1))}
          aria-label="Increase quantity"
          className="grid h-12 w-12 place-items-center rounded-full transition hover:bg-brand-sky"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
      <AddToCartButton item={item} qty={qty} disabled={disabled} className="btn-primary flex-1 sm:flex-none">
        Add to cart
      </AddToCartButton>
    </div>
  )
}

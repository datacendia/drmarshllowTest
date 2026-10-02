"use client"

import type { ReactNode } from "react"
import { useCart } from "@/lib/cart"
import type { CartItem } from "@/lib/types"

export function AddToCartButton({
  item,
  qty = 1,
  disabled = false,
  className = "",
  children,
}: {
  item: CartItem
  qty?: number
  disabled?: boolean
  className?: string
  children: ReactNode
}) {
  const { add } = useCart()
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => add(item, qty)}
      className={`${className} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {disabled ? "Sold out" : children}
    </button>
  )
}

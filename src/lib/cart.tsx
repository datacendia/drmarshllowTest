"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { CartItem } from "@/lib/types"

export interface CartLine extends CartItem {
  qty: number
}

interface CartState {
  lines: CartLine[]
  count: number
  subtotalCents: number
  isOpen: boolean
  add: (item: CartItem, qty?: number) => void
  setQty: (slug: string, qty: number) => void
  remove: (slug: string) => void
  open: () => void
  close: () => void
}

const CartContext = createContext<CartState | null>(null)

const STORAGE_KEY = "drmarshllow-cart-v1"
const MAX_PER_LINE = 10

function isCartLine(value: unknown): value is CartLine {
  if (!value || typeof value !== "object") return false
  const l = value as Record<string, unknown>
  return (
    typeof l.slug === "string" &&
    typeof l.name === "string" &&
    typeof l.priceCents === "number" &&
    typeof l.qty === "number" &&
    typeof l.art === "string" &&
    typeof l.tile === "string"
  )
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Load after mount so server and client render the same empty cart first.
  // Storage can throw (private mode, blocked site data); the cart just starts empty.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      const parsed: unknown = raw ? JSON.parse(raw) : []
      if (Array.isArray(parsed)) setLines(parsed.filter(isCartLine))
    } catch {
      // Unreadable storage: keep the empty cart.
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // Unwritable storage: the cart still works for this visit.
    }
  }, [lines, hydrated])

  const add = useCallback((item: CartItem, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === item.slug)
      if (existing) {
        return prev.map((l) =>
          l.slug === item.slug ? { ...l, qty: Math.min(MAX_PER_LINE, l.qty + qty) } : l,
        )
      }
      return [...prev, { ...item, qty: Math.min(MAX_PER_LINE, qty) }]
    })
    setIsOpen(true)
  }, [])

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.slug !== slug)
        : prev.map((l) => (l.slug === slug ? { ...l, qty: Math.min(MAX_PER_LINE, qty) } : l)),
    )
  }, [])

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug))
  }, [])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo<CartState>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotalCents: lines.reduce((sum, l) => sum + l.priceCents * l.qty, 0),
      isOpen,
      add,
      setQty,
      remove,
      open,
      close,
    }),
    [lines, isOpen, add, setQty, remove, open, close],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartState {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>")
  return ctx
}

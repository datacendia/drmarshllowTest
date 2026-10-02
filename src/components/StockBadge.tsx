import { stockLabel, type StockTone } from "@/lib/stock"
import type { Product } from "@/lib/types"

const TONE: Record<StockTone, string> = {
  urgent: "bg-brand-coral text-brand-navy",
  calm: "bg-brand-sky text-brand-ink",
  soldout: "bg-brand-ink text-brand-inverse",
}

export function StockBadge({ product, className = "" }: { product: Product; className?: string }) {
  const badge = stockLabel(product)
  if (!badge) return null
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${TONE[badge.tone]} ${className}`}
    >
      {badge.text}
    </span>
  )
}

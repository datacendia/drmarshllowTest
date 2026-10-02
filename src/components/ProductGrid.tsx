import { NextDropCard } from "@/components/NextDropCard"
import { ProductCard } from "@/components/ProductCard"
import type { Product } from "@/lib/types"

/**
 * By day: the regular pins plus the "next drop" teaser. On night shift the
 * teaser steps aside for the night-only pin, so the grid stays four across.
 */
export function ProductGrid({
  products,
  withNextDrop = false,
  className = "",
}: {
  products: Product[]
  withNextDrop?: boolean
  className?: string
}) {
  const regular = products.filter((p) => !p.nightOnly)
  const nightOnly = products.filter((p) => p.nightOnly)

  return (
    <div className={`grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 ${className}`}>
      {regular.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
      {nightOnly.map((p) => (
        <div key={p.slug} className="shift-night">
          <ProductCard product={p} />
        </div>
      ))}
      {withNextDrop && (
        <div className="shift-day">
          <NextDropCard />
        </div>
      )}
    </div>
  )
}

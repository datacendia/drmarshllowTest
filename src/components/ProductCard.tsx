import Link from "next/link"
import { AddToCartButton } from "@/components/AddToCartButton"
import { PinArt } from "@/components/PinArt"
import { StockBadge } from "@/components/StockBadge"
import { toCartItem } from "@/lib/catalog"
import { formatAUD } from "@/lib/money"
import { TILE_BG } from "@/lib/tiles"
import type { Product } from "@/lib/types"
import { site } from "@/content/site"

export function ProductCard({ product }: { product: Product }) {
  const href = `/shop/${product.slug}`
  return (
    <article className="group flex flex-col">
      <Link
        href={href}
        className={`grid aspect-[5/4] place-items-center overflow-hidden rounded-[1.75rem] ${TILE_BG[product.tile]} transition duration-300 group-hover:-translate-y-1 group-hover:shadow-card`}
      >
        <PinArt
          variant={product.art}
          title={product.name}
          className="w-[48%] drop-shadow-pin transition duration-300 group-hover:-rotate-3 group-hover:scale-105"
        />
      </Link>
      <div className="mt-4 flex flex-1 flex-col items-center text-center">
        {product.nightOnly && (
          <span className="mb-2 rounded-full bg-brand-ink px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-inverse">
            {site.night.nightOnlyBadge}
          </span>
        )}
        <h3 className="font-sans text-[0.95rem] font-bold">
          <Link href={href} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-extrabold">{formatAUD(product.priceCents)}</p>
        <StockBadge product={product} className="mt-2" />
        <AddToCartButton item={toCartItem(product)} disabled={product.stock === 0} className="btn-outline mt-4">
          Add to cart
        </AddToCartButton>
      </div>
    </article>
  )
}

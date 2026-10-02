import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TruckIcon } from "@/components/icons"
import { PinArt } from "@/components/PinArt"
import { ProductCard } from "@/components/ProductCard"
import { QuantityAdd } from "@/components/QuantityAdd"
import { StockBadge } from "@/components/StockBadge"
import { getProduct, getProducts, toCartItem } from "@/lib/catalog"
import { formatAUD } from "@/lib/money"
import { TILE_BG } from "@/lib/tiles"
import { site } from "@/content/site"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) return {}
  return { title: product.name, description: product.blurb }
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) notFound()

  // The night-only pin stays special: it never appears as a "you might also like".
  const related = (await getProducts()).filter((p) => p.slug !== product.slug && !p.nightOnly)
  const cartItem = toCartItem(product)

  return (
    <>
      <section className="py-10 md:py-14">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-muted">
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-brand-ink">{product.name}</span>
          </nav>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-14">
            <div
              className={`relative grid aspect-square place-items-center overflow-hidden rounded-[2.5rem] ${TILE_BG[product.tile]}`}
            >
              <PinArt variant={product.art} title={product.name} className="w-[52%] drop-shadow-pin" />
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-card/80 px-3 py-1 text-xs font-bold">
                {site.product.photoNote}
              </span>
            </div>

            <div className="flex flex-col">
              <p className="caption">{product.collection}</p>
              <h1 className="mt-2 text-6xl leading-none">{product.name}</h1>
              <div className="mt-4 flex items-center gap-3">
                <p className="text-2xl font-extrabold">{formatAUD(product.priceCents)}</p>
                <StockBadge product={product} />
              </div>
              <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">{product.blurb}</p>

              <div className="mt-8">
                {product.nightOnly ? (
                  <>
                    {/* CSS decides which one shows. Checkout re-checks the hour in the build phase. */}
                    <div className="shift-night">
                      <QuantityAdd item={cartItem} max={product.stock} disabled={product.stock === 0} />
                    </div>
                    <p className="shift-day rounded-2xl bg-tile-night px-5 py-4 text-sm font-bold text-white">
                      {site.night.lockedNote}
                    </p>
                  </>
                ) : (
                  <QuantityAdd item={cartItem} max={product.stock} disabled={product.stock === 0} />
                )}
              </div>

              <dl className="mt-10 divide-y divide-brand-line border-y border-brand-line text-sm">
                {product.details.map((d) => (
                  <div key={d.label} className="flex justify-between gap-6 py-3">
                    <dt className="font-bold">{d.label}</dt>
                    <dd className="text-right text-brand-ink/80">{d.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 flex items-start gap-2 text-sm text-brand-ink/80">
                <TruckIcon className="h-5 w-5 shrink-0 text-brand-blue" />
                {site.product.shippingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-brand-line py-16">
          <div className="container-wide">
            <h2 className="text-4xl">{site.product.relatedTitle}</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

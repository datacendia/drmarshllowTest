import type { Metadata } from "next"
import Link from "next/link"
import { ProductGrid } from "@/components/ProductGrid"
import { getProducts } from "@/lib/catalog"
import { site } from "@/content/site"

export const metadata: Metadata = { title: "Shop" }

export default async function ShopPage() {
  const products = await getProducts()
  const { shop } = site

  return (
    <section className="py-16">
      <div className="container-wide">
        <header className="max-w-xl">
          <p className="caption">{shop.eyebrow}</p>
          <h1 className="mt-3 text-6xl leading-none">{shop.title}</h1>
          <p className="mt-4 text-brand-ink/80">{shop.body}</p>
        </header>

        <ProductGrid products={products} withNextDrop className="mt-12" />

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-brand-sky p-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl">{shop.bulkTitle}</h2>
            <p className="mt-2 text-brand-ink/80">{shop.bulkBody}</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            {shop.bulkCta}
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Hero } from "@/components/Hero"
import { LanyardTeaser } from "@/components/LanyardTeaser"
import { ProductGrid } from "@/components/ProductGrid"
import { ShiftText } from "@/components/ShiftText"
import { SocialStrip } from "@/components/SocialStrip"
import { StorySection } from "@/components/StorySection"
import { TrustBar } from "@/components/TrustBar"
import { getProducts } from "@/lib/catalog"
import { site } from "@/content/site"

export default async function HomePage() {
  const products = await getProducts()
  const { collection } = site

  return (
    <>
      <Hero />
      <TrustBar />

      <section className="py-20">
        <div className="container-wide">
          <header className="mx-auto max-w-xl text-center">
            <p className="caption">{collection.eyebrow}</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">
              <ShiftText day={collection.title} night={site.night.collectionTitle} />
            </h2>
            <p className="mt-4 text-brand-ink/80">{collection.body}</p>
          </header>
          <ProductGrid products={products} withNextDrop className="mt-12" />
        </div>
      </section>

      <StorySection className="pb-4" />
      <LanyardTeaser />
      <SocialStrip />
    </>
  )
}

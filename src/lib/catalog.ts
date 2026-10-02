import { PRODUCTS } from "@/data/products"
import type { CartItem, Product } from "@/lib/types"

/**
 * The only door into product data. Pages call these; nothing imports
 * `data/products.ts` directly. When Payload arrives, the bodies become
 * `payload.find({ collection: "products" })` and no component changes.
 * They are async now so that swap doesn't ripple through every caller.
 */
export async function getProducts(): Promise<Product[]> {
  return PRODUCTS
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug)
}

/** The serialisable snapshot handed to client components for the cart. */
export function toCartItem(p: Product): CartItem {
  return { slug: p.slug, name: p.name, priceCents: p.priceCents, art: p.art, tile: p.tile }
}

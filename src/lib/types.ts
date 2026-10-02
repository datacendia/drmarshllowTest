/** Which illustrated pin to draw. Real photography replaces these in the build phase. */
export type PinVariant = "teal" | "bow" | "jmo" | "night" | "mystery"

/** Product tile colour. Maps to the `tile.*` tokens in tailwind.config.ts. */
export type Tile = "blush" | "powder" | "mint" | "lilac" | "night"

export interface Product {
  slug: string
  name: string
  /** One line, used on the product page and as the meta description. */
  blurb: string
  /** AUD in cents. Money is never a float. */
  priceCents: number
  /** Units on hand right now. */
  stock: number
  /** Size of a limited run; undefined means an open edition. */
  editionSize?: number
  /** True when a restock is already on order from the manufacturer. */
  restockPlanned?: boolean
  /** Only on sale during Night Shift Mode. Enforced again at checkout in the build. */
  nightOnly?: boolean
  art: PinVariant
  tile: Tile
  collection: string
  details: { label: string; value: string }[]
}

/**
 * What the cart stores: a display snapshot only. The server re-prices every
 * line at checkout, so a tampered price in localStorage changes nothing.
 */
export interface CartItem {
  slug: string
  name: string
  priceCents: number
  art: PinVariant
  tile: Tile
}

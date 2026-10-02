import type { Product } from "@/lib/types"

export type StockTone = "urgent" | "calm" | "soldout"

export interface StockBadge {
  text: string
  tone: StockTone
}

/**
 * The scarcity line under a pin's price: "Only 3 left", "Sold out", and so on.
 * Rendered by <StockBadge> on product cards and the product page.
 * Return `null` to show no badge.
 *
 * This is a brand decision as much as a technical one:
 *   - Exact counts ("Only 3 left") create urgency, but a high count
 *     ("48 left") can quietly tell visitors a design isn't selling.
 *   - Limited runs (`editionSize`) can show "3 of 50 left". Collectors like
 *     a number; open editions probably shouldn't get one.
 *   - Sold out with `restockPlanned` needs different words from sold out
 *     for good ("Back soon" vs "Retired").
 *
 * Draft data to test against (src/data/products.ts):
 *   Dr Marshllow         stock 48, open edition
 *   Dr Marshllow · Bow   stock 7,  open edition
 *   JMO Marshllow        stock 3,  edition of 50
 */
export function stockLabel(
  product: Pick<Product, "stock" | "editionSize" | "restockPlanned">,
): StockBadge | null {
  // TODO(Stuart): write the rules (5–10 lines). Until then, no badges render.
  return null
}

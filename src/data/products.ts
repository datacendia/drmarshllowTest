import type { Product } from "@/lib/types"

const PIN_DETAILS: Product["details"] = [
  { label: "Size", value: "About 30 mm tall (to confirm)" },
  { label: "Finish", value: "Enamel with a dark metal outline" },
  { label: "Backing", value: "To confirm" },
  { label: "Comes on", value: "An illustrated DrMarshllow card in a cello sleeve" },
]

/**
 * Draft catalogue. Names, prices and stock are placeholders until Evelyn
 * confirms them. In the build phase this becomes the Payload `products`
 * collection; nothing outside `src/lib/catalog.ts` imports this file.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "dr-marshllow",
    name: "Dr Marshllow",
    blurb: "The original. White coat, teal scrubs, stethoscope at the ready, and that face.",
    priceCents: 1500,
    stock: 48,
    art: "teal",
    tile: "powder",
    collection: "The Doctors",
    details: PIN_DETAILS,
  },
  {
    slug: "dr-marshllow-bow",
    name: "Dr Marshllow · Bow",
    blurb: "Purple scrubs, a matching bow and the biggest eyes on the ward round.",
    priceCents: 1500,
    stock: 7,
    art: "bow",
    tile: "lilac",
    collection: "The Doctors",
    details: PIN_DETAILS,
  },
  {
    slug: "jmo-marshllow",
    name: "JMO Marshllow",
    blurb: "Flag up, brows down. For every junior doctor holding the line.",
    priceCents: 1600,
    stock: 3,
    editionSize: 50,
    art: "jmo",
    tile: "blush",
    collection: "The Doctors",
    details: PIN_DETAILS,
  },
  {
    // Concept for Evelyn: a pin that can only be bought on night shift.
    slug: "night-shift-marshllow",
    name: "Night Shift Marshllow",
    blurb: "Sleep mask up, coffee in hand. Only on sale between 10 p.m. and 7 a.m. If you've got one, you earned it.",
    priceCents: 1600,
    stock: 30,
    nightOnly: true,
    art: "night",
    tile: "night",
    collection: "Night shift",
    details: [{ label: "On sale", value: "10 p.m.–7 a.m. only" }, ...PIN_DETAILS],
  },
]

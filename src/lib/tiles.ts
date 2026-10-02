import type { Tile } from "@/lib/types"

/** Literal class names, so Tailwind's scanner keeps every tile colour. */
export const TILE_BG: Record<Tile, string> = {
  blush: "bg-tile-blush",
  powder: "bg-tile-powder",
  mint: "bg-tile-mint",
  lilac: "bg-tile-lilac",
  night: "bg-tile-night",
}

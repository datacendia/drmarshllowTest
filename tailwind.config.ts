import type { Config } from "tailwindcss"

/**
 * Brand token layer. Each colour is a CSS variable (RGB channels, defined in
 * globals.css) so the palette can change at runtime: Night Shift Mode swaps
 * every variable at once under `[data-shift="night"]`. Re-skinning the store
 * for another brand means editing those two variable blocks, nothing else.
 *
 *   brand.ink      foreground: text, outlines, dark fills (flips light at night)
 *   brand.inverse  text sitting on an ink fill (white by day, navy by night)
 *   brand.navy     always navy, for text on coral, which never flips
 *   brand.bone     page background
 *   brand.card     raised surfaces: forms, pills, steppers
 *   brand.sky      hero and soft section backgrounds
 *   brand.coral    primary call to action
 *   brand.scrim    the dimmed backdrop behind the cart drawer
 *   tile.*         product tiles, one per product
 *
 * Components only ever use these names (`bg-brand-sky`, `text-brand-ink/80`),
 * never raw hex.
 */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: token("ink"),
          inverse: token("inverse"),
          navy: token("navy"),
          bone: token("bone"),
          card: token("card"),
          sky: token("sky"),
          skydeep: token("skydeep"),
          blue: token("blue"),
          denim: token("denim"),
          coral: token("coral"),
          muted: token("muted"),
          line: token("line"),
          scrim: token("scrim"),
        },
        tile: {
          blush: token("tile-blush"),
          powder: token("tile-powder"),
          mint: token("tile-mint"),
          lilac: token("tile-lilac"),
          night: token("tile-night"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-rounded", "cursive"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        wide: "1200px",
      },
      boxShadow: {
        card: "0 14px 32px -18px rgb(30 43 74 / 0.4)",
      },
      dropShadow: {
        pin: ["0 7px 6px rgb(30 43 74 / 0.28)", "0 2px 2px rgb(30 43 74 / 0.18)"],
      },
    },
  },
  plugins: [],
}

export default config

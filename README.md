# DrMarshllow storefront (first draft)

> Before writing code here, load `rainey-stack/CONVENTIONS.md` into context.

First-draft storefront for Evelyn's DrMarshllow enamel pins (Australia).
Frontend only: draft catalogue, client-side cart, no checkout yet. It follows
the `rl-templates/_base` stack (Next 16, React 19, Tailwind 3.4) and is the
seed for a future `rl-templates/boutique` commerce archetype.

## Run

```bash
npm install
npm run dev   # http://localhost:3210
```

## Where things live

| File | What it owns |
|---|---|
| `tailwind.config.ts` | Brand tokens. Re-skin the whole store for another brand here. |
| `src/content/site.ts` | Every line of copy. |
| `src/data/products.ts` | Draft catalogue: placeholder names, prices, stock. |
| `src/lib/catalog.ts` | The only door into product data. Becomes Payload. |
| `src/lib/cart.tsx` | Cart state, persisted to localStorage (display snapshot only). |
| `src/lib/stock.ts` | Scarcity badge rules. **TODO.** |
| `src/lib/shift.ts` | Night Shift Mode: `isNightShift()` decides the night window. **TODO.** |
| `src/components/PinArt.tsx` | SVG pin illustrations (day and sleepy night faces). Replaced by real photography. |

## Night Shift Mode

During the hours `isNightShift()` returns true, the store goes on nights:
night palette (the `[data-shift="night"]` variables in `globals.css`), sleepy
marshmallows with coffee, night copy (`site.night`), and the night-only
**Night Shift Marshllow** taking the next-drop tile's place.

- Demo it any time: the moon switch in the header, or `?shift=night` / `?shift=day` (pinned for the visit).
- A tiny `<head>` script (`src/lib/shift-boot.ts`) sets `data-shift` before first paint, so there's no
  flash and no hydration mismatch. It inlines `isNightShift.toString()`, so that function must stay
  self-contained: no imports, no module constants.
- Build phase: the night-only pin must be re-checked at checkout on the server. The CSS gate is UX, not security.

## Placeholders to confirm with Evelyn

- Brand name on the site: the cards say **DrMarshllow**, the reference mockup says "Doctor Marshmellows".
- Product names, prices, stock, pin size and backing type.
- The About story (`site.about.paragraphs[1]`).

## Build phase

- Payload 3 admin: products, drops, waitlist, orders, homepage content
- Stripe Checkout with signed webhooks; stock held while a checkout is open
- Real product photography, plus transparent cut-outs for the lanyard builder
- Lanyard builder with a shareable 1080×1350 image (pattern: Sereno's `api/og/counter-move`)

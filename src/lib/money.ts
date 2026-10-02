const AUD = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" })

/** 1500 → "$15.00". Prices are stored in cents to avoid float rounding. */
export function formatAUD(cents: number): string {
  return AUD.format(cents / 100)
}

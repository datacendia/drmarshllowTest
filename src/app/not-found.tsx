import Link from "next/link"
import { PinArt } from "@/components/PinArt"

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-wide flex flex-col items-center text-center">
        <PinArt variant="mystery" className="w-32" />
        <h1 className="mt-6 text-5xl sm:text-6xl">This page has been discharged</h1>
        <p className="mt-3 text-brand-ink/80">It&apos;s gone home to rest. The pins are still here, though.</p>
        <Link href="/shop" className="btn-primary mt-8">
          Back to the pins
        </Link>
      </div>
    </section>
  )
}

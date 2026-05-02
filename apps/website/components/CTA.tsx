import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./Icons";

export function CTA() {
  return (
    <section id="start" className="relative overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-4xl bg-espresso-900 p-10 text-cream-50 sm:p-16 lg:p-20">
          <div className="absolute inset-0 -z-0 opacity-50">
            <Image
              src="/images/hero-house.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso-900 via-espresso-900/85 to-espresso-900/30" />
          </div>

          <div className="relative max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-clay-400">
              Ready when you are
            </p>
            <h2 className="mt-5 font-display text-[48px] font-light leading-[0.95] tracking-tightest text-cream-50 sm:text-[72px]">
              Hand it to <br /> Hearth.
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-cream-100/80">
              Walk through your property once. We&apos;ll do the rest — order
              the right filter, find the right plumber, file the right warranty
              — for as long as you own the place.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-espresso-900 transition hover:bg-cream-100"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="mailto:hello@hearth.app"
                className="text-[13px] font-semibold uppercase tracking-[0.22em] text-cream-100/80 underline-offset-[6px] hover:underline"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "./Icons";

const tabs = [
  { label: "Inventory", active: false },
  { label: "Dispatch", active: false },
  { label: "Auto", active: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Atmospheric backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-sand-200"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[58%] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(232,210,178,0.7),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-6 pb-10 pt-32 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-16 lg:pt-40">
        {/* Left — headline */}
        <div className="lg:col-span-5 lg:pt-10">
          <h1 className="font-display text-[68px] font-light leading-[0.92] tracking-tightest text-espresso-900 sm:text-[88px] lg:text-[110px]">
            <span className="block">EVERY</span>
            <span className="block">HOME,</span>
            <span className="block">
              HANDLED<sup className="align-super text-[0.35em] font-normal">®</sup>
            </span>
          </h1>

          <p className="mt-8 text-[15px] tracking-[0.04em] text-espresso-800/70">
            / The AI maintenance coordinator /
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#start"
              className="group inline-flex items-center gap-2 rounded-full bg-espresso-800 px-7 py-4 text-[14px] font-medium uppercase tracking-[0.22em] text-cream-50 transition-all hover:bg-espresso-900"
            >
              Start free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#demo"
              className="text-[14px] font-medium uppercase tracking-[0.22em] text-espresso-800/80 underline-offset-[6px] hover:underline"
            >
              Watch demo
            </Link>
          </div>
        </div>

        {/* Right — feature card */}
        <div className="relative lg:col-span-7">
          <div className="relative rounded-4xl bg-cream-50 p-5 shadow-card sm:p-6">
            {/* Top row: tabs + sub-headline */}
            <div className="flex flex-col gap-4 px-2 pb-4 pt-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-3">
              <div className="flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <span
                    key={t.label}
                    className={`rounded-full px-4 py-2 text-[12px] font-medium tracking-wide ${
                      t.active
                        ? "bg-espresso-800 text-cream-50"
                        : "bg-cream-100 text-espresso-800/80"
                    }`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              <div className="max-w-[260px] sm:text-right">
                <h3 className="font-display text-[24px] font-light leading-tight text-espresso-900 sm:text-[26px]">
                  From request to resolution.
                </h3>
                <p className="mt-1 text-[13px] text-espresso-800/65">
                  One tap to confirm.
                </p>
              </div>
            </div>

            {/* House image */}
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] bg-sand-200">
              <Image
                src="/images/hero-house.png"
                alt="A modern timber home in a meadow at sunset"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              {/* Floating live-demo card, anchored inside the image */}
              <div className="absolute right-3 top-3 w-[180px] rotate-[1deg] rounded-2xl bg-cream-50 p-3 shadow-soft sm:right-5 sm:top-5 sm:w-[210px]">
                <div className="flex items-center justify-between px-1 pb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso-800/70">
                    Live demo
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                </div>
                <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-sand-200">
                  <Image
                    src="/images/demo-room.png"
                    alt="Calm bedroom interior"
                    fill
                    sizes="210px"
                    className="object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Play demo"
                    className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-clay-500/90 text-cream-50 backdrop-blur transition hover:bg-clay-500"
                  >
                    <Play className="ml-0.5 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom callout chip */}
            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-cream-100/80 px-5 py-4">
              <p className="text-[13px] leading-snug text-espresso-800/80">
                <span className="font-medium text-espresso-900">
                  &ldquo;Split unit needs new filters.&rdquo;
                </span>{" "}
                Hearth ordered the right size, scheduled the tech, updated your
                records.
              </p>
              <span className="hidden whitespace-nowrap rounded-full border border-espresso-800/15 bg-cream-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso-800/70 sm:inline">
                3m ago
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — materials card + numbers card */}
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-6 px-6 pb-12 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-20">
        <div className="relative overflow-hidden rounded-4xl bg-sand-300/80 p-7 lg:col-span-4">
          <div className="flex items-start gap-5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-sand-400/40">
              <Image
                src="/images/materials.png"
                alt="Cross-section of building materials and a furnace filter"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-display text-[22px] font-light leading-tight text-espresso-900">
                We use trusted pros.
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-espresso-800/75">
                Your saved Rolodex first. Licensed &amp; insured fallback when
                they&apos;re busy.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start justify-between gap-6 rounded-4xl bg-espresso-900 p-7 text-cream-100 lg:col-span-8 lg:flex-row lg:items-center lg:p-9">
          <div className="flex items-center gap-5">
            <div className="flex -space-x-3">
              <Avatar tone="#C7A982" />
              <Avatar tone="#A07F5B" />
              <Avatar tone="#7E5E45" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-[34px] font-light text-cream-50">
                1M<span className="text-clay-400">+</span>
              </p>
              <p className="text-[12px] uppercase tracking-[0.22em] text-cream-200/70">
                Tasks handled
              </p>
            </div>
          </div>

          <div className="lg:max-w-[440px]">
            <h4 className="font-display text-[26px] font-light leading-tight text-cream-50 sm:text-[30px]">
              AI THAT ACTUALLY <br /> DOES THE WORK.
            </h4>
            <Link
              href="#how"
              className="mt-4 inline-flex items-center gap-2 border-b border-cream-200/40 pb-0.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-cream-100 transition hover:border-cream-100"
            >
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ tone }: { tone: string }) {
  return (
    <span
      className="inline-block h-10 w-10 rounded-full border-2 border-espresso-900"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${tone}, #2A1E15)`,
      }}
    />
  );
}

import Link from "next/link";
import { Check } from "./Icons";

const tiers = [
  {
    name: "Home",
    tagline: "One primary residence.",
    price: "$149",
    cadence: "/ year",
    cta: "Start free trial",
    features: [
      "Full asset graph for one property",
      "AI assistant with supervised execution",
      "Consumable auto-ordering",
      "Recall alerts and warranty vault",
      "Insurance-ready records",
    ],
    accent: false,
  },
  {
    name: "Host & Landlord",
    tagline: "STR hosts and small landlords.",
    price: "$20",
    cadence: "/ unit / month",
    cta: "Start with 2 free units",
    features: [
      "Everything in Home, per unit",
      "Hostaway, OwnerRez, Buildium, AppFolio",
      "Contractor dispatch via Thumbtack + saved pros",
      "Turnover and tenant request workflows",
      "Per-unit P&L for tax and resale",
      "Spending caps and approval rules",
    ],
    accent: true,
  },
  {
    name: "Portfolio",
    tagline: "50+ doors or 25+ listings.",
    price: "Custom",
    cadence: "annual",
    cta: "Talk to us",
    features: [
      "Everything in Host & Landlord",
      "Dedicated onboarding crew",
      "API access and custom integrations",
      "SOC 2 documentation",
      "Volume pricing",
    ],
    accent: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-clay-500">
            Pricing
          </p>
          <h2 className="mt-5 font-display text-[44px] font-light leading-[0.98] tracking-tightest text-espresso-900 sm:text-[56px]">
            Pay for the units, <br /> not the seats.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-espresso-800/75">
            14-day free trial. No card required to build inventory. Annual
            billing saves 20%.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`flex flex-col rounded-4xl p-8 transition-all sm:p-10 ${
                t.accent
                  ? "bg-espresso-900 text-cream-100 shadow-card"
                  : "bg-cream-100 text-espresso-900"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[28px] font-light">
                  {t.name}
                </h3>
                {t.accent && (
                  <span className="rounded-full bg-clay-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50">
                    Most chosen
                  </span>
                )}
              </div>
              <p
                className={`mt-1 text-[13px] ${
                  t.accent ? "text-cream-100/70" : "text-espresso-800/70"
                }`}
              >
                {t.tagline}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="font-display text-[60px] font-light leading-none">
                  {t.price}
                </span>
                <span
                  className={`pb-2 text-[13px] ${
                    t.accent ? "text-cream-100/70" : "text-espresso-800/70"
                  }`}
                >
                  {t.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-[14px]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        t.accent ? "text-clay-400" : "text-clay-500"
                      }`}
                    />
                    <span
                      className={
                        t.accent ? "text-cream-100/85" : "text-espresso-800/85"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#start"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.22em] transition ${
                  t.accent
                    ? "bg-cream-50 text-espresso-900 hover:bg-cream-100"
                    : "bg-espresso-800 text-cream-50 hover:bg-espresso-900"
                }`}
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

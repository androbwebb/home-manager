import { Check } from "./Icons";

const blocks = [
  {
    eyebrow: "Asset graph",
    title: "Every property, every fixture.",
    points: [
      "Photo-to-inventory in seconds",
      "Manuals, warranties, and part catalogs auto-linked",
      "Paint codes, flooring SKUs, hardware finishes",
      "Searchable warranty vault with expiration alerts",
    ],
  },
  {
    eyebrow: "Agentic execution",
    title: "Orders parts. Books pros.",
    points: [
      "Auto-order consumables with one-tap confirmation",
      "Dispatch via your saved pros or licensed network",
      "Preventive maintenance tied to manufacturer specs",
      "Per-property spend caps and approval rules",
    ],
  },
  {
    eyebrow: "Records & reporting",
    title: "An honest paper trail.",
    points: [
      "Every action logged with photos and receipts",
      "Annual reports for tax, insurance, and resale",
      "Per-unit P&L for landlords and STR hosts",
      "Export anytime. Delete anytime.",
    ],
  },
];

export function Capabilities() {
  return (
    <section className="relative bg-espresso-900 py-24 text-cream-100 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-clay-400">
            What Hearth does
          </p>
          <h2 className="mt-5 font-display text-[44px] font-light leading-[0.98] tracking-tightest text-cream-50 sm:text-[60px]">
            Less coordinating. <br /> More <em className="italic">finished.</em>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-4xl bg-cream-100/10 lg:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.eyebrow}
              className="flex flex-col gap-6 bg-espresso-900 p-8 sm:p-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-clay-400">
                {b.eyebrow}
              </p>
              <h3 className="font-display text-[28px] font-light leading-tight text-cream-50 sm:text-[32px]">
                {b.title}
              </h3>
              <ul className="mt-2 space-y-3 text-[14px] text-cream-100/80">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

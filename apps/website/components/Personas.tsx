import { ArrowUpRight } from "./Icons";

const personas = [
  {
    tag: "STR hosts",
    title: "2 to 25 listings.",
    body:
      "Turnover checklists tied to your booking calendar. Guest-issue triage. Cleaner coordination. Pre-arrival inspections.",
    integrations: ["Hostaway", "OwnerRez", "Hospitable", "Lodgify"],
  },
  {
    tag: "Small landlords",
    title: "5 to 50 doors.",
    body:
      "Tenant request intake and triage. Auto-routing to contractors with property access details. Per-unit cost tracking for Schedule E.",
    integrations: ["Buildium", "RentRedi", "AppFolio", "Stessa"],
  },
  {
    tag: "Homeowners",
    title: "One home. One brain.",
    body:
      "Single-property mode for primary residences. Insurance-ready records. Recall alerts. Move-in mode imports the previous owner's docs.",
    integrations: ["Insurance", "QuickBooks", "Smart home", "Calendar"],
  },
];

export function Personas() {
  return (
    <section id="properties" className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-col items-end justify-between gap-8 lg:flex-row">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-clay-500">
              Built for
            </p>
            <h2 className="mt-5 font-display text-[44px] font-light leading-[0.98] tracking-tightest text-espresso-900 sm:text-[56px]">
              Whatever you call <br /> &ldquo;your property.&rdquo;
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-espresso-800/75">
            Hearth is one product with three workflows. Pick the one that fits;
            switch later if it changes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {personas.map((p) => (
            <article
              key={p.tag}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-cream-50 p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <span className="inline-block rounded-full bg-sand-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-espresso-800">
                  {p.tag}
                </span>
                <h3 className="mt-6 font-display text-[28px] font-light leading-tight text-espresso-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-espresso-800/75">
                  {p.body}
                </p>
              </div>

              <div className="mt-8 border-t border-espresso-900/10 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-espresso-800/50">
                  Integrates with
                </p>
                <p className="mt-2 text-[13px] text-espresso-800/85">
                  {p.integrations.join(" · ")}
                </p>
              </div>

              <ArrowUpRight className="absolute right-7 top-7 h-5 w-5 text-espresso-900/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-espresso-900" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

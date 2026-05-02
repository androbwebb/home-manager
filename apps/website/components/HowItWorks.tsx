const steps = [
  {
    n: "01",
    title: "Build the brain.",
    body: "Photograph each appliance, fixture, and finish. Hearth identifies model numbers, pulls manuals, and links replacement parts — automatically.",
  },
  {
    n: "02",
    title: "Talk to it like a person.",
    body: "“The split unit in the master bedroom needs new filters.” Hearth knows which unit, the correct size, your preferred vendor, and your spend cap.",
  },
  {
    n: "03",
    title: "It runs the boring stuff.",
    body: "Filters every 90 days. HVAC seasonal service. Gutter cleaning before the rains. Hearth schedules, orders, and confirms — you just approve.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-clay-500">
              How it works
            </p>
            <h2 className="mt-5 font-display text-[44px] font-light leading-[0.98] tracking-tightest text-espresso-900 sm:text-[56px]">
              An hour to set up. <br />
              A lifetime of <em className="font-light italic">done.</em>
            </h2>
          </div>

          <ol className="lg:col-span-8 lg:pt-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="flex flex-col gap-6 border-t border-espresso-900/10 py-8 sm:flex-row sm:gap-12 sm:py-10"
                style={i === steps.length - 1 ? { borderBottomWidth: 1, borderBottomColor: "rgba(27,19,13,0.10)" } : {}}
              >
                <div className="font-display text-[26px] font-light text-clay-500 sm:w-24">
                  {s.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-[28px] font-light leading-tight text-espresso-900 sm:text-[32px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-espresso-800/75">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

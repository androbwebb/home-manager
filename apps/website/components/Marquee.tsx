const tags = [
  "Hostaway",
  "OwnerRez",
  "Hospitable",
  "Buildium",
  "AppFolio",
  "RentRedi",
  "Stessa",
  "Thumbtack",
  "QuickBooks",
  "HomeKit",
  "Matter",
  "Google Home",
];

export function Marquee() {
  return (
    <section className="border-y border-espresso-900/10 bg-cream-50 py-10">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-12">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.28em] text-espresso-800/55">
            Plays nicely with
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px] font-medium text-espresso-800/75">
            {tags.map((t) => (
              <li key={t} className="font-display tracking-wide">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

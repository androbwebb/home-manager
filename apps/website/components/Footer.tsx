import Link from "next/link";
import { HearthMark } from "./HearthMark";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Properties", href: "#properties" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@hearth.app" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { label: "Security", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-100">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-cream-50"
              aria-label="Hearth home"
            >
              <HearthMark className="h-7 w-7" />
              <span className="font-display text-[22px] font-medium tracking-tight">
                Hearth
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-cream-100/70">
              The AI maintenance coordinator for short-term rentals, small
              landlords, and homeowners. Built in the US.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.heading} className="lg:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-400">
                {c.heading}
              </p>
              <ul className="mt-5 space-y-3 text-[14px] text-cream-100/80">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-cream-50">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream-100/10 pt-8 text-[12px] text-cream-100/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Hearth, Inc. Currently US-only.</p>
          <p>hello@hearth.app</p>
        </div>
      </div>
    </footer>
  );
}

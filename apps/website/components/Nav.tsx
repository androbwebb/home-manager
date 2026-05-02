import Link from "next/link";
import { HearthMark } from "./HearthMark";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
];

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-6 lg:px-10 lg:py-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-espresso-800"
          aria-label="Hearth home"
        >
          <HearthMark className="h-7 w-7" />
          <span className="font-display text-[22px] font-medium tracking-tight">
            Hearth
          </span>
        </Link>

        <ul className="hidden items-center gap-9 text-[14px] font-medium text-espresso-800/80 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-espresso-900"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 text-[14px] font-medium text-espresso-800/80">
          <span className="hidden sm:inline">EN</span>
          <Link
            href="#contact"
            className="border-b border-espresso-800/80 pb-0.5 uppercase tracking-[0.18em] transition-colors hover:text-espresso-900"
          >
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { MobileDrawer } from "./MobileDrawer";
import { NAV_LINKS } from "@/lib/navLinks";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-8 px-8 py-6">
      <div className="border-l-[3px] border-dark bg-cream px-6 py-4 text-2xl font-bold">
        <Link href="/#top">
          Made<em className="font-normal italic">by</em>Taino
          <sup className="text-xs align-super">™</sup>
        </Link>
      </div>
      <nav className="hidden gap-10 text-lg md:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <MobileDrawer />
    </header>
  );
}

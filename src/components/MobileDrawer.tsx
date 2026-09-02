"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/navLinks";

export function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="rounded p-2"
      >
        <span className="block h-0.5 w-6 bg-dark" />
        <span className="mt-1.5 block h-0.5 w-6 bg-dark" />
        <span className="mt-1.5 block h-0.5 w-6 bg-dark" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-cream">
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-lg">
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12 text-xl">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

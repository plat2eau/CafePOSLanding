"use client";

import { useState } from "react";
import { Button, Container } from "@/components/ui";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#for-cafes", label: "For Cafes" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-warm/98 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a
          className="flex items-center gap-3 font-heading text-lg font-extrabold text-navy"
          href="#top"
          aria-label="OrderDesk home"
        >
          <span className="grid size-9 place-items-center rounded-button bg-navy text-sm font-black text-white">
            OD
          </span>
          <span>OrderDesk</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              className="text-sm font-semibold text-muted transition hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-4 focus-visible:ring-offset-warm"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button className="hidden lg:inline-flex" href="#demo">
          Request Free Demo
        </Button>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-border bg-white text-navy shadow-sm transition hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-warm lg:hidden"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </Container>
      {isMenuOpen ? (
        <div
          className="border-t border-border bg-warm shadow-[0_18px_36px_rgba(23,40,59,0.08)] lg:hidden"
          id="mobile-navigation"
        >
          <Container className="grid gap-2 py-4">
            <Button className="w-full justify-center" href="#demo" onClick={closeMenu}>
              Request Free Demo
            </Button>
            <nav className="grid gap-1 pt-2" aria-label="Mobile primary">
              {navLinks.map((link) => (
                <a
                  className="flex min-h-11 items-center rounded-button px-3 text-sm font-semibold text-navy transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-warm"
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

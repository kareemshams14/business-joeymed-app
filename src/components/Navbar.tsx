"use client";

import { useState } from "react";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#employers", label: "For Employers" },
  { href: "#app", label: "The App" },
  { href: "#results", label: "Results" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/92 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-0.5 text-2xl font-extrabold">
          <span className="text-blue">Joey</span>
          <span className="text-text-primary">Med</span>
          <span className="text-[11px] font-semibold text-text-muted ml-2 uppercase tracking-widest">
            for Business
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-text-secondary hover:text-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all"
          >
            Get Started
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary rounded transition-all ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary rounded transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary rounded transition-all ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-50 border-t border-border px-6 pt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-lg font-medium border-b border-border text-text-secondary hover:text-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 block text-center px-7 py-4 rounded-xl font-semibold text-base"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}

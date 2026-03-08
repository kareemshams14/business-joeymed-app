"use client";

import { useState } from "react";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#clinical", label: "Clinical Protocols" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#employers", label: "For Employers" },
  { href: "#app", label: "The App" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-border/60">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8h8M8 4v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Joey<span className="text-blue">Med</span>
          </span>
          <span className="hidden sm:inline text-[10px] font-semibold text-text-muted uppercase tracking-[0.15em] ml-1 border-l border-border pl-2">
            for Business
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-[13px]"
          >
            Request Demo
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-text-primary rounded transition-all ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text-primary rounded transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text-primary rounded transition-all ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden fixed top-[68px] left-0 right-0 bottom-0 bg-white z-50 border-t border-border px-6 pt-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-[15px] font-medium border-b border-border/60 text-text-secondary hover:text-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 block text-center px-7 py-3.5 rounded-xl font-semibold text-[15px]"
          >
            Request Demo
          </a>
        </nav>
      )}
    </header>
  );
}

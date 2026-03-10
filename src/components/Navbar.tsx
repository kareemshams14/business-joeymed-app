"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/#programs", label: "Programs" },
  { href: "/#clinical", label: "What We Cover" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#employers", label: "For Employers" },
  { href: "/#plans", label: "Plans" },
  { href: "/savings-calculator", label: "Savings Calculator" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-border/60">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="JoeyMed" width={150} height={75} className="h-9 w-auto" priority />
          <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.15em] border-l border-border pl-3">
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
            href="/#contact"
            className="hidden sm:inline-flex btn-primary items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-[13px]"
          >
            Request Demo
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
            href="/#contact"
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

"use client";

import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show after scrolling past the hero (~600px)
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/60 px-4 py-3 safe-bottom">
      <div className="flex items-center gap-2.5 max-w-[500px] mx-auto">
        <a
          href="/savings-calculator"
          className="btn-secondary flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-[13px]"
        >
          <Calculator size={15} />
          Savings Calculator
        </a>
        <a
          href="/#contact"
          className="btn-primary flex-1 flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-[13px]"
        >
          Request Demo
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, FormEvent } from "react";
import { X, FileDown, Loader2, Check } from "lucide-react";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/PZ1DjXbsgVV0YgQITQYA/webhook-trigger/d4f7cc57-a0d6-4d9b-aab8-77102ba389bc";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("exit_popup_dismissed")) {
      setDismissed(true);
      return;
    }

    function onMouseLeave(e: MouseEvent) {
      // Trigger when mouse leaves toward top of viewport (exit intent)
      if (e.clientY <= 5 && !dismissed) {
        setShow(true);
      }
    }

    // Also trigger on mobile after 45 seconds if they haven't engaged
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 1024 && !dismissed) {
        setShow(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [dismissed]);

  function dismiss() {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit_popup_dismissed", "1");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      first_name: formData.get("first_name"),
      email: formData.get("email"),
      programs: "Guide Download - Exit Intent",
      message: "Downloaded 2026 Employer Guide to GLP-1 Programs",
    };

    try {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(payload)) {
        if (value != null) params.append(key, String(value));
      }

      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
        mode: "no-cors",
      });
      setSubmitted(true);
    } catch {
      // Still show success since no-cors doesn't return status
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl max-w-[440px] w-full p-8 sm:p-10 shadow-2xl border border-border animate-in">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg-alt flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
              <Check size={28} className="text-teal" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-2">Check your inbox!</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
              We&apos;ll send the guide to your email shortly. In the
              meantime, feel free to explore.
            </p>
            <button
              onClick={dismiss}
              className="btn-secondary px-6 py-2.5 rounded-xl font-semibold text-[13px]"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            <div className="w-12 h-12 rounded-2xl bg-blue/8 flex items-center justify-center mb-5">
              <FileDown size={24} className="text-blue" strokeWidth={1.5} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Before you go...
            </h3>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
              Download our free{" "}
              <strong className="text-text-primary">
                2026 Employer&apos;s Guide to GLP-1 Programs
              </strong>{" "}
              — everything you need to make the case internally.
            </p>

            <div className="bg-bg rounded-2xl p-4 mb-6 border border-border/60">
              <div className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-2">
                What&apos;s inside
              </div>
              <ul className="space-y-1.5">
                {[
                  "ROI benchmarks from real employer programs",
                  "Clinical evidence for GLP-1, TRT & HRT",
                  "Implementation checklist & timeline",
                  "Sample employee communication templates",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[13px] text-text-secondary"
                  >
                    <Check size={12} className="text-teal shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px] disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FileDown size={16} />
                    Download Free Guide
                  </>
                )}
              </button>
            </form>

            <p className="mt-3 text-[11px] text-text-muted text-center">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

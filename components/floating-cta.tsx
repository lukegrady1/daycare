"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={cn(
        "lg:hidden fixed left-3 right-3 bottom-3 z-30 transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <div className="flex gap-2 bg-cream/95 backdrop-blur shadow-card rounded-xl p-2 border border-line">
        <a
          href={SITE.phoneHref}
          className="flex-none grid place-items-center w-12 h-12 rounded-lg bg-cream-deep text-ink"
          aria-label="Call us"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
          </svg>
        </a>
        <Link
          href="/tour"
          className="flex-1 grid place-items-center rounded-lg bg-terracotta text-cream font-display text-[15px]"
        >
          Schedule a Tour
        </Link>
      </div>
    </div>
  );
}

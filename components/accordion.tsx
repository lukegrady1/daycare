"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  q: string;
  a: string;
  category?: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            >
              <span className="font-display text-lg md:text-xl text-ink group-hover:text-terracotta-deep transition">
                {it.q}
              </span>
              <span
                className={cn(
                  "flex-none w-8 h-8 rounded-full border border-line grid place-items-center text-ink-soft transition-transform",
                  isOpen && "rotate-45 border-terracotta text-terracotta"
                )}
                aria-hidden
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 2v12M2 8h12" />
                </svg>
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 overflow-hidden",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0 max-w-prose text-ink-soft leading-relaxed">
                {it.a}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

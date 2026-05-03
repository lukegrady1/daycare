"use client";

import { useMemo, useState } from "react";
import { Accordion, type AccordionItem } from "./accordion";
import { cn } from "@/lib/utils";

export type FAQ = AccordionItem & { category: string };

export function FaqList({ items }: { items: FAQ[] }) {
  const cats = useMemo(
    () => Array.from(new Set(items.map((i) => i.category))),
    [items]
  );
  const [active, setActive] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    let r = items;
    if (active !== "All") r = r.filter((i) => i.category === active);
    if (q.trim()) {
      const s = q.toLowerCase();
      r = r.filter(
        (i) => i.q.toLowerCase().includes(s) || i.a.toLowerCase().includes(s)
      );
    }
    return r;
  }, [items, active, q]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search questions…"
          className="w-full md:max-w-sm bg-cream rounded-md border border-line px-4 py-2.5 text-[15px] focus:outline-none focus:border-sage"
        />
        <div className="flex flex-wrap gap-2">
          {["All", ...cats].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "text-[13px] px-3.5 py-1.5 rounded-full border transition",
                active === c
                  ? "bg-ink text-cream border-ink"
                  : "border-line text-ink-soft hover:text-ink"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-soft py-12">No questions match. Try a different search.</p>
      ) : (
        <Accordion items={filtered} />
      )}
    </div>
  );
}

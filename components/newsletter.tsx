"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  if (done) {
    return (
      <p className="font-body text-[15px] text-sage">
        Thanks — you&rsquo;ll hear from us once a month, never more.
      </p>
    );
  }

  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-2">
        Monthly notes from our director
      </div>
      <p className="text-ink-soft text-[14px] mb-3">
        No spam, ever. One short email a month with what kids are making, building, and noticing.
      </p>
      <form onSubmit={submit} className="flex gap-2">
        <input
          type="email"
          required
          aria-label="Email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-cream rounded-md border border-line px-4 py-2.5 text-[15px] focus:outline-none focus:border-sage"
        />
        <button
          type="submit"
          className="px-4 py-2.5 rounded-md bg-ink text-cream text-[14px] font-display hover:bg-ink/90 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

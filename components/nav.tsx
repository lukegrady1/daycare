"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn, SITE } from "@/lib/utils";
import { LogoMark } from "./icons/logo";

const links = [
  { href: "/about", label: "About" },
  {
    href: "/programs",
    label: "Programs",
    children: [
      { href: "/programs/infants", label: "Infants · 6wk–12mo" },
      { href: "/programs/toddlers", label: "Toddlers · 12–24mo" },
      { href: "/programs/preschool", label: "Preschool · 2–4yr" },
      { href: "/programs/pre-k", label: "Pre-K · 4–5yr" },
    ],
  },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/a-day", label: "A Day" },
  { href: "/tuition", label: "Tuition" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_rgba(42,37,32,0.06)]"
            : "bg-cream"
        )}
      >
        <div className="container-x flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2 group">
            <LogoMark className="w-9 h-9 text-terracotta" />
            <span className="font-display text-xl tracking-tightish text-ink">
              Sunny Acres
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <div key={l.href} className="relative group">
                <Link
                  href={l.href}
                  className="font-body text-[15px] text-ink hover:text-terracotta-deep transition"
                >
                  {l.label}
                </Link>
                {l.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                    <div className="bg-cream rounded-lg shadow-card p-2 min-w-[240px] border border-line">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2.5 rounded-md text-[14px] text-ink hover:bg-cream-deep transition"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SITE.phoneHref}
              className="font-body text-[15px] text-ink-soft hover:text-ink transition"
            >
              {SITE.phone}
            </a>
            <Link
              href="/tour"
              className="font-display text-[15px] font-medium px-5 py-2.5 rounded-md bg-terracotta text-cream hover:bg-terracotta-deep transition"
            >
              Schedule a Tour
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
          >
            <span
              className={cn(
                "block w-6 h-[2px] bg-ink transition-transform duration-300",
                mobileOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[2px] bg-ink transition-opacity duration-200",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[2px] bg-ink transition-transform duration-300",
                mobileOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-30 transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-ink/20"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-cream shadow-card pt-24 px-6 pb-8 overflow-y-auto transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-1">
            {links.flatMap((l) =>
              l.children
                ? [
                    <div
                      key={l.href}
                      className="px-2 pt-3 pb-1 text-xs uppercase tracking-[0.18em] text-ink-soft"
                    >
                      {l.label}
                    </div>,
                    ...l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-2 py-3 font-body text-[16px] text-ink hover:text-terracotta-deep border-b border-line"
                      >
                        {c.label}
                      </Link>
                    )),
                  ]
                : [
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-2 py-3 font-display text-xl text-ink border-b border-line"
                    >
                      {l.label}
                    </Link>,
                  ]
            )}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/tour"
              onClick={() => setMobileOpen(false)}
              className="btn-primary justify-center"
            >
              Schedule a Tour
            </Link>
            <a
              href={SITE.phoneHref}
              className="text-center font-body text-ink-soft py-2"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

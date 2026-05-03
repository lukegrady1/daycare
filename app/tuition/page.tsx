import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/programs";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { CheckTiny } from "@/components/icons/decorative";

export const metadata: Metadata = {
  title: "Tuition",
  description:
    "Tuition, plainly. Weekly rates by program, what's included, and what financial assistance is available.",
};

const includes = [
  "All meals & snacks (breakfast, lunch, AM/PM snack)",
  "Diapers, wipes, and sunscreen (infants & toddlers)",
  "All art supplies, books, and learning materials",
  "Outdoor gear loan: rain pants, snow boots",
  "Daily photo updates & quarterly portfolio",
  "Parent-teacher conferences (twice yearly)",
  "Field trips & special programming",
  "Closed days are paid (we run a real calendar)",
];

const notIncluded = [
  "Optional Friday-only enrichment ($85)",
  "After-hours care past 5:30 ($25/hr)",
  "Annual supply fee ($150 — billed in August)",
  "Birthday cake (kids make it; cost negligible)",
];

export default function TuitionPage() {
  return (
    <>
      <PageHero
        eyebrow="Tuition · 2026 rates"
        title="Tuition, plainly."
        sub="Most daycares hide their pricing. We don't. Here's what it costs, what's included, and what financial help is available."
      />

      <section className="container-x">
        <FadeIn>
          <div className="overflow-x-auto rounded-2xl border border-line bg-cream shadow-soft">
            <table className="min-w-full text-left">
              <thead className="bg-cream-deep">
                <tr>
                  {["Program", "Ages", "Ratio", "Weekly", "Monthly"].map((h) => (
                    <th key={h} className="px-5 py-4 text-[12px] uppercase tracking-[0.18em] text-ink-soft font-body">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.slug} className="border-t border-line">
                    <td className="px-5 py-5 font-display text-lg">
                      <Link href={`/programs/${p.slug}`} className="hover:text-terracotta-deep">
                        {p.name}
                      </Link>
                    </td>
                    <td className="px-5 py-5 text-ink-soft">{p.age}</td>
                    <td className="px-5 py-5 text-ink-soft">{p.ratio}</td>
                    <td className="px-5 py-5 font-display text-lg">${p.weekly}</td>
                    <td className="px-5 py-5 text-ink-soft">${(p.weekly * 4.33).toFixed(0)} avg.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-ink-soft">
            Billed monthly via ACH. Tuition is the same whether your child attends 4 or 5 days a week — full-time only.
          </p>
        </FadeIn>
      </section>

      <section className="section-pad">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="bg-cream-deep rounded-2xl p-8 border border-line/60 h-full">
              <h2 className="font-display text-2xl md:text-3xl tracking-tightish">What&rsquo;s included</h2>
              <ul className="mt-5 space-y-3">
                {includes.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-soft">
                    <CheckTiny className="w-4 h-4 mt-1.5 text-sage flex-none" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="bg-cream rounded-2xl p-8 border border-line h-full">
              <h2 className="font-display text-2xl md:text-3xl tracking-tightish">What&rsquo;s extra</h2>
              <ul className="mt-5 space-y-3">
                {notIncluded.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-soft">
                    <span className="w-4 h-4 mt-1.5 text-terracotta flex-none">+</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { title: "Sibling discount", body: "10% off the lower-tuition child's rate, every month they overlap with us." },
            { title: "State subsidies (NC)", body: "We accept NC Subsidized Child Care vouchers. Our enrollment director will help with paperwork." },
            { title: "Need-based scholarships", body: "We reserve 8% of seats for families on partial scholarship. Funded by community donors and a sliding scale." },
          ].map((c) => (
            <FadeIn key={c.title}>
              <div className="bg-cream-deep rounded-2xl p-7 border border-line/60 h-full">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-3 text-ink-soft text-[15px] leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Have a tuition question?"
        sub="The tour includes a 10-minute sit-down with our enrollment director — bring your spreadsheet."
      />
    </>
  );
}

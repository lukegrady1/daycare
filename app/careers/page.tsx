import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at Sunny Acres. Above-market wages, real prep time, real benefits.",
};

const roles = [
  { title: "Lead Infant Teacher", type: "Full-time · Salaried" },
  { title: "Toddler Co-Lead", type: "Full-time · Salaried" },
  { title: "Studio (Atelier) Assistant", type: "Part-time · Hourly" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Come teach with us."
        sub="Above-market wages. Real prep time. Real health benefits. A team that's been here an average of 6.4 years for a reason."
      />
      <section className="container-x">
        <ul className="grid md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <li key={r.title} className="bg-cream-deep rounded-2xl p-7 border border-line/60">
              <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">{r.type}</div>
              <h3 className="mt-2 font-display text-2xl">{r.title}</h3>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-terracotta-deep font-medium">
                Apply <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-20"><CtaBand heading="Curious but not ready to apply?" sub="Come tour the school and see the team in action. Often the best way to know." /></div>
    </>
  );
}

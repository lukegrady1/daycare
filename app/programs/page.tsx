import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/programs";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Four programs for ages 6 weeks through 5 years — infants, toddlers, preschool, and Pre-K. One philosophy throughout.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs · 6 weeks – 5 years"
        title="Four programs. One philosophy."
        sub="Each room runs on the same principles — small ratios, real outdoors, project-based learning — adapted to where your child is right now."
      />

      <section className="container-x">
        <ul className="grid sm:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <FadeIn as="li" key={p.slug} delay={i * 0.06}>
              <Link
                href={`/programs/${p.slug}`}
                className="group block bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow border border-line/60 h-full"
              >
                <div className="grid sm:grid-cols-5">
                  <div className="sm:col-span-2 relative">
                    <Photo
                      hue={p.hue}
                      className="aspect-[4/5] sm:aspect-auto sm:h-full transition-transform duration-700 group-hover:scale-[1.04]"
                      label={`${p.name} program`}
                    />
                  </div>
                  <div className="sm:col-span-3 p-7 md:p-9">
                    <div className="text-[12px] uppercase tracking-[0.18em] text-ink-soft">
                      {p.age} · ratio {p.ratio}
                    </div>
                    <h2 className="mt-2 font-display text-3xl md:text-[2rem] tracking-tightish leading-tight">
                      {p.name}
                    </h2>
                    <p className="mt-3 text-ink-soft leading-relaxed">
                      {p.tagline}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-1 text-terracotta-deep font-medium">
                      Learn more <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 max-w-2xl">
              How they compare, side by side.
            </h2>
          </FadeIn>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-cream shadow-soft">
            <table className="min-w-full text-left">
              <thead className="bg-cream-deep">
                <tr>
                  {["Program", "Ages", "Ratio", "Hours", "Tuition", "What's included"].map((h) => (
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
                    <td className="px-5 py-5 text-ink-soft">{p.hours}</td>
                    <td className="px-5 py-5 text-ink-soft">${p.weekly}/wk</td>
                    <td className="px-5 py-5 text-ink-soft text-[14px]">
                      Meals, snacks, supplies, diapers (infants only)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not sure which fits?"
        sub="On the tour we'll walk every classroom and help you place your child in the room they'll thrive in."
      />
    </>
  );
}

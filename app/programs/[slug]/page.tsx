import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { programs, getProgram, type ProgramSlug } from "@/lib/programs";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { Accordion } from "@/components/accordion";

const SLUGS: ProgramSlug[] = ["infants", "toddlers", "preschool", "pre-k"];

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!SLUGS.includes(params.slug as ProgramSlug)) return {};
  const p = getProgram(params.slug as ProgramSlug);
  return {
    title: `${p.name} · ${p.age}`,
    description: p.tagline,
  };
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  if (!SLUGS.includes(params.slug as ProgramSlug)) notFound();
  const p = getProgram(params.slug as ProgramSlug);
  const idx = programs.findIndex((x) => x.slug === p.slug);
  const next = programs[(idx + 1) % programs.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-16 pb-16">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="eyebrow mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
                {p.age} · ratio {p.ratio}
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="font-display text-[2.75rem] md:text-[4.25rem] leading-[1.02] tracking-tighter2">
                {p.name}: {p.age}.
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-6 text-ink-soft text-lg md:text-xl max-w-2xl leading-relaxed">
                {p.intro}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/tour" className="btn-primary">Schedule a Tour</Link>
                <Link href="/tuition" className="btn-ghost">
                  See full tuition <span aria-hidden>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <Photo hue={p.hue} className="aspect-[4/5] shadow-card" label={`${p.name} classroom`} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Daily rhythm */}
      <section className="bg-cream-deep section-pad">
        <div className="container-x">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 max-w-2xl">
              What a day looks like.
            </h2>
          </FadeIn>
          <ol className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-6">
            {p.rhythm.map((r, i) => (
              <FadeIn as="li" key={r.time} delay={i * 0.04}>
                <div className="flex items-baseline gap-5 border-b border-line/70 pb-4">
                  <div className="font-accent text-3xl text-terracotta-deep w-20 shrink-0">{r.time}</div>
                  <div className="text-ink-soft">{r.activity}</div>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section-pad">
        <div className="container-x">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 max-w-2xl">
              What we focus on.
            </h2>
          </FadeIn>
          <ul className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.focus.map((f, i) => (
              <FadeIn as="li" key={f.area} delay={i * 0.05}>
                <div className="bg-cream-deep rounded-xl p-7 border border-line/60 h-full">
                  <h3 className="font-display text-xl">{f.area}</h3>
                  <p className="mt-3 text-ink-soft text-[15px] leading-relaxed">{f.body}</p>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Weekly rhythm */}
      <section className="bg-cream-deep section-pad">
        <div className="container-x">
          <FadeIn>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <h2 className="font-display text-4xl md:text-5xl tracking-tighter2">
                Sample weekly rhythm.
              </h2>
              <p className="text-ink-soft max-w-md">
                Days have anchors — the rest is shaped by the kids' interests that week.
              </p>
            </div>
          </FadeIn>
          <ol className="grid md:grid-cols-5 gap-4">
            {p.weeklyRhythm.map((w, i) => (
              <FadeIn as="li" key={w.day} delay={i * 0.05}>
                <div className="bg-cream rounded-xl p-6 border border-line/60 h-full">
                  <div className="font-display text-2xl text-terracotta-deep">{w.day}</div>
                  <p className="mt-3 text-ink-soft text-[15px] leading-relaxed">{w.theme}</p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Teachers */}
      <section className="section-pad">
        <div className="container-x">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 max-w-2xl">
              Meet the lead teachers.
            </h2>
          </FadeIn>
          <ul className="mt-10 grid md:grid-cols-2 gap-6">
            {p.teachers.map((t, i) => (
              <FadeIn as="li" key={t.name} delay={i * 0.06}>
                <div className="grid grid-cols-5 gap-5 bg-cream-deep rounded-2xl p-6 border border-line/60">
                  <Photo hue={p.hue} className="col-span-2 aspect-[4/5]" label={t.name} />
                  <div className="col-span-3">
                    <h3 className="font-display text-2xl">{t.name}</h3>
                    <p className="text-ink-soft text-[14px]">{t.role}</p>
                    <p className="mt-3 text-[13px] text-ink-soft">
                      {t.years} years on team · {t.cred}
                    </p>
                    <p className="mt-4 italic text-ink leading-relaxed">&ldquo;{t.blurb}&rdquo;</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Tuition + FAQs */}
      <section className="bg-cream-deep section-pad">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="bg-cream rounded-2xl p-8 border border-line/60 sticky top-24">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-3">
                  Tuition
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-ink">${p.weekly}</span>
                  <span className="text-ink-soft">/ week</span>
                </div>
                <p className="mt-4 text-ink-soft">
                  Includes meals, snacks, all supplies{p.slug === "infants" ? ", and diapers/wipes" : ""}.
                  Sibling discount: 10%. Financial assistance available.
                </p>
                <Link href="/tuition" className="btn-ghost mt-5 inline-flex">
                  See full pricing <span aria-hidden>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl tracking-tighter2">
                Common questions.
              </h2>
            </FadeIn>
            <div className="mt-8">
              <Accordion items={p.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Next program */}
      <section className="section-pad">
        <div className="container-x">
          <Link
            href={`/programs/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-line p-8 md:p-10 hover:border-terracotta transition"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">Next program</div>
              <h3 className="font-display text-3xl md:text-4xl mt-2 tracking-tightish">
                {next.name} <span className="text-ink-soft">· {next.age}</span>
              </h3>
            </div>
            <span className="font-display text-3xl text-terracotta transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

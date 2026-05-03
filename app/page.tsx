import Link from "next/link";
import { SITE } from "@/lib/utils";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { Acorn, Sun, PaperBoat, ScribbleUnderline, ScribbleArrow, VerticalLine, CheckTiny } from "@/components/icons/decorative";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUsTriad />
      <DayInLifeTeaser />
      <ProgramsGrid />
      <Testimonial />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-12 md:pt-16 pb-20 md:pb-28">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left: type column */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <FadeIn>
            <div className="eyebrow">
              <span className="w-2 h-2 rounded-full bg-terracotta inline-block animate-pulse" />
              Now enrolling for Fall 2026
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="mt-5 font-display font-medium leading-[0.98] tracking-tighter2 text-[clamp(2.5rem,6.5vw,5.5rem)]">
              Where{" "}
              <span className="relative inline-block">
                curious
                <span className="absolute -bottom-2 left-0 right-0 text-sage" aria-hidden>
                  <ScribbleUnderline className="w-full h-3" />
                </span>
              </span>{" "}
              kids become brave learners.
            </h1>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-7 text-ink-soft text-lg md:text-xl max-w-[34ch] leading-snug">
              A licensed early learning center in {SITE.city} for ages 6 weeks through 5 years.
              Reggio-inspired curriculum, real outdoor classrooms, and teachers who actually
              know your child&rsquo;s name.
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/tour" className="btn-primary">
                Schedule a Tour
              </Link>
              <Link href="/programs" className="btn-ghost text-[1.0625rem]">
                View Programs <span aria-hidden>→</span>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-ink-soft">
              {[
                `Licensed by ${SITE.state} DCDEE`,
                "NAEYC Accredited",
                `${SITE.google.rating}★ on Google (${SITE.google.count})`,
                `${new Date().getFullYear() - SITE.founded} years in ${SITE.city}`,
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckTiny className="w-4 h-4 text-sage" />
                  {t}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Right: image column */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <FadeIn delay={0.1}>
            <div className="relative aspect-[16/19] max-w-[460px] mx-auto">
              {/* butter blob behind */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10"
                style={{
                  background:
                    "radial-gradient(60% 60% at 60% 40%, rgba(240,198,116,0.55), transparent 70%)",
                }}
              />
              {/* main photo */}
              <Photo
                hue="warm"
                rotate={2.5}
                className="absolute inset-0 shadow-card"
                label="Child painting at a low wooden table"
              />
              {/* polaroid */}
              <div
                className="absolute -bottom-10 -left-6 md:-left-10 w-44 md:w-52 bg-white p-2 pb-12 rounded-[3px] shadow-polaroid"
                style={{ transform: "rotate(-7deg)" }}
              >
                <Photo
                  hue="sage"
                  className="aspect-[4/5]"
                  label="A candid moment in the garden"
                />
                <p className="absolute bottom-2 left-0 right-0 text-center font-accent text-xl text-ink-soft">
                  Tuesday — paint day
                </p>
              </div>
              {/* scribble note */}
              <div
                className="hidden md:flex absolute -right-6 top-6 items-end gap-1 text-ink-soft"
                style={{ transform: "rotate(8deg)" }}
              >
                <span className="font-accent text-2xl">look how focused</span>
                <ScribbleArrow className="w-12 h-10 text-ink-soft -translate-y-1" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* scroll affordance */}
      <div className="hidden lg:flex flex-col items-center gap-2 absolute bottom-2 left-1/2 -translate-x-1/2 text-ink-soft">
        <span className="text-[12px] uppercase tracking-[0.18em]">Take the tour</span>
        <VerticalLine className="w-[1px] h-12 text-sage animate-pulse" />
      </div>
    </section>
  );
}

const triad = [
  {
    icon: Acorn,
    title: "Small ratios.",
    body: "4:1 in infant rooms. 6:1 in toddler. 10:1 in preschool. We don't stretch the limits — we beat them.",
  },
  {
    icon: Sun,
    title: "Real outdoors.",
    body: "A 1/3-acre nature playscape with a mud kitchen, garden beds, and a chicken coop the kids help tend.",
  },
  {
    icon: PaperBoat,
    title: "Teachers who stay.",
    body: "Average tenure on our team: 6.4 years. Your child won't get a new teacher every quarter.",
  },
];

function WhyUsTriad() {
  return (
    <section className="bg-cream-deep section-pad">
      <div className="container-x">
        <FadeIn>
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
              Why parents choose us
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 leading-[1.05]">
              Three things we won&rsquo;t budge on.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {triad.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full bg-cream rounded-2xl p-10 md:p-12 shadow-soft hover:-translate-y-0.5 transition-transform duration-300 border border-line/60">
                <item.icon className="w-12 h-12 text-terracotta" />
                <h3 className="mt-6 font-display text-2xl md:text-[1.6rem] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const dayMoments: { time: string; caption: string; hue: "warm" | "sage" | "butter" | "sky" | "deep" }[] = [
  { time: "7:30", caption: "arrival snuggles", hue: "warm" },
  { time: "9:00", caption: "circle time", hue: "butter" },
  { time: "10:15", caption: "outside, all weather", hue: "sage" },
  { time: "12:00", caption: "family-style lunch", hue: "deep" },
  { time: "1:00", caption: "rest, real beds", hue: "sky" },
  { time: "3:30", caption: "studio time", hue: "warm" },
];

function DayInLifeTeaser() {
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-butter inline-block" />
                A day in the life
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 leading-[1.05] max-w-2xl">
                7 AM to 5:30 PM, in six small windows.
              </h2>
            </div>
            <Link href="/a-day" className="btn-ghost text-[1.0625rem] hidden md:inline-flex">
              See a full day <span aria-hidden>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* horizontal strip on desktop, vertical stack on mobile */}
      <div className="container-x">
        <div className="-mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 overflow-x-auto pb-4">
          <ul className="flex md:flex-row flex-col gap-5 md:min-w-[1100px]">
            {dayMoments.map((m, i) => (
              <FadeIn as="li" key={m.time} delay={i * 0.05} className="flex-1">
                <div className="relative">
                  <Photo
                    hue={m.hue}
                    className="aspect-[3/4] md:aspect-[4/5] w-full"
                    label={`${m.time} ${m.caption}`}
                    rotate={i % 2 === 0 ? -1 : 1}
                  />
                  <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur px-2.5 py-1 rounded font-accent text-xl text-ink shadow-soft">
                    {m.time} — {m.caption}
                  </div>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/a-day" className="btn-ghost">
            See a full day <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const programs = [
  {
    href: "/programs/infants",
    name: "Infants",
    age: "6 weeks – 12 months",
    line: "Calm, attached, and full of soft places to land.",
    hue: "warm" as const,
  },
  {
    href: "/programs/toddlers",
    name: "Toddlers",
    age: "12 – 24 months",
    line: "Big feelings, small bodies. We meet both.",
    hue: "butter" as const,
  },
  {
    href: "/programs/preschool",
    name: "Preschool",
    age: "2 – 4 years",
    line: "Project-based days, mud-pie afternoons.",
    hue: "sage" as const,
  },
  {
    href: "/programs/pre-k",
    name: "Pre-K",
    age: "4 – 5 years",
    line: "Reading, writing, and confident kindergarteners.",
    hue: "sky" as const,
  },
];

function ProgramsGrid() {
  return (
    <section className="bg-cream-deep section-pad">
      <div className="container-x">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
              Programs
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 leading-[1.05]">
              Four programs. One philosophy.
            </h2>
          </div>
        </FadeIn>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <FadeIn as="li" key={p.href} delay={i * 0.06}>
              <Link
                href={p.href}
                className="group block bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow border border-line/60 h-full"
              >
                <div className="relative overflow-hidden">
                  <Photo
                    hue={p.hue}
                    className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.04]"
                    label={`${p.name} program`}
                  />
                </div>
                <div className="p-6">
                  <div className="text-[12px] uppercase tracking-[0.18em] text-ink-soft">
                    {p.age}
                  </div>
                  <h3 className="mt-2 font-display text-2xl tracking-tightish">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">
                    {p.line}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-terracotta-deep font-medium text-[15px]">
                    Learn more <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-cream-deep section-pad relative overflow-hidden">
      <div className="container-x">
        <FadeIn>
          <figure className="max-w-4xl mx-auto text-center relative">
            <span
              aria-hidden
              className="absolute -top-12 left-0 right-0 mx-auto font-display text-terracotta text-[8rem] leading-none select-none"
            >
              &ldquo;
            </span>
            <blockquote className="font-display italic text-2xl md:text-[1.85rem] leading-[1.35] tracking-tightish text-ink relative">
              The first week, Theo&rsquo;s teacher texted us a photo of him grinning at the chickens.
              The second week, she knew his nap quirks better than we did. Three years in, this place
              isn&rsquo;t our daycare — it&rsquo;s our village.
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <Photo hue="sage" className="w-14 h-14 rounded-full" label="Parent portrait" />
              <div className="text-left">
                <div className="font-display text-lg">Maya R.</div>
                <div className="text-ink-soft text-[14px]">
                  Mom of Theo, age 3 — with us since 2023
                </div>
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}

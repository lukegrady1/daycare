import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Newsletter } from "@/components/newsletter";

export const metadata: Metadata = {
  title: "Notes from the floor",
  description:
    "Essays, project journals, and parent resources from the teachers and director at Sunny Acres.",
};

const featured = {
  category: "Inside Our Classrooms",
  title: "Three weeks on a worm: what a long project actually looks like.",
  blurb:
    "On a damp Tuesday in March, a four-year-old named Lila found a worm under the front porch. By Friday the whole class had a research question. Here's what happened next.",
  author: "Jenna Okafor · Lead, Preschool",
  date: "April 2, 2026",
  hue: "sage" as const,
};

const posts = [
  { category: "For Parents", title: "The 4 PM crash: why your kid melts down right at pickup.", blurb: "It isn't your fault. Here's what's happening in their brain — and what helps in the car ride home.", hue: "warm" as const },
  { category: "Child Development", title: "Why we don't do sticker charts.", blurb: "External motivation crowds out the internal kind. Twelve years of practice is enough to commit.", hue: "butter" as const },
  { category: "Inside Our Classrooms", title: "How to read a child's drawing without flattening it.", blurb: "Adults reach for 'wow!' We reach for the conversation underneath.", hue: "sky" as const },
  { category: "News", title: "We're hiring two infant teachers.", blurb: "Above-market wages, real prep time, real benefits. Apply if you've ever been told you 'just love kids.'", hue: "deep" as const },
  { category: "For Parents", title: "What we wish parents asked on tour.", blurb: "The tour is yours. Here are the questions that actually tell you something.", hue: "warm" as const },
  { category: "Child Development", title: "Outside in any weather: why we mean it.", blurb: "Cold isn't dangerous. Boredom is. The science behind our outdoor philosophy.", hue: "sage" as const },
];

const categories = ["All", "For Parents", "Inside Our Classrooms", "Child Development", "News"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Notes from the floor"
        title="Essays, project journals, and parent resources."
        sub="Written by our teachers and director. One a week, sometimes two. Always specific, always honest."
      />

      <section className="container-x">
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`text-[13px] px-3.5 py-1.5 rounded-full border transition ${i === 0 ? "bg-ink text-cream border-ink" : "border-line text-ink-soft hover:text-ink"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured */}
        <FadeIn>
          <Link
            href="#"
            className="group grid lg:grid-cols-12 gap-8 mb-16 bg-cream-deep border border-line rounded-2xl overflow-hidden hover:shadow-card transition-shadow"
          >
            <div className="lg:col-span-7">
              <Photo hue={featured.hue} className="aspect-[4/3] lg:aspect-[5/4] transition-transform duration-700 group-hover:scale-[1.02]" label={featured.title} />
            </div>
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">{featured.category} · Featured</div>
              <h2 className="mt-3 font-display text-3xl md:text-[2.25rem] tracking-tighter2 leading-[1.1]">
                {featured.title}
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">{featured.blurb}</p>
              <div className="mt-5 text-[13px] text-ink-soft">{featured.author} · {featured.date}</div>
              <div className="mt-5 inline-flex items-center gap-1 text-terracotta-deep font-medium">
                Read the journal <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        </FadeIn>

        {/* Grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeIn as="li" key={p.title} delay={i * 0.05}>
              <Link href="#" className="group block bg-cream rounded-2xl overflow-hidden border border-line/60 shadow-soft hover:shadow-card transition-shadow h-full">
                <Photo hue={p.hue} className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.04]" label={p.title} />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">{p.category}</div>
                  <h3 className="mt-2 font-display text-xl tracking-tightish leading-snug">{p.title}</h3>
                  <p className="mt-3 text-ink-soft text-[15px] leading-relaxed">{p.blurb}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </ul>

        <div className="mt-16 bg-cream-deep border border-line rounded-2xl p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl tracking-tightish">Get the monthly note.</h2>
            <p className="mt-2 text-ink-soft">One short email a month. What kids are making, building, and noticing — and what we&rsquo;re learning from them.</p>
          </div>
          <Newsletter />
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}

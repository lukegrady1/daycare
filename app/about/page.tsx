import type { Metadata } from "next";
import { SITE } from "@/lib/utils";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story behind ${SITE.longName} — why we started, what we believe, and the accreditations that hold us to it.`,
};

const milestones = [
  { year: 2013, label: "Started in a converted bungalow with eight families." },
  { year: 2016, label: "Opened the toddler annex and the first garden beds." },
  { year: 2019, label: "Earned NAEYC accreditation on first review." },
  { year: 2021, label: "Built the outdoor classroom — kitchen, coop, climbing hill." },
  { year: 2024, label: "Added Pre-K. First class graduated to local kindergartens." },
];

const values = [
  {
    title: "We answer the question your kid is actually asking.",
    body: "Toddlers don't ask 'why is the sky blue?' as a science question — they're checking if you'll listen. We listen first, then teach.",
  },
  {
    title: "Outside is a curriculum, not a recess.",
    body: "Cold? Coats. Wet? Boots. Snow? Sleds. The only weather we won't go out in is lightning. Children learn from the world by being in it.",
  },
  {
    title: "Parents are the experts on their kids.",
    body: "You know your child better than we do — full stop. We teach them; you raise them. Our job is to make those two things rhyme.",
  },
  {
    title: "Pay teachers like the professionals they are.",
    body: "Above-market wages, paid prep time, real benefits. It's why our team stays an average of 6.4 years instead of leaving in eight months.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 md:pt-20 pb-12">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="eyebrow mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
                About Sunny Acres
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="font-display text-[2.5rem] md:text-[4.25rem] leading-[1.02] tracking-tighter2">
                We started this place because we couldn&rsquo;t find it ourselves.
              </h1>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <Photo hue="warm" className="aspect-[4/5] shadow-card" label="Director with kids in the studio" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <article className="prose-warm">
              <p className="font-display italic text-2xl md:text-[1.6rem] leading-[1.35] text-ink mb-10">
                The first daycare we toured had a TV in the toddler room. The second had three minutes of outdoor time penciled in. We left the third one in tears. So we built this one.
              </p>
              <p>
                Sunny Acres opened in {SITE.founded} in a converted craftsman bungalow on Hillside Lane, with one classroom, a sandbox we built ourselves, and a waiting list that filled inside a month. We weren&rsquo;t trying to start a business — we were trying to find a place we&rsquo;d trust with our own kids.
              </p>
              <p>
                Twelve years later, we&rsquo;ve grown to four classrooms and a real outdoor campus, but the philosophy has not changed. Small ratios. Long teacher tenures. Daily outdoor time in any weather short of lightning. Real food, served family-style. A studio with real materials, not plastic substitutes. And the radical idea that a daycare can be transparent about what it costs, what it teaches, and how it treats its staff.
              </p>
              <h2>Who&rsquo;s here</h2>
              <p>
                I&rsquo;m Anna Pellegrino, the founder and director. I have a master&rsquo;s in early childhood education from UNC, ten years of classroom experience before this, and three kids of my own who all came up through Sunny Acres. I&rsquo;m on the floor most mornings — you&rsquo;ll meet me on your tour.
              </p>
              <p>
                Our team of eighteen includes lead teachers with bachelor&rsquo;s or master&rsquo;s in ECE, two registered nurses on call, a full-time chef who plans menus around what&rsquo;s in the garden, and a part-time art studio teacher who used to run a gallery in Asheville before she had her own kids and never looked back.
              </p>
            </article>
          </div>

          <aside className="lg:col-span-5">
            <FadeIn>
              <div className="bg-cream-deep rounded-2xl p-8 border border-line sticky top-24">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
                  By the numbers
                </div>
                <ul className="space-y-5">
                  {[
                    ["12", `years in ${SITE.city}`],
                    ["6.4", "avg. teacher tenure"],
                    ["100%", "ECE-credentialed leads"],
                    ["1/3 ac.", "outdoor campus"],
                    ["4.9★", `Google (${SITE.google.count} reviews)`],
                  ].map(([n, l]) => (
                    <li key={l} className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-3 last:border-0">
                      <span className="font-display text-3xl text-terracotta-deep">{n}</span>
                      <span className="text-ink-soft text-[14px] text-right">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      <section className="bg-cream-deep section-pad">
        <div className="container-x">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter2 max-w-2xl">
              How we got here.
            </h2>
          </FadeIn>
          <ol className="mt-10 grid md:grid-cols-5 gap-6">
            {milestones.map((m, i) => (
              <FadeIn as="li" key={m.year} delay={i * 0.06}>
                <div className="bg-cream rounded-xl p-6 border border-line/60 h-full">
                  <div className="font-display text-3xl text-terracotta">{m.year}</div>
                  <p className="mt-3 text-ink-soft text-[15px] leading-relaxed">{m.label}</p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="eyebrow mb-3"><span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />What we believe</div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tighter2">
                Four values. Picky on purpose.
              </h2>
              <p className="mt-5 text-ink-soft text-lg">
                You won&rsquo;t see &ldquo;we love kids&rdquo; on this list. Of course we do. These are the four we&rsquo;ll actually fight for.
              </p>
            </div>
          </FadeIn>

          <ul className="mt-12 grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn as="li" key={v.title} delay={i * 0.06}>
                <div className="bg-cream-deep rounded-2xl p-8 border border-line/60 h-full">
                  <div className="font-display text-3xl text-terracotta-deep">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-2xl leading-tight">{v.title}</h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <FadeIn>
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl tracking-tighter2">
                  Accreditations & licenses.
                </h2>
                <p className="mt-5 text-ink-soft text-lg max-w-md">
                  We hold ourselves to the strictest standards in early childhood education — and renew them on schedule, not when prompted.
                </p>
              </div>
              <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["NAEYC", "5-Star NC", "DCDEE", "USDA CACFP", "First Aid / CPR", "Lead-Free Cert."].map((a) => (
                  <div key={a} className="aspect-[5/3] bg-cream-deep rounded-lg border border-line grid place-items-center font-display text-lg text-ink-soft">
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand
        heading="See the place behind the story."
        sub="Tours are 45 minutes, every Tues and Thurs at 10 AM. We'll walk every classroom and meet every teacher."
      />
    </>
  );
}

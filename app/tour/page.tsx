import type { Metadata } from "next";
import { TourForm } from "@/components/tour-form";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CheckTiny } from "@/components/icons/decorative";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Schedule a Tour",
  description:
    "Tour Sunny Acres in person — 45 minutes, every classroom, every teacher, every question answered.",
};

const expect = [
  "A walk through every classroom",
  "Time with the lead teacher of your child's age group",
  "A visit to the outdoor campus and studio",
  "A 10-minute sit-down with our enrollment director",
  "Honest answers about waitlists and start dates",
];

export default function TourPage() {
  return (
    <>
      <section className="pt-12 md:pt-16 pb-10">
        <div className="container-x max-w-3xl">
          <FadeIn>
            <div className="eyebrow mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
              Tours · 45 minutes · Tues & Thurs
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="font-display text-[2.75rem] md:text-[4.25rem] leading-[1.02] tracking-tighter2">
              Come visit. We&rsquo;ll show you everything.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-6 text-ink-soft text-lg md:text-xl max-w-2xl">
              Tours are 45 minutes. We&rsquo;ll walk every classroom, meet teachers, and answer the questions you didn&rsquo;t know you had.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <TourForm />
            <div className="mt-8 bg-cream-deep border border-line rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-2">
                Or pick a slot directly
              </div>
              <p className="text-ink-soft text-[15px]">
                If you&rsquo;d rather skip the form, our Calendly is at{" "}
                <a className="underline hover:text-terracotta-deep" href="https://calendly.com/sunnyacres/tour">calendly.com/sunnyacres/tour</a>.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <div className="sticky top-24 space-y-6">
                <div className="bg-cream rounded-2xl border border-line p-7">
                  <h2 className="font-display text-2xl tracking-tightish">What to expect</h2>
                  <ul className="mt-5 space-y-3">
                    {expect.map((e) => (
                      <li key={e} className="flex items-start gap-3 text-ink-soft">
                        <CheckTiny className="w-4 h-4 mt-1.5 text-sage flex-none" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Photo hue="warm" className="aspect-[4/3] shadow-card" label="A morning tour with parents" />
                <Photo hue="sage" className="aspect-[4/3] shadow-card" label="Outdoor classroom" />
                <div className="bg-cream-deep rounded-2xl p-6 border border-line">
                  <div className="font-display text-xl">Prefer a phone call?</div>
                  <p className="mt-2 text-ink-soft text-[15px]">
                    Call <a className="underline hover:text-terracotta-deep" href={SITE.phoneHref}>{SITE.phone}</a>. Anna or Marisol will pick up directly between 9 and 4.
                  </p>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}

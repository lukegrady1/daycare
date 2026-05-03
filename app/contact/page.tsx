import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach Sunny Acres in ${SITE.city}, ${SITE.state}. Phone, email, address, and hours.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello."
        sub="For tours, please use the tour booking page — it's the fastest way to lock in a time. For everything else, this form lands in our director's inbox."
      />

      <section className="container-x">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <FadeIn>
              <ContactForm />
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="mt-10 bg-cream-deep rounded-2xl border border-line p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div>
                  <div className="font-display text-xl">Looking to tour?</div>
                  <div className="text-ink-soft text-[15px]">Use the dedicated tour booking page.</div>
                </div>
                <Link href="/tour" className="btn-primary !px-5 !py-2.5 text-[14px]">Schedule a Tour</Link>
              </div>
            </FadeIn>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <FadeIn>
              <div className="bg-cream rounded-2xl border border-line p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">Reach us</div>
                <address className="not-italic space-y-2">
                  <div className="font-display text-xl">{SITE.longName}</div>
                  <div className="text-ink-soft">{SITE.address}</div>
                  <div className="pt-2">
                    <a href={SITE.phoneHref} className="hover:text-terracotta-deep">{SITE.phone}</a>
                  </div>
                  <div>
                    <a href={`mailto:${SITE.email}`} className="hover:text-terracotta-deep">{SITE.email}</a>
                  </div>
                </address>
                <div className="mt-5 pt-5 border-t border-line">
                  <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-2">Hours</div>
                  <div className="text-ink-soft">{SITE.hours}</div>
                  <div className="text-ink-soft">Closed weekends & federal holidays</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="rounded-2xl border border-line overflow-hidden bg-cream-deep aspect-[4/3] relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #E5DDC8 0 1px, transparent 1px 24px), radial-gradient(circle at 35% 55%, #C8D2B4 0%, #F2EBDD 70%)",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center text-center px-6">
                  <div>
                    <div className="font-accent text-3xl text-ink-soft">our place</div>
                    <p className="mt-2 text-ink-soft text-[14px] max-w-xs">
                      Map embed renders here in production.
                      <br />
                      Plenty of street parking — driveway is for staff.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-cream-deep rounded-2xl border border-line p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-3">Directions & parking</div>
                <p className="text-ink-soft leading-relaxed text-[15px]">
                  We&rsquo;re a quarter mile up Hillside from the corner market. Park along the
                  street, walk through the wooden gate, and the office is the first door on
                  the left. Stroller ramp on the right side of the porch.
                </p>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}

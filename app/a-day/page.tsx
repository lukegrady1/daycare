import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "A Day in the Life",
  description:
    "Hour-by-hour, what your child actually does at Sunny Acres — arrival to pickup.",
};

const moments = [
  { time: "7:00", title: "Slow arrivals", body: "We don't rush goodbyes. Coats off, books out, a teacher to sit with. Some kids dive in; some need ten minutes on a lap. Both are fine.", hue: "warm" as const },
  { time: "8:00", title: "Open studio", body: "The studio is open from arrival. Easels, dough, looms, real tools. Kids choose what they need that morning.", hue: "deep" as const },
  { time: "9:00", title: "Morning meeting", body: "Each room gathers — songs, weather report (real one, by the kid on duty), names of who's here, what we're working on this week.", hue: "butter" as const },
  { time: "10:15", title: "Outside, all weather", body: "An hour minimum, twice a day. Rain pants, snow gear, sunscreen — all provided. The only thing we won't go out in is lightning.", hue: "sage" as const },
  { time: "12:00", title: "Family-style lunch", body: "Kids serve themselves at small tables. Real plates, real glasses, real conversation. Chef Olu plans menus around what's in our garden.", hue: "warm" as const },
  { time: "1:00", title: "Rest, real beds", body: "Real cots with crisp sheets, blackout curtains, lullabies. Non-nappers do quiet work in another room — they're not made to lie still for an hour.", hue: "sky" as const },
  { time: "3:00", title: "Project deep-work", body: "The longest, quietest stretch of the day. Projects unfold here — research, building, writing, atelier work. Teachers document what they notice.", hue: "deep" as const },
  { time: "4:30", title: "Outside, again", body: "Second outdoor block. Often unstructured. The mud kitchen sees the most action right before pickup.", hue: "sage" as const },
  { time: "5:00", title: "Closing circle", body: "Stories, a song, what we noticed today. By 5:30 the building is quiet and we're walking the campus to pick up forgotten boots.", hue: "butter" as const },
];

export default function ADayPage() {
  return (
    <>
      <PageHero
        eyebrow="A day at Sunny Acres"
        title="7:00 AM to 5:30 PM. Here's what your kid actually does."
        sub="The exact rhythm shifts a little by program — infants on their own schedule, Pre-K with longer literacy and math blocks. The bones are the same in every room."
      />

      <section className="container-x">
        <ol className="space-y-12 md:space-y-20">
          {moments.map((m, i) => {
            const reversed = i % 2 === 1;
            return (
              <FadeIn as="li" key={m.time}>
                <div className={`grid md:grid-cols-12 gap-8 items-center ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="md:col-span-7">
                    <Photo
                      hue={m.hue}
                      rotate={reversed ? 1.5 : -1.5}
                      className="aspect-[4/3] shadow-card"
                      label={`${m.time} — ${m.title}`}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <div className="font-accent text-4xl text-terracotta-deep">{m.time}</div>
                    <h2 className="font-display text-3xl md:text-4xl mt-2 tracking-tighter2 leading-tight">
                      {m.title}
                    </h2>
                    <p className="mt-4 text-ink-soft text-lg leading-relaxed max-w-prose">
                      {m.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </ol>
      </section>

      <div className="mt-24"><CtaBand /></div>
    </>
  );
}

import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The teachers, chefs, and caregivers who make Sunny Acres what it is — and the average tenure that proves they stay.",
};

const rooms = [
  {
    room: "Infants",
    hue: "warm" as const,
    people: [
      { name: "Priya Shah", role: "Lead Teacher", years: 8, cred: "B.S. Early Childhood, Infant CPR", quote: "I race sailboats on weekends and read too much sci-fi." },
      { name: "Bea Thornton", role: "Co-Lead", years: 4, cred: "A.A.S. ECE, RIE-trained", quote: "I bake the bread we serve at lunch." },
      { name: "Ola Kim", role: "Assistant", years: 2, cred: "CDA, currently in B.A. program", quote: "I'm working on a children's book about feelings." },
    ],
  },
  {
    room: "Toddlers",
    hue: "butter" as const,
    people: [
      { name: "Marco Liu", role: "Lead Teacher", years: 6, cred: "M.Ed. Early Childhood", quote: "I keep a list of every kid's favorite book." },
      { name: "Tasha Brown", role: "Co-Lead", years: 5, cred: "B.A. Child Development", quote: "I play upright bass in a folk trio on weekends." },
      { name: "Jules Romero", role: "Assistant", years: 3, cred: "CDA, ASL Level 2", quote: "I run a tiny pottery studio out of my garage." },
    ],
  },
  {
    room: "Preschool",
    hue: "sage" as const,
    people: [
      { name: "Jenna Okafor", role: "Lead Teacher", years: 9, cred: "M.Ed., Reggio-trained", quote: "Eleven volumes of project journals so far." },
      { name: "Sam Ortega", role: "Co-Lead", years: 3, cred: "B.S. Education", quote: "I built our climbing hill, mostly by hand." },
    ],
  },
  {
    room: "Pre-K",
    hue: "sky" as const,
    people: [
      { name: "Daniel Park", role: "Lead Teacher", years: 11, cred: "M.A.T., kindergarten-credentialed", quote: "I cried at our first graduation. Still do." },
      { name: "Hannah Reyes", role: "Co-Lead", years: 4, cred: "B.A. ECE, ESL endorsed", quote: "Fluent in Spanish, ASL basics, and unicorn." },
    ],
  },
  {
    room: "Leadership & Support",
    hue: "deep" as const,
    people: [
      { name: "Anna Pellegrino", role: "Founder & Director", years: 12, cred: "M.Ed., 22 years in ECE", quote: "I'm on the floor most mornings — come find me." },
      { name: "Renée Dubois", role: "Studio & Atelier", years: 5, cred: "M.F.A., former gallery director", quote: "Children are real artists. We hand them real materials." },
      { name: "Chef Olu Adebayo", role: "Chef", years: 4, cred: "Culinary Institute, allergen specialist", quote: "If a kid won't eat it, I rework it." },
    ],
  },
];

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="You can't have a great daycare without great people. Meet ours."
        sub="Our team has been here an average of 6.4 years. Most of the new hires came up from our intern pipeline. None of us are babysitters — we're educators."
      />

      <section className="container-x">
        <FadeIn>
          <ul className="grid sm:grid-cols-3 gap-3 max-w-3xl">
            {[
              ["6.4 yrs", "average tenure"],
              ["100%", "ECE-credentialed leads"],
              ["100%", "CPR & First Aid current"],
            ].map(([n, l]) => (
              <li key={l} className="bg-cream-deep rounded-xl p-5 border border-line/60">
                <div className="font-display text-3xl text-terracotta-deep">{n}</div>
                <div className="mt-1 text-ink-soft text-[14px]">{l}</div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {rooms.map((room) => (
        <section key={room.room} className="section-pad">
          <div className="container-x">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl tracking-tighter2 mb-8">
                {room.room}
              </h2>
            </FadeIn>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {room.people.map((person, i) => (
                <FadeIn as="li" key={person.name} delay={i * 0.05}>
                  <article className="group bg-cream rounded-2xl overflow-hidden border border-line/60 shadow-soft h-full">
                    <div className="relative">
                      <Photo
                        hue={room.hue}
                        className="aspect-[4/5] transition-opacity duration-500 group-hover:opacity-0"
                        label={`${person.name} portrait`}
                      />
                      <Photo
                        hue="deep"
                        className="absolute inset-0 aspect-[4/5] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        label={`${person.name} candid`}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl">{person.name}</h3>
                      <div className="text-ink-soft text-[14px] mt-1">
                        {person.role} · {person.years} yrs
                      </div>
                      <div className="text-[13px] text-ink-soft mt-2">{person.cred}</div>
                      <p className="mt-4 text-[15px] italic text-ink leading-relaxed">&ldquo;{person.quote}&rdquo;</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand
        heading="Come meet us in person."
        sub="The thing photos can't show: how a teacher sits down with a kid who's having a hard time. Tour with us and you'll see it."
      />
    </>
  );
}

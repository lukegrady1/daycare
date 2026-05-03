import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, type FAQ } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about enrollment, daily operations, health & safety, tuition & billing, and curriculum at Sunny Acres.",
};

const faqs: FAQ[] = [
  // Enrollment
  { category: "Enrollment", q: "Is there a waitlist?", a: "Sometimes — it varies by classroom. Infant rooms book 6–12 months out. Toddler and preschool tend to have shorter waits. We're transparent on the tour about exactly where you'd land." },
  { category: "Enrollment", q: "How long does enrollment take?", a: "Once a spot is offered, we can have you started in 2–4 weeks. We do a paid week of part-time visits before full days, so the transition is gradual." },
  { category: "Enrollment", q: "Do you offer part-time or drop-in care?", a: "We're full-time only — five days a week. The community a child builds in their classroom depends on consistent attendance. We've found this matters more than parents expect." },
  { category: "Enrollment", q: "What's your refund policy?", a: "First two weeks are a mutual try-out. If it's not working, we refund you fully. After that, we require 30 days' notice to withdraw." },

  // Daily Operations
  { category: "Daily Operations", q: "What are your hours?", a: "Monday through Friday, 7:00 AM to 5:30 PM. We close at 5:30 sharp — late pickups incur a $25/hr fee that our teachers pocket." },
  { category: "Daily Operations", q: "What does my child need to bring?", a: "A change of clothes, a labeled water bottle, and a comfort item if they nap. Diapers, wipes, sunscreen, and outdoor gear are provided for infants and toddlers." },
  { category: "Daily Operations", q: "Do you serve meals?", a: "Yes — breakfast, lunch, and two snacks. Our chef Olu plans menus around what's in our garden. Allergies and preferences are accommodated; we don't shame food refusal." },
  { category: "Daily Operations", q: "How do you handle drop-off and pickup?", a: "Stagger-friendly: arrival between 7 and 9, pickup between 4 and 5:30. Authorized pickup people are listed in our app — IDs checked the first time." },

  // Health & Safety
  { category: "Health & Safety", q: "What's your sick policy?", a: "Stay home for fever (100.4+), vomiting, diarrhea, or anything contagious. 24-hour symptom-free before returning. We send same-day photos of any bumps or scrapes." },
  { category: "Health & Safety", q: "Are you up to date on vaccinations?", a: "All our staff and required of all enrolled children. We follow NC DCDEE requirements with no exceptions for non-medical reasons." },
  { category: "Health & Safety", q: "What's your security like?", a: "Doors are locked at all times. Entry by app code only. Two cameras on common areas (parents have view access). All staff are background-checked." },
  { category: "Health & Safety", q: "What if there's an emergency?", a: "Every staff member is CPR/First Aid current. Two RNs on call. Drills monthly (fire, severe weather, lockdown). Emergency family contact protocol is shared on enrollment." },

  // Tuition & Billing
  { category: "Tuition & Billing", q: "How does billing work?", a: "Monthly via ACH. We don't surprise you with mid-year increases — rates are set in August for the following school year." },
  { category: "Tuition & Billing", q: "Do you accept subsidies?", a: "Yes — NC Subsidized Child Care vouchers. Our enrollment director helps with the paperwork." },
  { category: "Tuition & Billing", q: "Are there scholarships?", a: "We reserve 8% of seats for need-based partial scholarships, funded by community donors. Application open year-round." },
  { category: "Tuition & Billing", q: "Is there a sibling discount?", a: "Yes — 10% off the lower-tuition child's rate while siblings overlap with us." },

  // Curriculum
  { category: "Curriculum", q: "What does 'Reggio-inspired' actually mean here?", a: "Children drive long projects from their interests; teachers document carefully; the environment is treated as a third teacher; art is taken seriously. It does not mean unstructured. We absolutely teach literacy, math, and science — embedded in the work." },
  { category: "Curriculum", q: "Do you do screen time?", a: "Zero. Not for entertainment, not as a calm-down tool, not at lunch. Ever." },
  { category: "Curriculum", q: "Is my child going to be ready for kindergarten?", a: "Yes. Our pre-K alums consistently rank in the top quartile at their elementary schools — and more importantly, they walk in confident and curious." },
  { category: "Curriculum", q: "How do I know what my child did all day?", a: "Daily updates in our parent app — photos, naps, meals, milestones noticed — plus quarterly portfolios with work samples and teacher notes." },
  { category: "Curriculum", q: "Do you do potty training?", a: "Yes. We follow your lead and use the same approach at home and school. Never charged extra for it." },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked, plainly answered."
        sub="If your question isn't here, it's almost certainly answered on the tour. Or write us — the contact form lands in our director's inbox."
      />

      <section className="container-x">
        <FaqList items={faqs} />
        <div className="mt-16 bg-cream-deep border border-line rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl tracking-tightish">Didn&rsquo;t find your answer?</h2>
          <p className="mt-3 text-ink-soft">Real humans at the other end of this:</p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-cream">Contact us</Link>
            <Link href="/tour" className="btn-primary">Schedule a Tour</Link>
          </div>
        </div>
      </section>

      <div className="mt-20"><CtaBand /></div>
    </>
  );
}

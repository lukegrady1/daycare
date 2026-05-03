import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Reggio-inspired, evidence-based, child-led. The thinking behind how kids learn at Sunny Acres — and what we don't do.",
};

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Reggio-inspired, evidence-based, child-led."
        sub="The two-sentence version: children are competent, capable, and naturally curious. Our job is to listen carefully, set up an environment worth exploring, and stay out of the way enough that the learning is theirs."
      />

      <section className="container-x grid lg:grid-cols-12 gap-12 mt-8">
        <article className="prose-warm lg:col-span-8">
          <h2>Our philosophy</h2>
          <p>
            We borrow most heavily from the Reggio Emilia approach — a postwar Italian educational philosophy built on the belief that children have a hundred languages: drawing, sculpting, building, dancing, singing, arguing, telling stories, asking questions. Our work is to give those languages real materials and real time.
          </p>
          <p>
            We pair Reggio with what current research tells us about brain development, attachment, and play-based learning. We are not a Montessori school, though we admire it. We are not Waldorf, though we share its reverence for childhood. We are us — a thoughtful, eclectic, evidence-based program shaped by what works for the kids in front of us.
          </p>

          <h2>How children learn here</h2>
          <p>
            Long projects, driven by what kids notice. A class might spend three weeks on what makes a shadow. They might map every tree on the property. They might invent a postal system and deliver letters between rooms. The teacher&rsquo;s job is to notice what catches fire and feed it — with books, materials, field trips, and the right questions.
          </p>

          <figure className="my-12">
            <Photo hue="sage" className="aspect-[16/10] shadow-card" label="Children working on a long project" />
            <figcaption className="mt-3 font-accent text-xl text-ink-soft">
              week three of the worm research project
            </figcaption>
          </figure>

          <p>
            Underneath the projects, we are absolutely teaching literacy, math, science, and social-emotional skills. They&rsquo;re embedded in the work, not separated from it. Pre-K kids leave us reading early-reader books — but the path there ran through writing labels for their bug museum, not a phonics worksheet.
          </p>

          <h2>Daily rhythm</h2>
          <p>
            Predictability matters more than schedules. Every day, in every room, runs on the same anchors: arrival, circle, outside, lunch, rest, project work, closing. The content varies; the shape doesn&rsquo;t. Kids feel safe when they know what&rsquo;s next.
          </p>

          <h2>Assessment & communication</h2>
          <p>
            We do not test children. We observe them, document, and share. Parents get:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li><strong>Daily updates</strong> via our parent app — photos, naps, meals, milestones noticed.</li>
            <li><strong>Quarterly portfolios</strong> — work samples, growth notes, what they&rsquo;re curious about.</li>
            <li><strong>Two annual conferences</strong> with the lead teacher (more if helpful).</li>
            <li><strong>Open-door policy</strong> — pop in any time. We mean it.</li>
          </ul>

          <h2>What &ldquo;Reggio-inspired&rdquo; actually means</h2>
          <p>
            It&rsquo;s a popular phrase. We want to be honest about what it means at our school:
          </p>
          <p>
            <strong>It means</strong>: Children drive the curriculum. Teachers document carefully. The classroom environment is treated as a third teacher — beautiful, ordered, full of natural materials. Long projects are encouraged. Art (which we call atelier work) is taken seriously, not used as filler.
          </p>
          <p>
            <strong>It does not mean</strong>: A free-for-all. No structure. Kids running wild. Teachers who don&rsquo;t teach. Worksheets are absent, but rigor isn&rsquo;t. Our pre-K alums consistently rank in the top quartile of their elementary classes.
          </p>

          <h2>What we don&rsquo;t do</h2>
          <ul className="list-disc pl-6 space-y-2 text-ink-soft">
            <li>Screens. Not for entertainment. Not as a calm-down. Not at lunch. Not ever.</li>
            <li>Worksheets, dittos, or rote drilling.</li>
            <li>Time-outs as discipline.</li>
            <li>Rewards systems (no sticker charts, no &ldquo;clip up, clip down&rdquo;).</li>
            <li>Generic decorations — no laminated alphabet borders, no clip-art posters.</li>
            <li>&ldquo;Crafts&rdquo; where every kid&rsquo;s output looks identical. We do art.</li>
          </ul>
        </article>

        <aside className="lg:col-span-4">
          <FadeIn>
            <div className="sticky top-24 space-y-6">
              <div className="bg-cream-deep rounded-2xl p-7 border border-line/60">
                <p className="font-display italic text-xl leading-snug text-ink">
                  &ldquo;The wider the range of possibilities we offer children, the more intense will be their motivations and the richer their experiences.&rdquo;
                </p>
                <p className="mt-4 text-ink-soft text-[14px]">
                  — Loris Malaguzzi, founder of Reggio Emilia
                </p>
              </div>

              <div className="bg-cream rounded-2xl p-7 border border-line">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-3">Recommended reading</div>
                <ul className="space-y-3 text-[15px]">
                  <li><em>The Hundred Languages of Children</em> — Edwards, Gandini, Forman</li>
                  <li><em>The Importance of Being Little</em> — Erika Christakis</li>
                  <li><em>Balanced and Barefoot</em> — Angela Hanscom</li>
                  <li><em>How to Talk So Little Kids Will Listen</em> — Faber, King</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </aside>
      </section>

      <div className="mt-20"><CtaBand /></div>
    </>
  );
}

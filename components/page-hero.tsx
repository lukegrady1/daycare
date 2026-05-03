import { FadeIn } from "./motion";

export function PageHero({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <section className="bg-cream pt-16 md:pt-24 pb-12">
      <div className="container-x">
        <FadeIn>
          <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
            {eyebrow && <div className="eyebrow mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
              {eyebrow}
            </div>}
            <h1 className="font-display text-[2.75rem] md:text-[4rem] leading-[1.02] tracking-tighter2">
              {title}
            </h1>
            {sub && (
              <p className="mt-6 text-ink-soft text-lg md:text-xl max-w-2xl">
                {sub}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

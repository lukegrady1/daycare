import Link from "next/link";

export function CtaBand({
  heading = "Come see if we're a fit.",
  sub = "45-minute tours run Tues/Thurs at 10am. Bring your questions.",
  buttonLabel = "Schedule a Tour",
  href = "/tour",
}: {
  heading?: string;
  sub?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-terracotta text-cream relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="container-x py-20 md:py-24 relative">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl tracking-tightish leading-[1.05]">
            {heading}
          </h2>
          <p className="mt-5 text-cream/85 text-lg max-w-xl">{sub}</p>
          <div className="mt-8">
            <Link href={href} className="btn-cream">
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

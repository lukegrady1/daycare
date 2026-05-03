import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <div className="font-accent text-3xl text-terracotta-deep">oops</div>
      <h1 className="mt-3 font-display text-5xl tracking-tighter2">Lost in the woods.</h1>
      <p className="mt-5 text-ink-soft max-w-md mx-auto">
        That page is not here. Try the home page, or the tour booking — those are the two paths back to us.
      </p>
      <div className="mt-7 flex gap-3 justify-center">
        <Link href="/" className="btn-cream">Home</Link>
        <Link href="/tour" className="btn-primary">Schedule a Tour</Link>
      </div>
    </section>
  );
}

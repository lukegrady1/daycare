import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <>
      <PageHero title="Accessibility" sub="We aim to meet WCAG 2.2 AA across this site and the school itself." />
      <section className="container-x prose-warm pb-24">
        <p>
          We test this site with keyboards, screen readers (VoiceOver and NVDA), and against WCAG 2.2 AA. If you find a barrier — a missing alt text, a contrast issue, a keyboard trap — please let us know and we&rsquo;ll fix it within one business day.
        </p>
        <h2>Physical accessibility</h2>
        <p>Our building has a stroller-accessible ramp, gendered and gender-neutral restrooms, and step-free paths to every classroom and the outdoor campus.</p>
        <h2>Reach us</h2>
        <p>Email <a href="mailto:hello@sunnyacres.example">hello@sunnyacres.example</a> or call us. A human will respond.</p>
      </section>
    </>
  );
}

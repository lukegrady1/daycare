import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy" sub="What we collect, what we don't, and what we do with it." />
      <section className="container-x prose-warm pb-24">
        <p>
          Sunny Acres collects only the information you give us — your name, contact info, and child&rsquo;s details when you tour, enroll, or sign up for our newsletter. We never sell or share your data. Photos of your child only appear in materials you&rsquo;ve specifically authorized.
        </p>
        <h2>Cookies & analytics</h2>
        <p>We use Google Analytics 4 to understand which pages help families decide. You can opt out via your browser&rsquo;s privacy settings.</p>
        <h2>Email</h2>
        <p>Tour and contact forms send to our director and our CRM. Newsletter is one email a month — unsubscribe at the bottom of any.</p>
        <h2>Reach us</h2>
        <p>Questions? Email <a href="mailto:hello@sunnyacres.example">hello@sunnyacres.example</a>.</p>
      </section>
    </>
  );
}

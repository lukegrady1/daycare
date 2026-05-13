import Link from "next/link";
import { SITE } from "@/lib/utils";
import { LogoMark } from "./icons/logo";
import { Newsletter } from "./newsletter";

export function Footer() {
  return (
    <footer className="bg-cream-deep border-t border-line mt-24">
      <div className="container-x pt-16 pb-28 lg:pb-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5 max-w-md">
            <div className="flex items-center gap-2">
              <LogoMark className="w-10 h-10 text-terracotta" />
              <span className="font-display text-2xl tracking-tightish">
                Sunny Acres
              </span>
            </div>
            <p className="mt-4 text-ink-soft">
              A licensed early learning center in {SITE.city}, {SITE.state} for ages 6 weeks
              through 5 years. Reggio-inspired, evidence-based, joy-first.
            </p>
            <div className="mt-6">
              <Newsletter />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
              Site
            </div>
            <ul className="space-y-2.5 font-body text-[15px]">
              <li><Link href="/about" className="hover:text-terracotta-deep">About</Link></li>
              <li><Link href="/programs" className="hover:text-terracotta-deep">Programs</Link></li>
              <li><Link href="/staff" className="hover:text-terracotta-deep">Our Team</Link></li>
              <li><Link href="/curriculum" className="hover:text-terracotta-deep">Curriculum</Link></li>
              <li><Link href="/a-day" className="hover:text-terracotta-deep">A Day in the Life</Link></li>
              <li><Link href="/tuition" className="hover:text-terracotta-deep">Tuition</Link></li>
              <li><Link href="/faq" className="hover:text-terracotta-deep">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-terracotta-deep">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-terracotta-deep">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-terracotta-deep">Careers</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
              Visit & Reach Us
            </div>
            <address className="not-italic font-body text-[15px] space-y-1.5">
              <div>{SITE.address}</div>
              <div className="text-ink-soft">{SITE.hours}</div>
              <div className="pt-2">
                <a href={SITE.phoneHref} className="hover:text-terracotta-deep">{SITE.phone}</a>
              </div>
              <div>
                <a href={`mailto:${SITE.email}`} className="hover:text-terracotta-deep">{SITE.email}</a>
              </div>
            </address>
            <div className="mt-6 flex gap-3">
              <Link href="/tour" className="btn-primary !px-5 !py-2.5 text-[14px]">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <p className="font-accent text-2xl text-ink-soft">
            made with care in {SITE.city}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-soft">
            <span>© {new Date().getFullYear()} {SITE.longName}</span>
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/accessibility" className="hover:text-ink">Accessibility</Link>
            <span>License #DC-44210</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

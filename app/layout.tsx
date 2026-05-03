import type { Metadata } from "next";
import { Fraunces, Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { SITE } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnyacres.example"),
  title: {
    default: `${SITE.longName} · ${SITE.city} Daycare & Preschool`,
    template: `%s · ${SITE.name}`,
  },
  description: `A licensed early learning center in ${SITE.city}, ${SITE.state} for ages 6 weeks through 5 years. Reggio-inspired curriculum, real outdoor classrooms, teachers who know your child's name.`,
  openGraph: {
    type: "website",
    siteName: SITE.longName,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${caveat.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:text-ink focus:px-4 focus:py-2 focus:rounded-md focus:shadow-card"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <FloatingCta />
        <Footer />
      </body>
    </html>
  );
}

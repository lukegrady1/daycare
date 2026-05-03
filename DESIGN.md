# DESIGN.md — Sunny Acres Daycare Website

> A design specification for a multi-page, professionally crafted daycare website built to convert curious parents into enrolled families.

---

## 1. Project Overview

### Purpose
A trust-first, conversion-optimized website for a daycare/early learning center. Parents are not browsing — they're vetting. Every pixel must communicate **safety, warmth, professionalism, and joy** within 5 seconds of landing.

### Primary Goals
1. Drive **tour bookings** (the #1 conversion event)
2. Drive **enrollment inquiries** (secondary conversion)
3. Build trust through transparency: staff, curriculum, safety, accreditation
4. Differentiate from generic daycare sites (which all look identical)

### Target Audience
- Parents of children ages 6 weeks – 5 years
- Primary decision-maker: typically mothers ages 28–42
- Secondary: fathers, grandparents, family friends sharing the link

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (customized heavily — no default look)
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Hosting**: Vercel
- **Forms backend**: Resend (email) + GoHighLevel webhook (CRM)
- **Analytics**: GA4 + Meta Pixel via GTM

---

## 2. Aesthetic Direction

### The Concept: "Modern Storybook"
Reject the two failure modes of daycare design:
1. ❌ The "cartoon clown" look — Comic Sans, primary-color rainbow, clip art
2. ❌ The "sterile corporate" look — stock photos, navy/gray, soulless

Instead: **warm, editorial, hand-crafted feeling — like a well-loved children's book reimagined for 2026**. Think *Frances Hodgson Burnett meets Apartment Therapy*. Parents should feel like this is a place run by thoughtful, educated humans — not a franchise.

### Mood Words
Warm · Crafted · Calm · Curious · Trustworthy · Earthy · Bright (but not loud)

---

## 3. Visual System

### Color Palette

Use CSS variables. Dominant warm neutrals with one strong accent.

```css
:root {
  /* Foundation */
  --cream: #FAF6EF;          /* Primary background - warm off-white */
  --cream-deep: #F2EBDD;     /* Section alternation */
  --ink: #2A2520;            /* Primary text - warm near-black, never pure black */
  --ink-soft: #5C5147;       /* Secondary text */

  /* Accents */
  --terracotta: #C8633C;     /* Primary CTA, accents - warm, grounded, not "kid red" */
  --terracotta-deep: #A14E2C; /* CTA hover */
  --sage: #7A8B5C;           /* Secondary accent - "outdoor learning" green */
  --butter: #F0C674;         /* Tertiary - warm yellow, used sparingly */
  --sky: #A8C5D6;            /* Quaternary - dusty blue for variety */

  /* Functional */
  --border: #E5DDC8;
  --shadow: rgba(42, 37, 32, 0.08);
}
```

**Color usage rule**: 70% cream/neutrals · 20% ink · 8% terracotta · 2% sage/butter/sky as supporting. Never use all four accent colors on the same screen — pick two max per page.

### Typography

```css
/* Display - editorial, characterful */
--font-display: 'Fraunces', serif;   /* Variable font, soft optical sizes */

/* Body - humanist, readable */
--font-body: 'Inter Tight', sans-serif;

/* Hand-drawn accent (used sparingly for delight) */
--font-accent: 'Caveat', cursive;
```

**Why these choices**:
- **Fraunces** has soft, slightly quirky letterforms — feels warm and crafted, not corporate. Used for H1, H2, hero text.
- **Inter Tight** is professional but slightly more compressed than Inter — gives editorial density.
- **Caveat** appears 2–3 times site-wide as handwritten labels ("our favorite spot" pointing to the reading nook in a photo). Never overused.

**Type scale** (rem, mobile-first):
- H1: 3.5rem → 5.5rem (clamp), Fraunces 500, tight tracking
- H2: 2.25rem → 3.25rem, Fraunces 500
- H3: 1.5rem → 1.875rem, Fraunces 500
- Body: 1.0625rem (slightly larger than default — easier on tired parent eyes)
- Small: 0.875rem

### Imagery
- **Real photography only.** No stock. No illustration of generic kids. If photography isn't ready at launch, use placeholder commitments and noted shoot list.
- Photo style: natural light, candid (not posed), shallow depth of field, kids engaged in activity (not staring at camera). Faces visible only with signed parental release.
- Aspect ratios: hero is 16:10, gallery is mixed (3:4 portraits, 4:3 landscapes for visual rhythm).
- Subtle film grain overlay (5% opacity) for editorial warmth.

### Iconography & Decorative Elements
- Custom SVG line illustrations — pencil-drawn feeling, not geometric. Acorns, leaves, sun, paper boat, kite. Used as section dividers and accents.
- Subtle texture: paper grain background on cream sections (very low opacity).
- Hand-drawn underlines on key phrases instead of straight lines.

### Motion Principles
- Hero: staggered fade + slight upward translate on load (60ms stagger, 600ms duration, ease-out-expo)
- Scroll reveals: subtle (translateY 16px → 0, opacity 0 → 1, 500ms)
- Hover states: scale 1.02 max, never bouncy
- **Avoid**: parallax on hero (overdone), sliding carousels (poor mobile), particle effects (childish-cliché)
- **Embrace**: image hover that reveals a candid second photo, hand-drawn underline that draws in on scroll

---

## 4. Sitemap & Page Structure

```
/                          Home
├── /about                 About Us (philosophy, history, accreditation)
├── /programs              Programs Overview
│   ├── /programs/infants       (6 weeks – 12 months)
│   ├── /programs/toddlers      (12 – 24 months)
│   ├── /programs/preschool     (2 – 4 years)
│   └── /programs/pre-k         (4 – 5 years)
├── /staff                 Meet the Team
├── /curriculum            Our Approach (Reggio-inspired, etc.)
├── /a-day                 A Day in the Life (visual storytelling)
├── /tuition               Tuition & Enrollment
├── /tour                  Schedule a Tour (primary CTA destination)
├── /faq                   Frequently Asked Questions
├── /blog                  Parent Resources / Blog
└── /contact               Contact
```

11 core pages. Footer links also include `/careers`, `/privacy`, `/accessibility`.

---

## 5. Page-by-Page Specifications

### 5.1 Home (`/`)

**Goal**: Get the parent to click "Schedule a Tour" within 30 seconds.

#### Hero Section — The Stunning One

**Layout**: Asymmetric split. Left 55% type, right 45% image. Mobile stacks (image first, then type).

**Left side (type column)**:
- Eyebrow tag: small terracotta dot + "Now enrolling for Fall 2026" in Inter Tight uppercase tracking-wider
- H1 (Fraunces, 5rem desktop): **"Where curious kids become brave learners."**
  - The word *"curious"* has a hand-drawn sage-green underline (SVG path animation drawing in on load, 1.2s delay)
- Subhead (Inter Tight, 1.25rem, ink-soft, max-width 32ch):
  *"A licensed early learning center in [City] for ages 6 weeks through 5 years. Reggio-inspired curriculum, real outdoor classrooms, and teachers who actually know your child's name."*
- CTA cluster (16px gap):
  - **Primary CTA**: "Schedule a Tour" → `/tour`
    - Terracotta solid, cream text, Fraunces 500, 16px 28px padding, 8px radius
    - Subtle inset shadow on hover, 1.02 scale
  - **Secondary CTA**: "View Programs →" → `/programs`
    - Ghost button, ink text, underline on hover
- Trust strip below CTAs:
  - 4 small items in a horizontal row: ✓ Licensed by [State] DEEC · ✓ NAEYC Accredited · ✓ 4.9★ on Google (147) · ✓ 12 years in [City]

**Right side (image column)**:
- A single, cinematic photograph: a child at a low wooden table, hands in soft clay or watercolor, natural window light. Slight 3-degree rotation for editorial feel.
- Floating "polaroid" element overlapping the bottom-left of the photo (8 degrees rotation, paper-white card with subtle shadow): smaller candid photo + Caveat handwritten label "Tuesday — paint day"
- Behind the main image: organic blob shape in butter-yellow at 30% opacity, offset behind the photo for depth
- Below the image: tiny scribbled SVG arrow (Caveat-style) + handwritten "look how focused →"

**Scroll affordance**: Bottom of hero, centered: tiny vertical line (1px, sage) that animates downward + small "Take the tour" text. Not arrow icons — those are clichéd.

#### Section 2: The "Why Us" Triad
Three columns, each with a custom hand-drawn icon (acorn, sun, paper boat):
- **Small ratios.** *"4:1 in infant rooms. 6:1 in toddler. 10:1 in preschool. We don't stretch the limits — we beat them."*
- **Real outdoors.** *"A 1/3-acre nature playscape with a mud kitchen, garden beds, and a chicken coop the kids help tend."*
- **Teachers who stay.** *"Average tenure on our team: 6.4 years. Your child won't get a new teacher every quarter."*

Each card: cream-deep background, generous padding (48px), Fraunces H3, Inter body. Hover: very subtle lift (translateY -2px).

#### Section 3: A Day in the Life (Visual Teaser)
Horizontal scrolling photo strip on desktop / vertical stack on mobile. 6 photos with timestamp overlays in Caveat: "7:30 — arrival snuggles," "9:00 — circle time," etc. CTA at end: "See a full day →" → `/a-day`

#### Section 4: Programs Grid (4 cards)
Infants · Toddlers · Preschool · Pre-K. Each card:
- Photograph (4:5 aspect)
- Age range overline
- Program name (Fraunces H3)
- One-line description
- "Learn more →" link
- Hover: image gentle zoom (scale 1.04, 600ms), card lifts

#### Section 5: Parent Testimonial (Single, Big)
Full-bleed cream-deep section. One testimonial. Pull-quote treatment:
- Massive Fraunces serif quote marks (terracotta, 8rem)
- Quote in Fraunces italic 1.75rem
- Parent name + child's name + tenure ("Mom of Theo, age 3 — with us since 2023")
- Small circular photo
- No carousel. Just one. Strong, specific.

#### Section 6: Final CTA Block
Full-width terracotta band:
- Cream text
- H2: *"Come see if we're a fit."*
- Subhead: *"45-minute tours run Tues/Thurs at 10am. Bring your questions."*
- Cream button: "Schedule a Tour"

#### Footer
3-column on desktop (logo + address column, sitemap column, hours/contact column). Newsletter signup at top of footer ("monthly notes from our director — no spam, ever"). Caveat handwritten "made with care in [City]" at the very bottom.

---

### 5.2 About (`/about`)
- Hero: smaller than home. Photo of director with kids. H1: *"We started this place because we couldn't find it ourselves."*
- Founder/director story (long-form, well-typeset, max 65ch line length)
- Timeline component: founding year → milestones → today
- Values section (4 values, no more — picky and specific, not "we love kids")
- Accreditations grid with logos (NAEYC, state DEEC, etc.)
- CTA: Schedule a Tour

### 5.3 Programs Overview (`/programs`)
- Hero with H1: *"Four programs. One philosophy."*
- Grid of 4 program cards (infants, toddlers, preschool, pre-K) with deeper detail than home
- Each clicks through to a dedicated subpage
- Comparison table: ratios, hours, ages, tuition starting at, what's included
- CTA: Schedule a Tour

### 5.4 Program Subpages (4 of them)
Template:
- Hero photo specific to that age group + H1 ("Infants: 6 weeks to 12 months")
- "What a day looks like" timeline
- "What we focus on" (developmental areas — physical, language, social-emotional, cognitive)
- Sample weekly rhythm
- Meet the lead teachers (mini-bios with photos)
- Tuition for this program (or "starting at $X/week")
- FAQ specific to this age (e.g., infant: napping, feeding, milestones; pre-K: kindergarten readiness)
- CTA: Schedule a Tour

### 5.5 Staff (`/staff`)
- H1: *"You can't have a great daycare without great people. Meet ours."*
- Grid of staff cards, organized by classroom
- Each card: photo, name, role, years on team, certification, one personal sentence ("Outside of work, I race sailboats and read too much sci-fi.")
- Hover reveals second candid photo
- Highlight: tenure metric, % with ECE degrees, % CPR/First Aid certified

### 5.6 Curriculum (`/curriculum`)
- H1: *"Our approach: Reggio-inspired, evidence-based, child-led."*
- Long-form editorial layout (this is the page that converts the educated, researching parent)
- Sections: Our Philosophy · How Children Learn Here · Daily Rhythms · Assessment & Communication (parent updates) · What "Reggio-inspired" actually means (and what it doesn't)
- Pull quotes throughout
- Photos integrated with text (not gallery-style)
- CTA: Schedule a Tour

### 5.7 A Day in the Life (`/a-day`)
- The most visual page on the site
- H1: *"7:00 AM to 5:30 PM. Here's what your kid actually does."*
- Hour-by-hour timeline with photos, captions, sample activities
- Vertical scroll on mobile, alternating left/right on desktop
- Use Caveat handwriting for time labels
- CTA: Schedule a Tour

### 5.8 Tuition (`/tuition`)
- H1: *"Tuition, plainly."* (Differentiator: most daycares hide pricing — we don't)
- Table by program with weekly/monthly rates
- What's included: meals? diapers? supplies? — explicit
- Sibling discount mention
- Financial assistance / state subsidy info
- Tuition includes / does not include lists
- CTA: Schedule a Tour

### 5.9 Schedule a Tour (`/tour`) — THE CONVERSION PAGE
- H1: *"Come visit. We'll show you everything."*
- Sub: "Tours are 45 minutes. We'll walk every classroom, meet teachers, and answer the questions you didn't know you had."
- 2-column layout: left = form, right = "what to expect" sidebar with photos
- Form fields (multi-step for higher conversion):
  - Step 1: Child's age + program of interest + start date timeline
  - Step 2: Parent name, email, phone, preferred tour date/time
  - Step 3: Anything specific you'd like to see? (optional, textarea)
- Submit posts to GoHighLevel webhook + sends Resend confirmation email
- Calendly embed as alternative below form
- Trust signals near form: "We respond within 1 business day. We'll never share your info."

### 5.10 FAQ (`/faq`)
- Accordion-style, organized by category (Enrollment · Daily Operations · Health & Safety · Tuition & Billing · Curriculum)
- Search bar at top
- 30–40 real questions, real answers
- CTA at bottom: "Didn't find your answer? [Contact us]"

### 5.11 Blog (`/blog`)
- Editorial layout — large featured post, then 3-col grid
- Categories: For Parents · Inside Our Classrooms · Child Development · News
- Each post page: long-form, generous typography, max 65ch, related posts at bottom
- Newsletter CTA in sidebar

### 5.12 Contact (`/contact`)
- Address, phone, email
- Embedded Google Map
- Contact form (general inquiries — separate from tour form)
- Hours of operation
- "For tours, please use the [tour booking page]" callout
- Directions / parking notes

---

## 6. CTA Strategy

### Hierarchy
1. **Primary CTA** (terracotta, prominent): "Schedule a Tour" — appears on every page, in nav, in hero, after every major section
2. **Secondary CTA** (ghost): "View Programs" / "Learn More" — discovery actions
3. **Tertiary CTA** (text link with arrow): "Read more →"

### Placement Rules
- Sticky nav has "Schedule a Tour" button in terracotta — always visible on scroll
- Every page must have a CTA above the fold AND a CTA at the bottom
- Long pages (curriculum, a-day) get a mid-page CTA band as well
- Mobile: floating bottom-bar with "Schedule a Tour" button on long pages

### CTA Copy Variants (avoid repetition)
- "Schedule a Tour"
- "Come visit us"
- "Book your tour"
- "See it in person"
- "Walk through with us"

### Conversion Tracking
- GTM events on every CTA click (`cta_click` with location parameter)
- Form submissions tracked as `tour_request` conversion in GA4 + Meta Pixel
- GHL webhook fires on form submit → triggers automation (instant SMS to director, instant confirmation email, 1-day follow-up)

---

## 7. Navigation

### Desktop
- Logo (left)
- Center: About · Programs (dropdown: Infants, Toddlers, Preschool, Pre-K) · Curriculum · A Day · Tuition · FAQ · Blog
- Right: Phone number (clickable) + "Schedule a Tour" button (terracotta)
- Sticky on scroll, cream background with subtle shadow on scroll

### Mobile
- Logo + hamburger
- Drawer slides from right
- Inside drawer: full nav + phone + tour CTA
- Floating bottom bar on scroll: phone icon + "Schedule a Tour"

---

## 8. Forms

### Tour Request Form (Primary)
- 3-step multi-page (lower friction per step → higher completion)
- Progress bar at top
- Native HTML inputs styled with Tailwind, validation via Zod
- Inline error messages (terracotta, small)
- Loading state on submit (button text → "Sending...")
- Success state: full-screen confirmation with next steps + photo

### General Contact Form (Secondary)
- Single page, simple
- Name, email, message

### Newsletter Signup
- Footer + blog sidebar
- Single email field + button
- Success: inline confirmation, no redirect

### Validation Rules (Zod schemas)
- All emails validated
- Phone: US format, optional but encouraged
- Required fields clearly marked
- Honeypot field for spam prevention
- Rate limiting on API route

---

## 9. Performance & Technical

### Targets
- Lighthouse: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO on every page
- LCP < 1.8s on 4G
- CLS < 0.05
- Total page weight < 1.5MB on home

### Implementation
- Next.js Image component for all images (AVIF + WebP, responsive sizes)
- Font: `next/font` with Fraunces and Inter Tight, swap display, subset latin
- Framer Motion: lazy-loaded, only on pages that need it
- shadcn components: tree-shaken, only what's used
- Static generation for all pages except form submission API routes
- Sitemap + robots.txt auto-generated
- Structured data (JSON-LD): LocalBusiness schema with hours, address, phone, accreditations on home; FAQ schema on /faq

### SEO
- Unique title + meta description per page (no defaults)
- OG images: 1200x630 per page with branded template
- Local SEO: NAP consistency, Google Business Profile linked, schema markup
- Target keywords: "[city] daycare", "[city] preschool", "infant care [city]", "Reggio preschool [city]"

---

## 10. Accessibility

- All images have meaningful alt text (not "image" or "photo")
- Color contrast minimum 4.5:1 for body, 3:1 for large text — every accent tested
- Keyboard navigable (visible focus rings — sage 2px outline + 2px offset)
- Skip-to-content link
- All forms have proper labels (no placeholder-only labels)
- Reduced motion respected (`prefers-reduced-motion` disables animations)
- Semantic HTML throughout (nav, main, article, section)
- ARIA only where semantic HTML can't do the job
- Test with screen reader (VoiceOver) before launch

---

## 11. Build Phases

### Phase 1: Foundation (Week 1)
- Next.js scaffold, Tailwind config, font loading, color tokens
- Component library setup (shadcn customized)
- Layout shell (nav, footer)
- Home page

### Phase 2: Content Pages (Week 2)
- About, Programs (overview + 4 subpages), Staff, Curriculum, A Day, Tuition

### Phase 3: Conversion & Utility (Week 3)
- Tour booking page + form integration (GHL webhook + Resend)
- Contact, FAQ, Blog scaffold
- Newsletter integration

### Phase 4: Polish & Launch (Week 4)
- Photography integration (real photos replacing placeholders)
- Performance optimization
- SEO + structured data
- Cross-browser + device testing
- Analytics + tracking verification
- Launch checklist (DNS, redirects, sitemap submission)

---

## 12. What Makes This Unforgettable

If a parent visits 5 daycare websites and ours, the things they will remember:
1. The **hero photograph** with the polaroid overlay and the handwritten "Tuesday — paint day" label
2. The **Fraunces typography** — feels like a real magazine, not a template
3. The **terracotta + cream** palette — warm, grown-up, confident
4. The **published tuition** — radical honesty in a category built on opacity
5. The **specific copy** — "12 years in [City]", "average tenure 6.4 years" — not platitudes

This is the difference between a daycare website and a daycare *brand*.

---

## Appendix: Asset Checklist

- [ ] Logo (SVG, full color + monochrome variants)
- [ ] Photography shoot (minimum 80 final selects across all programs)
- [ ] Director headshot + bio
- [ ] Staff headshots + secondary candid for hover (each)
- [ ] Hand-drawn SVG icons (acorn, sun, paper boat, kite, leaf, scribble underlines, scribble arrow)
- [ ] OG image template (Figma)
- [ ] Favicon set (16, 32, 180, 192, 512, manifest)
- [ ] One testimonial with parent permission + photo
- [ ] Accreditation logos (cleared for use)
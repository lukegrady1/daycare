export type ProgramSlug = "infants" | "toddlers" | "preschool" | "pre-k";

export interface ProgramTeacher {
  name: string;
  role: string;
  years: number;
  cred: string;
  blurb: string;
}

export interface ProgramFAQ {
  q: string;
  a: string;
}

export interface Program {
  slug: ProgramSlug;
  name: string;
  age: string;
  ratio: string;
  hours: string;
  weekly: number;
  hue: "warm" | "sage" | "butter" | "sky" | "deep";
  tagline: string;
  intro: string;
  rhythm: { time: string; activity: string }[];
  focus: { area: string; body: string }[];
  weeklyRhythm: { day: string; theme: string }[];
  teachers: ProgramTeacher[];
  faqs: ProgramFAQ[];
}

export const programs: Program[] = [
  {
    slug: "infants",
    name: "Infants",
    age: "6 weeks – 12 months",
    ratio: "4:1",
    hours: "7:00 AM – 5:30 PM",
    weekly: 415,
    hue: "warm",
    tagline: "Calm, attached, and full of soft places to land.",
    intro:
      "An infant's first job is to feel safe. Ours is to make sure they do. Our infant room runs on your child's rhythm — their nap schedule, their feeds, their pace — not a printed timetable. We text you photos through the day, log every diaper and bottle, and slowly, gently, build the relationships that make the first transition out of your arms feel like a soft landing.",
    rhythm: [
      { time: "7:00", activity: "Arrival, slow hellos, tummy time" },
      { time: "9:00", activity: "Morning bottles, first nap (your schedule)" },
      { time: "11:00", activity: "Sensory play: water, scarves, mirrors" },
      { time: "12:00", activity: "Lunch — purées from our garden" },
      { time: "1:00", activity: "Long nap, real cribs" },
      { time: "3:00", activity: "Outside walk in the buggy or carrier" },
      { time: "4:30", activity: "Quiet floor time, books, slow goodbyes" },
    ],
    focus: [
      { area: "Attachment", body: "Each baby has a primary caregiver. Continuity is the curriculum." },
      { area: "Motor", body: "Floor time, low climbing structures, tummy on grass." },
      { area: "Language", body: "Narration, songs, and books from the moment they arrive." },
      { area: "Senses", body: "Real objects: spoons, scarves, leaves — not plastic substitutes." },
    ],
    weeklyRhythm: [
      { day: "Mon", theme: "Music morning — instruments and lap-songs" },
      { day: "Tue", theme: "Studio time — finger paint, edible clay" },
      { day: "Wed", theme: "Garden visit — soft grass, sky, leaves" },
      { day: "Thu", theme: "Story stretch — board books, signed words" },
      { day: "Fri", theme: "Family Friday — photo for parents" },
    ],
    teachers: [
      { name: "Priya Shah", role: "Lead Teacher, Infants", years: 8, cred: "B.S. Early Childhood, Infant CPR", blurb: "Outside of work, I race sailboats and read too much sci-fi." },
      { name: "Bea Thornton", role: "Co-Lead, Infants", years: 4, cred: "A.A.S. ECE, RIE-trained", blurb: "I bake the bread we serve at lunch." },
    ],
    faqs: [
      { q: "What's your nap policy?", a: "On your child's schedule, in their own crib, on their back. We never wake a sleeping baby." },
      { q: "How do you handle bottles & breastmilk?", a: "Refrigerated, labeled, warmed slowly in water. We log every feed in the parent app." },
      { q: "When does my child move up?", a: "Around 12–14 months, when they're walking confidently and ready for the toddler space — not on a calendar date." },
    ],
  },
  {
    slug: "toddlers",
    name: "Toddlers",
    age: "12 – 24 months",
    ratio: "6:1",
    hours: "7:00 AM – 5:30 PM",
    weekly: 385,
    hue: "butter",
    tagline: "Big feelings, small bodies. We meet both.",
    intro:
      "Toddlerhood is the most misunderstood year of childhood. They're not 'difficult' — they're discovering they're a person. Our toddler room runs on routine, real autonomy, and the kind of patient adult who doesn't take a tantrum personally. Lots of climbing. Lots of practice with words for feelings. A predictable rhythm so they always know what's next.",
    rhythm: [
      { time: "7:00", activity: "Arrival, breakfast at the family table" },
      { time: "8:30", activity: "Outside time — climb, dig, explore" },
      { time: "10:30", activity: "Studio: paint, collage, dough" },
      { time: "12:00", activity: "Lunch, served family-style" },
      { time: "1:00", activity: "Nap (real cots, blackout curtains)" },
      { time: "3:00", activity: "Snack, then garden or sandbox" },
      { time: "4:30", activity: "Story circle, slow pickup" },
    ],
    focus: [
      { area: "Self-help", body: "Pouring, dressing, cleaning up — they want to do it; we let them." },
      { area: "Language", body: "Naming feelings, real words for big experiences." },
      { area: "Movement", body: "Running, climbing, balancing — gross motor every day." },
      { area: "Social", body: "Side-by-side play, gentle introductions to sharing." },
    ],
    weeklyRhythm: [
      { day: "Mon", theme: "Music & movement morning" },
      { day: "Tue", theme: "Studio open hour" },
      { day: "Wed", theme: "Garden harvest with the chef" },
      { day: "Thu", theme: "Library read-aloud, Spanish songs" },
      { day: "Fri", theme: "Mud kitchen — bring spare clothes" },
    ],
    teachers: [
      { name: "Marco Liu", role: "Lead Teacher, Toddlers", years: 6, cred: "M.Ed. Early Childhood", blurb: "I keep a list of every kid's favorite book — and update it weekly." },
      { name: "Tasha Brown", role: "Co-Lead, Toddlers", years: 5, cred: "B.A. Child Development", blurb: "I play upright bass in a folk trio on weekends." },
    ],
    faqs: [
      { q: "Is potty training included?", a: "Yes. We follow your lead and use the same approach at school. We've never charged extra for it." },
      { q: "How do you handle biting?", a: "Calmly and consistently. We track patterns, partner with families, and treat it as communication that hasn't found words yet." },
      { q: "What about screen time?", a: "Zero. Not for entertainment, not as a calm-down tool, not at lunch. Ever." },
    ],
  },
  {
    slug: "preschool",
    name: "Preschool",
    age: "2 – 4 years",
    ratio: "10:1",
    hours: "7:00 AM – 5:30 PM",
    weekly: 345,
    hue: "sage",
    tagline: "Project-based days, mud-pie afternoons.",
    intro:
      "Now things get interesting. Preschoolers are scientists, builders, storytellers, and architects of imaginary worlds. Our preschool runs on long projects — sometimes weeks long — chosen by the kids, scaffolded by teachers. A class once spent a month researching worms. Another built a fully functioning post office. We follow what they're curious about, then teach the literacy, math, and science underneath it.",
    rhythm: [
      { time: "7:00", activity: "Arrival, choice work in the studio" },
      { time: "9:00", activity: "Morning meeting, project planning" },
      { time: "10:00", activity: "Outside: garden, climbing hill, mud kitchen" },
      { time: "12:00", activity: "Lunch, family-style with helpers" },
      { time: "1:00", activity: "Rest, then quiet activities" },
      { time: "3:00", activity: "Project deep-work: build, paint, write" },
      { time: "4:30", activity: "Storytime, slow goodbyes" },
    ],
    focus: [
      { area: "Inquiry", body: "Long-form projects driven by what kids notice." },
      { area: "Literacy", body: "Letters in context — writing labels, signs, stories." },
      { area: "Numeracy", body: "Real math: weighing harvest, sorting, measuring." },
      { area: "Social-emotional", body: "Conflict-resolution scripts kids actually use." },
    ],
    weeklyRhythm: [
      { day: "Mon", theme: "New project launch / research" },
      { day: "Tue", theme: "Studio deep-work" },
      { day: "Wed", theme: "Garden science with the chef" },
      { day: "Thu", theme: "Library walk / writing workshop" },
      { day: "Fri", theme: "Project share — families invited" },
    ],
    teachers: [
      { name: "Jenna Okafor", role: "Lead Teacher, Preschool", years: 9, cred: "M.Ed., Reggio-trained", blurb: "I keep a journal of every project a class has ever done. Eleven volumes so far." },
      { name: "Sam Ortega", role: "Co-Lead, Preschool", years: 3, cred: "B.S. Education", blurb: "I built our climbing hill. By hand. Mostly." },
    ],
    faqs: [
      { q: "Do you do letters and numbers?", a: "Constantly — but in service of projects, not as drills. Kids who leave us can read their names and most can write them." },
      { q: "How much screen time?", a: "Still zero. We mean it." },
      { q: "What if my child is shy?", a: "Welcome. Preschool is exactly where soft introductions to group life happen. We never push." },
    ],
  },
  {
    slug: "pre-k",
    name: "Pre-K",
    age: "4 – 5 years",
    ratio: "10:1",
    hours: "7:00 AM – 5:30 PM",
    weekly: 345,
    hue: "sky",
    tagline: "Reading, writing, and confident kindergarteners.",
    intro:
      "Pre-K is a hinge year. We bridge the open-ended exploration of preschool to the structured demands of kindergarten — without skipping the joy. By June, our pre-K kids are reading early-reader books, writing their own stories, doing math up to 20, and walking into kindergarten classrooms with unflappable confidence. The work is rigorous and entirely play-based.",
    rhythm: [
      { time: "7:00", activity: "Arrival, journal-writing if they want" },
      { time: "8:45", activity: "Morning meeting, calendar, weather report" },
      { time: "9:30", activity: "Literacy block — small groups by readiness" },
      { time: "10:30", activity: "Outside: forest walk or sport games" },
      { time: "12:00", activity: "Lunch, family-style" },
      { time: "1:00", activity: "Rest, then quiet reading" },
      { time: "2:30", activity: "Math + science workshop" },
      { time: "4:00", activity: "Free choice, studio, dramatic play" },
      { time: "4:45", activity: "Closing circle, slow goodbyes" },
    ],
    focus: [
      { area: "Early literacy", body: "Phonemic awareness, sight words, beginning reading." },
      { area: "Numeracy", body: "Counting to 100, simple addition, patterns, time." },
      { area: "Executive function", body: "Plans, lists, two-step instructions, perseverance." },
      { area: "Resilience", body: "Sitting with frustration, asking for help, trying again." },
    ],
    weeklyRhythm: [
      { day: "Mon", theme: "New theme launch — books, vocabulary" },
      { day: "Tue", theme: "Writing workshop" },
      { day: "Wed", theme: "Math investigation + garden math" },
      { day: "Thu", theme: "Forest school morning" },
      { day: "Fri", theme: "Author's chair — kids share their writing" },
    ],
    teachers: [
      { name: "Daniel Park", role: "Lead Teacher, Pre-K", years: 11, cred: "M.A.T., kindergarten-credentialed", blurb: "I cried at the first graduation. Still do." },
      { name: "Hannah Reyes", role: "Co-Lead, Pre-K", years: 4, cred: "B.A. Early Childhood, ESL endorsed", blurb: "I'm fluent in Spanish, ASL basics, and unicorn." },
    ],
    faqs: [
      { q: "Will my kid be ready for kindergarten?", a: "Yes. Our pre-K alums consistently rank in the top quartile at their elementary schools — and more importantly, they love going." },
      { q: "Do you do homework?", a: "Optional 'home connections' — like noticing how many leaves are on the tree by the front door — but never worksheets." },
      { q: "Is there testing?", a: "We assess continuously through observation; no formal tests. Parents get a portfolio with samples each quarter." },
    ],
  },
];

export const getProgram = (slug: ProgramSlug) =>
  programs.find((p) => p.slug === slug)!;

/** Attorney profiles (CMS collection "Attorneys" on the live site), in live list order. */

export type StoryBlock =
  | { t: "h2" | "h3"; id?: string; text: string }
  | { t: "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "img"; src: string; alt: string };

export type Attorney = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  name: string;
  role: string;
  /** Practice area shown on the card badge and the "Practice focus" tag. */
  practice: string;
  years: string;
  /** Hero heading on the profile page. */
  heading: string;
  /** One-line bio (team card, hero and "At a glance"). */
  summary: string;
  photo: string;
  stats: { experience: string; cases: string; clients: string };
  email: string;
  phone: string;
  office: string;
  admitted: string;
  languages: string;
  /** Rich-text body ("On this page" section). */
  story: StoryBlock[];
};

export const ATTORNEYS: Attorney[] = [
  {
    "slug": "grace-holloway",
    "metaTitle": "Grace Holloway, Immigration Lawyer",
    "metaDescription": "Grace Holloway is a Meridian Law partner with 12 years in immigration law, handling visas, green cards, citizenship and deportation defense for New York families.",
    "name": "Grace Holloway",
    "role": "Partner",
    "practice": "Immigration",
    "years": "12 yrs",
    "heading": "Grace Holloway, immigration lawyer.",
    "summary": "Handles visas, green cards and deportation defense for families.",
    "photo": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e782b_6ae70234e86c68766694a400_Confident%2520Barrister%2520in%2520Courtroom%2520(1).webp",
    "stats": {
      "experience": "12 yrs",
      "cases": "580+",
      "clients": "610+"
    },
    "email": "g.holloway@meridianlaw.law",
    "phone": "(212) 555-0169",
    "office": "Queens, 118 Queens Blvd",
    "admitted": "New York Immigration Court",
    "languages": "English, Portuguese",
    "story": [
      {
        "t": "h2",
        "id": "background",
        "text": "Helping families build a future."
      },
      {
        "t": "p",
        "text": "Grace is the daughter of immigrants and translated for her parents at their own citizenship interviews. She understands that behind each immigration file is a family trying to build a secure future."
      },
      {
        "t": "p",
        "text": "She reviews a client's complete history before filing anything, because one overlooked detail can cause years of delay."
      },
      {
        "t": "h3",
        "id": "cases",
        "text": "Cases she handles"
      },
      {
        "t": "p",
        "text": "Grace represents individuals and families at every step of the immigration process."
      },
      {
        "t": "ul",
        "items": [
          "Family and work visa petitions",
          "Green card applications",
          "Naturalization and citizenship",
          "Deportation defense"
        ]
      },
      {
        "t": "p",
        "text": "‍"
      },
      {
        "t": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e72e37b124a328878362_6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
        "alt": "Attorney greeting a client with a handshake"
      },
      {
        "t": "h3",
        "id": "approach",
        "text": "How she works"
      },
      {
        "t": "p",
        "text": "When a case becomes urgent she moves fast and keeps families informed at every step."
      },
      {
        "t": "ol",
        "items": [
          "She lays out each realistic option and the expected timeline.",
          "She gathers the documents that will matter most.",
          "She makes sure you always know who is handling your case."
        ]
      },
      {
        "t": "quote",
        "text": "“Every form is a family's future, so every detail matters.”"
      },
      {
        "t": "p",
        "text": "— Grace Holloway, Partner"
      },
      {
        "t": "h3",
        "id": "beyond",
        "text": "Outside the office"
      },
      {
        "t": "p",
        "text": "Grace leads free community workshops on citizenship preparation and supports organizations that assist newly arrived families."
      }
    ]
  },
  {
    "slug": "james-oneill",
    "metaTitle": "James O’Neill, Employment Lawyer",
    "metaDescription": "James O’Neill is a Meridian Law employment lawyer with 8 years fighting for New York workers facing discrimination, retaliation, wrongful firing and lost wages.",
    "name": "James O’Neill",
    "role": "Associate",
    "practice": "Employment law",
    "years": "8 yrs",
    "heading": "James O’Neill, employment lawyer.",
    "summary": "Fights for workers facing discrimination, retaliation and lost wages.",
    "photo": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp",
    "stats": {
      "experience": "8 yrs",
      "cases": "310+",
      "clients": "290+"
    },
    "email": "j.oneill@meridianlaw.law",
    "phone": "(212) 555-0168",
    "office": "Manhattan, 350 Fifth Ave",
    "admitted": "New York, U.S. District Court SDNY",
    "languages": "English, Irish",
    "story": [
      {
        "t": "h2",
        "id": "background",
        "text": "Standing up for working people."
      },
      {
        "t": "p",
        "text": "James saw his father lose a long-held job without explanation or support, and that experience shaped the lawyer he became. He joined Meridian Law to represent employees who are up against far larger organizations."
      },
      {
        "t": "p",
        "text": "He knows that a workplace claim is rarely just about money. It is also about a career, a reputation and being able to walk into the next job with confidence."
      },
      {
        "t": "h3",
        "id": "cases",
        "text": "Cases he handles"
      },
      {
        "t": "p",
        "text": "James represents workers across New York in disputes with their employers."
      },
      {
        "t": "ul",
        "items": [
          "Discrimination and harassment",
          "Retaliation and whistleblower claims",
          "Wrongful termination",
          "Unpaid wages and overtime"
        ]
      },
      {
        "t": "p",
        "text": "‍"
      },
      {
        "t": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f511_6ae7021dd5d7d3e0a42bb1b9_Collaborative%2520Executive%2520Meeting%2520in%2520a%2520Modern%2520Office.webp",
        "alt": "Attorneys and clients meeting in a modern office"
      },
      {
        "t": "h3",
        "id": "approach",
        "text": "How he works"
      },
      {
        "t": "p",
        "text": "James helps you protect your position, often while you are still employed."
      },
      {
        "t": "ol",
        "items": [
          "He builds a clear timeline from emails, schedules and pay records.",
          "He explains what to save and what to avoid.",
          "He shows what any settlement means for your income and career."
        ]
      },
      {
        "t": "quote",
        "text": "“Write it down today. You will be glad you did.”"
      },
      {
        "t": "p",
        "text": "— James O’Neill, Associate"
      },
      {
        "t": "h3",
        "id": "beyond",
        "text": "Outside the office"
      },
      {
        "t": "p",
        "text": "James volunteers at a workers' rights clinic in the Bronx and gives regular talks on fair pay."
      }
    ]
  },
  {
    "slug": "thomas-whitfield",
    "metaTitle": "Thomas Whitfield, Estate Counsel",
    "metaDescription": "Thomas Whitfield, Of Counsel at Meridian Law, has 35 years of estate planning experience writing wills and trusts for three generations of New York families.",
    "name": "Thomas Whitfield",
    "role": "Of Counsel",
    "practice": "Estate planning",
    "years": "35 yrs",
    "heading": "Thomas Whitfield, estate counsel.",
    "summary": "Has written wills and trusts for three generations of New York families.",
    "photo": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7858_6ae701911ec8070a64088a33_Attorney_sitting_at_conference_t%25E2%2580%25A6_cabb0d86_2K.webp",
    "stats": {
      "experience": "35 yrs",
      "cases": "2,400+",
      "clients": "2,100+"
    },
    "email": "t.whitfield@meridianlaw.law",
    "phone": "(212) 555-0167",
    "office": "Brooklyn, 26 Court St",
    "admitted": "New York Surrogate's and Supreme Courts",
    "languages": "English",
    "story": [
      {
        "t": "h2",
        "id": "background",
        "text": "Planning across three generations."
      },
      {
        "t": "p",
        "text": "Thomas has spent his career helping New York families plan for what comes next. Many clients first met him through a parent or grandparent, and he now advises the third generation of some of those families."
      },
      {
        "t": "p",
        "text": "He begins with a long conversation about family, not paperwork, because a plan only works when it reflects how people actually live."
      },
      {
        "t": "h3",
        "id": "cases",
        "text": "Matters he handles"
      },
      {
        "t": "p",
        "text": "Thomas guides families through every part of protecting what they have built."
      },
      {
        "t": "ul",
        "items": [
          "Wills and living trusts",
          "Powers of attorney and health care proxies",
          "Probate and estate administration",
          "Passing on family homes and businesses"
        ]
      },
      {
        "t": "p",
        "text": "‍"
      },
      {
        "t": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e7835_6ae70191e86c68766694954d_Older_couple_reviewing_estate_do%25E2%2580%25A6_b2a7b288.webp",
        "alt": "Older couple reviewing estate documents"
      },
      {
        "t": "h3",
        "id": "approach",
        "text": "How he works"
      },
      {
        "t": "p",
        "text": "Thomas wants your heirs to face as few surprises as possible."
      },
      {
        "t": "ol",
        "items": [
          "He asks who depends on whom and where tensions may arise.",
          "He reviews every document with you in clear language.",
          "He encourages an update after each major life event."
        ]
      },
      {
        "t": "quote",
        "text": "“A good plan is the last kindness you do for your family.”"
      },
      {
        "t": "p",
        "text": "— Thomas Whitfield, Of Counsel"
      },
      {
        "t": "h3",
        "id": "beyond",
        "text": "Outside the office"
      },
      {
        "t": "p",
        "text": "Thomas leads free planning seminars for seniors and serves on the board of a local historical society."
      }
    ]
  },
  {
    "slug": "aisha-rahman",
    "metaTitle": "Aisha Rahman, Criminal Defense Lawyer",
    "metaDescription": "Aisha Rahman is a Meridian Law partner with 14 years in criminal defense, protecting New York clients from the very first call through to trial, day or night.",
    "name": "Aisha Rahman",
    "role": "Partner",
    "practice": "Criminal defense",
    "years": "14 yrs",
    "heading": "Aisha Rahman, defense lawyer.",
    "summary": "Defends clients from the first call through trial, day or night.",
    "photo": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp",
    "stats": {
      "experience": "14 yrs",
      "cases": "900+",
      "clients": "880+"
    },
    "email": "a.rahman@meridianlaw.law",
    "phone": "(212) 555-0166",
    "office": "Queens, 118 Queens Blvd",
    "admitted": "New York, U.S. District Court EDNY",
    "languages": "English, Bengali",
    "story": [
      {
        "t": "h2",
        "id": "background",
        "text": "A serious defense from day one."
      },
      {
        "t": "p",
        "text": "Aisha decided to become a defense lawyer after seeing how quickly one arrest could upend a family in her Queens neighborhood. She believes every person deserves a serious defense from the very first phone call."
      },
      {
        "t": "p",
        "text": "She moves quickly to preserve video, locate witnesses and test the prosecution's evidence before the story hardens."
      },
      {
        "t": "h3",
        "id": "cases",
        "text": "Cases she handles"
      },
      {
        "t": "p",
        "text": "Aisha defends clients at every stage, from arraignment through trial and appeal."
      },
      {
        "t": "ul",
        "items": [
          "Misdemeanor and felony charges",
          "Assault and weapons allegations",
          "Drug offenses",
          "White-collar investigations"
        ]
      },
      {
        "t": "p",
        "text": "‍"
      },
      {
        "t": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
        "alt": "Attorney preparing case files"
      },
      {
        "t": "h3",
        "id": "approach",
        "text": "How she works"
      },
      {
        "t": "p",
        "text": "Aisha takes calls at night, because arrests do not wait for office hours."
      },
      {
        "t": "ol",
        "items": [
          "She gives you an honest view of the risks and the likely timeline.",
          "She tests each piece of evidence before any plea is discussed.",
          "She leaves the final decision with you and prepares you for either path."
        ]
      },
      {
        "t": "quote",
        "text": "“The first 48 hours can shape the entire case.”"
      },
      {
        "t": "p",
        "text": "— Aisha Rahman, Partner"
      },
      {
        "t": "h3",
        "id": "beyond",
        "text": "Outside the office"
      },
      {
        "t": "p",
        "text": "Aisha runs know-your-rights sessions at community centers and supports reentry programs for people returning home."
      }
    ]
  },
  {
    "slug": "marcus-chen",
    "metaTitle": "Marcus Chen, Business Lawyer",
    "metaDescription": "Marcus Chen is a Meridian Law partner with 18 years in business law, advising New York founders and companies on contracts, deals and partnership disputes.",
    "name": "Marcus Chen",
    "role": "Partner",
    "practice": "Business law",
    "years": "18 yrs",
    "heading": "Marcus Chen, business lawyer.",
    "summary": "Advises founders on contracts, deals and partnership disputes.",
    "photo": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp",
    "stats": {
      "experience": "18 yrs",
      "cases": "640+",
      "clients": "520+"
    },
    "email": "m.chen@meridianlaw.law",
    "phone": "(212) 555-0165",
    "office": "Manhattan, 350 Fifth Ave",
    "admitted": "New York, U.S. District Court SDNY",
    "languages": "English, Mandarin",
    "story": [
      {
        "t": "h2",
        "id": "background",
        "text": "An operator first, then counsel."
      },
      {
        "t": "p",
        "text": "Marcus worked in his family's Manhattan import business before law school, so he understands what a contract means to the person who has to live with it."
      },
      {
        "t": "p",
        "text": "Founders and owners value that he thinks about cash flow and relationships before he thinks about clauses, and that he gives a straight answer when a deal is not worth doing."
      },
      {
        "t": "h3",
        "id": "cases",
        "text": "Matters he handles"
      },
      {
        "t": "p",
        "text": "Marcus advises growing companies from formation through sale."
      },
      {
        "t": "ul",
        "items": [
          "Company formation and shareholder agreements",
          "Commercial contracts and licensing",
          "Acquisitions and business sales",
          "Partnership disputes"
        ]
      },
      {
        "t": "p",
        "text": "‍"
      },
      {
        "t": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7844_6ae7022af5c14a1cf5e91132_Collaborative%2520Office%2520Document%2520Signing.webp",
        "alt": "Business owners signing documents in an office"
      },
      {
        "t": "h3",
        "id": "approach",
        "text": "How he works"
      },
      {
        "t": "p",
        "text": "Marcus keeps legal work tied to the decision you actually need to make."
      },
      {
        "t": "ol",
        "items": [
          "He writes contracts that people can read.",
          "He flags the few clauses that carry the real risk.",
          "He looks for a fix that keeps the company moving before he suggests a lawsuit."
        ]
      },
      {
        "t": "quote",
        "text": "“The best contract is the one nobody ever has to argue about.”"
      },
      {
        "t": "p",
        "text": "— Marcus Chen, Partner"
      },
      {
        "t": "h3",
        "id": "beyond",
        "text": "Outside the office"
      },
      {
        "t": "p",
        "text": "Marcus mentors early-stage founders and hosts free contract workshops for local shop owners."
      }
    ]
  },
  {
    "slug": "sofia-martinez",
    "metaTitle": "Sofia Martinez, Family Lawyer",
    "metaDescription": "Sofia Martinez is a Meridian Law partner with 16 years in family law, guiding New York parents through divorce, custody and support with calm, steady care.",
    "name": "Sofia Martinez",
    "role": "Partner",
    "practice": "Family law",
    "years": "16 yrs",
    "heading": "Sofia Martinez, family lawyer.",
    "summary": "Guides families through divorce and custody with calm, steady care.",
    "photo": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f50e_6ae70191fcadf6a70b6b8ccc_Confident%2520Lawyer%2520in%2520Marble%2520Office%2520Hallway.webp",
    "stats": {
      "experience": "16 yrs",
      "cases": "760+",
      "clients": "720+"
    },
    "email": "s.martinez@meridianlaw.law",
    "phone": "(212) 555-0164",
    "office": "Queens, 118 Queens Blvd",
    "admitted": "New York Family and Supreme Courts",
    "languages": "English, Spanish",
    "story": [
      {
        "t": "h2",
        "id": "background",
        "text": "Steady advice in hard moments."
      },
      {
        "t": "p",
        "text": "Sofia came to family law after watching relatives navigate a difficult divorce without clear advice. She has spent her career making sure no client walks into that process feeling alone or uninformed."
      },
      {
        "t": "p",
        "text": "She starts by asking what a good life looks like two years from now, then works backward from that answer to the decisions that matter today."
      },
      {
        "t": "h3",
        "id": "cases",
        "text": "Cases she handles"
      },
      {
        "t": "p",
        "text": "Sofia represents parents and spouses through every stage of a family matter."
      },
      {
        "t": "ul",
        "items": [
          "Divorce and legal separation",
          "Child custody and parenting plans",
          "Child and spousal support",
          "Relocation and family business assets"
        ]
      },
      {
        "t": "p",
        "text": "‍"
      },
      {
        "t": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e7826_6ae70226d5d7d3e0a42bb281_Autumn%2520Walk%2520Hand%2520in%2520Hand.webp",
        "alt": "Couple walking hand in hand in autumn"
      },
      {
        "t": "h3",
        "id": "approach",
        "text": "How she works"
      },
      {
        "t": "p",
        "text": "Where settlement is possible she pursues it firmly, and where it is not she is ready to go before a judge."
      },
      {
        "t": "ol",
        "items": [
          "She puts children first in every custody plan she drafts.",
          "She works out schedules and holidays in practical detail.",
          "She explains every option before you make a decision."
        ]
      },
      {
        "t": "quote",
        "text": "“A good agreement is one you never have to come back to court over.”"
      },
      {
        "t": "p",
        "text": "— Sofia Martinez, Partner"
      },
      {
        "t": "h3",
        "id": "beyond",
        "text": "Outside the office"
      },
      {
        "t": "p",
        "text": "Sofia volunteers at a Queens legal clinic that supports parents who cannot afford a lawyer."
      }
    ]
  }
];

export const getAttorney = (slug: string) => ATTORNEYS.find((a) => a.slug === slug);

/** Live site: the profile "More attorneys" list always shows the first three. */
export const RELATED_ATTORNEYS = ATTORNEYS.slice(0, 3);

export const STORY_NAV = [
  { href: "#background", label: "Background" },
  { href: "#cases", label: "Cases handled" },
  { href: "#approach", label: "How they work" },
  { href: "#beyond", label: "Outside the office" },
];

export const CLIENT_QUOTES = [
  {
    cls: "is-back",
    quote: "“When the insurer called with a low offer, my attorney already had the answer ready. We never had to worry about a thing.”",
    name: "Maria Santos",
    matter: "Truck collision",
    avatar: "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/6ae7022e74f5900247270cb5_Warm%20Executive%20Portrait%20in%20Modern%20Office.webp",
  },
  {
    cls: "is-middle",
    quote: "“They treated my father’s case like it was their own family. We never felt like a file number.”",
    name: "James Whitfield",
    matter: "Wrongful death",
    avatar: "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/6ae70222dd229cd3f477f584_Warm%20Corporate%20Office%20Portrait.webp",
  },
  {
    cls: "",
    quote: "“I was told on day one what my case was worth. Eleven months later, that’s exactly what we got, and my attorney called me with the news.”",
    name: "Rachel Morgan",
    matter: "Car accident",
    avatar: "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/6ae70193b96de19b05372a0c_Confident%20Lawyer%20in%20a%20Warm%20Office.webp",
  },
];

export const OPEN_ROLES = [
  { title: "Trial Attorney", meta: "Full-time · Manhattan" },
  { title: "Senior Paralegal", meta: "Full-time · Brooklyn" },
  { title: "Client Care Specialist", meta: "Hybrid · Queens" },
];

export const CAREER_BENEFITS = [
  { title: "Mentorship from senior trial partners", text: "Second-chair real trials in your first year, guided by senior partners." },
  { title: "Hybrid schedule & paid bar fees", text: "Two remote days every week, with your bar fees covered in full by us." },
  { title: "Pro bono counts toward billables", text: "Up to 100 hours a year on causes you choose, counted as billable work." },
];

export const CAREERS_EMAIL = "careers@meridianlaw.law";

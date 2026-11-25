/* Content for /practice-areas and /practice-area/[slug]. */

export type PracticeCard = {
  slug: string;
  number: string;
  name: string;
  image: string;
  excerpt: string;
  tags: string[];
};

export type PracticeTab = { label: string; slugs: string[] };

export type PracticeArea = {
  slug: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  heroText: string;
  facts: { label: string; value: string; counter: boolean }[];
  overview: { heading: string; text: string };
  cases: string[];
  image: { src: string; alt: string };
  processText: string;
  steps: { title: string; copy: string }[];
  quote: string;
  quoteName: string;
  outcome: { heading: string; text: string };
  deadlinesText: string;
  deadlines: { time: string; text: string }[];
  consult: { heading: string; text: string };
  attorneys: { href: string; name: string; role: string; years: string; img: string }[];
};

const CDN = "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/";

/* ---------- /practice-areas ---------- */

export const PA_HERO = {
  image: CDN + "6ae7021dd5d7d3e0a42bb1b9_Collaborative%20Executive%20Meeting%20in%20a%20Modern%20Office.webp",
  alt: "Meridian Law attorneys meeting around a table in a modern office",
  heading: "Legal help for every chapter.",
  text: "Six practice groups, one standard of care. Whatever you are facing, a senior New York attorney who focuses on exactly that area of law will lead your case.",
  stats: [
    { value: "6", label: "Practice areas" },
    { value: "40+", label: "Senior attorneys" },
    { value: "24/7", label: "Real people answer" },
  ],
  rating: { score: "4.9", label: "Rated by 1,200+ New York clients" },
};

export const PA_BENTO = {
  image: CDN + "6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
  alt: "Attorney shaking hands with a client",
  quote: "“Meridian Law handled my accident, then my divorce, then my company’s contracts. One phone number for everything.”",
  author: "Priya N. · Client since 2012",
  cards: [
    { eyebrow: "Results", value: "$480M+", text: "Recovered for clients since 1999", dark: true },
    { eyebrow: "Expertise", value: "6", text: "Practice areas under one roof", dark: false },
    { eyebrow: "Our team", value: "40+", text: "Attorneys across 3 NYC offices", dark: false },
    { eyebrow: "Availability", value: "24/7", text: "Real people answer every call", dark: true },
  ],
};

export const PA_STEPS = [
  {
    title: "Free consultation",
    text: "Speak with a senior attorney within 24 hours — no cost, no obligation.",
    image: CDN + "6ae70191e86c68766694953c_Warm%20Executive%20Office%20Portrait.webp",
    alt: "Senior attorney in a warm office during a consultation",
  },
  {
    title: "Strategy & fees",
    text: "A written plan and a fixed or contingency fee before any work begins.",
    image: CDN + "6ae7022af5c14a1cf5e91132_Collaborative%20Office%20Document%20Signing.webp",
    alt: "Client and attorney signing a written plan",
  },
  {
    title: "We do the work",
    text: "Evidence, filings and negotiation, with weekly updates you can follow.",
    image: CDN + "6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%E2%80%A6_a88ad4fb.webp",
    alt: "Attorney preparing case files",
  },
  {
    title: "Resolution",
    text: "Settlement, agreement or verdict — we don’t stop until it’s done.",
    image: CDN + "6ae701911593f02f218ae531_Polished%20Executive%20Portrait%20in%20a%20Warm%20Office.webp",
    alt: "Attorney in a warm office after a resolved case",
  },
];

export const PA_FAQ_IMAGE = CDN + "6ae70191fcadf6a70b6b8ccc_Confident%20Lawyer%20in%20Marble%20Office%20Hallway.webp";

export const PA_FAQS = [
  {
    q: "How much does a first consultation cost?",
    a: "Nothing. Every first consultation is free — in person, by phone or by video — with no obligation to hire us.",
  },
  {
    q: "Do you work on contingency?",
    a: "Yes, for injury and employment matters. You pay no attorney fee unless we recover money for you, and we explain every cost in writing first.",
  },
  {
    q: "How fast will an attorney call me back?",
    a: "Our intake team replies within one business hour, and a senior attorney speaks with you within 24 hours.",
  },
  {
    q: "Can I switch to Meridian Law from another lawyer?",
    a: "Yes. We review your file, request your records from your current lawyer and handle the handover, so your case keeps moving.",
  },
  {
    q: "Do you serve clients outside New York City?",
    a: "We represent clients across New York State and meet by video when you can’t reach one of our NYC offices.",
  },
  {
    q: "Can one attorney help with several issues?",
    a: "Yes. Your lead attorney coordinates with our other practice groups, so you keep one point of contact for everything.",
  },
];

/* ---------- Generated from the live CMS pages (practice-area__<slug>) ---------- */

export const PRACTICE_CARDS: PracticeCard[] = [
  {
    "slug": "personal-injury",
    "number": "01",
    "name": "Personal Injury",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e72e37b124a328878362_6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
    "excerpt": "Car, truck, workplace and slip-and-fall injuries — no fee unless we win.",
    "tags": [
      "Individuals",
      "Contingency"
    ]
  },
  {
    "slug": "family-law",
    "number": "02",
    "name": "Family Law",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e7826_6ae70226d5d7d3e0a42bb281_Autumn%2520Walk%2520Hand%2520in%2520Hand.webp",
    "excerpt": "Divorce, custody, support and prenups handled with care and discretion.",
    "tags": [
      "Families",
      "Fixed fee"
    ]
  },
  {
    "slug": "criminal-defense",
    "number": "03",
    "name": "Criminal Defense",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e782b_6ae70234e86c68766694a400_Confident%2520Barrister%2520in%2520Courtroom%2520(1).webp",
    "excerpt": "24/7 defense for DWI, assault, drug and white-collar charges.",
    "tags": [
      "Individuals",
      "24/7"
    ]
  },
  {
    "slug": "business-law",
    "number": "04",
    "name": "Business Law",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e7830_6ae701916c066111f025a9f9_Confident%2520Corporate%2520Team%2520in%2520Modern%2520Atrium.webp",
    "excerpt": "Formation, contracts, partnerships and disputes for growing companies.",
    "tags": [
      "Businesses",
      "Retainer"
    ]
  },
  {
    "slug": "estate-planning",
    "number": "05",
    "name": "Estate Planning",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e7835_6ae70191e86c68766694954d_Older_couple_reviewing_estate_do%25E2%2580%25A6_b2a7b288.webp",
    "excerpt": "Wills, trusts and powers of attorney that protect the people you love.",
    "tags": [
      "Families",
      "Fixed fee"
    ]
  },
  {
    "slug": "employment-law",
    "number": "06",
    "name": "Employment Law",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp",
    "excerpt": "Wrongful termination, discrimination, harassment and unpaid wages.",
    "tags": [
      "Individuals",
      "Contingency"
    ]
  }
];

export const PRACTICE_TABS: PracticeTab[] = [
  {
    "label": "All areas",
    "slugs": [
      "personal-injury",
      "family-law",
      "criminal-defense",
      "business-law",
      "estate-planning",
      "employment-law"
    ]
  },
  {
    "label": "For individuals",
    "slugs": [
      "employment-law",
      "criminal-defense",
      "personal-injury"
    ]
  },
  {
    "label": "For families",
    "slugs": [
      "estate-planning",
      "family-law"
    ]
  }
];

export const PA_NAV: { href: string; label: string }[] = [
  {
    "href": "#overview",
    "label": "Overview"
  },
  {
    "href": "#cases",
    "label": "Cases we handle"
  },
  {
    "href": "#process",
    "label": "How we build your case"
  },
  {
    "href": "#outcome",
    "label": "Your outcome"
  },
  {
    "href": "#deadlines",
    "label": "Time limits in New York"
  }
];

export const PA_WHY = {
  "title": "Why clients choose us",
  "items": [
    "Senior trial attorneys lead every case",
    "Clear fees agreed before work begins",
    "24/7 response, hospital & home visits",
    "Spanish and Mandarin spoken"
  ],
  "score": "4.9",
  "count": "612 Google & Avvo reviews"
};

export const PA_SECTION = {
  "casesHeading": "Cases we handle",
  "processHeading": "How we build your case",
  "deadlinesHeading": "Time limits in New York",
  "deadlineTitle": "Key deadlines to know",
  "deadlineNote": "This is general information, not legal advice. Your deadline depends on the facts of your case — call us to confirm yours.",
  "consultBadge": "Free review",
  "consultButton": "Start my free review",
  "callLabel": "Or call 24/7",
  "callNumber": "(212) 555-0148",
  "related": [
    "personal-injury",
    "family-law",
    "criminal-defense"
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    "slug": "personal-injury",
    "title": "Personal Injury Trial Lawyers",
    "heroImage": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae992f7eeddc344aae8ff4d_6ae7022e74f5900247270cb5_Warm%2520Executive%2520Portrait%2520in%2520Modern%2520Office.webp",
    "heroAlt": "Personal Injury Trial Lawyers",
    "heroText": "Hurt in a crash, at work or by a medical error? Our New York trial attorneys handle every call, form and insurer — and you pay nothing unless we win.",
    "facts": [
      {
        "label": "Average recovery",
        "value": "$1.2M",
        "counter": true
      },
      {
        "label": "Cases won",
        "value": "1,400+",
        "counter": true
      },
      {
        "label": "Fee",
        "value": "No win, no fee",
        "counter": false
      },
      {
        "label": "Response time",
        "value": "Under 1 hour",
        "counter": false
      }
    ],
    "overview": {
      "heading": "An accident can change everything in a second.",
      "text": "Medical bills arrive, work stops, and an insurance adjuster calls before you’ve even left the hospital. At Meridian Law & Partners, our personal injury lawyers step in immediately — protecting evidence, handling every insurer call and building a claim that reflects what you have truly lost."
    },
    "cases": [
      "Car, truck, motorcycle and rideshare accidents",
      "Construction and workplace injuries (Labor Law §240/241)",
      "Slip, trip and fall on unsafe property",
      "Medical and hospital malpractice",
      "Wrongful death and catastrophic injury"
    ],
    "image": {
      "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae991e1f8d6cfe1c8f4eeb4_6ae701911593f02f218ae531_Polished%2520Executive%2520Portrait%2520in%2520a%2520Warm%2520Office.webp",
      "alt": "Personal Injury Trial Lawyers"
    },
    "processText": "Insurers start investigating within hours. We move faster, so the evidence that proves your claim is secured before it disappears.",
    "steps": [
      {
        "title": "Free case review",
        "copy": "Tell us what happened. A senior attorney reviews your case within one hour and explains your options."
      },
      {
        "title": "Evidence & investigation",
        "copy": "We collect police reports, CCTV, medical records and witness statements, and bring in experts early."
      },
      {
        "title": "Demand & negotiation",
        "copy": "We calculate every loss and negotiate with the insurer. You approve every offer before it is accepted."
      },
      {
        "title": "Trial, if needed",
        "copy": "If the offer is not fair, we file suit and take your case to court. Every file is built for trial from day one."
      }
    ],
    "quote": "“Insurers start building their case the day of the accident. So should you.”",
    "quoteName": "— Marcus Chen, Partner",
    "outcome": {
      "heading": "Your compensation",
      "text": "Depending on your case, you may recover medical expenses, lost wages and future earning capacity, pain and suffering, and the cost of long-term care. We work with medical experts and economists to put a real number on every one of them."
    },
    "deadlinesText": "New York sets strict deadlines for injury claims. Miss one and you can lose the right to compensation, even with a strong case.",
    "deadlines": [
      {
        "time": "3 years",
        "text": "Most personal injury claims, from the date of the accident."
      },
      {
        "time": "2½ years",
        "text": "Medical malpractice claims, from the date of the error or last treatment."
      },
      {
        "time": "90 days",
        "text": "Notice of claim against New York City or another public agency."
      }
    ],
    "consult": {
      "heading": "Talk to an injury lawyer today.",
      "text": "No fee unless we win. Response in under one hour."
    },
    "attorneys": [
      {
        "href": "/attorney/aisha-rahman",
        "name": "Aisha Rahman",
        "role": "Partner",
        "years": "14 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp"
      },
      {
        "href": "/attorney/james-oneill",
        "name": "James O’Neill",
        "role": "Associate",
        "years": "8 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp"
      },
      {
        "href": "/attorney/marcus-chen",
        "name": "Marcus Chen",
        "role": "Partner",
        "years": "18 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp"
      }
    ]
  },
  {
    "slug": "family-law",
    "title": "Family Law Attorneys",
    "heroImage": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e7826_6ae70226d5d7d3e0a42bb281_Autumn%2520Walk%2520Hand%2520in%2520Hand.webp",
    "heroAlt": "Family Law Attorneys",
    "heroText": "Divorce, custody and support decisions shape years of your life. Our New York family lawyers protect your children, your home and your peace of mind.",
    "facts": [
      {
        "label": "Families helped",
        "value": "2,300+",
        "counter": true
      },
      {
        "label": "Cases won",
        "value": "900+",
        "counter": true
      },
      {
        "label": "Fee",
        "value": "Fixed fee",
        "counter": false
      },
      {
        "label": "Response time",
        "value": "Same day",
        "counter": false
      }
    ],
    "overview": {
      "heading": "Hard family decisions deserve steady advice.",
      "text": "When a marriage ends or a parenting plan breaks down, every choice feels urgent. We slow things down, explain your real options and press for agreements that still work years from now, in court only when we must."
    },
    "cases": [
      "Contested and uncontested divorce",
      "Child custody and parenting time",
      "Child and spousal support",
      "Prenuptial and postnuptial agreements",
      "Orders of protection"
    ],
    "image": {
      "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e784e_6ae70193b96de19b05372a0c_Confident%2520Lawyer%2520in%2520a%2520Warm%2520Office.webp",
      "alt": "Family Law Attorneys"
    },
    "processText": "Good outcomes start with good records. We organize your finances and parenting history early, so you negotiate from clarity rather than fear.",
    "steps": [
      {
        "title": "Private consultation",
        "copy": "Share your situation in confidence. We map your options, likely costs and a realistic timeline."
      },
      {
        "title": "Financial disclosure",
        "copy": "We gather income, asset and debt records so that every proposal rests on accurate numbers."
      },
      {
        "title": "Negotiation & mediation",
        "copy": "We work toward a settlement that protects your children and keeps legal costs under control."
      },
      {
        "title": "Court, if needed",
        "copy": "If talks fail, your attorney presents your case firmly in Family or Supreme Court."
      }
    ],
    "quote": "“The best family settlement is the one you can still live with in ten years.”",
    "quoteName": "— Sofia Martinez, Partner",
    "outcome": {
      "heading": "Your outcome",
      "text": "We aim for a clear division of property, a parenting plan your children can rely on and support orders that reflect real income, written so they hold up over time."
    },
    "deadlinesText": "Family cases move on short clocks once papers are served. Responding late can limit your choices, so call us as soon as you receive anything.",
    "deadlines": [
      {
        "time": "20 days",
        "text": "To respond to a divorce summons served on you in New York."
      },
      {
        "time": "30 days",
        "text": "To file objections to a Support Magistrate’s order in most cases."
      },
      {
        "time": "30 days",
        "text": "To file a notice of appeal after notice of a final order."
      }
    ],
    "consult": {
      "heading": "Talk to a family lawyer today.",
      "text": "A private first call, clear fixed fees and a same-day reply."
    },
    "attorneys": [
      {
        "href": "/attorney/sofia-martinez",
        "name": "Sofia Martinez",
        "role": "Partner",
        "years": "16 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f50e_6ae70191fcadf6a70b6b8ccc_Confident%2520Lawyer%2520in%2520Marble%2520Office%2520Hallway.webp"
      },
      {
        "href": "/attorney/grace-holloway",
        "name": "Grace Holloway",
        "role": "Partner",
        "years": "12 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e782b_6ae70234e86c68766694a400_Confident%2520Barrister%2520in%2520Courtroom%2520(1).webp"
      },
      {
        "href": "/attorney/thomas-whitfield",
        "name": "Thomas Whitfield",
        "role": "Of Counsel",
        "years": "35 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7858_6ae701911ec8070a64088a33_Attorney_sitting_at_conference_t%25E2%2580%25A6_cabb0d86_2K.webp"
      }
    ]
  },
  {
    "slug": "criminal-defense",
    "title": "Criminal Defense Lawyers",
    "heroImage": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e782b_6ae70234e86c68766694a400_Confident%2520Barrister%2520in%2520Courtroom%2520(1).webp",
    "heroAlt": "Criminal Defense Lawyers",
    "heroText": "Arrested or under investigation? Say nothing and call us. Our New York defense attorneys answer day and night and start protecting your rights at once.",
    "facts": [
      {
        "label": "Charges reduced",
        "value": "78%",
        "counter": true
      },
      {
        "label": "Cases won",
        "value": "1,100+",
        "counter": true
      },
      {
        "label": "Fee",
        "value": "Flat retainer",
        "counter": false
      },
      {
        "label": "Response time",
        "value": "24/7",
        "counter": false
      }
    ],
    "overview": {
      "heading": "The first hours can decide your whole case.",
      "text": "A charge does not mean a conviction. We step in before you speak to police, challenge how evidence was gathered and work to get charges reduced or dismissed while protecting your job, family and record."
    },
    "cases": [
      "DWI and traffic offenses",
      "Assault and domestic charges",
      "Drug possession and distribution",
      "White-collar and fraud investigations",
      "Appeals and record sealing"
    ],
    "image": {
      "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f50e_6ae70191fcadf6a70b6b8ccc_Confident%2520Lawyer%2520in%2520Marble%2520Office%2520Hallway.webp",
      "alt": "Criminal Defense Lawyers"
    },
    "processText": "Prosecutors prepare early, and so do we. We review the stop, the search and every statement to find the weaknesses in the case against you.",
    "steps": [
      {
        "title": "Immediate response",
        "copy": "Call at any hour. We advise you right away and can appear at arraignment."
      },
      {
        "title": "Evidence review",
        "copy": "We study police reports, body-camera footage and lab results to spot rights violations."
      },
      {
        "title": "Motions & negotiation",
        "copy": "We move to suppress unlawful evidence and press prosecutors for dismissal or reduced charges."
      },
      {
        "title": "Trial defense",
        "copy": "If the offer is not right, we are ready to defend you in front of a judge or jury."
      }
    ],
    "quote": "“Your silence protects you. Your lawyer speaks for you.”",
    "quoteName": "— Aisha Rahman, Partner",
    "outcome": {
      "heading": "Your outcome",
      "text": "Depending on the facts, we pursue dismissal, reduced charges, treatment alternatives or an acquittal at trial, always weighing the impact on your record and immigration status."
    },
    "deadlinesText": "Criminal cases run on strict timelines from the moment of arrest. Early counsel keeps every option open.",
    "deadlines": [
      {
        "time": "24 hours",
        "text": "General target for arraignment after an arrest in New York."
      },
      {
        "time": "6 months",
        "text": "Time for prosecutors to be ready for trial in most felony cases."
      },
      {
        "time": "30 days",
        "text": "To file a notice of appeal after sentencing."
      }
    ],
    "consult": {
      "heading": "Talk to a defense lawyer now.",
      "text": "Real attorneys answer around the clock, including at weekends."
    },
    "attorneys": [
      {
        "href": "/attorney/aisha-rahman",
        "name": "Aisha Rahman",
        "role": "Partner",
        "years": "14 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp"
      },
      {
        "href": "/attorney/grace-holloway",
        "name": "Grace Holloway",
        "role": "Partner",
        "years": "12 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e782b_6ae70234e86c68766694a400_Confident%2520Barrister%2520in%2520Courtroom%2520(1).webp"
      },
      {
        "href": "/attorney/james-oneill",
        "name": "James O’Neill",
        "role": "Associate",
        "years": "8 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp"
      }
    ]
  },
  {
    "slug": "business-law",
    "title": "Business Law Attorneys",
    "heroImage": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e7830_6ae701916c066111f025a9f9_Confident%2520Corporate%2520Team%2520in%2520Modern%2520Atrium.webp",
    "heroAlt": "Business Law Attorneys",
    "heroText": "From first filing to final exit, we give New York companies practical legal advice that protects the deal and keeps the business moving.",
    "facts": [
      {
        "label": "Companies advised",
        "value": "650+",
        "counter": true
      },
      {
        "label": "Cases won",
        "value": "480+",
        "counter": true
      },
      {
        "label": "Fee",
        "value": "Monthly retainer",
        "counter": false
      },
      {
        "label": "Response time",
        "value": "Same day",
        "counter": false
      }
    ],
    "overview": {
      "heading": "Good contracts prevent expensive surprises.",
      "text": "Growing companies need counsel who understand the commercial stakes. We draft clear agreements, resolve partner disputes early and act as an outside general counsel for owners who need answers quickly."
    },
    "cases": [
      "Company formation and governance",
      "Commercial contracts and negotiations",
      "Partner and shareholder disputes",
      "Mergers, acquisitions and sales",
      "Business litigation"
    ],
    "image": {
      "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f511_6ae7021dd5d7d3e0a42bb1b9_Collaborative%2520Executive%2520Meeting%2520in%2520a%2520Modern%2520Office.webp",
      "alt": "Business Law Attorneys"
    },
    "processText": "We start with your commercial goal, then build the legal structure around it, so advice supports growth instead of slowing it down.",
    "steps": [
      {
        "title": "Business review",
        "copy": "We learn your company, its risks and what you need to achieve this year."
      },
      {
        "title": "Risk audit",
        "copy": "We review contracts, ownership records and compliance to find gaps before they cost you."
      },
      {
        "title": "Draft & negotiate",
        "copy": "We prepare clear documents and negotiate terms you can actually operate under."
      },
      {
        "title": "Resolve disputes",
        "copy": "If a conflict arises, we push for a commercial settlement and litigate when it is needed."
      }
    ],
    "quote": "“The cheapest lawsuit is the one a clear contract prevented.”",
    "quoteName": "— Marcus Chen, Partner",
    "outcome": {
      "heading": "Your outcome",
      "text": "You get documents your team can follow, fewer disputes and a legal partner who knows your company when an urgent decision lands."
    },
    "deadlinesText": "Filing and claim deadlines apply from the day a company forms. Missing one can cost you rights or good standing.",
    "deadlines": [
      {
        "time": "120 days",
        "text": "To complete publication after forming a New York LLC."
      },
      {
        "time": "20 days",
        "text": "To answer a summons served on you personally in New York."
      },
      {
        "time": "6 years",
        "text": "To bring most claims for breach of a written contract."
      }
    ],
    "consult": {
      "heading": "Talk to a business lawyer today.",
      "text": "Plain answers, predictable retainers and a same-day reply."
    },
    "attorneys": [
      {
        "href": "/attorney/marcus-chen",
        "name": "Marcus Chen",
        "role": "Partner",
        "years": "18 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp"
      },
      {
        "href": "/attorney/thomas-whitfield",
        "name": "Thomas Whitfield",
        "role": "Of Counsel",
        "years": "35 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7858_6ae701911ec8070a64088a33_Attorney_sitting_at_conference_t%25E2%2580%25A6_cabb0d86_2K.webp"
      },
      {
        "href": "/attorney/james-oneill",
        "name": "James O’Neill",
        "role": "Associate",
        "years": "8 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp"
      }
    ]
  },
  {
    "slug": "estate-planning",
    "title": "Estate Planning Attorneys",
    "heroImage": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e7835_6ae70191e86c68766694954d_Older_couple_reviewing_estate_do%25E2%2580%25A6_b2a7b288.webp",
    "heroAlt": "Estate Planning Attorneys",
    "heroText": "Wills, trusts and powers of attorney written clearly, so the people you love are protected and your wishes are followed exactly.",
    "facts": [
      {
        "label": "Plans completed",
        "value": "3,100+",
        "counter": true
      },
      {
        "label": "Cases won",
        "value": "600+",
        "counter": true
      },
      {
        "label": "Fee",
        "value": "Fixed fee",
        "counter": false
      },
      {
        "label": "Response time",
        "value": "Same day",
        "counter": false
      }
    ],
    "overview": {
      "heading": "A clear plan is a gift to your family.",
      "text": "Without a plan, New York law and the courts decide what happens next. We turn your wishes into simple documents that reduce conflict, delay and avoidable taxes for those you leave behind."
    },
    "cases": [
      "Wills and revocable trusts",
      "Powers of attorney and health care proxies",
      "Medicaid and long-term care planning",
      "Special needs trusts",
      "Estate tax planning"
    ],
    "image": {
      "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
      "alt": "Estate Planning Attorneys"
    },
    "processText": "Every plan begins with a conversation about your family, not a form. We then match the right documents to what matters most to you.",
    "steps": [
      {
        "title": "Family conversation",
        "copy": "We discuss your family, your assets and exactly what you want to protect."
      },
      {
        "title": "Plan design",
        "copy": "We recommend the simplest structure that meets your goals and explain why."
      },
      {
        "title": "Drafting & signing",
        "copy": "We prepare your documents and supervise signing so they are valid under New York law."
      },
      {
        "title": "Regular review",
        "copy": "We update your plan after births, marriages, moves or changes in the law."
      }
    ],
    "quote": "“Planning ahead is the last kindness you can do for your family.”",
    "quoteName": "— Thomas Whitfield, Of Counsel",
    "outcome": {
      "heading": "Your outcome",
      "text": "You leave with signed documents, a clear record of who decides what, and the confidence that your family will not have to guess."
    },
    "deadlinesText": "Some planning only works when it is done early, and some filings follow a death on a fixed schedule.",
    "deadlines": [
      {
        "time": "5 years",
        "text": "Medicaid look-back on asset transfers for nursing home care."
      },
      {
        "time": "9 months",
        "text": "To file federal estate tax returns after a death, where required."
      },
      {
        "time": "9 months",
        "text": "To make a qualified disclaimer of an inheritance."
      }
    ],
    "consult": {
      "heading": "Talk to an estate lawyer today.",
      "text": "One clear fixed price for your plan and a same-day reply."
    },
    "attorneys": [
      {
        "href": "/attorney/thomas-whitfield",
        "name": "Thomas Whitfield",
        "role": "Of Counsel",
        "years": "35 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7858_6ae701911ec8070a64088a33_Attorney_sitting_at_conference_t%25E2%2580%25A6_cabb0d86_2K.webp"
      },
      {
        "href": "/attorney/sofia-martinez",
        "name": "Sofia Martinez",
        "role": "Partner",
        "years": "16 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f50e_6ae70191fcadf6a70b6b8ccc_Confident%2520Lawyer%2520in%2520Marble%2520Office%2520Hallway.webp"
      },
      {
        "href": "/attorney/marcus-chen",
        "name": "Marcus Chen",
        "role": "Partner",
        "years": "18 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp"
      }
    ]
  },
  {
    "slug": "employment-law",
    "title": "Employment Law Attorneys",
    "heroImage": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp",
    "heroAlt": "Employment Law Attorneys",
    "heroText": "Fired unfairly, harassed or underpaid? Our New York employment lawyers stand with workers and fight for the pay and respect you are owed.",
    "facts": [
      {
        "label": "Average settlement",
        "value": "$185K",
        "counter": true
      },
      {
        "label": "Cases won",
        "value": "720+",
        "counter": true
      },
      {
        "label": "Fee",
        "value": "No win, no fee",
        "counter": false
      },
      {
        "label": "Response time",
        "value": "Under 1 hour",
        "counter": false
      }
    ],
    "overview": {
      "heading": "Nobody should fear going to work.",
      "text": "Employers have HR teams and outside counsel on their side. You deserve the same. We document what happened, deal with your employer for you and pursue the compensation the law allows."
    },
    "cases": [
      "Wrongful termination and retaliation",
      "Discrimination and harassment",
      "Unpaid wages and overtime",
      "Severance negotiation",
      "Whistleblower protection"
    ],
    "image": {
      "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e72e37b124a328878362_6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
      "alt": "Employment Law Attorneys"
    },
    "processText": "Workplace evidence can vanish fast. We help you preserve messages, schedules and pay records before access is cut off.",
    "steps": [
      {
        "title": "Confidential review",
        "copy": "Tell us what happened at work. We explain your rights and how strong your claim looks."
      },
      {
        "title": "Evidence & records",
        "copy": "We organize emails, reviews and pay data, and identify witnesses who can back you up."
      },
      {
        "title": "Agency & demand",
        "copy": "We file with the right agency when needed and send your employer a firm demand."
      },
      {
        "title": "Settlement or suit",
        "copy": "We negotiate hard, and we take your employer to court if the offer falls short."
      }
    ],
    "quote": "“Write it down the day it happens. Dates win workplace cases.”",
    "quoteName": "— James O’Neill, Associate",
    "outcome": {
      "heading": "Your outcome",
      "text": "Depending on your claim, you may recover back pay, lost benefits, emotional distress damages, unpaid overtime and legal fees, or negotiate a fair exit."
    },
    "deadlinesText": "Workplace claims often have short filing windows, and each agency has its own clock.",
    "deadlines": [
      {
        "time": "300 days",
        "text": "To file most discrimination charges with the federal EEOC in New York."
      },
      {
        "time": "3 years",
        "text": "To bring most claims under the New York State Human Rights Law."
      },
      {
        "time": "6 years",
        "text": "To claim unpaid wages under the New York Labor Law."
      }
    ],
    "consult": {
      "heading": "Talk to a workplace lawyer today.",
      "text": "No fee on most claims unless we win. Fast, private advice."
    },
    "attorneys": [
      {
        "href": "/attorney/james-oneill",
        "name": "James O’Neill",
        "role": "Associate",
        "years": "8 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp"
      },
      {
        "href": "/attorney/marcus-chen",
        "name": "Marcus Chen",
        "role": "Partner",
        "years": "18 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp"
      },
      {
        "href": "/attorney/aisha-rahman",
        "name": "Aisha Rahman",
        "role": "Partner",
        "years": "14 yrs",
        "img": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp"
      }
    ]
  }
];

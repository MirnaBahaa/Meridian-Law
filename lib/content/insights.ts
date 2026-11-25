/** Insights (legal guides): listing + full article bodies, captured from the live CMS. */

export type Block =
  | { t: "p"; text: string }
  | { t: "h2" | "h3"; id?: string; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "img"; src: string; alt: string };

export type Insight = {
  slug: string;
  /** Full title used on cards and lists. */
  title: string;
  /** Short hero heading on the article page. */
  heading: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  author: { name: string; photo: string; bio: string };
  toc: { id: string; label: string }[];
  takeaways: string[];
  body: Block[];
};

export const INSIGHTS: Insight[] = 
[
  {
    slug: "what-to-tell-an-insurance-adjuster",
    title: "What to tell an insurance adjuster",
    heading: "What to tell an insurance adjuster.",
    category: "Personal injury",
    readTime: "8 min read",
    date: "October 12, 2026",
    excerpt: "The first call from an adjuster can shape your whole claim. Here are the phrases that protect you, and the innocent ones that cost injured New Yorkers thousands.",
    image: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e783f_6ae70191dd229cd3f477e929_Attorney_reviewing_documents_wit%25E2%2580%25A6_de945cd1.webp",
    author: {
      name: "Aisha Rahman",
      photo: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp",
      bio: "Defends clients from the first call through trial, day or night."
    },
    toc: [
      {
        id: "say",
        label: "What you should say"
      },
      {
        id: "phrases",
        label: "Phrases that hurt"
      },
      {
        id: "recorded",
        label: "Recorded statements"
      },
      {
        id: "lawyer",
        label: "When to call a lawyer"
      }
    ],
    takeaways: [
      "Be polite, brief and factual, and never guess or speculate.",
      "Never give a recorded statement before speaking to a lawyer.",
      "Don’t say “I’m fine” or apologise. Both can be used against you."
    ],
    body: [
      {
        t: "p",
        text: "Within a day or two of an accident, you will probably get a friendly call from the other driver’s insurance company."
      },
      {
        t: "p",
        text: "The adjuster will sound helpful and may even offer to “get things moving.” But their job is simple: to close your claim for as little as possible. What you say in that first call can follow your case all the way to settlement."
      },
      {
        t: "h2",
        id: "say",
        text: "What you should say"
      },
      {
        t: "p",
        text: "Give your name, contact details and the basic facts: date, time and location. Confirm the names of any witnesses and your insurance information. That’s it. Anything more should wait until you’ve spoken with an attorney."
      },
      {
        t: "p",
        text: "‍"
      },
      {
        t: "img",
        src: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
        alt: "Attorney organising accident claim documents"
      },
      {
        t: "h2",
        id: "phrases",
        text: "Phrases that hurt"
      },
      {
        t: "p",
        text: "Each of these sounds harmless in the moment, and each can be used to reduce or deny your claim:"
      },
      {
        t: "ul",
        items: [
          "“I’m okay.” Whiplash and concussions often appear 24 to 72 hours later.",
          "“It was partly my fault.” Fault is decided from the evidence, not from a phone call.",
          "“I didn’t see them.” This can be read as an admission that you weren’t paying attention."
        ]
      },
      {
        t: "quote",
        text: "“The adjuster is not your friend, and not your enemy. They are a negotiator, so make sure you have one too.”"
      },
      {
        t: "h2",
        id: "recorded",
        text: "Recorded statements"
      },
      {
        t: "p",
        text: "You are rarely required to give the other driver’s insurer a recorded statement, even if the adjuster makes it sound routine. Politely decline and ask them to put any questions in writing. Once your words are on tape, they can be replayed months later and taken out of context."
      },
      {
        t: "h2",
        id: "lawyer",
        text: "When to call a lawyer"
      },
      {
        t: "p",
        text: "Not every fender bender needs an attorney, but some situations should prompt a call the same day:"
      },
      {
        t: "ol",
        items: [
          "You were injured or needed medical treatment.",
          "The insurer disputes who was at fault.",
          "You’ve received a quick settlement offer.",
          "The adjuster is pressing you for a recorded statement."
        ]
      },
      {
        t: "p",
        text: "This article is general information and not legal advice for your situation."
      }
    ]
  },
  {
    slug: "how-long-to-file-injury-claim-new-york",
    title: "How long do you have to file an injury claim in New York?",
    heading: "How long you have to file a claim.",
    category: "Personal injury",
    readTime: "6 min read",
    date: "September 22, 2026",
    excerpt: "Most injury claims have a three-year limit, but some have just 90 days.",
    image: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e72e37b124a328878362_6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
    author: {
      name: "Marcus Chen",
      photo: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp",
      bio: "Advises founders on contracts, deals and partnership disputes."
    },
    toc: [
      {
        id: "",
        label: "Shorter deadlines"
      },
      {
        id: "",
        label: "What to do this week"
      }
    ],
    takeaways: [
      "Most New York injury claims have a three-year limit.",
      "Claims against a public agency can need notice within 90 days.",
      "Miss the deadline and even a strong case can be dismissed."
    ],
    body: [
      {
        t: "p",
        text: "Every injury claim has a clock on it, and it starts sooner than most people think."
      },
      {
        t: "p",
        text: "The deadline depends on the kind of claim and on who you are bringing it against, so it is worth checking early."
      },
      {
        t: "h2",
        id: "rule",
        text: "The general rule"
      },
      {
        t: "p",
        text: "New York gives most people three years from the date of an accident to file a personal injury lawsuit. Miss the deadline and a court can dismiss your case, however strong it is."
      },
      {
        t: "p",
        text: "‍"
      },
      {
        t: "img",
        src: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e783f_6ae70191dd229cd3f477e929_Attorney_reviewing_documents_wit%25E2%2580%25A6_de945cd1.webp",
        alt: "Attorney reviewing claim documents with a client"
      },
      {
        t: "h2",
        id: "shorter",
        text: "Shorter deadlines"
      },
      {
        t: "p",
        text: "Some claims move much faster, and these are the ones that catch people out:"
      },
      {
        t: "ul",
        items: [
          "Claims against a city or public agency usually need a notice of claim within 90 days.",
          "Medical malpractice claims generally have a shorter limit than other injury cases.",
          "Wrongful death claims have their own, shorter deadline for surviving families."
        ]
      },
      {
        t: "quote",
        text: "“The deadline tells you when it is too late. It doesn’t tell you when it is too early.”"
      },
      {
        t: "h2",
        id: "week",
        text: "What to do this week"
      },
      {
        t: "p",
        text: "Write down the date of the incident, keep your medical records together and speak with a lawyer early, since exceptions can move these dates. This article is general information and not legal advice for your situation."
      }
    ]
  },
  {
    slug: "custody-in-new-york-what-judges-look-at",
    title: "Custody in New York: what judges actually look at",
    heading: "What custody judges look at.",
    category: "Family law",
    readTime: "9 min read",
    date: "September 8, 2026",
    excerpt: "The best-interests test, explained with real examples from family court.",
    image: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74a4ed9b387747e7826_6ae70226d5d7d3e0a42bb281_Autumn%2520Walk%2520Hand%2520in%2520Hand.webp",
    author: {
      name: "Sofia Martinez",
      photo: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f50e_6ae70191fcadf6a70b6b8ccc_Confident%2520Lawyer%2520in%2520Marble%2520Office%2520Hallway.webp",
      bio: "Guides families through divorce and custody with calm, steady care."
    },
    toc: [
      {
        id: "first",
        label: "The child comes first"
      },
      {
        id: "judge",
        label: "What a judge looks at"
      },
      {
        id: "prepare",
        label: "How to prepare"
      }
    ],
    takeaways: [
      "Judges decide by the child’s best interests.",
      "No parent starts with an automatic advantage.",
      "Simple records and calm messages help your case."
    ],
    body: [
      {
        t: "p",
        text: "Custody cases feel like a contest between parents, but the court is asking a different question."
      },
      {
        t: "p",
        text: "Understanding that question helps you prepare, and it can take some of the fear out of the process."
      },
      {
        t: "h2",
        id: "first",
        text: "The child comes first"
      },
      {
        t: "p",
        text: "New York judges decide custody by asking what serves the child’s best interests. No parent starts with an automatic advantage, and the court looks at the family as it actually lives."
      },
      {
        t: "p",
        text: "‍"
      },
      {
        t: "img",
        src: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e783f_6ae70191dd229cd3f477e929_Attorney_reviewing_documents_wit%25E2%2580%25A6_de945cd1.webp",
        alt: "Attorney talking through documents with a parent"
      },
      {
        t: "h2",
        id: "judge",
        text: "What a judge looks at"
      },
      {
        t: "ul",
        items: [
          "Who has handled daily care, school and medical needs.",
          "Each parent’s home and stability.",
          "How well each parent supports the child’s bond with the other.",
          "Any history of domestic violence."
        ]
      },
      {
        t: "quote",
        text: "“Courts look less at who wins an argument and more at who keeps a child’s life steady.”"
      },
      {
        t: "h2",
        id: "prepare",
        text: "How to prepare"
      },
      {
        t: "p",
        text: "Keep a simple record of schedules and school contact, and keep messages with the other parent calm. This article is general information and not legal advice for your situation."
      }
    ]
  },
  {
    slug: "arrested-first-24-hours-in-custody",
    title: "Arrested? Your first 24 hours in custody, step by step",
    heading: "Arrested? Your first 24 hours.",
    category: "Criminal defense",
    readTime: "5 min read",
    date: "August 30, 2026",
    excerpt: "What to say, what to keep to yourself, and the right moment to call a lawyer.",
    image: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp",
    author: {
      name: "Aisha Rahman",
      photo: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp",
      bio: "Defends clients from the first call through trial, day or night."
    },
    toc: [
      {
        id: "first",
        label: "What happens first"
      },
      {
        id: "say",
        label: "What to say"
      },
      {
        id: "family",
        label: "What your family can do"
      }
    ],
    takeaways: [
      "You have the right to remain silent and the right to a lawyer.",
      "Give your name, ask for a lawyer, then stop talking about the case.",
      "Your family can help by preparing for the bail hearing."
    ],
    body: [
      {
        t: "p",
        text: "An arrest moves quickly, and what you say in the first hours can follow you through the whole case."
      },
      {
        t: "p",
        text: "You have the right to remain silent and the right to a lawyer, so use both. Stay calm and stay quiet."
      },
      {
        t: "h2",
        id: "first",
        text: "What happens first"
      },
      {
        t: "ul",
        items: [
          "Booking, including your fingerprints and photograph.",
          "Questions from officers, which you can decline to answer.",
          "Arraignment, where a judge hears the charges and decides on release or bail."
        ]
      },
      {
        t: "p",
        text: "‍"
      },
      {
        t: "img",
        src: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
        alt: "Defense attorney preparing a case file"
      },
      {
        t: "h2",
        id: "say",
        text: "What to say"
      },
      {
        t: "p",
        text: "Give your name and say clearly: “I want to speak with a lawyer.” Then stop talking about the case, even if an officer seems friendly."
      },
      {
        t: "quote",
        text: "“You can’t talk your way out of an arrest, but you can talk your way into a harder case.”"
      },
      {
        t: "h2",
        id: "family",
        text: "What your family can do"
      },
      {
        t: "p",
        text: "Ask them to note where you were taken, call a defense lawyer and gather proof of your job and home for the bail hearing. This article is general information and not legal advice for your situation."
      }
    ]
  },
  {
    slug: "five-contract-clauses-small-business",
    title: "Five contract clauses every small business should have",
    heading: "Five clauses every contract needs.",
    category: "Business",
    readTime: "7 min read",
    date: "August 18, 2026",
    excerpt: "Protect your cash flow and head off costly disputes before they start.",
    image: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7844_6ae7022af5c14a1cf5e91132_Collaborative%2520Office%2520Document%2520Signing.webp",
    author: {
      name: "Marcus Chen",
      photo: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp",
      bio: "Advises founders on contracts, deals and partnership disputes."
    },
    toc: [
      {
        id: "read",
        label: "Read these first"
      },
      {
        id: "risk",
        label: "Where the risk sits"
      },
      {
        id: "sign",
        label: "Before you sign"
      }
    ],
    takeaways: [
      "Most contract disputes start with a clause nobody read closely.",
      "Five clauses carry most of the risk.",
      "Ask what happens if the deal ends badly before you sign."
    ],
    body: [
      {
        t: "p",
        text: "Most contract disputes we see at Meridian Law start with a clause nobody read closely."
      },
      {
        t: "p",
        text: "A few minutes with these five can save a founder months of argument later."
      },
      {
        t: "h2",
        id: "read",
        text: "Read these first"
      },
      {
        t: "p",
        text: "A contract can run for many pages, but only a handful of clauses decide what happens when things go wrong. Start with those, then read the rest."
      },
      {
        t: "p",
        text: "‍"
      },
      {
        t: "img",
        src: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
        alt: "Attorney reviewing a business contract"
      },
      {
        t: "h2",
        id: "risk",
        text: "Where the risk sits"
      },
      {
        t: "ul",
        items: [
          "Termination: how either side can leave, and what it costs.",
          "Liability caps: the most you could owe if something goes wrong.",
          "Payment terms: when money is due and what happens when it is late.",
          "Intellectual property: who owns the work once it is paid for.",
          "Dispute resolution: where and how an argument gets settled."
        ]
      },
      {
        t: "quote",
        text: "“A good contract is written for the day the relationship stops working.”"
      },
      {
        t: "h2",
        id: "sign",
        text: "Before you sign"
      },
      {
        t: "p",
        text: "Ask what happens if the deal ends badly, then check that the contract answers the question. This article is general information and not legal advice for your situation."
      }
    ]
  },
  {
    slug: "will-or-trust-right-choice-for-your-family",
    title: "Will or trust: which one is the right choice for your family?",
    heading: "Will or trust: which is right for you?",
    category: "Estates",
    readTime: "8 min read",
    date: "July 21, 2026",
    excerpt: "A plain-English comparison of costs, control and the probate process.",
    image: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e7835_6ae70191e86c68766694954d_Older_couple_reviewing_estate_do%25E2%2580%25A6_b2a7b288.webp",
    author: {
      name: "Thomas Whitfield",
      photo: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7858_6ae701911ec8070a64088a33_Attorney_sitting_at_conference_t%25E2%2580%25A6_cabb0d86_2K.webp",
      bio: "Has written wills and trusts for three generations of New York families."
    },
    toc: [
      {
        id: "will",
        label: "When a will is enough"
      },
      {
        id: "trust",
        label: "When a trust can help"
      },
      {
        id: "both",
        label: "Many families use both"
      }
    ],
    takeaways: [
      "Both say who receives what you leave behind.",
      "They differ in timing, privacy and work for your family.",
      "Many families use a will and a trust together."
    ],
    body: [
      {
        t: "p",
        text: "A will and a trust are two tools for the same promise: looking after the people you leave behind."
      },
      {
        t: "p",
        text: "They differ in when they take effect, how private they stay and how much work they leave for your family."
      },
      {
        t: "h2",
        id: "will",
        text: "When a will is enough"
      },
      {
        t: "ul",
        items: [
          "Your estate is fairly simple and mostly passes to close family.",
          "You want to name a guardian for minor children.",
          "You are comfortable with your estate passing through Surrogate’s Court."
        ]
      },
      {
        t: "p",
        text: "‍"
      },
      {
        t: "img",
        src: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e72e37b124a328878362_6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
        alt: "Attorney greeting a client"
      },
      {
        t: "h2",
        id: "trust",
        text: "When a trust can help"
      },
      {
        t: "ul",
        items: [
          "You want assets managed during your lifetime if you become unable to do it.",
          "You own property in more than one state.",
          "You want more privacy, or more control over when heirs receive money."
        ]
      },
      {
        t: "quote",
        text: "“The best estate plan is the one your family can actually follow on a hard day.”"
      },
      {
        t: "h2",
        id: "both",
        text: "Many families use both"
      },
      {
        t: "p",
        text: "A short will often works alongside a trust to catch anything left outside it. Review your plan after a marriage, a birth, a sale or a loss. This article is general information and not legal advice for your situation."
      }
    ]
  },
  {
    slug: "fired-after-reporting-harassment-your-rights",
    title: "Fired after reporting harassment? Know your rights at work",
    heading: "Fired after reporting harassment?",
    category: "Employment",
    readTime: "6 min read",
    date: "July 9, 2026",
    excerpt: "Retaliation is illegal. Here is how to prove it.",
    image: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f511_6ae7021dd5d7d3e0a42bb1b9_Collaborative%2520Executive%2520Meeting%2520in%2520a%2520Modern%2520Office.webp",
    author: {
      name: "James O’Neill",
      photo: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp",
      bio: "Fights for workers facing discrimination, retaliation and lost wages."
    },
    toc: [
      {
        id: "protected",
        label: "Speaking up is protected"
      },
      {
        id: "prove",
        label: "What helps prove it"
      },
      {
        id: "now",
        label: "What to do now"
      }
    ],
    takeaways: [
      "Retaliation for reporting harassment is against the law.",
      "A demotion, pay cut or sudden bad review can also count.",
      "Don’t sign a severance agreement before a lawyer reads it."
    ],
    body: [
      {
        t: "p",
        text: "Reporting harassment takes courage. Losing your job for it is against the law."
      },
      {
        t: "p",
        text: "If your situation at work changed after you spoke up, the timing itself may be important. Here is what the law protects and what helps to show it."
      },
      {
        t: "h2",
        id: "protected",
        text: "Speaking up is protected"
      },
      {
        t: "p",
        text: "Federal and New York law bar employers from punishing you for reporting harassment. Firing is the obvious example, but a demotion, pay cut or sudden bad review can also count as retaliation."
      },
      {
        t: "p",
        text: "‍"
      },
      {
        t: "img",
        src: "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
        alt: "Attorney preparing an employment case file"
      },
      {
        t: "h2",
        id: "prove",
        text: "What helps prove it"
      },
      {
        t: "ul",
        items: [
          "A dated record of your complaint and who received it.",
          "The timing between your report and the action against you.",
          "Past reviews showing your work was good before you spoke up.",
          "Colleagues who saw what happened."
        ]
      },
      {
        t: "quote",
        text: "“Employers rarely write down why they retaliated. The timeline often says it for them.”"
      },
      {
        t: "h2",
        id: "now",
        text: "What to do now"
      },
      {
        t: "p",
        text: "Save copies of messages and reviews you are allowed to keep, and do not sign a severance agreement before a lawyer has read it. Filing deadlines apply. This article is general information and not legal advice for your situation."
      }
    ]
  }
];

export const insightBySlug = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
const pick = (slugs: string[]) => slugs.map((s) => insightBySlug(s)!).filter(Boolean);

export const TOPICS = ["Personal injury", "Family law", "Criminal defense", "Business", "Estates", "Employment"];

/** Listing page: lead story, "also read" list and the guide library (in live order). */
export const LEAD_SLUG = "what-to-tell-an-insurance-adjuster";
export const LEAD_ROLE = "Partner";
export const ALSO_READ = pick([
  "arrested-first-24-hours-in-custody",
  "how-long-to-file-injury-claim-new-york",
  "will-or-trust-right-choice-for-your-family",
  "custody-in-new-york-what-judges-look-at",
]);
export const LIBRARY = pick([
  "how-long-to-file-injury-claim-new-york",
  "custody-in-new-york-what-judges-look-at",
  "arrested-first-24-hours-in-custody",
  "five-contract-clauses-small-business",
  "will-or-trust-right-choice-for-your-family",
  "fired-after-reporting-harassment-your-rights",
]);

/** "Keep reading" on every article (the live CMS shows the same set everywhere). */
export const RELATED_FEATURE = "fired-after-reporting-harassment-your-rights";
export const RELATED_ROWS = [
  "arrested-first-24-hours-in-custody",
  "how-long-to-file-injury-claim-new-york",
  "will-or-trust-right-choice-for-your-family",
];

export const NEXT_ISSUE = [
  "A filing deadline to check before winter",
  "What a recent ruling means for renters",
  "One reader question, answered by a partner",
];

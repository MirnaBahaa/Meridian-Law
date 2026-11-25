// Case results + case studies content (captured from the live site; "Lawency" rebranded to Meridian Law).

export type CaseBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "img"; src: string; alt: string };

export type CaseStudy = {
  slug: string;
  /** Practice tag shown on cards, breadcrumb and the related rows. */
  practice: string;
  /** Card title, hero summary and image alt. */
  title: string;
  image: string;
  /** Full amount as shown on cards, e.g. "$4,200,000". */
  amount: string;
  attorney: string;
  /** Detail-page hero heading. */
  heading: string;
  snapshot: { label: string; value: string }[];
  body: CaseBlock[];
  figures: { value: string; label: string }[];
  attorneyPhoto: string;
  quote: string;
  quoteName: string;
};

/** In the live CMS order (newest first), which is also the order of the cards and related rows. */
export const CASES: CaseStudy[] = [
  {
    "slug": "wrongful-dismissal-claim",
    "practice": "Employment",
    "title": "Wrongful dismissal and discrimination claim for a senior employee.",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74b4ed9b387747e783a_6ae70222dd229cd3f477f584_Warm%2520Corporate%2520Office%2520Portrait.webp",
    "amount": "$640,000",
    "attorney": "James O’Neill",
    "heading": "$640K for a wrongful dismissal.",
    "snapshot": [
      {
        "label": "Practice",
        "value": "Employment"
      },
      {
        "label": "Attorney",
        "value": "James O’Neill"
      },
      {
        "label": "Court",
        "value": "Brooklyn Federal"
      },
      {
        "label": "Duration",
        "value": "12 months"
      },
      {
        "label": "Outcome",
        "value": "Settled pre-trial"
      }
    ],
    "body": [
      {
        "type": "h2",
        "text": "A strong record, then a sudden exit."
      },
      {
        "type": "p",
        "text": "A senior employee with a strong record raised a discrimination complaint with her employer. Shortly afterwards she was dismissed, and told the decision was about her performance."
      },
      {
        "type": "p",
        "text": "Years of good reviews said otherwise, but those reviews now sat inside a company she could no longer access."
      },
      {
        "type": "h3",
        "text": "Testing the employer’s account"
      },
      {
        "type": "p",
        "text": "Timing alone rarely wins a retaliation claim. We needed the documents that showed how the decision to dismiss her had really been made."
      },
      {
        "type": "p",
        "text": "‍"
      },
      {
        "type": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
        "alt": "Attorney preparing employment case files"
      },
      {
        "type": "h3",
        "text": "What the documents showed"
      },
      {
        "type": "p",
        "text": "Once produced, the internal records contradicted the reason she had been given:"
      },
      {
        "type": "ul",
        "items": [
          "Performance reviews that praised her work",
          "Internal emails sent after her complaint",
          "No earlier sign of any performance concern"
        ]
      },
      {
        "type": "h3",
        "text": "Moving forward"
      },
      {
        "type": "p",
        "text": "The employer settled before trial, paying damages and agreeing to a neutral reference for her next role. She has since returned to work at a senior level, on her own terms."
      }
    ],
    "figures": [
      {
        "value": "$640K",
        "label": "Secured in damages"
      },
      {
        "value": "1",
        "label": "Neutral reference agreed"
      },
      {
        "value": "12 mo",
        "label": "From first call to settlement"
      },
      {
        "value": "0",
        "label": "Days spent in a trial"
      }
    ],
    "attorneyPhoto": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp",
    "quote": "“I raised a concern and lost my career for it. James made sure the truth was on the record, and that I could work again.”",
    "quoteName": "Priya N., Brooklyn"
  },
  {
    "slug": "distribution-contract-breach",
    "practice": "Business dispute",
    "title": "Breach of a distribution contract that threatened a family business.",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e72e37b124a328878362_6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
    "amount": "$980,000",
    "attorney": "Marcus Bennett",
    "heading": "$980K for a family business.",
    "snapshot": [
      {
        "label": "Practice",
        "value": "Business dispute"
      },
      {
        "label": "Attorney",
        "value": "Marcus Bennett"
      },
      {
        "label": "Court",
        "value": "Manhattan Supreme"
      },
      {
        "label": "Duration",
        "value": "9 months"
      },
      {
        "label": "Outcome",
        "value": "Settled pre-trial"
      }
    ],
    "body": [
      {
        "type": "h2",
        "text": "One letter, and the shelves ran empty."
      },
      {
        "type": "p",
        "text": "A family-owned distributor lost its largest supply line when a supplier ended their contract without the required notice. Customers were still ordering, and suddenly there was little left to sell them."
      },
      {
        "type": "p",
        "text": "The supplier’s view was that a commercial relationship had simply come to an end."
      },
      {
        "type": "h3",
        "text": "Putting a number on the damage"
      },
      {
        "type": "p",
        "text": "Breach is often the easy part of a contract case. Proving the loss is what decides it, so we started with the company’s own books."
      },
      {
        "type": "p",
        "text": "‍"
      },
      {
        "type": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f511_6ae7021dd5d7d3e0a42bb1b9_Collaborative%2520Executive%2520Meeting%2520in%2520a%2520Modern%2520Office.webp",
        "alt": "Attorneys and business owners discussing a contract dispute"
      },
      {
        "type": "h3",
        "text": "What the numbers proved"
      },
      {
        "type": "p",
        "text": "Sales records and customer orders showed exactly what the sudden termination had cost:"
      },
      {
        "type": "ul",
        "items": [
          "Orders that could no longer be filled",
          "Customers lost during the gap in supply",
          "The extra cost of finding new suppliers at short notice"
        ]
      },
      {
        "type": "h3",
        "text": "Room to rebuild"
      },
      {
        "type": "p",
        "text": "The supplier settled for lost profits and legal costs before trial. That gave the family the capital to rebuild its supply chain, and to keep its team in place while it did."
      }
    ],
    "figures": [
      {
        "value": "$980K",
        "label": "Lost profits and legal costs"
      },
      {
        "value": "1",
        "label": "Largest supply line lost overnight"
      },
      {
        "value": "0",
        "label": "Days of required notice given"
      },
      {
        "value": "9 mo",
        "label": "From filing to settlement"
      }
    ],
    "attorneyPhoto": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp",
    "quote": "“We thought one letter had ended forty years of work. Marcus turned our sales records into the case that saved us.”",
    "quoteName": "George P., Long Island"
  },
  {
    "slug": "truck-collision-settlement",
    "practice": "Personal injury",
    "title": "Truck collision settlement for a delivery driver left with spinal injuries.",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp",
    "amount": "$4,200,000",
    "attorney": "Marcus Chen",
    "heading": "$4.2M after a truck collision.",
    "snapshot": [
      {
        "label": "Practice",
        "value": "Personal injury"
      },
      {
        "label": "Attorney",
        "value": "Marcus Chen"
      },
      {
        "label": "Court",
        "value": "Queens Supreme"
      },
      {
        "label": "Duration",
        "value": "14 months"
      },
      {
        "label": "Outcome",
        "value": "Settled pre-trial"
      }
    ],
    "body": [
      {
        "type": "h2",
        "text": "A routine delivery that changed everything."
      },
      {
        "type": "p",
        "text": "He had driven the same delivery route for years. Then a truck crossed into his lane, and a working life built around lifting, driving and long days ended with lasting spinal injuries."
      },
      {
        "type": "p",
        "text": "Weeks later, with surgery behind him and bills arriving, the insurer denied liability and offered $180,000 to close the file."
      },
      {
        "type": "h3",
        "text": "The story the insurer told"
      },
      {
        "type": "p",
        "text": "The insurer’s position was simple: nobody could prove who drifted first, so nobody should pay in full. Their offer assumed our client would accept it rather than spend years in court."
      },
      {
        "type": "p",
        "text": "‍"
      },
      {
        "type": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e783f_6ae70191dd229cd3f477e929_Attorney_reviewing_documents_wit%25E2%2580%25A6_de945cd1.webp",
        "alt": "Attorney reviewing case documents with a client"
      },
      {
        "type": "h3",
        "text": "What the evidence showed"
      },
      {
        "type": "p",
        "text": "Commercial trucks keep records that are easy to lose once a case goes quiet. We moved first, and built the case around three things:"
      },
      {
        "type": "ul",
        "items": [
          "The truck’s black-box data from the final seconds",
          "A full accident reconstruction by an independent expert",
          "Two medical experts on the long-term cost of his injuries"
        ]
      },
      {
        "type": "p",
        "text": "Together they answered the question the insurer had avoided: where the truck was, how fast it was moving, and what that collision would cost him for the rest of his life."
      },
      {
        "type": "h3",
        "text": "Where he stands today"
      },
      {
        "type": "p",
        "text": "Two weeks before trial, the case settled for 23 times the first offer. He did not have to sit through a trial to get there."
      },
      {
        "type": "p",
        "text": "No settlement gives back the work he loved. What it does is pay for the care and income he needs for the years ahead."
      }
    ],
    "figures": [
      {
        "value": "$4.2M",
        "label": "Settlement secured for our client"
      },
      {
        "value": "23×",
        "label": "The insurer’s first offer"
      },
      {
        "value": "2",
        "label": "Medical experts on the case"
      },
      {
        "value": "2 wks",
        "label": "Before the trial date"
      }
    ],
    "attorneyPhoto": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74d4ed9b387747e7853_6ae701914a5eb2e678119c44_Confident%2520Lawyer%2520in%2520a%2520Classic%2520Law%2520Office.webp",
    "quote": "“Marcus never let us feel alone. He explained every step, and when the call came, he delivered the news himself.”",
    "quoteName": "Maria O., Queens"
  },
  {
    "slug": "delayed-cancer-diagnosis",
    "practice": "Medical malpractice",
    "title": "Jury verdict after a delayed cancer diagnosis cost a patient vital treatment time.",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e783f_6ae70191dd229cd3f477e929_Attorney_reviewing_documents_wit%25E2%2580%25A6_de945cd1.webp",
    "amount": "$2,400,000",
    "attorney": "Sofia Alvarez",
    "heading": "$2.4M for a delayed diagnosis.",
    "snapshot": [
      {
        "label": "Practice",
        "value": "Medical malpractice"
      },
      {
        "label": "Attorney",
        "value": "Sofia Alvarez"
      },
      {
        "label": "Court",
        "value": "Kings Supreme"
      },
      {
        "label": "Duration",
        "value": "22 months"
      },
      {
        "label": "Outcome",
        "value": "Jury verdict"
      }
    ],
    "body": [
      {
        "type": "h2",
        "text": "Fourteen months nobody can give back."
      },
      {
        "type": "p",
        "text": "Abnormal test results sat unreported for fourteen months. By the time our client received a diagnosis, the treatment options in front of her had narrowed considerably."
      },
      {
        "type": "p",
        "text": "When she asked what had happened, the hospital told her that earlier news would not have changed anything."
      },
      {
        "type": "h3",
        "text": "The argument we had to answer"
      },
      {
        "type": "p",
        "text": "Delayed diagnosis cases often turn on one hard question: would acting sooner have made a difference? The hospital’s defense rested entirely on the answer being no."
      },
      {
        "type": "p",
        "text": "‍"
      },
      {
        "type": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
        "alt": "Attorney preparing medical case files"
      },
      {
        "type": "h3",
        "text": "How we rebuilt the timeline"
      },
      {
        "type": "p",
        "text": "Sofia’s team reviewed every record and worked alongside oncology experts to show the jury what should have happened, and when:"
      },
      {
        "type": "ul",
        "items": [
          "When the abnormal results first reached the hospital",
          "Who should have acted on them, and what the standard required",
          "Which treatments were still open at that earlier stage"
        ]
      },
      {
        "type": "h3",
        "text": "What the jury decided"
      },
      {
        "type": "p",
        "text": "After a nine-day trial, the jury found the hospital negligent and awarded full damages for care, lost income and suffering."
      },
      {
        "type": "p",
        "text": "The verdict could not return the lost time, but it did give her family security, and a clear public answer to the question she had been asking."
      }
    ],
    "figures": [
      {
        "value": "$2.4M",
        "label": "Awarded by the jury"
      },
      {
        "value": "14 mo",
        "label": "Results left unreported"
      },
      {
        "value": "9 days",
        "label": "In front of the jury"
      },
      {
        "value": "100%",
        "label": "Of damages awarded"
      }
    ],
    "attorneyPhoto": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e784e_6ae70193b96de19b05372a0c_Confident%2520Lawyer%2520in%2520a%2520Warm%2520Office.webp",
    "quote": "“Sofia took the time to understand what those lost months really meant for me, then made a jury understand it too.”",
    "quoteName": "Renee T., Brooklyn"
  },
  {
    "slug": "partnership-breach-recovery",
    "practice": "Business law",
    "title": "Recovery for a founder pushed out of the partnership she helped build.",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993738f0a5142f973f511_6ae7021dd5d7d3e0a42bb1b9_Collaborative%2520Executive%2520Meeting%2520in%2520a%2520Modern%2520Office.webp",
    "amount": "$1,800,000",
    "attorney": "Marcus Bennett",
    "heading": "$1.8M for a founder pushed out.",
    "snapshot": [
      {
        "label": "Practice",
        "value": "Business law"
      },
      {
        "label": "Attorney",
        "value": "Marcus Bennett"
      },
      {
        "label": "Court",
        "value": "Manhattan Supreme"
      },
      {
        "label": "Duration",
        "value": "11 months"
      },
      {
        "label": "Outcome",
        "value": "Full buyout"
      }
    ],
    "body": [
      {
        "type": "h2",
        "text": "Locked out of her own company."
      },
      {
        "type": "p",
        "text": "After eleven years building the business, our client logged in one morning and found her access gone. She had been removed from company accounts and decisions without notice, in breach of the partnership agreement."
      },
      {
        "type": "p",
        "text": "Her partners told her that the business had simply moved on without her."
      },
      {
        "type": "h3",
        "text": "Following the money"
      },
      {
        "type": "p",
        "text": "Money rarely disappears; it moves. We secured the financial records quickly, before they could be changed, and brought in forensic accountants to trace each diverted payment."
      },
      {
        "type": "p",
        "text": "‍"
      },
      {
        "type": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e72e37b124a328878362_6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
        "alt": "Attorney shaking hands with a client"
      },
      {
        "type": "h3",
        "text": "What the records revealed"
      },
      {
        "type": "p",
        "text": "The accounts told a very different story from the one her partners were telling:"
      },
      {
        "type": "ul",
        "items": [
          "Payments routed through related companies",
          "Decisions taken in breach of the partnership agreement",
          "A clear fair value for the stake she had built"
        ]
      },
      {
        "type": "h3",
        "text": "A private, complete result"
      },
      {
        "type": "p",
        "text": "Faced with that evidence, the partners agreed to a full buyout at fair value plus damages. She avoided the cost and exposure of a public trial."
      },
      {
        "type": "p",
        "text": "She has since used the settlement to start again, this time with an agreement she helped us write."
      }
    ],
    "figures": [
      {
        "value": "$1.8M",
        "label": "Recovered in buyout and damages"
      },
      {
        "value": "11 yrs",
        "label": "Spent building the business"
      },
      {
        "value": "100%",
        "label": "Of her stake paid at fair value"
      },
      {
        "value": "0",
        "label": "Days spent in a public trial"
      }
    ],
    "attorneyPhoto": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae993b31200428576836a1c_6ae701913d74b3f343eb8239_Confident%2520Lawyer%2520Outside%2520Courthouse.webp",
    "quote": "“I walked in thinking I had lost the company I built. Marcus showed me exactly what I was still owed, and got it.”",
    "quoteName": "Hannah R., Manhattan"
  },
  {
    "slug": "construction-site-fall",
    "practice": "Workplace injury",
    "title": "Compensation and third-party claim after a serious construction site fall.",
    "image": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e7849_6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%25E2%2580%25A6_a88ad4fb.webp",
    "amount": "$1,150,000",
    "attorney": "Daniel Okafor",
    "heading": "$1.15M after a scaffolding fall.",
    "snapshot": [
      {
        "label": "Practice",
        "value": "Workplace injury"
      },
      {
        "label": "Attorney",
        "value": "Daniel Okafor"
      },
      {
        "label": "Court",
        "value": "Bronx Supreme"
      },
      {
        "label": "Duration",
        "value": "18 months"
      },
      {
        "label": "Outcome",
        "value": "Settled"
      }
    ],
    "body": [
      {
        "type": "h2",
        "text": "The fall was never his fault."
      },
      {
        "type": "p",
        "text": "A site labourer suffered serious injuries in a fall from unsecured scaffolding. Before he had left hospital, his employer’s insurer was already arguing that he had ignored safety instructions."
      },
      {
        "type": "p",
        "text": "The offer on the table was a minimal workers’ compensation payment, and nothing more."
      },
      {
        "type": "h3",
        "text": "Looking past the first answer"
      },
      {
        "type": "p",
        "text": "Workers’ compensation is rarely the whole picture on a New York construction site. Our first question was who else had responsibility for that scaffold on the day he fell."
      },
      {
        "type": "p",
        "text": "‍"
      },
      {
        "type": "img",
        "src": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae8e74c4ed9b387747e783f_6ae70191dd229cd3f477e929_Attorney_reviewing_documents_wit%25E2%2580%25A6_de945cd1.webp",
        "alt": "Attorney reviewing site records with a client"
      },
      {
        "type": "h3",
        "text": "What the audit exposed"
      },
      {
        "type": "p",
        "text": "Daniel’s team built the case from the site itself, not from the insurer’s report:"
      },
      {
        "type": "ul",
        "items": [
          "An independent audit of the site’s safety practices",
          "Statements gathered directly from the crew",
          "Responsibility traced to the scaffolding contractor"
        ]
      },
      {
        "type": "p",
        "text": "That finding opened a separate third-party claim, and it changed the value of the case."
      },
      {
        "type": "h3",
        "text": "Security for the long term"
      },
      {
        "type": "p",
        "text": "The combined recovery covers lifetime medical care and lost earnings. For our client and his family, it replaced uncertainty with long-term financial stability."
      }
    ],
    "figures": [
      {
        "value": "$1.15M",
        "label": "Combined recovery"
      },
      {
        "value": "2",
        "label": "Separate claims combined"
      },
      {
        "value": "1",
        "label": "Independent safety audit"
      },
      {
        "value": "18 mo",
        "label": "From first call to settlement"
      }
    ],
    "attorneyPhoto": "https://cdn.prod.website-files.com/6ae8e709d4db499cc7a09789/6ae991e1f8d6cfe1c8f4eeb4_6ae701911593f02f218ae531_Polished%2520Executive%2520Portrait%2520in%2520a%2520Warm%2520Office.webp",
    "quote": "“They told me the fall was my fault. Daniel found out what really happened and made sure my family was looked after.”",
    "quoteName": "Tomasz W., The Bronx"
  }
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);

/** Related rows on a case study: the first three other cases, in list order (as on the live site). */
export const relatedCases = (slug: string) => CASES.filter((c) => c.slug !== slug).slice(0, 3);

export const LEDGER = [
  { name: "Personal injury", amount: "$212M", share: "share-100" },
  { name: "Medical malpractice", amount: "$98M", share: "share-46" },
  { name: "Wrongful death", amount: "$74M", share: "share-35" },
  { name: "Employment", amount: "$46M", share: "share-22" },
  { name: "Business disputes", amount: "$32M", share: "share-15" },
  { name: "Other", amount: "$18M", share: "share-8", noCounter: true },
] as const;

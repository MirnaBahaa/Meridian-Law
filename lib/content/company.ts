/* Content for the company pages: /about, /contact and the 404 page. */

const CDN = "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/";

export const CIMG = {
  aboutOffice: CDN + "6aec0ea66c905b8e9ca6ea99_lawency-about-office.webp",
  reviewDocs: CDN + "6ae70191dd229cd3f477e929_Attorney_reviewing_documents_wit%E2%80%A6_de945cd1.webp",
  caseFile: CDN + "6aec0eac09847d97b13f3633_lawency-case-file.webp",
  meetingRoom: CDN + "6ae9afe53f954163921fb843_lawency-meeting-room.webp",
  warmExec: CDN + "6ae70191e86c68766694953c_Warm%20Executive%20Office%20Portrait.webp",
  marble: CDN + "6ae70191fcadf6a70b6b8ccc_Confident%20Lawyer%20in%20Marble%20Office%20Hallway.webp",
  atrium: CDN + "6ae701916c066111f025a9f9_Confident%20Corporate%20Team%20in%20Modern%20Atrium.webp",
  classic: CDN + "6ae701914a5eb2e678119c44_Confident%20Lawyer%20in%20a%20Classic%20Law%20Office.webp",
  signing: CDN + "6ae7022af5c14a1cf5e91132_Collaborative%20Office%20Document%20Signing.webp",
  barrister1: CDN + "6ae70234e86c68766694a400_Confident%20Barrister%20in%20Courtroom%20(1).webp",
  teamPortrait: CDN + "6ae702344c5f5b9031fdec90_Confident%20Legal%20Team%20Portrait%20(2).webp",
  hands: CDN + "6ae70191d3a8fbe029a341c6_Attorney_shaking_hands_with_client_5205bf16.webp",
  conf: CDN + "6ae701911ec8070a64088a33_Attorney_sitting_at_conference_t%E2%80%A6_cabb0d86_2K.webp",
  execMeet: CDN + "6ae7021dd5d7d3e0a42bb1b9_Collaborative%20Executive%20Meeting%20in%20a%20Modern%20Office.webp",
  courthouse: CDN + "6ae701913d74b3f343eb8239_Confident%20Lawyer%20Outside%20Courthouse.webp",
  warmOffice: CDN + "6ae70193b96de19b05372a0c_Confident%20Lawyer%20in%20a%20Warm%20Office.webp",
  autumn: CDN + "6ae70226d5d7d3e0a42bb281_Autumn%20Walk%20Hand%20in%20Hand.webp",
  caseFiles: CDN + "6ae70191f56a03d13d26c18f_Attorney_preparing_case_files_in%E2%80%A6_a88ad4fb.webp",
  iconScale: CDN + "6ae8da5cffa79237ade0eb15_icon-scale.svg",
  iconUsers: CDN + "6ae8da593158bfe1c1a17b84_icon-users.svg",
  iconShield: CDN + "6ae8da5e011bc65ed9e98997_icon-shield.svg",
};

/* ---------------- About ---------------- */

export type OriginStat = { tone: "is-featured" | "is-beige" | "is-terracotta"; icon: string; iconAlt: string; value: string; text: string; light: boolean };

export const ORIGIN_STATS: OriginStat[] = [
  {
    tone: "is-featured",
    icon: CIMG.iconScale,
    iconAlt: "Balanced scale icon",
    value: "1999",
    text: "Opened a two-room office on Court Street and answered every call themselves.",
    light: true,
  },
  {
    tone: "is-beige",
    icon: CIMG.iconUsers,
    iconAlt: "Two users icon",
    value: "40",
    text: "Attorneys today, across three New York offices — still partner-led.",
    light: false,
  },
  {
    tone: "is-terracotta",
    icon: CIMG.iconShield,
    iconAlt: "Shield with a checkmark icon",
    value: "1st",
    text: "Call answered by a senior partner. The promise hasn’t changed.",
    light: true,
  },
];

export type Founder = { name: string; role: string; since: string; href: string; photo: string; alt: string; offset?: boolean };

export const FOUNDERS: Founder[] = [
  {
    name: "Marcus Chen",
    role: "Founding Partner",
    since: "Since 1999",
    href: "/attorney/marcus-chen",
    photo: CIMG.classic,
    alt: "Marcus Chen, founding partner of Meridian Law, in a classic law office",
  },
  {
    name: "Sofia Martinez",
    role: "Managing Partner",
    since: "Since 2006",
    href: "/attorney/sofia-martinez",
    photo: CIMG.marble,
    alt: "Sofia Martinez, managing partner of Meridian Law, standing in a marble courthouse hallway",
    offset: true,
  },
];

export type Milestone = { year: string; title: string; text: string; photo: string; alt: string };

export const MILESTONES: Milestone[] = [
  {
    year: "1999",
    title: "Two desks on Court Street",
    text: "Marcus Chen opens a small Brooklyn office, where a partner answers every new call.",
    photo: CIMG.caseFile,
    alt: "Case file on a clipboard beside a terracotta notebook and reading glasses",
  },
  {
    year: "2006",
    title: "A second partner, a new practice",
    text: "Sofia Martinez joins as partner and opens our new family and business law practice.",
    photo: CIMG.signing,
    alt: "Partner and client signing documents together across an office desk",
  },
  {
    year: "2013",
    title: "Room for a bigger table",
    text: "We move to a full floor on Court Street and add a dedicated trial team of our own.",
    photo: CIMG.meetingRoom,
    alt: "Meridian Law meeting room with green panelled walls and a long wooden table",
  },
  {
    year: "2019",
    title: "$100M recovered for clients",
    text: "Our clients pass $100 million in recoveries, most of it won in court, not settled.",
    photo: CIMG.barrister1,
    alt: "Meridian Law barrister standing confidently in a courtroom",
  },
  {
    year: "2026",
    title: "Same promise, bigger team",
    text: "A founding partner still reviews every new case within 24 hours of the first call.",
    photo: CIMG.teamPortrait,
    alt: "Meridian Law attorneys standing together in the firm's law library",
  },
];

export type Principle = { tag: string; title: string; text: string; photo: string; alt: string; offset?: boolean };

export const PRINCIPLES: Principle[] = [
  {
    tag: "01",
    title: "Partners, not handoffs",
    text: "A senior attorney leads your matter from first call to final signature.",
    photo: CIMG.hands,
    alt: "A Meridian Law partner shaking hands with a client across the desk",
  },
  {
    tag: "02",
    title: "Honesty over hope",
    text: "The real odds on day one, even when they are hard to hear.",
    photo: CIMG.reviewDocs,
    alt: "Attorney reviewing and signing documents with a client",
    offset: true,
  },
  {
    tag: "03",
    title: "Fees you can predict",
    text: "Clear, written fee terms before we start. No surprise invoices.",
    photo: CIMG.caseFile,
    alt: "Clipboard with a written fee agreement beside reading glasses",
  },
  {
    tag: "04",
    title: "Ready for trial",
    text: "Every case is prepared for court. That is how we settle better.",
    photo: CIMG.aboutOffice,
    alt: "Bright Meridian Law office with a walnut desk and green feature wall",
    offset: true,
  },
];

export type Branch = {
  tag: string;
  city: string;
  photo: string;
  alt: string;
  map: string;
  mapLabel: string;
  address: [string, string];
  phone: string;
  hours: string;
  reveal: "2" | "4" | "6";
};

export const BRANCHES: Branch[] = [
  {
    tag: "01 · Headquarters",
    city: "Manhattan",
    photo: CIMG.conf,
    alt: "Senior partner seated at the boardroom table in the Manhattan office",
    map: "https://maps.google.com/?q=350+Fifth+Ave+New+York+NY+10118",
    mapLabel: "Directions to the Manhattan office",
    address: ["350 Fifth Ave, Suite 4100", "New York, NY 10118"],
    phone: "(212) 555-0148",
    hours: "Mon–Fri 8–19",
    reveal: "2",
  },
  {
    tag: "02 · Since 1999",
    city: "Brooklyn",
    photo: CIMG.execMeet,
    alt: "Attorneys meeting around a table in the Brooklyn office",
    map: "https://maps.google.com/?q=85+Court+St+Brooklyn+NY+11201",
    mapLabel: "Directions to the Brooklyn office",
    address: ["85 Court St, Floor 6", "Brooklyn, NY 11201"],
    phone: "(718) 555-0192",
    hours: "Mon–Fri 8–19",
    reveal: "4",
  },
  {
    tag: "03 · Opened 2013",
    city: "Queens",
    photo: CIMG.courthouse,
    alt: "Meridian Law attorney standing outside the Queens courthouse",
    map: "https://maps.google.com/?q=118-35+Queens+Blvd+Forest+Hills+NY+11375",
    mapLabel: "Directions to the Queens office",
    address: ["118-35 Queens Blvd, Suite 900", "Forest Hills, NY 11375"],
    phone: "(718) 555-0175",
    hours: "Mon–Fri 8–19",
    reveal: "6",
  },
];

export const PROOF_CARDS: { label: string; value: string; wide?: boolean; reveal: "2" | "4" | "6" }[] = [
  { label: "Recovered for clients", value: "$480M+", wide: true, reveal: "2" },
  { label: "Clients represented", value: "3,000+", reveal: "2" },
  { label: "Attorneys & counsel", value: "40", reveal: "4" },
  { label: "New York offices", value: "3", reveal: "6" },
];

export const HONOURS: { title: string; meta: string; left?: boolean }[] = [
  { title: "Super Lawyers", meta: "2018–2026", left: true },
  { title: "Avvo 10.0", meta: "All partners" },
  { title: "Best Law Firms", meta: "U.S. News, 2026", left: true },
  { title: "Martindale AV", meta: "Peer rated" },
];

export const GIVING: { number: string; unit: string; title: string; text: string }[] = [
  { number: "1,200+", unit: "hours a year", title: "Pro bono help", text: "Cases for clients who could not otherwise afford representation." },
  { number: "60", unit: "students", title: "Student mentoring", text: "Sofia Martinez volunteers at a Queens legal clinic that supports local parents." },
  { number: "12", unit: "years", title: "Trial teaching", text: "Marcus Chen mentors early-stage founders and hosts free contract workshops." },
];

/* ---------------- Contact ---------------- */

export const REACH: { tone: string; href: string; label: string; value: string; note: string; id?: string }[] = [
  { tone: "is-clay", href: "tel:+12125550148", label: "Call us 24/7", value: "(212) 555-0148", note: "Speak to a person day or night." },
  { tone: "is-forest", href: "mailto:hello@meridianlaw.law", label: "Email", value: "hello@meridianlaw.law", note: "We reply within one business hour." },
  {
    tone: "white",
    id: "w-node-_70942df9-d190-ad75-6751-c9131544b838-5a52ceab", // grid-span rule in styles.css
    href: "https://www.google.com/maps/search/?api=1&query=350+Fifth+Ave+New+York+NY+10118",
    label: "Visit",
    value: "350 Fifth Ave, Suite 4100",
    note: "Manhattan, by appointment.",
  },
];

export const NEXT_STEPS: { n: string; title: string; text: string }[] = [
  { n: "01", title: "You share the details", text: "Only what you are comfortable with. It stays confidential." },
  { n: "02", title: "A senior attorney reads it", text: "Not a call centre. The person who could handle your case." },
  { n: "03", title: "We reply, usually within the hour", text: "You get honest advice on where you stand, with no obligation." },
];

export const HOURS: { label: string; value: string }[] = [
  { label: "Mon to Fri", value: "8:00 – 19:00" },
  { label: "Saturday", value: "9:00 – 15:00" },
  { label: "Emergency line", value: "24 / 7" },
];

export const OFFICE_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select one..." },
  { value: "First", label: "First choice" },
  { value: "Second", label: "Second choice" },
  { value: "Third", label: "Third choice" },
];

export const PRACTICE_CHOICES: { id: string; value: string }[] = [
  { id: "area-injury", value: "Personal injury" },
  { id: "area-family", value: "Family law" },
  { id: "area-criminal", value: "Criminal defense" },
  { id: "area-business", value: "Business" },
  { id: "area-estates", value: "Estates" },
  { id: "area-employment", value: "Employment" },
];

export type Office = { n: string; city: string; tone: "is-forest" | "is-clay" | "is-sage"; white: boolean; address: string; hours: string; map: string; photo: string; alt: string; photoId: string };

/* photoId: the grid-node ids that styles.css uses to move the photo above the copy on phones. */
export const OFFICES: Office[] = [
  {
    n: "01",
    city: "Manhattan",
    tone: "is-forest",
    white: true,
    address: "350 Fifth Ave, Suite 4100 New York, NY 10118",
    hours: "Mon to Fri, 8am to 7pm",
    map: "https://www.google.com/maps/search/?api=1&query=350+Fifth+Ave+New+York+NY+10118",
    photo: CIMG.caseFiles,
    alt: "Attorney preparing case files at the Meridian Law Manhattan office",
    photoId: "w-node-_8c43e4dd-18ad-d8c9-1688-c76ebbb17afe-5a52ceab",
  },
  {
    n: "02",
    city: "Brooklyn",
    tone: "is-clay",
    white: true,
    address: "85 Court St, Floor 6 Brooklyn, NY 11201",
    hours: "Mon to Sat, 9am to 6pm",
    map: "https://www.google.com/maps/search/?api=1&query=85+Court+St+Brooklyn+NY+11201",
    photo: CIMG.signing,
    alt: "Client signing documents with an attorney at the Meridian Law Brooklyn office",
    photoId: "w-node-_852b04d4-d58e-fa7e-15c8-f270c1346869-5a52ceab",
  },
  {
    n: "03",
    city: "Queens",
    tone: "is-sage",
    white: false,
    address: "118-35 Queens Blvd, Suite 900 Forest Hills, NY 11375",
    hours: "Mon to Fri, 9am to 6pm",
    map: "https://www.google.com/maps/search/?api=1&query=118-35+Queens+Blvd+Forest+Hills+NY+11375",
    photo: CIMG.execMeet,
    alt: "Attorneys meeting around a table at the Meridian Law Queens office",
    photoId: "w-node-a6b2bf95-1f8d-bd59-b272-36bcb09853ce-5a52ceab",
  },
];

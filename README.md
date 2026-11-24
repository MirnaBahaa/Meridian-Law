# Meridian Law - Frontend

## 1. Description

Meridian Law is a responsive, single-page law-firm website built with Next.js. The homepage includes a hero with animated stats, an about section with a scroll-driven video, a pinned horizontal practice-areas track, stacked "How we work" steps, a rotating testimonial wheel, a "Why Meridian Law" section, a pinned case-results accordion, hover-expanding attorney cards, insights, an FAQ accordion, a call-to-action with scrolling photo rows, and a footer.

Motion is built with GSAP (ScrollTrigger and SplitText): smooth wheel scrolling, number counters, character-by-character heading reveals, scroll reveals, and button hover animations. Desktop, tablet, and phone (designed at 375px) each have their own layout and behaviour, and the site respects `prefers-reduced-motion`.

Page content (practice areas, steps, testimonials, cases, attorneys, insights, FAQ) and image URLs are maintained in `lib/data.ts`. The brand name and logo are in `components/Logo.tsx`. The site has no CMS, analytics, or environment variables and runs locally out of the box.

> **Note:** The project details in this README (designer, status, and dates) are real. The content shown *on the website itself* is sample content: the attorney names, client testimonials, case results, statistics, phone numbers, email, and office address are placeholders, and the photos and about-section video are loaded from a remote CDN. Replace them with the firm's own content and licensed media before going live.

## 2. Languages, Runtime, and Packages

### Languages and runtime

| Technology              | Version                                                     |
| ----------------------- | ----------------------------------------------------------- |
| TypeScript              | `^5.9.3`                                                    |
| JavaScript (ES modules) | Used for configuration (`next.config.mjs`)                  |
| React / TSX             | React `^19.3.1`                                             |
| CSS                     | Plain CSS with custom properties (no CSS framework)         |
| Node.js                 | `18.18` or later (`20` LTS or later recommended)            |
| npm                     | Use the npm version included with your Node.js installation |

The project uses the exact dependency versions recorded in `package-lock.json`. Version ranges below are from `package.json`.

### Runtime dependencies

| Package     | Version    | Purpose                                                     |
| ----------- | ---------- | ----------------------------------------------------------- |
| `next`      | `^15.5.29` | Next.js app framework (App Router) and font loading         |
| `react`     | `^19.3.1`  | UI library                                                  |
| `react-dom` | `^19.3.1`  | React DOM rendering                                         |
| `gsap`      | `3.13`     | Animations, including the ScrollTrigger and SplitText plugins |

### Development dependencies

| Package            | Version   | Purpose                               |
| ------------------ | --------- | ------------------------------------- |
| `typescript`       | `^5.9.3`  | Type checking and TypeScript compiler |
| `@types/node`      | `^26.6.6` | Node.js type definitions              |
| `@types/react`     | `^19.3.0` | React type definitions                |
| `@types/react-dom` | `^19.3.0` | React DOM type definitions            |

Fonts (Geist and Inter Tight) are loaded with `next/font/google`, so no font package is needed.

## 3. Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) **18.18 or later** (npm is included).
- [Git for Windows](https://git-scm.com/download/win) on Windows, or [Git](https://git-scm.com/downloads) for macOS/Linux.
- A terminal: PowerShell on Windows, or Terminal on macOS/Linux.

See the [Next.js installation requirements](https://nextjs.org/docs/app/getting-started/installation#system-requirements) for runtime details.

### Windows (PowerShell)

```powershell
git clone https://github.com/MirnaBahaa/Meridian-Law.git
Set-Location Meridian-Law
npm ci
```

### macOS / Linux (Terminal)

```bash
git clone https://github.com/MirnaBahaa/Meridian-Law.git
cd Meridian-Law
npm ci
```

### Environment variables

None are required. If you add integrations later, put their values in `.env.local` in the project root. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser, so never put secrets in them. `.env*` files are ignored by Git.

### Run and build

```bash
npm run dev       # Start the development server at http://localhost:3000
npm run build     # Type-check and create a production build
npm run start     # Serve the production build
```

## 4. Project Structure

| Path                                   | Contents                                                                                                                          |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `app/layout.tsx`                       | Root document, fonts, metadata, and the script that hides animated elements until JavaScript is ready                             |
| `app/page.tsx`                         | Home page: assembles the navbar, all sections, the footer, and the motion layer                                                    |
| `app/icon.svg`                         | Favicon                                                                                                                           |
| `app/reference.css`                    | Base stylesheet: design tokens (colours, type scale, spacing), component classes, and the 991 / 767 / 479px breakpoints            |
| `app/site.css`                         | Additions: resets, layout glue, pre-animation hidden states, and the phone layout (≤479px)                                        |
| `components/Navbar.tsx`                | Fixed navbar, hover mega menu (desktop), and dropdown menu (tablet/phone)                                                         |
| `components/Motion.tsx`                | All page-wide animation: smooth scrolling, counters, reveals, hero load sequence, hover timelines, and pinned scroll scenes        |
| `components/sections/`                 | One file per page section: `Hero`, `About`, `Practice`, `HowWeWork`, `Testimonials`, `Reasons`, `Cases`, `Attorneys`, `Insights`, `Faq`, `Cta`, `Footer` |
| `components/Orbit.tsx`                 | Rotating testimonial wheel                                                                                                        |
| `components/PopSlider.tsx`             | Swipeable slider used for practice areas (tablet/phone) and attorneys (phone)                                                     |
| `components/CounselTrack.tsx`          | Hover-expanding attorney cards                                                                                                    |
| `components/FaqList.tsx`               | Single-open FAQ accordion                                                                                                         |
| `components/AboutVideo.tsx`            | About-section background video with play/pause toggle                                                                             |
| `components/Btn.tsx`, `Icons.tsx`, `Logo.tsx` | Shared button, SVG icons, and brand logo/name                                                                              |
| `lib/data.ts`                          | All page content and image/video URLs                                                                                             |
| `next.config.mjs`, `tsconfig.json`     | Next.js and TypeScript configuration                                                                                              |
| `package.json` / `package-lock.json`   | Scripts and dependency definitions/lockfile                                                                                       |

## 5. Homepage Content

The homepage copy, section by section, as it appears in the design. Lists and card data live in `lib/data.ts`; section headings and paragraphs live in `components/sections/`.

### Navigation

- **Links:** Home · About · Pages ▾ · Attorneys · Contact, plus a **Book a call** button. Tablet and phone use a **Menu** button.
- **Pages menu:** a feature card ("A senior partner on every case": *Since 1999 our New York attorneys have taken the first call and led every case to the end.*, with a **Book a free review →** link) and three columns:

| Our firm                                         | Our work                                                    | Resources                                                  |
| ------------------------------------------------ | ----------------------------------------------------------- | ---------------------------------------------------------- |
| Home: Partner-led legal help in New York         | Practice Areas: Six areas, each led by a senior attorney    | Client Stories: Hear from the people we have represented   |
| About: Our story, values and offices             | Case Results: Verdicts and settlements since 1999           | FAQ: Answers before you call                               |
| Attorneys: Meet the partners who lead your case  | Insights: Plain-English legal guides                        | Privacy Policy: How we handle your information             |
| Contact: Request a confidential case review      |                                                             | Legal Notice: Disclaimers and attorney advertising         |

### 1. Hero

- **Badge:** A trusted law firm since 1999
- **Heading:** Trusted counsel, proven results.
- **Text:** Experienced attorneys delivering practical, results-driven legal counsel for individuals, families and businesses.
- **Buttons:** Free consultation · Our practice areas
- **Stats:** **27** Years of Legal Excellence · **500+** Clients Represented · **98%** Case Success Rate · **24/7** Client Support

### 2. About Meridian Law

- **Heading:** Built around your outcome.
- **Text:** Since 1999 we have represented individuals and businesses across New York. Senior partners lead every case from first call to final result.
- **"Why clients stay" card:** **27** Years defending New Yorkers in and out of court. ✓ A senior partner on every case · ✓ No fee unless we win · ✓ Reply within one business hour. Link: **Our story**.
- **Client review card (★★★★★):** "They answered every call, told me the truth about my case and saw it through to a settlement I never expected." Sarah Mitchell, Verified Google review. Tag: Personal Injury · $1.2M settlement.
- **Video:** office meeting clip with a play/pause button.

### 3. Practice Areas

- **Heading:** Focused practices, one standard.
- **Text:** Every matter is led by a partner with at least fifteen years of experience in that field.
- **Button:** View all practice areas

| #  | Practice area     | Description                                                              | Stat    | Stat label         |
| -- | ----------------- | ------------------------------------------------------------------------ | ------- | ------------------ |
| 01 | Personal Injury\* | Car, truck, workplace and slip-and-fall injuries — no fee unless we win. | $1.2M   | Average recovery   |
| 02 | Family Law        | Divorce, custody, support and prenups handled with care and discretion.  | 2,300+  | Families helped    |
| 03 | Criminal Defense  | 24/7 defense for DWI, assault, drug and white-collar charges.            | 78%     | Charges reduced    |
| 04 | Business Law      | Formation, contracts, partnerships and disputes for growing companies.   | 650+    | Companies advised  |
| 05 | Estate Planning   | Wills, trusts and powers of attorney that protect the people you love.   | 3,100+  | Plans completed    |
| 06 | Employment Law    | Wrongful termination, discrimination, harassment and unpaid wages.       | $185K   | Average settlement |

\* Personal Injury appears in the tablet/phone slider only; the desktop scrolling track shows 06 → 02.

### 4. How We Work

- **Heading:** Four steps, no surprises.
- **Text:** You always know what is happening, who is working on your case and what comes next. Most clients hear from us within 24 hours.
- **Button:** Start with a free review

| Step | Timing         | Title             | Description                                                                                                                  |
| ---- | -------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 01   | Day 1          | Free consultation | Tell us what happened, privately and without obligation. We review your documents and give you an honest assessment of your case. |
| 02   | Weeks 1–6      | Investigation     | Our team gathers records, photos, witness statements and expert opinions before the other side has finished their first letter. |
| 03   | Months 2–6     | Negotiation       | We send a fully documented demand and negotiate firmly. Most matters resolve here, on terms you approve.                     |
| 04   | When required  | Trial if needed   | If the offer is not fair, we take your case to court. Every file is built for trial from day one.                            |

### 5. Client Testimonials

- **Heading:** Five clients, five verdicts.
- **Text:** Turn the wheel to hear from the people behind our settlements, verdicts and recoveries.

| Client                 | Case                        | Quote                                                                                                                                         |
| ---------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Priya N., Brooklyn     | Wrongful dismissal · $640K  | "I raised a concern and lost my career for it. James made sure the truth was on the record, and that I could return to work on my own terms." |
| Hannah R., Manhattan   | Partnership dispute · $1.8M | "I thought I had lost the company I built. Marcus traced every payment, showed me exactly what I was owed, and recovered all of it without a public trial." |
| Maria O., Queens       | Truck collision · $4.2M     | "Marcus never let us feel alone. He explained every step in plain words, kept us informed for fourteen long months, and delivered the final news himself." |
| Renee T., Brooklyn     | Delayed diagnosis · $2.4M   | "Sofia understood what those lost months truly meant to me, then made a whole jury understand it as well. For the first time in years, I felt heard." |
| George P., Long Island | Contract dispute · $980K    | "We thought one letter had ended forty years of work. Marcus turned our own sales records into the case that saved our whole family business." |

### 6. Why Meridian Law

- **Heading:** Why clients stay with us.
- **Text:** New Yorkers have trusted us since 1999 with the cases that shape their lives.
- **Button:** Meet our attorneys

| #  | Reason          | Text                                                  |
| -- | --------------- | ----------------------------------------------------- |
| 01 | Partner-led     | A senior partner handles your case from day one.      |
| 02 | Clear fees      | Free first consultation and written fee agreements.   |
| 03 | Trial-ready     | Cases built for court win better settlements.         |
| 04 | 24-hour replies | A direct line to your attorney at every stage.        |

### 7. Case Results

- **Heading:** Results that changed lives.
- **Stats:** **$480M+** Total recovered · **1,200+** Cases closed

| # | Practice            | Reference                          | Amount | Result                                                                          | Led by                  |
| - | ------------------- | ---------------------------------- | ------ | ------------------------------------------------------------------------------- | ----------------------- |
| 1 | Personal injury     | Case 24-CV-0193 · Settled 2025     | $4.2M  | Truck collision settlement for a delivery driver left with spinal injuries.     | Marcus Chen, Partner    |
| 2 | Medical malpractice | Case 23-CV-0871 · Verdict 2024     | $2.4M  | Jury verdict after a delayed cancer diagnosis cost a patient vital treatment time. | Sofia Alvarez, Partner |
| 3 | Business law        | Case 24-CB-0412 · Recovered 2024   | $1.8M  | Recovery for a founder pushed out of the partnership she helped build.          | Marcus Bennett, Partner |
| 4 | Workplace injury    | Case 22-CV-1560 · Settled 2025     | $1.15M | Compensation and third-party claim after a serious construction site fall.      | Daniel Okafor, Partner  |

- **Disclaimer:** Prior results do not guarantee a similar outcome. Amounts are gross recoveries before fees and costs.
- **Button:** All case studies

### 8. Our Attorneys

- **Heading:** The counsel behind every verdict.
- **Button:** Meet the team

| Attorney         | Role       | Experience | Practice         | Office                    |
| ---------------- | ---------- | ---------- | ---------------- | ------------------------- |
| Grace Holloway   | Partner    | 12 yrs     | Immigration      | Queens, 118 Queens Blvd   |
| James O’Neill    | Associate  | 8 yrs      | Employment law   | Manhattan, 350 Fifth Ave  |
| Thomas Whitfield | Of Counsel | 35 yrs     | Estate planning  | Brooklyn, 26 Court St     |
| Aisha Rahman     | Partner    | 14 yrs     | Criminal defense | Queens, 118 Queens Blvd   |
| Marcus Chen      | Partner    | 18 yrs     | Business law     | Manhattan, 350 Fifth Ave  |
| Sofia Martinez   | Partner    | 16 yrs     | Family law       | Queens, 118 Queens Blvd   |

### 9. Insights

- **Heading:** Guides from our partners.
- **Button:** All insights

| Topic           | Read time  | Title                                                          |
| --------------- | ---------- | -------------------------------------------------------------- |
| Estates         | 8 min read | Will or trust: which one is the right choice for your family?  |
| Personal injury | 8 min read | What to tell an insurance adjuster                             |
| Personal injury | 6 min read | How long do you have to file an injury claim in New York?      |
| Business        | 7 min read | Five contract clauses every small business should have         |

### 10. FAQ

- **Heading:** Questions before you call.
- **Contact card:** Still have a question? Our intake team replies within one business hour. Button: **Ask our team**.

| Question                                        | Answer                                                                                                                                 |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| How much does a first consultation cost?        | Nothing. Every first consultation is free — in person, by phone or by video — with no obligation to hire us.                            |
| Do you work on contingency?                     | Yes, for injury and employment matters. You pay no attorney fee unless we recover money for you, and we explain every cost in writing first. |
| How fast will an attorney call me back?         | Our intake team replies within one business hour, and a senior attorney speaks with you within 24 hours.                                |
| Can I switch to Meridian Law from another lawyer? | Yes. We review your file, request your records from your current lawyer and handle the handover, so your case keeps moving.           |
| Do you serve clients outside New York City?     | We represent clients across New York State and meet by video when you can’t reach one of our NYC offices.                              |
| Can one attorney help with several issues?      | Yes. Your lead attorney coordinates with our other practice groups, so you keep one point of contact for everything.                   |

### 11. Call to Action

- **Heading:** Not sure where to start?
- **Text:** Tell us what happened. A senior attorney will point you in the right direction — free.
- **Button:** Book a free consultation
- **Background:** three rows of office and courtroom photos scrolling in opposite directions.

### 12. Footer

- **Top band:** social links (Facebook, X, LinkedIn, Instagram) · Meridian Law logo · **Book a free consultation ↗**
- **About:** A full-service New York law firm since 1999. Senior attorneys on every case, honest advice and pro bono help for those who need it most. (212) 555-0148
- **Pages:** Home · Practice areas · About · Attorneys · Case results · Contact
- **Contact us:** 350 Fifth Ave, Suite 4100, New York, NY 10118 · (212) 555-0148 · (212) 555-0160 · hello@meridianlaw.law
- **Our gallery:** six office photos
- **Bottom bar:** Copyright © 2026 Meridian Law. All rights reserved. · Back-to-top button

## 6. Project Details

| Field            | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| Project          | Meridian Law - law-firm website (frontend)                                              |
| Owner / Designer | Mirna                                                                                   |
| Repository       | [github.com/MirnaBahaa/Meridian-Law](https://github.com/MirnaBahaa/Meridian-Law)        |
| Type             | Marketing website for a New York law firm                                               |
| Scope            | Homepage (12 sections: navbar, hero, about, practice areas, how we work, testimonials, why us, case results, attorneys, insights, FAQ, call to action, footer) |
| Layouts          | Desktop (≥992px), tablet (768–991px), phone landscape (480–767px), phone (≤479px, designed at 375px) |
| Brand            | Meridian Law: original globe-and-meridian logo; forest green `#123B32`, terracotta `#A95335` / `#C56A45`, white smoke `#F7F4EC` |
| Typography       | Inter Tight (headings), Geist (body)                                                    |
| Accessibility    | Keyboard-reachable menus and controls, ARIA labels, alt text, reduced-motion support    |
| Started          | November 2026                                                                           |

### Remaining work

- Replace the sample site content (attorneys, testimonials, case results, statistics, contact details) with the firm's real information.
- Replace the CDN-hosted photos and video with licensed media stored in the project.
- Build the pages the navigation already links to: About, Practice Areas, Attorneys, Case Results, Insights, Contact, Privacy Policy, Legal Notice, and the individual practice/case/attorney/insight pages.

## Project Status

| Field              | Value                       |
| ------------------ | --------------------------- |
| Designer           | Mirna                       |
| Tool               | Claude Code                 |


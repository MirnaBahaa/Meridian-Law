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

## 5. Project Details

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
| Design Status      | Completed                   |


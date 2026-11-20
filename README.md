# APM Laundry & Dry Cleaning - Landing Page

A fast, accessible, and high-converting landing page for **APM Laundry & Dry Cleaning** in Hyderabad. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

---

## Features

- **WhatsApp Lead Capture Booking Form**: Zero backend required; validates customer name, 10-digit Indian phone number, service, and Hyderabad pickup address before cleanly opening WhatsApp with pre-filled details. Includes fallback link for pop-up blockers.
- **Unified Services & Transparent Rates**: Distinct garment catalogs and pricing for **Wash & Iron** (per piece), **Dry Cleaning** (per garment/set), and **Wash & Fold** (per kg).
- **Hyderabad Local SEO & JSON-LD**: Comprehensive LocalBusiness, Organization, and FAQ Schema structured data aligned with Hyderabad pickup zones.
- **Accessible Design System**: WCAG 2.1 AA compliant color contrast (all body text > 4.5:1), standard type scale (nothing below 14px), 44px+ mobile touch targets, and `prefers-reduced-motion` support.
- **Scroll-Spy Navbar**: Tracks active sections via `IntersectionObserver` with a clean pill active state (no overlapping dots).
- **Native Details/Summary FAQ**: Fully accessible, zero-JS client overhead accordion sharing structured data directly with Google's FAQ schema.

---

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Canonical site URL (for OG tags, sitemap, and canonical links)
NEXT_PUBLIC_SITE_URL=https://laundry-dry-cleaning.vercel.app

# WhatsApp business number (country code + 10 digits, no + or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=919398535017

# Primary phone number for schema and footer
NEXT_PUBLIC_PHONE_NUMBER=+91 93985 35017

# (Optional) Google Search Console Verification code
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Verification & Quality Checks

Run linting and TypeScript validation before deploying:

```bash
# Run ESLint
npm run lint

# Run TypeScript type check
npm run typecheck

# Production build test
npm run build
```

---

## Section Flow & Layout

1. **Hero**: Headline, real facts (24–48h turnaround, doorstep pickup, starting rates, steam press), and direct WhatsApp booking.
2. **Services & Pricing**: Wash & Iron, Dry Cleaning, and Wash & Fold with categorized garments and itemized INR rates.
3. **How It Works**: 3-step pickup, expert cleaning, and delivery process.
4. **Customer Reviews**: Real customer feedback with reviewer areas in Hyderabad and Google review indicators.
5. **About APM**: Combined history and commitments without repetitive marketing buzzwords.
6. **Areas We Serve**: Hyderabad coverage zones (Jubilee Hills, Banjara Hills, Hitec City, Madhapur, Gachibowli, etc.).
7. **FAQ**: Native `<details>` and `<summary>` questions and answers.
8. **Booking Form**: 50/50 photo and WhatsApp booking form with browser validation.
9. **Footer**: Real operating hours (8:00 AM – 9:00 PM), verified Hyderabad address, and legal links.

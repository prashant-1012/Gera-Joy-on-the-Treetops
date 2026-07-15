# Gera's Joy on the Treetops — Real Estate Landing Page

A high-conversion real estate landing page for **Gera's Joy on the Treetops**, a premium
2 & 3 BHK apartment and duplex project at Hinjewadi, Pune. Built and managed by
**Fusion Ace**, an authorized channel partner of Gera Developments.

## Live Preview

_TBD — update once this repo has its own deployment._

---

## Project

**Gera's Joy on the Treetops** — Hinjewadi, Pune.

- Premium 2 & 3 BHK homes and duplexes starting from ₹79.90 Lacs\*
- 10.7 Acres | Possession: December 2028
- 35,000+ Sq. Ft. Grand Clubhouse | 9 Celebrity-led Learning Academies
- Near Hinjewadi IT Park & Upcoming Metro
- RERA: P52100077635 & PR1261012501648

---

## Features

- Auto-slideshow hero with 2 background images and fade transitions
- Lead capture popup with country code selector, configuration dropdown, and consent checkbox
- Floor plan section with blur-gated images (click to enquire)
- Amenities carousel covering all 9 amenities
- Gallery as a sliding carousel with lightbox, keyboard navigation, and thumbnail strip
- Location advantage section with map and tabbed proximity data side-by-side (connectivity, schools, hospitals, malls, business hubs)
- About Gera Developments section with legacy stats
- Fully responsive across mobile, tablet, and desktop
- SEO-optimized meta title and description

---

## Tech Stack

- **Framework**: Next.js 16.2.9 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI)
- **AI / Server Actions**: Google Genkit + Gemini
- **Lead Storage**: Google Sheets API v4
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Project Structure

```
src/
  app/
    page.tsx              # Main page — section assembly
    layout.tsx            # Root layout, metadata
  components/
    home/
      hero-section.tsx           # Auto-slideshow hero
      project-overview-section.tsx
      floor-plan-section.tsx     # Blurred floor plan cards
      amenities-section.tsx
      location-tabs-section.tsx  # Tabbed location data
      gallery-section.tsx        # Lightbox gallery
      about-section.tsx          # Gera Developments info
      enquire-now-popup.tsx      # Lead capture form
    layout/
      header.tsx
      footer.tsx
  ai/
    flows/
      save-enquiry-flow.ts       # Google Sheets lead save
  config/
    site.ts                      # API credentials
public/
  images/                        # All project images (PNG)
```

---

## Image Assets

All images live in `public/images/`:

| File | Usage |
|------|-------|
| `logo.png` | Header & footer |
| `hero-bg-1.png` | Hero slideshow slide 1 |
| `hero-bg-2.png` | Hero slideshow slide 2 |
| `overview-building.png` | Project overview section |
| `floorplan-2bhk.png` | Floor plan card (blurred) |
| `floorplan-3bhk.png` | Floor plan card (blurred) |
| `floorplan-2bhk-duplex.png` | Floor plan card (blurred) |
| `floorplan-3bhk-duplex.png` | Floor plan card (blurred) |
| `amenity-coworking.png`, `amenity-gym.png`, `amenity-minitheatre.png`, `amenity-play-area.png`, `amenity-gokart-track.png`, `amenity-bowling.png`, `amenity-badminton.png`, `amenity-squash.png`, `amenity-music-art.png` | Amenities carousel |
| `gallery-1.png` … `gallery-4.png` | Gallery carousel + lightbox |
| `rera-qr-codes.png` | RERA QR codes (unused — no component references it yet) |

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:9002
npm run build     # Production build
```

---

## Pending

- Fusion Ace's own RERA ID is blank in the disclaimer — needed before launch
- Fusion Ace's real contact details (email/phone/address) — `about-us`/`contact-info` pages
  currently show a placeholder pending client input
- WhatsApp button (`common/whatsapp-button.tsx`) still uses a placeholder phone number
  (`9999999999`)
- Google Maps embed in `location-tabs-section.tsx` uses a generic area search, not a precise
  pinned address — swap in the exact embed string from Google Maps if needed
- Move credentials in `src/config/site.ts` to environment variables
- Set up a deployment for this repo and update the Live Preview link above

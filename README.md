# Godrej Kukatpally, Hyderabad — Real Estate Landing Page

A high-conversion real estate landing page for **Godrej Kukatpally**, a pre-launch luxury residential project in Kukatpally, Hyderabad. Built and managed by **Prop Mission Private Limited**, an authorized channel partner of Godrej Properties.

## Live Preview

[godrej-kukatpally-hyderabad-gamma.vercel.app](https://godrej-kukatpally-hyderabad-gamma.vercel.app/)

---

## Project

**Godrej Kukatpally** — Brooklyn-Inspired Sky Residences in Kukatpally, Hyderabad.

- Premium 3 & 4 BHK homes starting from ₹2.11 Cr\*
- 7.8 Acres | 4B+G+45 Storey | 2 Iconic Towers
- 72,000 Sq. Ft. Grand Clubhouse | 75% Open Green Spaces
- Near Metro, Nexus Mall & HITEC City
- Possession: December 2030\*

---

## Features

- Auto-slideshow hero with 2 background images and fade transitions
- Lead capture popup with country code selector, configuration dropdown, and consent checkbox
- Floor plan section with blur-gated images (click to enquire)
- Amenities section with image cards and gradient fallbacks
- Gallery as a sliding carousel with lightbox, keyboard navigation, and thumbnail strip
- Location advantage section with map and tabbed proximity data side-by-side (connectivity, schools, hospitals, malls, business hubs)
- About Godrej Properties section with legacy stats
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
      about-section.tsx          # Godrej Properties info
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
| `floorplan-3bhk-premium.png` | Floor plan card (blurred) |
| `floorplan-3bhk-luxe.png` | Floor plan card (blurred) |
| `floorplan-4bhk-maid.png` | Floor plan card (blurred) |
| `amenity-gym.png` | Amenities section |
| `amenity-pool.png` | Amenities section |
| `amenity-play-area.png` | Amenities section |
| `gallery-1.png` … `gallery-6.png` | Gallery grid + lightbox |

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:9002
npm run build     # Production build
```

---

## Pending

- Replace Google Maps embed `src` in `src/components/home/location-tabs-section.tsx` with the actual property embed URL
- Add RERA registration number once available
- Move credentials in `src/config/site.ts` to environment variables
- Google Sheets columns: add `configuration` and `consent` fields when ready

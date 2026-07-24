# Pengana Concept

A lean React + Vite website for Pengana Concept Limited and its businesses:
Pengana Properties, Tishino Ventures, and Sunab Telecoms Services.

The redesign is image-led and interaction-rich while keeping factual claims
grounded in the supplied brief. It includes responsive business storytelling,
themed navigation, contextual enquiry forms, office maps and art-directed
photography without inventing projects, statistics, reviews or social accounts.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Form delivery

Copy `.env.example` to `.env.local` and add verified POST endpoints before
launch. The group, Properties, Tishino and Sunab forms support separate
destinations; `VITE_FORM_ENDPOINT` can be used as a shared fallback. Without a
configured endpoint, submission opens an addressed email draft so no enquiry is
silently discarded.

## Current information architecture

```text
/
├── about
├── companies
├── contact
├── sunab
├── properties
│   ├── services
│   ├── stays
│   └── contact
└── tishino
    ├── operations
    ├── produce
    └── contact
```

Legacy property-development, portfolio, and gallery URLs redirect into the
nearest current page. The former generated News and Careers experiences were
removed rather than left online with demo content.

## Project structure

```text
public/
  fonts/                 local display type
  images/                semantic, project-ready concept imagery
src/
  components/
    blocks/              reusable editorial sections (hero, split-story, board…)
    chrome/              header + unified menu, business context strip, footer
    ui/                  links, wordmark, viewport reveal, interactive office map
  content/
    company.js           group facts, leadership, phones and navigation
    businesses.js        one verified model for the three businesses
    images.js            semantic image map
  pages/                 route-level compositions
  styles/
    fonts.css            local font declarations
    theme.css            spacing, colour and typography tokens
    base.css             reset and global primitives
    components.css       semantic component styling and breakpoints
```

## Design and content notes

- [DESIGN.md](./DESIGN.md) defines the shared visual language, themes,
  navigation, responsiveness and interaction rules.
- [images.md](./images.md) lists every image slot with a description and size —
  overwrite the placeholder at each path with real photography, no renaming.
- [CONTENT-NOTES.md](./CONTENT-NOTES.md) records what was removed and what needs
  confirmation before launch.
- `pengana-relume-brief.md` is retained as the supplied content source. It is a
  prompt pack, not independent evidence, so any new factual claim should still
  be confirmed by the business.

## Imagery

The site is image-led. Every `<img>` points at a purpose-named editorial asset
under `public/images/`. To use approved production photography, **overwrite the
file in place** — the paths never change and nothing needs renaming.
[images.md](./images.md) documents each slot's purpose, orientation and size.
Board entries retain monogram fallbacks until approved portraits are supplied.
Maps use Leaflet with a keyless CARTO basemap.

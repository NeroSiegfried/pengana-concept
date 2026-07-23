# Pengana Concept

A lean React + Vite website for Pengana Concept Limited and its businesses:
Pengana Properties, Tishino Ventures, and Sunab Telecoms Services.

The redesign is intentionally content-conservative. It uses only the business
identities, sectors, locations, directors, telephone lines, and relationships
present in the supplied brief. Unverified projects, statistics, reviews, news,
social accounts, email addresses, and forms are not published.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

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
    blocks/              reusable editorial sections
    chrome/              global and subsidiary navigation, footer, page shells
    ui/                  links, wordmark, viewport reveal
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
  responsiveness and interaction rules.
- [CONTENT-NOTES.md](./CONTENT-NOTES.md) records what was removed and what needs
  confirmation before launch.
- `pengana-relume-brief.md` is retained as the supplied content source. It is a
  prompt pack, not independent evidence, so any new factual claim should still
  be confirmed by the business.

## Imagery

The site uses a small set of art-directed concept images to establish the
layout. They are named by purpose instead of being reused under opaque export
identifiers. Replace them with authenticated company photography before a
public launch; the semantic paths make that swap straightforward.

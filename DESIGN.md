# Pengana design language

## Direction

The site is an editorial group publication rather than a conventional corporate
template. Its rhythm deliberately alternates:

1. full-bleed photographic or colour-led moment;
2. regular information section;
3. asymmetric image composition;
4. ruled, highly structured content;
5. full-bleed call to action.

This synthesis comes from browser inspection of all supplied references at
desktop, tablet and phone widths. Haven, Ambience and Stayvo informed the
full-bleed/regular rhythm; Ardene, Furnexa and Acre Studios informed the
confident scale and asymmetric framing; Atelier Norr informed thin rules and
architectural structure; Mechagro, Verger and Omnis informed the agricultural
and corporate tonal shifts.

## Spacing

The structural unit is **8px**. The working scale is:

```text
8 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 120 · 144 · 160
```

Four-pixel optical half-steps are reserved for hairlines, small type alignment
and compact controls. Page gutters remain deliberately lean:

- phone: 16px;
- tablet: 20–32px through the fluid gutter;
- desktop: 40px maximum.

Major section spacing is fluid from roughly 96px to 176px. Repeated section and
card gaps come from the same unit rather than component-specific guesses.

## Typography

- Display: locally hosted Playfair Display, renamed `Pengana Display` in CSS.
- Interface and body: a neutral system sans stack.
- Main headings: `clamp()` from roughly 56px on a phone to 150px on a wide
  screen, with tight leading and tracking.
- Body copy: 15–20px and generally capped near 55–65 characters.
- Eyebrows: uppercase sans, 11–12px, generous tracking.

The serif creates the stylish, established tone; the sans keeps navigation and
operational content direct.

## Themes

Every page uses the same layout and interaction grammar. Only semantic colour
tokens and imagery shift:

| Site | Deep | Accent | Pale | Tone |
|---|---:|---:|---:|---|
| Pengana Concept | `#101B26` | `#456079` | `#DFE7ED` | corporate, quiet |
| Pengana Properties | `#281B15` | `#9A6848` | `#EADFD4` | warm, spatial |
| Tishino Ventures | `#1C2417` | `#617149` | `#E3E4D3` | natural, grounded |
| Sunab (internal) | `#0B1230` | `#3F4FB0` | `#D9DEF2` | telecoms, deep blue |

The `data-site` attribute changes only the semantic tokens. It does not fork the
component system. The footer and closing CTAs read `data-site` from the current
route, so the whole page — chrome included — resolves to one tone. The `/sunab`
page itself stays in the group navy per brief; its blue appears only as the
handoff accent.

## Shape language

Two shape families, applied on purpose rather than everywhere:

- **Actions** keep the pill where they sit on media and heroes; utility controls
  use a measured rounded rectangle (`--radius-s`), and in-copy actions are an
  underlined line-link. The pill is not the default for everything.
- **Surfaces** — photographic cards, split-story media, portraits, maps — carry
  a measured radius (`--radius-m`). Structural ruled grids stay crisp.

One asymmetric device is used at a time (a single chamfered corner, an unequal
image grid, a stepped panel) for the non-square energy of Furnexa. **The clip
always lands on an image corner, never where copy sits** — the earlier Tishino
card cut its own text; the chamfer now sits upper-left, clear of the label.

## Imagery

The site is image-led, not a brochure: full-bleed statements, split-story bands,
a produce gallery, portrait board tiles and live maps. Every `<img>` points at a
stable placeholder in `public/images/` documented in [images.md](./images.md);
overwrite the file in place with real photography — no code or path changes.
Board portraits use the supplied local photography and sit in an editorial
three-column grid with centered incomplete rows.

## Maps

Contact and office sections embed a live, interactive map per office (Leaflet +
CARTO basemap, no API key). Tiles are toned to the paper; the marker takes the
business accent; wheel-zoom stays off until the map is focused so it never
hijacks scroll. Coordinates are district-level pending confirmation of exact
plots.

## Navigation

The three businesses are reached through one system rather than a header menu
plus a competing per-business tab bar.

- Global header: 72px desktop, 64px compact. Transparent over selected heroes;
  frosted and solid after scrolling. The frost sits on a pseudo-element so the
  header never becomes the containing block for its own panels (a mega-panel or
  full-screen menu that would otherwise clip when the header frosts on scroll).
- **Businesses mega-panel.** The header's "Businesses" control opens one
  full-width panel showing the three businesses with *every* sub-page, each
  column in its own accent — plus an "All businesses" link. It does **not**
  repeat About/Contact (those stay as their own header links). Opens on hover or
  click.
- **Context row, part of the header.** On a business page the header gains a
  second row that shares its colour and frost: `Pengana Group / Business` on the
  left and that mini-site's page links on the right, the active one underlined in
  the business accent. It is the same navbar, not a separate strip.
- Below 960px, the menu is a full-screen editorial drawer (large ruled group
  links, then each business with its sub-pages); the context row's page links
  scroll horizontally.
- Header accent, the context row and the footer all shift tone with the section.

## Responsive behavior

- Wide desktop: asymmetric multi-column compositions.
- Tablet: reduced proportions and selective two-column layouts; it is treated
  as its own state, not an enlarged phone.
- Below 960px: mobile navigation and subsidiary-nav behavior.
- Below 768px: immersive cards become a purposeful single-column sequence,
  typography steps down, and sticky storytelling becomes linear.
- Full-bleed images use explicit `object-position` per context and stay robust
  through landscape, tablet and portrait crops.

## Motion

Motion is restrained and functional:

- a short page-enter fade/rise on every route, and a slow settle-zoom on hero
  imagery;
- the home showcase expands the hovered panel and reveals its summary while the
  others shrink;
- image scale on image-led card hover; arrow travel on actionable elements;
- section entrances via `IntersectionObserver`;
- transparent-to-frosted navigation transition;
- no long loader, autoplay carousel, scroll hijack or decorative cursor.

`prefers-reduced-motion` removes meaningful transition duration.

## Content guardrail

Empty or unconfirmed datasets should hide a section or route. They must never be
filled with sample metrics, reviews, projects, dates, people, contact endpoints
or operational claims simply to complete a layout.

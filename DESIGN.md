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
| Sunab handoff | own deep blue | — | — | separate brand destination |

The `data-site` attribute changes only the semantic tokens. It does not fork the
component system.

## Shape language

Rectangles remain the default. One asymmetric device is used at a time:

- one clipped lower corner;
- one oversized corner radius;
- an unequal image grid;
- a stepped or angled companion panel.

This takes the non-square energy of Furnexa and architectural references without
turning every card into a different novelty.

## Navigation

- Global header: 72px desktop, 64px compact.
- Transparent over selected heroes; frosted and solid after scrolling.
- Desktop business menu gives all three companies immediate access.
- Below 960px, navigation becomes a working full-screen editorial drawer with
  scroll lock and large ruled links.
- Properties and Tishino have a separate 52/48px sticky local navigation. It
  remains horizontally scrollable on compact screens rather than squeezing or
  wrapping.

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

- 1.04 image scale on image-led card hover;
- arrow rotation or spacing change on actionable elements;
- one entrance treatment using `IntersectionObserver`;
- transparent-to-frosted navigation transition;
- no long loader, autoplay carousel, scroll hijack or decorative cursor.

`prefers-reduced-motion` removes meaningful transition duration.

## Content guardrail

Empty or unconfirmed datasets should hide a section or route. They must never be
filled with sample metrics, reviews, projects, dates, people, contact endpoints
or operational claims simply to complete a layout.

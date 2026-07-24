# Image slots

Every image on the site is a **replaceable editorial slot**. The current files
combine the original concept photography with art-directed documentary images
created for the portfolio and enquiry stories. To use approved production
photography, just **save your file over the one at the same path** — no renaming,
no code changes.

- Keep the **same file name and `.jpg` extension** (e.g. drop your photo on top
  of `public/images/tishino/hero.jpg`).
- Match the **orientation and rough aspect** listed below so crops stay clean.
  Exact pixels don't matter; export at roughly the size shown or larger.
- Descriptions are intentionally **generic** — any photo matching the description
  will fit the layout and the on-page alt text.
- The **Alternative** column names a sensible fallback (a sibling slot that can
  be reused, or a different subject that still fits) for when the described photo
  can't be sourced. Reusing a sibling image is always safe — the paths are what
  the code reads, not the contents.
- `board/*` are monogram placeholders. Real, approved director portraits are
  optional; if you drop a photo in, it replaces the monogram automatically.

Paths are relative to `public/`. Referenced from `src/content/images.js`.

## Group — Pengana Concept (cool / corporate, navy + silver)

| Path | Where used | Orientation | ~Size | Description | Alternative if missing |
|---|---|---|---|---|---|
| `images/group/hero.jpg` | Home hero | Landscape 16:9 | 2000×1125 | Wide dark cityscape or modern architecture at dusk; room for a navy overlay and headline. | Any wide dusk skyline; or reuse `group/statement.jpg`. |
| `images/group/story.jpg` | About "Our story" + Home split-story | Portrait 4:5 | 1200×1500 | Quiet corporate/architectural interior or façade; calm, no people needed. | A calm office lobby/atrium portrait; or reuse `group/structure.jpg` (crop tall). |
| `images/group/statement.jpg` | Home + About full-bleed statement band | Landscape 16:9 | 2000×1125 | Abstract light-and-shadow architecture; works under white text. | Any high-contrast architectural light study; or reuse `group/hero.jpg`. |
| `images/group/structure.jpg` | About group structure + Home "one board" split-story | Landscape 3:2 | 1500×1000 | Clean architectural geometry; corporate, minimal. | Minimal façade grid / staircase geometry; or reuse `group/statement.jpg`. |
| `images/group/texture.jpg` | **Spare** (not currently placed) | Square 1:1 | 1200×1200 | Material or concrete detail; used small and tinted. | Any concrete/stone macro; safe to leave as-is until a slot needs it. |
| `images/group/values.jpg` | **Spare** (not currently placed) | Landscape 16:9 | 2000×1125 | Architectural texture; shown as a tinted duotone under text. | Reuse `group/statement.jpg`; safe to leave as-is. |

## Pengana Properties (warm / hospitable, bronze accent)

| Path | Where used | Orientation | ~Size | Description | Alternative if missing |
|---|---|---|---|---|---|
| `images/properties/hero.jpg` | Properties hero + Home showcase + Businesses portfolio | Landscape 16:9 | 2000×1125 | Modern residential building exterior in warm daylight. | Any warm contemporary residential exterior; or reuse `properties/statement.jpg`. |
| `images/properties/real-estate.jpg` | Overview "real estate" focus card | Portrait 4:5 | 1200×1500 | Contemporary building exterior / façade detail. | Tall façade crop of `properties/hero.jpg`. |
| `images/properties/stay.jpg` | Overview + Stays hero + Businesses portfolio | Portrait 4:5 | 1200×1500 | Warm, furnished interior; inviting short-let / apartment feel. | Any inviting furnished interior; or reuse `properties/detail.jpg` (crop tall). |
| `images/properties/detail.jpg` | Stays detail band + Businesses portfolio | Square 1:1 | 1200×1200 | Interior or material close-up (timber, textile, stone). | Any warm interior macro; or crop `properties/stay.jpg`. |
| `images/properties/development.jpg` | Services development band | Landscape 3:2 | 1500×1000 | Building / construction / architecture in progress. | Any construction/site photo; or reuse `properties/development-team.jpg`. |
| `images/properties/development-team.jpg` | Businesses portfolio "development in progress" | Landscape 3:2 | 1535×1024 | Nigerian architect and site engineer reviewing a residential development in Jos. | People reviewing plans on a site; or reuse `properties/development.jpg`. |
| `images/properties/statement.jpg` | Overview full-bleed statement band | Landscape 16:9 | 2000×1125 | Building against sky; works under white text. | Reuse `properties/hero.jpg`. |
| `images/properties/duotone.jpg` | **Spare** (not currently placed) | Landscape 16:9 | 2000×1125 | Architecture shown as a warm bronze duotone. | Reuse `properties/statement.jpg`; safe to leave as-is. |
| `images/properties/lifestyle.jpg` | Businesses portfolio + Properties enquiry media | Landscape 3:2 | 1536×1024 | Warm apartment terrace and a view across Jos. | Any warm terrace/balcony-with-view; or reuse `properties/stay.jpg`. |

## Tishino Ventures (natural / earthy, leaf-green accent)

| Path | Where used | Orientation | ~Size | Description | Alternative if missing |
|---|---|---|---|---|---|
| `images/tishino/hero.jpg` | Tishino hero + Home showcase + Businesses portfolio | Landscape 16:9 | 2000×1125 | Wide cultivated farmland / open fields under sky. | Any wide farmland vista; or reuse `tishino/operations.jpg`. |
| `images/tishino/rice.jpg` | Produce trio (grains) | Portrait/Square | 1200×1500 | Rice paddy or grain close-up. | Any grain/paddy close-up; or reuse `tishino/staples.jpg`. |
| `images/tishino/beans.jpg` | Produce trio (legumes) | Portrait/Square | 1200×1500 | Bean / legume plants or harvested beans close-up. | Any legume close-up; or reuse `tishino/staples.jpg`. |
| `images/tishino/maize.jpg` | **Spare** (not currently placed) | Square 1:1 | 1200×1200 | Maize / corn field or cobs close-up. | Any maize close-up; safe to leave as-is. |
| `images/tishino/operations.jpg` | Operations statement band | Landscape 3:2 | 1500×1000 | Farmland, irrigation or field work. | Any field-work photo; or reuse `tishino/hero.jpg`. |
| `images/tishino/statement.jpg` | Overview full-bleed statement band | Landscape 16:9 | 2000×1125 | Fields shown as a green duotone under white text. | Reuse `tishino/hero.jpg`. |
| `images/tishino/produce.jpg` | Overview split-story + Produce trio feature | Portrait 4:5 | 1200×1500 | Tall crop of fields / harvest. | Any tall harvest/field crop; or reuse `tishino/staples.jpg`. |
| `images/tishino/staples.jpg` | Produce staple band + Businesses portfolio | Landscape 3:2 | 1536×1024 | Grains, legumes, roots and tubers beside cultivated fields. | Any mixed-produce spread; or reuse `tishino/produce.jpg`. |
| `images/tishino/roots-sorting.jpg` | Businesses portfolio "roots & tubers" | Landscape 3:2 | 1536×1024 | Nigerian farm workers sorting yams and cassava after harvest. | Any post-harvest sorting scene; or reuse `tishino/distribution.jpg`. |
| `images/tishino/distribution.jpg` | Businesses portfolio "distribution & offtake" | Landscape 3:2 | 1536×1024 | Agricultural warehouse team preparing mixed staples for distribution. | Any produce warehouse/logistics scene; or reuse `tishino/roots-sorting.jpg`. |
| `images/tishino/agronomy.jpg` | Businesses portfolio + Tishino enquiry media | Landscape 3:2 | 1536×1024 | Nigerian agronomist inspecting soil and mixed crops in the field. | Any agronomist/field-inspection photo; or reuse `tishino/operations.jpg`. |

## Sunab Telecoms (internal landing — navy/silver, not Sunab's own colours)

| Path | Where used | Orientation | ~Size | Description | Alternative if missing |
|---|---|---|---|---|---|
| `images/sunab/hero.jpg` | Sunab hero + Home showcase + Businesses portfolio | Landscape 16:9 | 2000×1125 | Telecom mast / network infrastructure at dusk. | Any mast/tower at dusk; or reuse `sunab/statement.jpg`. |
| `images/sunab/network.jpg` | "What Sunab does" split-story | Portrait 4:5 | 1200×1500 | Fibre, data centre or network hardware detail. | Any server/fibre hardware close-up; or reuse `sunab/infrastructure.jpg` (crop tall). |
| `images/sunab/statement.jpg` | Sunab full-bleed statement band | Landscape 16:9 | 2000×1125 | Network / connectivity shown as a deep-blue duotone. | Reuse `sunab/hero.jpg`. (The dedicated-site handoff band is now colour-only — no image needed.) |
| `images/sunab/infrastructure.jpg` | "Behind the network" feature image | Landscape 3:2 | 1536×1024 | Nigerian network engineer inside a carrier infrastructure facility. | Any data-centre / carrier-room scene; or reuse `sunab/network-operations.jpg`. |
| `images/sunab/field-engineer.jpg` | Businesses portfolio "field engineering" | Landscape 16:9 | 1672×941 | Nigerian telecom engineer inspecting rooftop microwave equipment in Abuja. | Any rooftop/tower engineer photo; or reuse `sunab/fibre-operations.jpg`. |
| `images/sunab/network-operations.jpg` | Businesses portfolio + Sunab enquiry media | Landscape 16:9 | 1712×919 | Nigerian carrier operations team monitoring a network control room. | Any NOC / control-room scene; or reuse `sunab/infrastructure.jpg`. |
| `images/sunab/fibre-operations.jpg` | Businesses portfolio "fibre operations" | Landscape 16:9 | 1647×955 | Nigerian technician splicing fibre at an outdoor distribution cabinet. | Any fibre-splicing/cabinet scene; or reuse `sunab/field-engineer.jpg`. |

## Board portraits (optional — monogram placeholders until real photos exist)

Portrait 4:5, ~1000×1250. Add only **approved** director photography. If a file
is missing or unapproved, the tile keeps its monogram automatically — no
alternative image is required.

| Path | Director |
|---|---|
| `images/board/bitrus-b-nabasu.jpg` | Bitrus B. Nabasu, mni — Chairman |
| `images/board/victoria-nabasu.jpg` | Mrs. Victoria Nabasu — Director |
| `images/board/jerry-nabasu.jpg` | Jerry A. Nabasu — Director |
| `images/board/jeffersen-nabasu.jpg` | Jeffersen S. Nabasu — Director |
| `images/board/jibrin-victor-nabasu.jpg` | Jibrin Victor Nabasu — Director |

## Currently unused slots

These files exist and are documented above but are **not placed on any page**
right now. They are safe to leave untouched; they're kept so a future section
can use them without a code change:

- `images/group/texture.jpg`
- `images/group/values.jpg`
- `images/properties/duotone.jpg`
- `images/tishino/maize.jpg`

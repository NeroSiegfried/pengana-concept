# Pengana Concept — Website Brief & Relume Prompt Pack

**Prepared:** 2026-07-21 · **Updated:** 2026-07-23
Latest changes: every section now names its **Relume library category** (Header, Layout, Feature, etc.) so it maps 1:1 to what you pick in Relume; hospitality = short-let / serviced apartments (Airbnb-style); agriculture = staple crops (rice, beans, maize) + livestock/poultry (growth area); per-site colour schemes included.
**Purpose:** Generate the Pengana Concept group website in Relume (Sitemap AI → Wireframe AI), with each subsidiary built as a real multi-page business, not a single showcase page.

---

## 0. The group at a glance

**Pengana Concept Limited** — a diversified, family-owned Nigerian holding company (Abuja HQ). The site is *about* Pengana Concept and *houses* three businesses, each treated as a business in its own right:

| Entity | Business | Location | Presence on site |
|---|---|---|---|
| **Pengana Concept Limited** | Parent / holding co. | Plot 721, Cadastral Zone, Dakibiyu District, Abuja | Group pages (Home, About, Contact) |
| **Pengana Properties** | Property development **& hospitality** — development, sales, leasing, management; **short-let & serviced apartments (Airbnb-style stays)** | No 2A Wamba Close, Off Wamba Road, Tudun Wada, Jos | **Multi-page mini-site** (internal) |
| **Tishino Ventures** | **Agriculture** — staple crops (rice, beans, maize/corn and other Nigerian staples), with **livestock & poultry as a growth area** | Plot 721, Cadastral Zone, Dakibiyu District, Abuja (shared HQ) | **Multi-page mini-site** (internal) |
| **Sunab Telecoms Services** | Telecommunications carrier services | Plot 260, Kamar Adeyemi Crescent, KingsPark Estate, Kukwaba District, Abuja | **Single landing page** → external site |

> **Sunab** keeps its own separate branding, logo and website (sunabtelecomservices.com). On this site it is introduced in Pengana styling, then links out.

### Directors

**Pengana Concept / Pengana Properties / Tishino Ventures** (same board):
- Bitrus B. Nabasu, mni — **Chairman**
- Mrs. Victoria Nabasu — Director
- Jerry A. Nabasu — Director
- Jeffersen S. Nabasu — Director
- Jibrin Victor Nabasu — Director

**Sunab Telecoms Services** (separate board):
- Bitrus Bako Nabasu — Chairman
- Module Adewunmi Baiyere
- Umar Abdulahi Bello

### Shared phone lines (Concept, Properties, Tishino)
+234 805 744 2250 · +234 809 818 2224 · +234 909 766 6667
(Sunab has its own contact details on its own site.)

---

## 1. Brand & colour schemes

All three Pengana sites share one **foundation** (navy + silver, from the logo) so they read as a family. Each business then carries **one distinctive accent** for its own identity. Sunab is separate and keeps its own colours.

### 1a. Shared foundation (every Pengana site)

| Token | Hex | Use |
|---|---|---|
| navy-900 | `#10151D` | Body text, footer |
| navy-800 | `#1E2836` | Deep sections |
| navy-700 | `#2E3A4D` | Hovers, bands |
| **navy-600 (primary)** | `#3A4963` | Logo, headings, buttons |
| navy-400 | `#5A6980` | Secondary text |
| navy-300 | `#9BA6B6` | Muted UI |
| silver-300 | `#B9C0C7` | Borders |
| silver-200 | `#D6DBDF` | Section fills |
| silver-100 | `#E8EBEE` | Alt sections |
| silver-50 | `#F4F6F7` | Page background |
| white | `#FFFFFF` | Cards, base |

### 1b. Pengana Concept (group / parent) — cool & corporate
| Role | Hex |
|---|---|
| Primary | `#3A4963` |
| Primary dark (hover) | `#2E3A4D` |
| Accent (links / focus) | `#5E7A99` |
| Page bg / alt | `#F4F6F7` / `#E8EBEE` |
| Text | `#10151D` |

### 1c. Pengana Properties — property + short-let hospitality (warm & hospitable)
| Role | Hex |
|---|---|
| Primary | `#3A4963` |
| Primary dark | `#2E3A4D` |
| **Accent — bronze/gold** | `#A97B4F` |
| Accent dark | `#855D34` |
| Warm surface / cream | `#F4EFE8` |
| Page bg | `#F7F6F4` |
| Text | `#10151D` |

### 1d. Tishino Ventures — agriculture (natural & earthy)
| Role | Hex |
|---|---|
| Anchor (header/footer/text) | `#3A4963` |
| **Accent — leaf/olive green** | `#4B7A46` |
| Green dark | `#35592F` |
| Secondary — harvest gold | `#C9A24B` |
| Natural surface | `#F5F3EC` |
| Page bg | `#F7F7F2` |
| Text | `#10151D` |

### 1e. Sunab Telecoms (reference only — do NOT restyle)
Its own identity: deep blue `#090673` + green `#088C1C`. The internal `/sunab` landing page uses **Pengana** navy/silver, not these.

**Type & UI (all sites):** clean sans-serif, generous whitespace, pill-shaped buttons, softly rounded cards, 16:9 imagery.

---

## 2. Sitemap

```
pengana… (main domain)
│
├── Home
│
├── About Us  (Story · Mission/Vision/Values · Board of Directors · Group Structure)
│
├── Our Companies                 ← hub introducing all three businesses
│
├── Pengana Properties  ───────────  MINI-SITE (own sub-nav)
│     ├── Overview              /properties
│     ├── Property Development  /properties/development
│     ├── Stays (Hospitality)  /properties/stays
│     ├── Projects & Portfolio  /properties/projects
│     └── Contact & Enquire     /properties/contact
│
├── Tishino Ventures  ─────────────  MINI-SITE (own sub-nav)   [AGRICULTURE]
│     ├── Overview              /tishino
│     ├── Operations            /tishino/operations
│     ├── Produce & Products    /tishino/produce
│     ├── Gallery               /tishino/gallery
│     └── Contact & Enquire     /tishino/contact
│
├── News & Insights          /news        ← hub: Company News · Press · Insights
│     ├── Article / blog post  /news/{slug}
│     └── Press release         /news/press/{slug}
│
├── Careers                  /careers     ← group-level; roles tagged by company
│     └── Role (optional)       /careers/{role}
│
├── Sunab Telecoms            /sunab   ← landing page, links OUT to external site
│
└── Contact  (group)
```

### Navigation model
- **Primary (group) nav:** Home · About · Our Companies ▾ · News & Insights · Contact · **[Get in touch]**
- **Local (sub-site) nav:** Properties → Overview · Property Development · Stays · Projects · Contact; Tishino → Overview · Operations · Produce · Gallery · Contact. Each shows a small "← Pengana Concept" link back to the group.
- **Careers** is not in the primary nav — it lives in the **footer** and is linked from the About page (and from any relevant News post). Reachable at `/careers`.
- **Sunab** in the dropdown routes to the internal `/sunab` landing page; the external `↗` handoff lives on that page.
- **News & Insights** carries content from every business under one hub, filtered by category (Company News / Press / Insights).

---

# 3. RELUME PROMPTS

**How to read these:** every section is labelled with the **Relume library category** you select in the builder (e.g. *Header section*, *Layout section*, *Feature section*), followed by what that section should contain. Relume section vocabulary used here: **Navbar, Header, Layout, Feature, Gallery, Timeline, Stats, Testimonial, Logo, Team, CTA, Contact, FAQ, Banner, Footer.**

- *Header* = the hero/top-of-page block. *Layout* = an alternating image + text content block. *Feature* = an icon/card grid. *Timeline* = numbered steps / process. *Stats* = metric strip. *Logo* = a row of partner/client logos. *Team* = people grid. *Banner* = a small full-width strip. *CTA* = call-to-action banner.
- **Navbar + Footer are added automatically to every page** — set them up once (logo, nav items above, group footer with the three phone lines, addresses and links) and reuse across all pages.

Workflow: paste the **Sitewide prompt** into Relume's sitemap generator first, then generate each page with its **Page prompt**, and refine with the **Section prompts**.

---

## 3.0 — SITEWIDE PROMPT (sitemap generator)

```
Company: Pengana Concept Limited — a diversified, family-owned Nigerian holding
company headquartered in Abuja (Plot 721, Cadastral Zone, Dakibiyu District).
Pengana Concept is the parent brand; the website presents the group and houses
its businesses, each treated as a substantial business in its own right:

  • Pengana Properties — a property development and hospitality business:
    real estate (development, sales, leasing/lettings and property management)
    AND hospitality in the form of short-let and serviced apartments (Airbnb-style
    stays), based in Jos. Build this as a multi-page mini-site: Overview, Property
    Development, Stays (Hospitality), Projects & Portfolio, Contact.
  • Tishino Ventures — an agriculture business growing staple Nigerian crops such
    as rice, beans and maize (corn), and expanding into livestock and poultry,
    based at the Abuja HQ. Build this as a multi-page mini-site: Overview,
    Operations, Produce & Products, Gallery, Contact.
  • Sunab Telecoms Services — a telecommunications carrier-services company in
    Abuja with its OWN separate website and branding. On this site it gets a
    single landing page that introduces it and links out to
    sunabtelecomservices.com.

Audience: property buyers and investors; guests looking for short-let / serviced
apartments; agricultural buyers, offtakers and distributors of staple crops;
corporate and government clients; and partners seeking a credible, established
Nigerian group.

Positioning & tone: trustworthy, established, understated and corporate — a group
with real depth across property, hospitality and agriculture. Confident, not
flashy. Emphasise heritage, family leadership and diversified strength. Each
business should read as a real, going concern with its own services, portfolio
and calls to action — not a brochure entry.

Brand direction: derive the palette from the Pengana Concept logo — slate navy
blue (#3A4963) primary, with silver-grey (#D6DBDF) and white as neutrals. Clean
sans-serif type, generous whitespace, pill-shaped buttons, softly rounded cards,
16:9 imagery. Each business has one accent: bronze (#A97B4F) for Pengana
Properties, olive green (#4B7A46) for Tishino Ventures; the group pages stay
navy/silver. Do NOT reuse Sunab's colour scheme — Sunab keeps its own branding.

Pages to generate:
  Home; About Us; Our Companies (hub);
  Pengana Properties: Overview, Property Development, Stays (Hospitality),
    Projects & Portfolio, Contact;
  Tishino Ventures: Overview, Operations, Produce & Products, Gallery, Contact;
  Sunab Telecoms (single landing page that links out); Contact.

Give Pengana Properties and Tishino Ventures their own local sub-navigation so
each functions like a self-contained business site within the group domain.
```

---

## GROUP PAGES

### PAGE — Home

**Page prompt**
```
Homepage for Pengana Concept Limited, a diversified Nigerian holding company in
Abuja with interests in property & hospitality, agriculture and telecoms. Goal:
establish credibility and route visitors into its three businesses. Use these
Relume sections in order: Header, Layout, Feature, Stats, three Layout teasers,
Layout (leadership), Feature (values), CTA. Navy #3A4963 + silver palette.
```

**Section prompts**
```
1. Header section — Hero. Headline positioning Pengana Concept as a diversified
   Nigerian group building across property, hospitality, agriculture and telecoms.
   Short supporting line, primary button "Explore our companies", secondary
   "Contact us". Wide dark Abuja skyline / landscape background, navy overlay.
2. Layout section — Group intro: image left/text right. Short paragraph on Pengana
   Concept as a family-owned holding company (Abuja HQ) across real estate &
   hospitality, agriculture and telecommunications. Eyebrow "Who we are".
3. Feature section — "Our businesses": three cards — Pengana Properties (property
   & stays → /properties), Tishino Ventures (agriculture → /tishino), Sunab
   Telecoms (telecoms → /sunab). Each: image, name, one line, "Learn more".
4. Stats section — Navy band, 3–4 metrics: years established, businesses in the
   group, states of operation (Abuja & Jos), sectors served.
5. Layout section ×3 — One alternating image/text teaser per business, each with
   2–3 highlight bullets and a button into that mini-site.
6. Layout section — Leadership snapshot: image + text on the group's board, led by
   Chairman Bitrus B. Nabasu, mni. Button "Meet the board" → About.
7. Feature section — "Why Pengana": icon grid of 3–4 values (Integrity, Quality,
   Local expertise, Long-term partnership), each icon + heading + one line.
8. CTA section — Navy closing banner "Let's build something lasting", button to
   Contact, plus the three group phone lines.
```

### PAGE — About Us

**Page prompt**
```
About page for Pengana Concept Limited. Goal: tell the group story, state mission
and values, and present the board of directors prominently. Relume sections in
order: Header, Layout, Feature, Team, Feature, CTA.
```

**Section prompts**
```
1. Header section — Eyebrow "About us", heading on the people and principles
   behind Pengana Concept, wide supporting image.
2. Layout section — "Our story": image + narrative on how Pengana Concept grew
   into a diversified, family-owned group spanning property & hospitality (Pengana
   Properties, Jos), agriculture (Tishino Ventures) and telecoms (Sunab, Abuja),
   from its HQ at Plot 721, Cadastral Zone, Dakibiyu District, Abuja.
3. Feature section — Mission, Vision & Values as three columns.
4. Team section — Board of Directors grid, uniform portrait placeholders:
     • Bitrus B. Nabasu, mni — Chairman
     • Mrs. Victoria Nabasu — Director
     • Jerry A. Nabasu — Director
     • Jeffersen S. Nabasu — Director
     • Jibrin Victor Nabasu — Director
   Eyebrow "Leadership". Intro line: the same board leads Pengana Properties and
   Tishino Ventures.
5. Feature section — "Group structure": three linked items showing Pengana Concept
   as parent over Pengana Properties, Tishino Ventures and Sunab Telecoms (note
   Sunab runs its own board and website).
6. CTA section — Banner inviting partnership enquiries → Contact.
```

### PAGE — Our Companies (hub)

**Page prompt**
```
"Our Companies" hub for Pengana Concept Limited. Goal: introduce each business
substantially and route into its mini-site. Relume sections in order: Header,
three Layout blocks (one per business), CTA. Keep the three Layout blocks visually
parallel for symmetry.
```

**Section prompts**
```
1. Header section — Eyebrow "Our companies", heading on the group's breadth across
   property & hospitality, agriculture and telecoms.
2. Layout section — Pengana Properties: property development and short-let/serviced
   apartments, based in Jos. 4 highlight bullets. Buttons "Explore Pengana
   Properties" (→ /properties) and "Browse stays" (→ /properties/stays).
3. Layout section — Tishino Ventures (mirrored): agriculture — staple crops (rice,
   beans, maize) with livestock and poultry as a growing area. 4 highlights.
   Buttons "Explore Tishino Ventures" (→ /tishino) and "Our produce"
   (→ /tishino/produce).
4. Layout section — Sunab Telecoms: telecommunications carrier services; runs its
   own site and board. Button "Explore Sunab" (→ /sunab).
5. CTA section — "Not sure who to talk to? Contact the group" → Contact.
```

---

## PENGANA PROPERTIES — MINI-SITE (property development + short-let hospitality)

*(Local sub-nav on every page: Overview · Property Development · Stays · Projects · Contact · ← Pengana Concept. Accent: bronze #A97B4F.)*

### PAGE — Pengana Properties · Overview  (/properties)

**Page prompt**
```
Overview / home page for Pengana Properties, the property development and
hospitality business of Pengana Concept (No 2A Wamba Close, Off Wamba Road, Tudun
Wada, Jos). Two arms: real estate, and short-let / serviced apartments. Relume
sections in order: Header, Layout, Feature (two arms), Feature (services), Gallery,
Timeline, Feature (why us), Testimonial, Stats, CTA. Navy + silver with bronze
accent.
```

**Section prompts**
```
1. Header section — Eyebrow "A Pengana Concept company". Headline on property
   development and comfortable short-let stays across Jos, Plateau and beyond.
   Buttons "Property development" (→ /properties/development) and "Browse stays"
   (→ /properties/stays). Wide architecture/apartment image.
2. Layout section — Value proposition: Pengana Properties both builds and deals in
   real estate AND offers well-kept short-let and serviced apartments.
3. Feature section — "Two arms": two large cards — Property Development
   (→ /properties/development) and Stays (→ /properties/stays), each image + one
   line + "Explore".
4. Feature section — Services summary: 4–6 cards across both arms — Property
   Development; Sales & Acquisition; Leasing & Lettings; Property Management;
   Short-let Apartments; Serviced / Extended Stays.
5. Gallery section — Featured projects & stays: 3–4 cards mixing developments and
   apartment listings (image, name, type, location). "View portfolio"
   (→ /properties/projects).
6. Timeline section — "How we work": Consultation → Proposal/Valuation → Execution
   → Handover/Management.
7. Feature section — "Why choose us": 4 reasons (local Jos/Plateau expertise;
   transparent, documented dealing; guest-ready apartments; group backing).
8. Testimonial section — 2–3 client/guest quotes (placeholders).
9. Stats section — Navy band: units delivered, apartments available, years,
   locations (placeholder figures).
10. CTA section — "Looking to buy, lease, develop or book a stay? Let's talk" →
    contact + the three phone lines.
```

### PAGE — Pengana Properties · Property Development  (/properties/development)

**Page prompt**
```
Property Development (real estate) page for Pengana Properties. Goal: detail the
real estate capability. Relume sections in order: Header, four Layout blocks (one
per service), FAQ, CTA.
```

**Section prompts**
```
1. Header section — Eyebrow "Property development", heading on comprehensive real
   estate services.
2. Layout section — Property Development: land acquisition, design, build and
   delivery of residential and commercial developments. 3 bullets + "Enquire".
3. Layout section — Sales & Acquisition (mirrored): buying/selling of properties
   and land, with due diligence and documentation support. 3 bullets.
4. Layout section — Leasing & Lettings: residential and commercial letting, tenant
   sourcing and lease management. 3 bullets.
5. Layout section — Property & Facilities Management (mirrored): day-to-day
   management, maintenance and facilities for owners and landlords. 3 bullets.
6. FAQ section — 5–6 questions (areas covered, documentation/titles, fees, how to
   start, management terms).
7. CTA section — Navy banner → /properties/contact.
```

### PAGE — Pengana Properties · Stays / Hospitality  (/properties/stays)

**Page prompt**
```
Stays page for Pengana Properties — short-let and serviced apartments (Airbnb-
style). Goal: get visitors to browse apartments and enquire/book. Relume sections
in order: Header, Feature (offer), Gallery (listings), Feature (amenities),
Timeline (booking), Layout (featured apartment), Testimonial, CTA. Warm bronze
(#A97B4F) accent on cream.
```

**Section prompts**
```
1. Header section — Eyebrow "Stays by Pengana Properties". Headline on comfortable,
   well-located short-let apartments in Jos. Buttons "Browse apartments" and
   "Enquire / book". Warm styled apartment interior image.
2. Feature section — "What we offer": 3–4 cards — Short-let Apartments; Serviced
   Apartments; Whole-home Stays; Extended / Corporate Stays.
3. Gallery section — Listings showcase: Airbnb-style apartment cards (photo, name,
   location, guests/beds/baths, nightly-rate placeholder, "View / Enquire"). Add
   an optional per-listing "Book on Airbnb" external link if listed there.
4. Feature section — Amenities: icon grid — Wi-Fi, kitchen, air-conditioning,
   security, parking, workspace, water/power backup — with a short supporting line.
5. Timeline section — "How booking works": Browse → Enquire / Book → Check in.
6. Layout section — Featured apartment: photo set + highlights, location, nightly
   rate, "Enquire / book".
7. Testimonial section — 2–3 short guest reviews with rating (placeholders).
8. CTA section — Bronze/navy banner "Find your stay in Jos" → /properties/contact
   + phone lines.
```

### PAGE — Pengana Properties · Projects & Portfolio  (/properties/projects)

**Page prompt**
```
Projects & Portfolio page for Pengana Properties. Goal: prove track record across
real estate developments and short-let apartments. Relume sections in order:
Header, Gallery (portfolio grid), Layout (case study), Feature (opportunities),
CTA. Use 16:9 placeholders.
```

**Section prompts**
```
1. Header section — Eyebrow "Projects", heading on the portfolio.
2. Gallery section — Portfolio grid, filterable (Residential / Commercial / Land /
   Short-let / Completed / Ongoing). Cards: image, name, type, location, status.
3. Layout section — Featured case study: one project in depth (development or a
   stays property) — challenge, what Pengana did, outcome, gallery.
4. Feature section — Current opportunities: a strip mixing properties for
   sale/lease and bookable apartments (image, price/terms/nightly rate,
   "Enquire").
5. CTA section — "Interested in a project, property or stay? Get in touch" →
   contact.
```

### PAGE — Pengana Properties · Contact & Enquire  (/properties/contact)

**Page prompt**
```
Contact page for Pengana Properties (Jos office). Goal: capture real estate and
stay/booking enquiries. Relume sections in order: Header, Contact (details),
Contact (form), Contact (map), Feature (reassurance).
```

**Section prompts**
```
1. Header section — Eyebrow "Contact Pengana Properties", heading "Let's talk
   property & stays".
2. Contact section — Office & contact details: No 2A Wamba Close, Off Wamba Road,
   Tudun Wada, Jos; phone lines +234 805 744 2250, +234 809 818 2224,
   +234 909 766 6667 (click-to-call) + email. Note it's a Pengana Concept company.
3. Contact section — Enquiry form: Name, email, phone, interest (Buy / Sell /
   Lease / Develop / Manage / Book a stay / Other), check-in/out dates (optional),
   message, submit.
4. Contact section — Embedded map placeholder centred on the Jos office.
5. Feature section — Reassurance: 3-point band (documented dealing, local
   expertise, group backing).
```

---

## TISHINO VENTURES — MINI-SITE (agriculture)

*(Local sub-nav on every page: Overview · Operations · Produce · Gallery · Contact · ← Pengana Concept. Accent: olive green #4B7A46, harvest gold #C9A24B secondary.)*

### PAGE — Tishino Ventures · Overview  (/tishino)

**Page prompt**
```
Overview / home page for Tishino Ventures, the agriculture business of Pengana
Concept (Abuja HQ). Grows staple Nigerian crops — rice, beans, maize (corn) — and
is expanding into livestock and poultry. Relume sections in order: Header, Layout,
Feature (crops), Feature (operations), Feature (approach), Timeline, Stats,
Testimonial, CTA. Navy anchor with olive-green accent and harvest-gold secondary
on warm off-white.
```

**Section prompts**
```
1. Header section — Eyebrow "A Pengana Concept company". Headline on growing
   Nigeria's staples — quality rice, beans and maize. Buttons "Our produce"
   (→ /tishino/produce) and "Enquire" (→ /tishino/contact). Wide crop-field image.
2. Layout section — Intro: Tishino grows staple crops (rice, beans, maize and
   more) and is expanding into livestock and poultry, supplying buyers and
   distributors.
3. Feature section — "Crops we grow": tiles for Rice, Beans, Maize (Corn) + "and
   more", each image + label → /tishino/produce.
4. Feature section — Operations preview: tiles for Crop Production, Harvest &
   Storage, Agro-processing, Supply & Distribution → /tishino/operations, plus a
   "Livestock & poultry — coming soon" tile.
5. Feature section — "Our approach": 4 points (quality standards, sustainable
   practices, scale & reliability, group backing).
6. Timeline section — Process: Cultivate → Harvest → Process & Store → Supply.
7. Stats section — Navy band: hectares under cultivation, tonnes/season, staple
   crops grown, buyers served (placeholder figures).
8. Testimonial section — 2–3 quotes from buyers/offtakers (placeholders). [If you
   have buyer/partner logos, use a Logo section here instead or in addition.]
9. CTA section — "Looking to source staple crops or partner with us? Let's talk" →
   contact + phone lines.
```

### PAGE — Tishino Ventures · Operations  (/tishino/operations)

**Page prompt**
```
Operations page for Tishino Ventures. Goal: detail how Tishino grows and delivers
staple crops (and its move into livestock/poultry). Relume sections in order:
Header, four Layout blocks (one per activity), Banner (coming soon), Feature
(sustainability), FAQ, CTA.
```

**Section prompts**
```
1. Header section — Eyebrow "Operations", heading on how Tishino farms and
   supplies.
2. Layout section — Crop Production: cultivation of rice, beans, maize and other
   staples at scale. 3 bullets + "Enquire".
3. Layout section — Harvest & Storage (mirrored): harvesting, drying and proper
   storage to keep quality and reduce loss. 3 bullets.
4. Layout section — Agro-processing: cleaning, processing and packaging of grains
   and pulses (value addition). 3 bullets.
5. Layout section — Supply & Distribution (mirrored): reliable supply and offtake
   to markets, wholesalers and partners. 3 bullets.
6. Banner section — "Growing into livestock & poultry": short forward-looking
   strip on the planned expansion into animals.
7. Feature section — Sustainability & quality: responsible farming and quality
   control (icon points).
8. FAQ section — 5–6 questions (which crops, volumes/seasonality, offtake terms,
   delivery, partnerships).
9. CTA section — Navy/green banner → /tishino/contact.
```

### PAGE — Tishino Ventures · Produce & Products  (/tishino/produce)

**Page prompt**
```
Produce & Products page for Tishino Ventures. Goal: present the staple crops (and
future livestock/poultry) so buyers can browse and enquire. Relume sections in
order: Header, three Layout blocks (Rice, Beans, Maize), Feature (other staples),
Banner (coming soon), Layout (wholesale), CTA. Image-led placeholders.
```

**Section prompts**
```
1. Header section — Eyebrow "Produce", heading on Tishino's staple crops.
2. Layout section — Rice: image + description (varieties, quality) + "Enquire".
3. Layout section — Beans (mirrored): image + description + "Enquire".
4. Layout section — Maize (Corn): image + description + "Enquire".
5. Feature section — Other staples: grid of additional crops as they come on
   stream.
6. Banner section — "Livestock & poultry — coming soon" strip signalling the
   expansion.
7. Layout section — Wholesale & supply: bulk supply, offtake and distribution for
   buyers and partners, with a "Request a quote" button.
8. CTA section — "Need to source staple crops? Enquire" → contact.
```

### PAGE — Tishino Ventures · Gallery  (/tishino/gallery)

**Page prompt**
```
Gallery page for Tishino Ventures. Goal: show fields, crops, harvest, storage and
processing as proof of scale and quality. Relume sections in order: Header, Gallery
(filterable grid), Layout (featured site), CTA. Consistent 16:9 placeholders.
```

**Section prompts**
```
1. Header section — Eyebrow "Gallery", heading on Tishino's fields and produce in
   pictures.
2. Gallery section — Filterable grid (Crops / Fields / Harvest / Processing /
   Facilities) of farm and produce imagery.
3. Layout section — Featured site: one farm/operation in depth (crops grown,
   scale, images).
4. CTA section — "Want to work with us? Get in touch" → contact.
```

### PAGE — Tishino Ventures · Contact & Enquire  (/tishino/contact)

**Page prompt**
```
Contact page for Tishino Ventures (Abuja HQ). Goal: capture buyer, offtake and
partnership enquiries. Relume sections in order: Header, Contact (details), Contact
(form), Contact (map), Feature (reassurance).
```

**Section prompts**
```
1. Header section — Eyebrow "Contact Tishino Ventures", heading "Let's talk
   agriculture".
2. Contact section — Office & contact details: Plot 721, Cadastral Zone, Dakibiyu
   District, Abuja; phone lines +234 805 744 2250, +234 809 818 2224,
   +234 909 766 6667 (click-to-call) + email. Note it's a Pengana Concept company.
3. Contact section — Enquiry form: Name, email, phone, interest (Buy produce /
   Wholesale supply / Offtake / Partnership / Investment / Other), crop & quantity
   (optional), message, submit.
4. Contact section — Embedded map placeholder centred on the Abuja HQ.
5. Feature section — Reassurance: 3-point band (quality staples, reliable supply,
   group backing).
```

---

## SUNAB TELECOMS — LANDING PAGE  (/sunab)

**Page prompt**
```
Landing page for Sunab Telecoms Services, the telecommunications arm of the
Pengana Concept group. Intentionally brief: introduce Sunab in Pengana's
navy/silver styling, then hand off to Sunab's own full website. Relume sections in
order: Header, Layout, Feature, CTA. Use Pengana's navy (#3A4963) + silver — NOT
Sunab's own colours.
```

**Section prompts**
```
1. Header section — Eyebrow "A Pengana Concept company". Headline introducing Sunab
   Telecoms Services as the group's telecommunications carrier-services company,
   serving mobile network operators in Nigeria and beyond. Primary button "Visit
   the Sunab website" (EXTERNAL ↗, new tab → sunabtelecomservices.com). Wide dark
   network image.
2. Layout section — "What Sunab does": enterprise-grade carrier and interconnect
   services that help operators expand their reach; full details, network and
   contact live on Sunab's dedicated website.
3. Feature section — Services snapshot: compact icon+label grid of 6–8 items —
   Interconnection, Carrier services, Traffic management, Link optimization,
   Interactive voice response, Voice broadcast, Collocation, Call query.
4. CTA section — Full-width navy banner "Explore the full Sunab Telecoms site",
   button → sunabtelecomservices.com (external ↗, new tab). Note Sunab operates
   under its own board.
```

---

## GROUP CONTACT PAGE

**Page prompt**
```
Contact page for Pengana Concept Limited covering the whole group. Goal: make it
easy to reach any business. Relume sections in order: Header, Contact (group
details), Feature (locations), Contact (form), Contact (map). Note Sunab has its
own contact page on its own site.
```

**Section prompts**
```
1. Header section — Eyebrow "Contact", heading "Let's talk".
2. Contact section — Group contact: the three shared phone lines (+234 805 744
   2250, +234 809 818 2224, +234 909 766 6667) and a group email as click-to-call
   / click-to-email. Note they cover Pengana Concept, Pengana Properties and
   Tishino Ventures.
3. Feature section — "Our locations": cards —
     • Pengana Concept Limited (HQ) & Tishino Ventures — Plot 721, Cadastral Zone,
       Dakibiyu District, Abuja.
     • Pengana Properties — No 2A Wamba Close, Off Wamba Road, Tudun Wada, Jos.
     • Sunab Telecoms — Plot 260, Kamar Adeyemi Crescent, KingsPark Estate,
       Kukwaba District, Abuja — links to /sunab (routes out to the live site).
4. Contact section — Enquiry form: Name, email, phone, company (Pengana Properties
   / Tishino Ventures / Sunab Telecoms / General), message, submit.
5. Contact section — Embedded map placeholder centred on the Abuja HQ, markers for
   Abuja & Jos.
```

---

## NEWS & INSIGHTS + CAREERS (group-level content)

Group-wide pages. News & Insights carries content from all three businesses under one hub; Careers lists roles across the group, tagged by company. Both use the group navy/silver palette.

### PAGE — News & Insights (hub)  (/news)

**Page prompt**
```
News & Insights hub for Pengana Concept Limited — a group newsroom carrying
company news, press releases and occasional insight articles from across Pengana
Properties, Tishino Ventures and the group. Goal: give visitors and press a single
credible feed of updates. Relume sections in order: Header, Blog (featured), Blog
(filterable list), CTA. Group navy/silver palette.
```

**Section prompts**
```
1. Header section — Eyebrow "News & Insights", heading on updates from the Pengana
   Concept group, one-line intro.
2. Blog section — Featured / latest: 3 highlighted posts as large cards (image,
   category tag, title, date, excerpt).
3. Blog section — Full post list with category filter tabs: All / Company News /
   Press / Insights. Each card: image, category, title, date, excerpt, "Read more".
   Posts can be tagged by company (Pengana Properties, Tishino Ventures, Group).
4. CTA section — "Stay in the loop" newsletter signup (email + submit), or a
   "Contact the group" banner if no newsletter yet.
```

### PAGE — Article / Blog post (detail template)  (/news/{slug})

**Page prompt**
```
Blog post / insight article detail template for the Pengana Concept newsroom.
Goal: read cleanly and route onward. Relume sections in order: Header (blog post
header), Content (rich text), Layout (author), Blog (related), CTA.
```

**Section prompts**
```
1. Header section — Blog post header: category tag + company tag, title, author
   name, publish date, read time, wide hero image.
2. Content section — Rich text body: headings, paragraphs, images, pull-quotes,
   lists — the article itself.
3. Layout section — Short author / company callout (photo or logo, one line about
   the writer or the business the post is from).
4. Blog section — Related articles: 3 cards from the same category or company.
5. CTA section — "Explore our companies" or "Contact the group" → relevant page.
```

### PAGE — Press release (detail template)  (/news/press/{slug})

**Page prompt**
```
Press release detail template for the Pengana Concept newsroom. Goal: give press
a clean, quotable, standard-format announcement. Relume sections in order: Header
(press header), Content (release body), Feature (boilerplate + media contact),
Blog (more press), CTA.
```

**Section prompts**
```
1. Header section — Press header: eyebrow "Press release", dateline (city + date,
   e.g. "Abuja, 00 Month 2026"), headline, optional sub-headline.
2. Content section — Release body: the announcement, supporting detail, and a
   quote attributed to Chairman Bitrus B. Nabasu, mni (or the relevant company
   lead).
3. Feature section — "About Pengana Concept" boilerplate paragraph + Media contact
   block (name, group email, the three phone lines).
4. Blog section — More press / news: 3 cards of other releases.
5. CTA section — "Media enquiries" → Contact.
```

### PAGE — Careers  (/careers)

**Page prompt**
```
Careers page for Pengana Concept Limited — group-level, covering roles across
Pengana Properties, Tishino Ventures and the group (Sunab recruits on its own
site). Goal: attract talent and capture applications, working even when there are
no live openings. Relume sections in order: Header, Layout (why work with us),
Feature (what we offer), Stats, Careers/Jobs (openings list), CTA. Group
navy/silver palette.
```

**Section prompts**
```
1. Header section — Eyebrow "Careers", heading "Grow with Pengana Concept",
   supporting line on building a diversified Nigerian group, image + button "See
   open roles".
2. Layout section — "Why work with us": image + text on life at a family-owned
   group spanning property, agriculture and telecoms — real responsibility, real
   growth.
3. Feature section — "What we offer": icon grid — growth across sectors,
   supportive culture, impact, learning/development.
4. Stats section — Group scale: businesses in the group, sectors, states of
   operation (placeholder figures) — signals a real employer.
5. Careers section — Open roles list, grouped/tagged by company (Pengana
   Properties / Tishino Ventures / Group). Each role: title, company, location,
   type, "Apply". Empty state: "No current openings — we're growing fast, send us
   your CV" with a link to the form below. (Optional role detail template:
   /careers/{role} — Header with title/company/location/type, Content with the
   role/responsibilities/requirements, Contact/CTA with an application form.)
6. CTA section — "Don't see a role? Send us your CV" → application form (name,
   email, phone, area of interest, CV upload) or the group email.
```

---

## 4. Open items to confirm
1. **Stays** — do you already list on Airbnb/Booking.com (so listings can link out), or should the site handle enquiries directly for now?
2. **Agriculture** — beyond rice, beans and maize, any other staples to list at launch? And keep livestock/poultry as "coming soon" until you start?
3. **Colour** — happy with bronze for Properties and olive green for Tishino, or want alternatives?
4. **Sunab locations link** — route through internal `/sunab` (recommended, symmetric) or link straight to the external site from the Contact page?

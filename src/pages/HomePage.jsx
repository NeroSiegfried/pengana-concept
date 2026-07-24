import { Link } from "react-router-dom";
import {
  ContactBand,
  ImageStatement,
  SplitStory,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { GROUP } from "../content/company.js";
import { IMAGES } from "../content/images.js";

const BUSINESS_CARDS = [
  { ...BUSINESSES.properties, image: IMAGES.properties.hero },
  { ...BUSINESSES.tishino, image: IMAGES.tishino.hero },
  { ...BUSINESSES.sunab, image: IMAGES.sunab.hero },
];

export default function HomePage() {
  return (
    <PageFrame site="concept" title={GROUP.name} className="home-page">
      <section className="home-hero">
        <img
          className="home-hero__image"
          src={IMAGES.group.hero}
          alt="Wide view of contemporary architecture at dusk"
        />
        <div className="home-hero__veil" />
        <Reveal className="home-hero__content">
          <p className="eyebrow eyebrow--light">
            Property · Agriculture · Telecommunications
          </p>
          <h1>
            A Nigerian group
            <br />
            built for the <em>long term.</em>
          </h1>
          <div className="home-hero__foot">
            <p>{GROUP.summary}</p>
            <div className="action-row">
              <ActionLink to="/companies" variant="light">
                Explore the businesses
              </ActionLink>
              <ActionLink to="/contact" variant="glass">
                Contact Pengana
              </ActionLink>
            </div>
          </div>
        </Reveal>
        <a className="scroll-cue" href="#introduction">
          <span>Scroll</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <SplitStory
        image={IMAGES.group.story}
        imageAlt="Quiet contemporary interior"
        eyebrow="Who we are"
        title="Distinct businesses, one direction."
        text={[
          "From its Abuja head office, Pengana Concept brings together three businesses with different markets and operating identities — property and hospitality, agriculture, and telecommunications.",
          "The group is family-owned and grounded in Nigeria, built to hold and grow each business for the long term rather than to chase a single quarter.",
        ]}
        action={{ label: "About the group", to: "/about" }}
        flip
      />

      <section className="business-showcase" id="introduction">
        <Reveal className="business-showcase__head">
          <div>
            <p className="eyebrow">The group</p>
            <h2>Three areas of focus</h2>
          </div>
          <ActionLink to="/companies" variant="line">
            All businesses
          </ActionLink>
        </Reveal>
        <div className="showcase">
          {BUSINESS_CARDS.map((business, index) => (
            <Link
              className={`acc-card acc-card--${business.id}`}
              to={business.route}
              data-business={business.id}
              key={business.id}
            >
              <img src={business.image} alt="" loading="lazy" />
              <span className="acc-card__veil" />
              <span className="acc-card__index">0{index + 1}</span>
              <div className="acc-card__body">
                <p className="acc-card__eyebrow">{business.eyebrow}</p>
                <h3 className="acc-card__name">{business.name}</h3>
                <p className="acc-card__sub">{business.summary}</p>
              </div>
              <span className="acc-card__arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Reveal as="section" className="location-rail">
        <div>
          <span>HQ</span>
          <strong>Abuja</strong>
        </div>
        <div>
          <span>Property & stays</span>
          <strong>Jos</strong>
        </div>
        <div>
          <span>Group reach</span>
          <strong>Nigeria</strong>
        </div>
        <Link to="/contact">
          Office details <span aria-hidden="true">↗</span>
        </Link>
      </Reveal>

      <ImageStatement
        image={IMAGES.group.statement}
        imageAlt="Abstract sunlit architectural geometry"
        eyebrow="One holding company"
        title="Local businesses, given room to speak in their own voice."
        text="Pengana Properties and Tishino Ventures sit within the group. Sunab Telecoms Services keeps its own board, branding and external website."
        action={{ label: "See the group structure", to: "/about" }}
        position="right"
      />

      <SplitStory
        image={IMAGES.group.structure}
        imageAlt="Clean architectural geometry"
        eyebrow="Leadership"
        title="One board, steady stewardship."
        text="Pengana Concept, Pengana Properties and Tishino Ventures are led by a shared board, chaired by Bitrus B. Nabasu, mni — keeping the group's direction consistent across sectors."
        action={{ label: "Meet the board", to: "/about" }}
        caption="Abuja · Nigeria"
        clip
      />

      <ContactBand
        title="Find the right part of the group."
        text="Property, agriculture, telecommunications or a group-level enquiry — start here."
        to="/contact"
        label="Contact Pengana"
      />
    </PageFrame>
  );
}

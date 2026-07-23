import { Link } from "react-router-dom";
import {
  ContactBand,
  IntroSection,
  ImageStatement,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { GROUP } from "../content/company.js";
import { IMAGES } from "../content/images.js";

const BUSINESS_CARDS = [
  {
    ...BUSINESSES.properties,
    image: IMAGES.propertiesExterior,
    className: "business-card--properties",
  },
  {
    ...BUSINESSES.tishino,
    image: IMAGES.tishinoFields,
    className: "business-card--tishino",
  },
  {
    ...BUSINESSES.sunab,
    image: IMAGES.sunabNetwork,
    className: "business-card--sunab",
  },
];

export default function HomePage() {
  return (
    <PageFrame site="concept" title={GROUP.name} className="home-page">
      <section className="home-hero">
        <img
          className="home-hero__image"
          src={IMAGES.groupHero}
          alt="Abstract sunlit architectural geometry"
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

      <IntroSection
        eyebrow="Pengana Concept Limited"
        title="Distinct businesses. Shared direction."
        text="From its Abuja head office, Pengana Concept brings together three businesses with different markets and operating identities. The group is family-owned and grounded in Nigeria."
        action={{ label: "About the group", to: "/about" }}
      />

      <section className="business-showcase" id="introduction">
        <Reveal className="business-showcase__head">
          <p className="eyebrow">The group</p>
          <h2>Three areas of focus</h2>
        </Reveal>
        <div className="business-showcase__grid">
          {BUSINESS_CARDS.map((business, index) => (
            <Link
              className={`business-card ${business.className}`}
              to={business.route}
              data-business={business.id}
              key={business.id}
            >
              <img src={business.image} alt="" />
              <span className="business-card__veil" />
              <span className="business-card__index">0{index + 1}</span>
              <span className="business-card__copy">
                <small>{business.eyebrow}</small>
                <strong>{business.name}</strong>
                <span>{business.summary}</span>
              </span>
              <span className="business-card__arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ImageStatement
        image={IMAGES.groupDetail}
        imageAlt="Abstract architectural shadows"
        eyebrow="One holding company"
        title="Local businesses, given room to speak in their own voice."
        text="Pengana Properties and Tishino Ventures sit within the group. Sunab Telecoms Services keeps its own board, branding and external website."
        action={{ label: "See the group structure", to: "/about" }}
      />

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

      <ContactBand
        title="Find the right part of the group."
        text="Property, agriculture, telecommunications or a group-level enquiry — start here."
        to="/contact"
        label="Contact Pengana"
      />
    </PageFrame>
  );
}

import {
  BusinessHero,
  ContactBand,
  ImageStatement,
  IntroSection,
  NumberedGrid,
} from "../../components/blocks/EditorialBlocks.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import ActionLink from "../../components/ui/ActionLink.jsx";
import SmartImage from "../../components/ui/SmartImage.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { IMAGES } from "../../content/images.js";

const PROPERTIES = BUSINESSES.properties;

export default function PropertiesOverview() {
  return (
    <BusinessPageFrame
      business="properties"
      title={PROPERTIES.name}
      className="properties-page"
    >
      <BusinessHero
        image={IMAGES.properties.hero}
        imageAlt="Contemporary residential building exterior in warm daylight"
        eyebrow="A Pengana Concept company · Jos"
        title="Property, handled as a whole."
        text={PROPERTIES.summary}
        actions={[
          { label: "Property services", to: "/properties/services" },
          {
            label: "Explore stays",
            to: "/properties/stays",
            variant: "glass",
          },
        ]}
        imageClassName="business-hero__image--properties"
      />

      <IntroSection
        eyebrow="Pengana Properties"
        title="Real estate and hospitality, connected by place."
        text="The business brings together property development and management services with short-let and serviced accommodation in Jos."
        action={{ label: "Enquire in Jos", to: "/properties/contact" }}
      />

      <section className="focus-pair">
        <Reveal as="article" className="focus-card focus-card--real-estate">
          <SmartImage
            src={IMAGES.properties.realEstate}
            alt=""
            sizes="(min-width: 900px) 50vw, 100vw"
          />
          <div className="focus-card__copy">
            <span>01</span>
            <p className="eyebrow eyebrow--light">Real estate</p>
            <h2>Develop. Sell. Lease. Manage.</h2>
            <p>
              One property business across the principal stages of the real
              estate relationship.
            </p>
            <ActionLink to="/properties/services" variant="light">
              Property services
            </ActionLink>
          </div>
        </Reveal>

        <Reveal as="article" className="focus-card focus-card--stays">
          <SmartImage
            src={IMAGES.properties.stay}
            alt=""
            sizes="(min-width: 900px) 50vw, 100vw"
          />
          <div className="focus-card__copy">
            <span>02</span>
            <p className="eyebrow eyebrow--light">Hospitality</p>
            <h2>Short-let stays in Jos.</h2>
            <p>
              Short-let accommodation and serviced apartments for guests
              looking for a local base.
            </p>
            <ActionLink to="/properties/stays" variant="light">
              Explore stays
            </ActionLink>
          </div>
        </Reveal>
      </section>

      <section className="service-section">
        <Reveal className="service-section__head">
          <p className="eyebrow">Property services</p>
          <h2>Four connected capabilities.</h2>
        </Reveal>
        <NumberedGrid items={PROPERTIES.services} columns={4} />
      </section>

      <ImageStatement
        image={IMAGES.properties.statement}
        imageAlt="Contemporary building against open sky"
        eyebrow="Jos, Plateau State"
        title="A local team for property and stays."
        text="Pengana Properties operates from Tudun Wada in Jos."
        action={{ label: "Office and telephone details", to: "/properties/contact" }}
        position="right"
      />

      <ContactBand
        title="Talk to Pengana Properties."
        text="For development, sales, leasing, management or short-let enquiries."
        to="/properties/contact"
        label="Enquire in Jos"
      />
    </BusinessPageFrame>
  );
}

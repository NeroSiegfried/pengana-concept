import {
  ContactBand,
  ImageStatement,
  IntroSection,
  NumberedGrid,
  TypeHero,
} from "../../components/blocks/EditorialBlocks.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { IMAGES } from "../../content/images.js";

const PROPERTIES = BUSINESSES.properties;

export default function PropertyServicesPage() {
  return (
    <BusinessPageFrame business="properties" title="Property services">
      <TypeHero
        eyebrow="Pengana Properties"
        index="01 / Services"
        title={
          <>
            One property business.
            <br />
            Four ways to engage.
          </>
        }
        text="A concise view of the property services currently represented by Pengana Properties."
      />

      <section className="service-section service-section--flush">
        <NumberedGrid items={PROPERTIES.services} columns={2} />
      </section>

      <ImageStatement
        image={IMAGES.propertiesExterior}
        imageAlt="Conceptual image of contemporary residential architecture"
        eyebrow="Property development"
        title="From an idea for property to a conversation in Jos."
        text="For development or property opportunities, contact the Pengana Properties office directly."
        action={{ label: "Start an enquiry", to: "/properties/contact" }}
        position="bottom"
      />

      <IntroSection
        eyebrow="Scope"
        title="Kept deliberately clear."
        text="Specific projects, timelines, inventory and availability will be added only when confirmed material is ready. Until then, the site describes the business without inventing a portfolio."
        tone="warm"
      >
        <Reveal as="ul" className="plain-list">
          {PROPERTIES.services.map((service) => (
            <li key={service.title}>{service.title}</li>
          ))}
        </Reveal>
      </IntroSection>

      <ContactBand
        title="Have a property enquiry?"
        text="Choose the relevant service when you speak with the Jos office."
        to="/properties/contact"
        label="Contact the team"
      />
    </BusinessPageFrame>
  );
}

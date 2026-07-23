import {
  BusinessHero,
  ContactBand,
  ImageStatement,
  IntroSection,
} from "../../components/blocks/EditorialBlocks.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { IMAGES } from "../../content/images.js";

const PROPERTIES = BUSINESSES.properties;

export default function StaysPage() {
  return (
    <BusinessPageFrame business="properties" title="Stays">
      <BusinessHero
        image={IMAGES.propertiesStay}
        imageAlt="Conceptual close-up of a warm furnished interior"
        eyebrow="Pengana Properties · Hospitality"
        title="A place to stay in Jos."
        text={PROPERTIES.stays.text}
        actions={[
          { label: "Ask about a stay", to: "/properties/contact" },
          {
            label: "Property overview",
            to: "/properties",
            variant: "glass",
          },
        ]}
        imageClassName="business-hero__image--stays"
      />

      <IntroSection
        eyebrow="Short-let hospitality"
        title="Simple, local and enquiry-led."
        text="This site does not publish unconfirmed apartment names, guest capacities, rates or availability. Contact the Jos team for the current short-let and serviced-apartment offer."
        action={{ label: "Ask the Jos team", to: "/properties/contact" }}
      />

      <Reveal as="section" className="stay-facts">
        <div>
          <span>01</span>
          <h2>Short-let</h2>
        </div>
        <div>
          <span>02</span>
          <h2>Serviced apartments</h2>
        </div>
        <div>
          <span>03</span>
          <h2>Jos</h2>
        </div>
      </Reveal>

      <ImageStatement
        image={IMAGES.propertiesDetail}
        imageAlt="Conceptual detail of contemporary timber architecture"
        eyebrow="Availability"
        title="Ask what is available for your dates."
        text="Use the shared Pengana telephone lines and the team can discuss the current offer."
        action={{ label: "View contact details", to: "/properties/contact" }}
      />

      <ContactBand
        title="Planning a stay in Jos?"
        text="Speak directly with Pengana Properties about current accommodation."
        to="/properties/contact"
        label="Enquire about a stay"
      />
    </BusinessPageFrame>
  );
}

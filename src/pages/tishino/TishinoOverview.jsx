import {
  BusinessHero,
  ContactBand,
  ImageStatement,
  IntroSection,
  NumberedGrid,
} from "../../components/blocks/EditorialBlocks.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { IMAGES } from "../../content/images.js";

const TISHINO = BUSINESSES.tishino;

export default function TishinoOverview() {
  return (
    <BusinessPageFrame
      business="tishino"
      title={TISHINO.name}
      className="tishino-page"
    >
      <BusinessHero
        image={IMAGES.tishinoFields}
        imageAlt="Conceptual landscape of cultivated fields"
        eyebrow="A Pengana Concept company · Abuja"
        title="Staple crops. Grounded growth."
        text={TISHINO.summary}
        actions={[
          { label: "Explore produce", to: "/tishino/produce" },
          {
            label: "Agriculture enquiries",
            to: "/tishino/contact",
            variant: "glass",
          },
        ]}
        imageClassName="business-hero__image--fields"
      />

      <IntroSection
        eyebrow="Tishino Ventures"
        title="Focused on crops Nigeria knows."
        text="Rice, beans and maize form the named crop focus. Livestock and poultry are presented as growth areas, not as finished operations."
        action={{ label: "See the current focus", to: "/tishino/operations" }}
      />

      <section className="produce-section">
        <Reveal className="produce-section__head">
          <p className="eyebrow">Crop focus</p>
          <h2>Three Nigerian staples.</h2>
        </Reveal>
        <NumberedGrid items={TISHINO.produce} columns={3} />
      </section>

      <ImageStatement
        image={IMAGES.tishinoFields}
        imageAlt="Conceptual landscape of cultivated fields"
        eyebrow="Agriculture"
        title="Describe the work clearly. Let confirmed detail follow."
        text="The site keeps the current offer concise until production scale, locations, availability and supply arrangements can be documented."
        action={{ label: "Agriculture enquiries", to: "/tishino/contact" }}
        position="bottom"
      />

      <Reveal as="section" className="growth-direction">
        <div>
          <p className="eyebrow">Growth direction</p>
          <h2>Beyond crops, over time.</h2>
        </div>
        <div className="growth-direction__items">
          {TISHINO.growth.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>Identified as an area for future growth.</p>
            </div>
          ))}
        </div>
      </Reveal>

      <ContactBand
        title="Talk to Tishino Ventures."
        text="For crop, partnership or general agriculture enquiries."
        to="/tishino/contact"
        label="Contact Tishino"
      />
    </BusinessPageFrame>
  );
}

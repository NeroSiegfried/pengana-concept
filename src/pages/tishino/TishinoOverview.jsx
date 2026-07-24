import {
  BusinessHero,
  ContactBand,
  ImageStatement,
  NumberedGrid,
  SplitStory,
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
        image={IMAGES.tishino.hero}
        imageAlt="Wide view of cultivated farmland under open sky"
        eyebrow="A Pengana Concept company · Abuja"
        title="Everyday staples. Grounded growth."
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

      <SplitStory
        image={IMAGES.tishino.produce}
        imageAlt="Cultivated farmland"
        eyebrow="Tishino Ventures"
        title="Rooted in what people eat every day."
        text={[
          "Tishino works in the broad staple-food system: grains, legumes, roots and tubers that connect cultivated land to Nigerian homes and markets.",
          "Rice, beans and maize are examples, not the whole story. The opportunity also includes millet, sorghum, cowpeas, groundnuts, yams and cassava.",
        ]}
        action={{ label: "See the current focus", to: "/tishino/operations" }}
        caption="Abuja · Nigeria"
      />

      <section className="produce-section">
        <Reveal className="produce-section__head">
          <p className="eyebrow">Food categories</p>
          <h2>One landscape, many staples.</h2>
        </Reveal>
        <NumberedGrid items={TISHINO.produce} columns={3} />
      </section>

      <ImageStatement
        image={IMAGES.tishino.statement}
        imageAlt="Cultivated fields in green tones"
        eyebrow="Agriculture"
        title="Cultivation begins with the land, but it ends with people."
        text="The useful conversation is not only which crop. It is also where it is needed, in what form, at what volume and on what timeline."
        action={{
          label: "Start an agriculture enquiry",
          to: "/tishino/contact?topic=General%20agriculture%20enquiry",
        }}
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

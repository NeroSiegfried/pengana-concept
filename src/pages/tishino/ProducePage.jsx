import {
  ContactBand,
  ImageStatement,
  NumberedGrid,
  TypeHero,
} from "../../components/blocks/EditorialBlocks.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { IMAGES } from "../../content/images.js";

const TISHINO = BUSINESSES.tishino;

export default function ProducePage() {
  return (
    <BusinessPageFrame business="tishino" title="Produce">
      <TypeHero
        eyebrow="Tishino Ventures"
        index="02 / Produce"
        title={
          <>
            Rice. Beans.
            <br />
            Maize.
          </>
        }
        text="The three staple crops named in Tishino Ventures’ current business focus."
      />

      <section className="produce-section produce-section--feature">
        <NumberedGrid items={TISHINO.produce} columns={3} />
      </section>

      <Reveal as="section" className="crop-wordmark" aria-label="Crop focus">
        <span>Rice</span>
        <span>Beans</span>
        <span>Maize</span>
      </Reveal>

      <ImageStatement
        image={IMAGES.tishinoFields}
        imageAlt="Conceptual landscape of cultivated fields"
        eyebrow="Availability & supply"
        title="Discuss the current position directly."
        text="Crop volumes, timing and arrangements are intentionally not published without confirmed operational data."
        action={{ label: "Contact Tishino Ventures", to: "/tishino/contact" }}
      />

      <ContactBand
        title="Looking to speak about a crop?"
        text="Start with rice, beans or maize and the Tishino team can take the conversation from there."
        to="/tishino/contact"
        label="Agriculture enquiries"
      />
    </BusinessPageFrame>
  );
}

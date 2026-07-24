import {
  ContactBand,
  ImageStatement,
  TypeHero,
} from "../../components/blocks/EditorialBlocks.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { IMAGES } from "../../content/images.js";

const TISHINO = BUSINESSES.tishino;
const PRODUCE_IMAGES = {
  Rice: IMAGES.tishino.rice,
  Beans: IMAGES.tishino.beans,
  Maize: IMAGES.tishino.maize,
};

export default function ProducePage() {
  return (
    <BusinessPageFrame business="tishino" title="Produce">
      <TypeHero
        eyebrow="Tishino Ventures"
        index="02 / Produce"
        title={
          <>
            The staples
            <br />
            we grow.
          </>
        }
        text="Rice, beans and maize are among the everyday crops in focus today — grown for Nigerian homes and markets."
      />

      <section className="produce-section produce-section--feature">
        <div className="produce-trio">
          {TISHINO.produce.map((crop, index) => (
            <Reveal className="produce-trio__item" delay={(index % 3) + 1} key={crop.title}>
              <div className="produce-trio__media">
                <img src={PRODUCE_IMAGES[crop.title]} alt={`${crop.title} crop`} loading="lazy" />
                <span className="produce-trio__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{crop.title}</h3>
              <p>{crop.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="crop-wordmark" aria-label="Rooted in Nigeria">
        <span>Rooted</span>
        <span>in</span>
        <span>Nigeria</span>
      </Reveal>

      <ImageStatement
        image={IMAGES.tishino.statement}
        imageAlt="Cultivated fields in green tones"
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

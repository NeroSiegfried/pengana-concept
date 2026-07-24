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
const PRODUCE_IMAGES = [
  IMAGES.tishino.rice,
  IMAGES.tishino.beans,
  IMAGES.tishino.produce,
];

export default function ProducePage() {
  return (
    <BusinessPageFrame business="tishino" title="Produce">
      <TypeHero
        eyebrow="Tishino Ventures"
        index="02 / Produce"
        title={
          <>
            Everyday food.
            <br />
            A wider field.
          </>
        }
        text="Tishino’s work belongs to the broader world of Nigerian staples: grains, legumes, roots and tubers that move from farms into everyday meals."
      />

      <section className="produce-section produce-section--feature">
        <div className="produce-trio">
          {TISHINO.produce.map((category, index) => (
            <Reveal className="produce-trio__item" delay={(index % 3) + 1} key={category.title}>
              <div className="produce-trio__media">
                <img src={PRODUCE_IMAGES[index]} alt="" loading="lazy" />
                <span className="produce-trio__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ImageStatement
        image={IMAGES.tishino.staples}
        imageAlt="A broad selection of Nigerian staples beside cultivated fields"
        eyebrow="The staple landscape"
        title="More than a list of three crops."
        text="Across Nigeria, staples include rice, maize, millet, sorghum, beans, cowpeas, groundnuts, yams and cassava. Talk to Tishino about the part of that landscape relevant to your enquiry."
        action={{
          label: "Start a supply enquiry",
          to: "/tishino/contact?topic=Staple%20crop%20supply",
        }}
        position="bottom"
      />

      <Reveal as="section" className="staple-index">
        <div>
          <p className="eyebrow">A broader vocabulary</p>
          <h2>Staples across categories.</h2>
        </div>
        <div className="staple-index__list">
          {TISHINO.staples.map((staple, index) => (
            <span key={staple}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {staple}
            </span>
          ))}
        </div>
      </Reveal>

      <ContactBand
        title="What are you looking to grow, source or move?"
        text="Share the crop, volume, location and timing behind your enquiry."
        to="/tishino/contact?topic=Staple%20crop%20supply"
        label="Agriculture enquiries"
      />
    </BusinessPageFrame>
  );
}

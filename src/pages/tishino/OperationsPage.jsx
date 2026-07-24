import {
  ContactBand,
  ImageStatement,
  IntroSection,
  TypeHero,
} from "../../components/blocks/EditorialBlocks.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { IMAGES } from "../../content/images.js";

export default function OperationsPage() {
  return (
    <BusinessPageFrame business="tishino" title="Operations">
      <TypeHero
        eyebrow="Tishino Ventures"
        index="01 / Operations"
        title={
          <>
            A clear present.
            <br />
            A measured next step.
          </>
        }
        text="Tishino begins with staple cultivation and is looking carefully at the next links in the agricultural value chain."
      />

      <IntroSection
        eyebrow="Current focus"
        title="Cultivation is one part of the journey."
        text="Good agricultural operations connect crop choice, field practice, timing and route to market. Tishino’s present focus is staple cultivation, with room for the operating model to grow."
        tone="natural"
      />

      <ImageStatement
        image={IMAGES.tishino.operations}
        imageAlt="Farmland and field work"
        eyebrow="Current direction"
        title="From field decisions to useful supply."
        text="The strongest crop plan begins with the people it will feed and the market it needs to reach."
        action={{ label: "View the produce focus", to: "/tishino/produce" }}
        position="bottom"
      />

      <Reveal as="section" className="next-step">
        <p className="eyebrow">Growth area</p>
        <h2>Livestock & poultry</h2>
        <p>
          These are presented as areas for growth. The site does not claim that
          stock, facilities or products are currently available.
        </p>
      </Reveal>

      <ContactBand
        title="Ask about Tishino Ventures."
        text="Use the Abuja office details and shared telephone lines."
        to="/tishino/contact"
        label="Contact Tishino"
      />
    </BusinessPageFrame>
  );
}

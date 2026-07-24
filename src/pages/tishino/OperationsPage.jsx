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
        text="Tishino’s supplied business description supports a crop focus today and identifies livestock and poultry as areas for growth."
      />

      <IntroSection
        eyebrow="Current focus"
        title="Cultivation of staple crops."
        text="Today the work centres on growing staple crops well. Claims about farm size, harvest volumes, processing, storage or distribution are left out until they can be verified — the produce page names the specific crops in focus."
        tone="natural"
      />

      <ImageStatement
        image={IMAGES.tishino.operations}
        imageAlt="Farmland and field work"
        eyebrow="Current direction"
        title="Crops first."
        text="A focused starting point for a business working in staple agriculture."
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

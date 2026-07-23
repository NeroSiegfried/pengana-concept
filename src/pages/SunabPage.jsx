import {
  AddressBlock,
  BusinessHero,
  IntroSection,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { IMAGES } from "../content/images.js";

const SUNAB = BUSINESSES.sunab;

export default function SunabPage() {
  return (
    <PageFrame site="concept" title={SUNAB.name} className="sunab-page">
      <BusinessHero
        image={IMAGES.sunabNetwork}
        imageAlt="Telecommunications mast at blue hour"
        eyebrow="A Pengana Concept business"
        title="Carrier services. A separate destination."
        text={SUNAB.summary}
        actions={[
          {
            label: "Visit Sunab’s website",
            to: SUNAB.externalUrl,
            external: true,
          },
          { label: "Back to the group", to: "/companies", variant: "glass" },
        ]}
        align="center"
      />

      <IntroSection
        eyebrow="Sunab Telecoms Services"
        title="Introduced here. Explained there."
        text="Sunab is part of the Pengana portfolio, but it maintains a separate board, visual identity and website. This page is intentionally a concise handoff."
        action={{
          label: "Open the Sunab website",
          to: SUNAB.externalUrl,
          variant: "line",
          external: true,
        }}
      />

      <Reveal as="section" className="sunab-handoff">
        <div>
          <p className="eyebrow">Office</p>
          <AddressBlock label={SUNAB.office.label} address={SUNAB.office.address} />
        </div>
        <a
          href={SUNAB.externalUrl}
          target="_blank"
          rel="noreferrer"
          className="sunab-handoff__link"
          aria-label="Open sunabtelecomservices.com in a new tab"
        >
          <span>Continue to</span>
          <strong>sunabtelecomservices.com</strong>
          <span aria-hidden="true">↗</span>
        </a>
      </Reveal>
    </PageFrame>
  );
}

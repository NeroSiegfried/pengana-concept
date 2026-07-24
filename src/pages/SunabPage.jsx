import {
  AddressBlock,
  BusinessHero,
  ImageStatement,
  SplitStory,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import OfficeMap from "../components/ui/OfficeMap.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { IMAGES } from "../content/images.js";

const SUNAB = BUSINESSES.sunab;

const CAPABILITIES = [
  {
    title: "Reach",
    text: "Interconnect routes that help operators extend their coverage to new networks and destinations.",
  },
  {
    title: "Reliability",
    text: "Traffic management and link optimisation that keep voice flowing cleanly at scale.",
  },
  {
    title: "Support",
    text: "Collocation and query handling that sit close to operators' own infrastructure.",
  },
];

export default function SunabPage() {
  return (
    <PageFrame site="concept" title={SUNAB.name} className="sunab-page">
      <BusinessHero
        image={IMAGES.sunab.hero}
        imageAlt="Telecommunications mast against a blue-hour sky"
        eyebrow="A Pengana Concept company"
        title="Connecting operators, near and far."
        text={SUNAB.summary}
        actions={[
          {
            label: "Visit the Sunab website",
            to: SUNAB.externalUrl,
            external: true,
          },
          { label: "Back to the group", to: "/companies", variant: "glass" },
        ]}
        align="center"
      />

      <SplitStory
        image={IMAGES.sunab.network}
        imageAlt="Network infrastructure detail"
        eyebrow="What Sunab does"
        title="A carrier's carrier."
        text={[
          "Sunab sits in the interconnect layer of the network — the infrastructure that lets mobile operators exchange traffic, reach new destinations and route calls efficiently across Nigeria and beyond.",
          "It works quietly behind the operators most people know, providing the carrier and interconnect services that keep voice moving.",
        ]}
        action={{
          label: "Open the Sunab website",
          to: SUNAB.externalUrl,
          external: true,
        }}
        caption="Kukwaba District · Abuja"
        flip
      />

      <ImageStatement
        image={IMAGES.sunab.statement}
        imageAlt="Network connectivity, abstract"
        eyebrow="Infrastructure"
        title="The connections behind every call."
        text="Carrier services are invisible when they work. Sunab's job is to make reach and reliability something operators never have to think about."
        position="right"
      />

      <section className="sunab-services-section">
        <Reveal className="sunab-services-section__head">
          <p className="eyebrow">Services snapshot</p>
          <h2>Where Sunab helps operators.</h2>
          <p>
            An indicative view of Sunab's carrier and interconnect offering. The
            live catalogue is maintained on the Sunab website.
          </p>
        </Reveal>
        <div className="sunab-services">
          {SUNAB.services.map((service, index) => (
            <Reveal delay={(index % 4) + 1} key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sunab-capabilities">
        <Reveal className="sunab-capabilities__head">
          <p className="eyebrow">Why operators work with Sunab</p>
          <h2>Reach, reliability and support.</h2>
        </Reveal>
        <div className="sunab-capabilities__grid">
          {CAPABILITIES.map((item, index) => (
            <Reveal className="sunab-capabilities__item" delay={(index % 3) + 1} key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="sunab-handoff">
        <div className="sunab-handoff__office">
          <p className="eyebrow">Sunab office</p>
          <AddressBlock
            label={SUNAB.office.label}
            address={SUNAB.office.address}
          />
          <OfficeMap
            coords={SUNAB.office.coords}
            label="Sunab Telecoms Services"
            business="sunab"
            className="sunab-handoff__map"
          />
        </div>
        <a
          href={SUNAB.externalUrl}
          target="_blank"
          rel="noreferrer"
          className="sunab-handoff__link"
          aria-label="Open sunabtelecomservices.com in a new tab"
        >
          <span className="sunab-handoff__kicker">
            The full picture lives on Sunab's own site
          </span>
          <strong>sunabtelecomservices.com</strong>
          <span className="sunab-handoff__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </Reveal>
    </PageFrame>
  );
}

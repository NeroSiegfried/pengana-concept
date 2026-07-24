import {
  AddressBlock,
  BusinessHero,
  ImageStatement,
  SplitStory,
} from "../components/blocks/EditorialBlocks.jsx";
import ContactForm from "../components/blocks/ContactForm.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import SmartImage from "../components/ui/SmartImage.jsx";
import { Arrow } from "../components/ui/icons.jsx";
import OfficeMap from "../components/ui/OfficeMap.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { GROUP, telephoneHref } from "../content/company.js";
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
            label: "Explore the network story",
            to: "#network-story",
          },
          {
            label: "Carrier enquiry",
            to: "#carrier-enquiry",
            variant: "glass",
          },
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
        action={{ label: "See the service landscape", to: "#services" }}
        caption="Kukwaba District · Abuja"
        flip
      />

      <section className="sunab-network-story" id="network-story">
        <Reveal className="sunab-network-story__copy">
          <p className="eyebrow">Behind the network</p>
          <h2>Infrastructure, people and routes working as one.</h2>
          <p>
            A carrier service is not a single box. It is the work of connecting
            infrastructure, monitoring traffic, resolving queries and keeping
            routes useful as demand changes.
          </p>
        </Reveal>
        <Reveal className="sunab-network-story__lead">
          <SmartImage
            src={IMAGES.sunab.infrastructure}
            alt="Network engineer inspecting carrier infrastructure"
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="sunab-services-section" id="services">
        <Reveal className="sunab-services-section__head">
          <p className="eyebrow">Services snapshot</p>
          <h2>Where Sunab helps operators.</h2>
          <p>
            Eight ways Sunab supports the movement, management and experience of
            voice traffic across operator networks.
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

      <ImageStatement
        image={IMAGES.sunab.statement}
        imageAlt="Network connectivity, abstract"
        eyebrow="The invisible layer"
        title="Reach is built route by route."
        text="Operators experience carrier infrastructure through dependable destinations, clean traffic and responsive support—not through a marketing handoff."
        position="right"
      />

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

      <section
        className="contact-composer contact-composer--sunab"
        data-site="sunab"
        id="carrier-enquiry"
      >
        <div className="contact-composer__main">
          <Reveal className="contact-composer__intro">
            <p className="eyebrow">Carrier enquiry</p>
            <h2>A carrier conversation starts with the route.</h2>
            <p>
              Share the destinations, traffic profile and support requirement
              behind your enquiry. The Sunab team can take the conversation
              from there.
            </p>
            <div className="contact-details">
              <AddressBlock
                label={SUNAB.office.label}
                address={SUNAB.office.address}
              />
              <div className="contact-details__phones">
                <p className="eyebrow">Telephone</p>
                {GROUP.phones.map((phone) => (
                  <a href={telephoneHref(phone)} key={phone}>
                    {phone} <Arrow className="ui-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-composer__form">
            <ContactForm
              recipient={SUNAB.name}
              business="sunab"
              defaultTopic="Carrier services"
              contextLabel="Routes, destinations or traffic profile"
              contextName="networkContext"
              contextPlaceholder="e.g. Destinations · traffic · support need"
              subjectPlaceholder="What would you like to discuss with Sunab?"
              messagePlaceholder="Describe the network requirement, timing and technical context available."
              submitLabel="Send to Sunab"
              submissionEndpoint={import.meta.env.VITE_SUNAB_FORM_ENDPOINT}
            />
          </Reveal>
        </div>

        <Reveal as="figure" className="contact-composer__media">
          <SmartImage
            src={IMAGES.sunab.networkOperations}
            alt="Engineers monitoring telecommunications network operations"
            sizes="(min-width: 900px) 45vw, 100vw"
          />
          <figcaption>Network operations · Abuja</figcaption>
        </Reveal>

        <Reveal className="contact-composer__map">
          <OfficeMap
            coords={SUNAB.office.coords}
            label={SUNAB.name}
            business="sunab"
            className="contact-composer__office-map"
          />
        </Reveal>
      </section>

      <Reveal as="section" className="sunab-handoff">
        <a
          href={SUNAB.externalUrl}
          target="_blank"
          rel="noreferrer"
          className="sunab-handoff__link"
          aria-label="Open sunabtelecomservices.com in a new tab"
        >
          <span className="sunab-handoff__kicker">
            Continue to Sunab’s dedicated service website
          </span>
          <strong>Technical catalogue &amp; company detail</strong>
          <span className="sunab-handoff__domain">
            sunabtelecomservices.com
          </span>
          <span className="sunab-handoff__arrow" aria-hidden="true">
            <Arrow className="ui-arrow" />
          </span>
        </a>
      </Reveal>
    </PageFrame>
  );
}

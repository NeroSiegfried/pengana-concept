import ContactForm from "../components/blocks/ContactForm.jsx";
import {
  AddressBlock,
  TypeHero,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";
import OfficeMap from "../components/ui/OfficeMap.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { GROUP, telephoneHref } from "../content/company.js";

const LOCATIONS = [
  {
    site: "concept",
    eyebrow: "Group HQ · Tishino Ventures",
    name: "Pengana Concept Limited",
    office: GROUP.office,
    link: { to: "/tishino/contact", label: "Agriculture enquiries" },
  },
  {
    site: "properties",
    eyebrow: "Property & hospitality",
    name: BUSINESSES.properties.name,
    office: BUSINESSES.properties.office,
    link: { to: "/properties/contact", label: "Property enquiries" },
  },
  {
    site: "sunab",
    eyebrow: "Telecommunications",
    name: BUSINESSES.sunab.name,
    office: BUSINESSES.sunab.office,
    link: { to: "/sunab", label: "Continue to Sunab" },
  },
];

export default function ContactPage() {
  return (
    <PageFrame site="concept" title="Contact">
      <TypeHero
        eyebrow="Contact"
        index="03 / Enquiries"
        title={
          <>
            Start with the
            <br />
            right conversation.
          </>
        }
        text="Use the shared telephone lines for Pengana Concept, Pengana Properties and Tishino Ventures, or choose an office below."
      />

      <ContactForm
        eyebrow="Route your enquiry"
        title="Start with what you need."
        intro="Choose the closest subject and the message will carry that context to the right business."
        defaultBusiness="General enquiry"
        business="concept"
        topics={[
          "Group & corporate",
          "Property development",
          "Sales, leasing & management",
          "Short-let stays",
          "Agriculture & supply",
          "Carrier services",
          "Partnerships",
        ]}
      />

      <section className="contact-directory">
        <Reveal className="contact-directory__phones">
          <p className="eyebrow">Shared telephone lines</p>
          {GROUP.phones.map((phone) => (
            <a href={telephoneHref(phone)} key={phone}>
              {phone} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </Reveal>

        <Reveal className="contact-directory__hq">
          <AddressBlock
            label={GROUP.office.label}
            address={GROUP.office.address}
          />
        </Reveal>
      </section>

      <section className="locations">
        <Reveal className="locations__head">
          <p className="eyebrow">Our locations</p>
          <h2>Three offices, two cities.</h2>
        </Reveal>
        <div className="locations__grid">
          {LOCATIONS.map((location) => (
            <Reveal className="location-card" data-site={location.site} key={location.name}>
              <OfficeMap
                coords={location.office.coords}
                label={location.name}
                business={location.site}
              />
              <div className="location-card__body">
                <p className="eyebrow">{location.eyebrow}</p>
                <h3>{location.name}</h3>
                <address>
                  {location.office.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <ActionLink to={location.link.to} variant="line">
                  {location.link.label}
                </ActionLink>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

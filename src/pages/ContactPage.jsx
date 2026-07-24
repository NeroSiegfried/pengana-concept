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

const OTHER_LOCATIONS = [
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
        text="Write to the Pengana Concept team directly, or use a business-specific contact page when your enquiry is for one of our operating companies."
      />

      <section className="contact-composer" data-site="concept">
        <div className="contact-composer__main">
          <Reveal className="contact-composer__intro">
            <p className="eyebrow">General &amp; corporate enquiries</p>
            <h2>Start with what you need.</h2>
            <p>
              Tell us the subject in your own words. Your message goes to
              Pengana Concept without making you sort it into an arbitrary
              category first.
            </p>
            <div className="contact-details">
              <AddressBlock
                label={GROUP.office.label}
                address={GROUP.office.address}
              />
              <div className="contact-details__phones">
                <p className="eyebrow">Telephone</p>
                {GROUP.phones.map((phone) => (
                  <a href={telephoneHref(phone)} key={phone}>
                    {phone} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
              <div className="contact-details__route">
                <p className="eyebrow">Agriculture at this address</p>
                <ActionLink to="/tishino/contact" variant="line">
                  Contact Tishino Ventures
                </ActionLink>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-composer__form">
            <ContactForm
              recipient={GROUP.legalName}
              business="concept"
              subjectPlaceholder="What would you like to discuss?"
              messagePlaceholder="Give us the useful context, timing and best way to respond."
              submitLabel="Send to Pengana Concept"
              submissionEndpoint={import.meta.env.VITE_CONCEPT_FORM_ENDPOINT}
            />
          </Reveal>
        </div>

        <Reveal className="contact-composer__map">
          <OfficeMap
            coords={GROUP.office.coords}
            label={GROUP.legalName}
            business="concept"
            className="contact-composer__office-map"
          />
        </Reveal>

        <div className="contact-composer__locations">
          <Reveal className="contact-composer__locations-head">
            <p className="eyebrow">Business offices</p>
            <h2>Continue with the team closest to the work.</h2>
          </Reveal>
          <div className="contact-composer__location-grid">
            {OTHER_LOCATIONS.map((location) => (
              <Reveal
                as="article"
                className="contact-details contact-details--location"
                data-site={location.site}
                key={location.name}
              >
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

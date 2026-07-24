import {
  AddressBlock,
  TypeHero,
} from "../../components/blocks/EditorialBlocks.jsx";
import ContactForm from "../../components/blocks/ContactForm.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import OfficeMap from "../../components/ui/OfficeMap.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { GROUP, telephoneHref } from "../../content/company.js";
import { IMAGES } from "../../content/images.js";

const PROPERTIES = BUSINESSES.properties;

export default function PropertiesContact() {
  return (
    <BusinessPageFrame business="properties" title="Contact Pengana Properties">
      <TypeHero
        eyebrow="Pengana Properties"
        index="03 / Enquire"
        compact
        title={
          <>
            Property or stay?
            <br />
            Talk to the Jos team.
          </>
        }
        text="For development, sales, leasing and lettings, management, or short-let accommodation."
      />

      <section
        className="contact-composer contact-composer--properties"
        data-site="properties"
      >
        <div className="contact-composer__main">
          <Reveal className="contact-composer__intro">
            <p className="eyebrow">Property enquiry</p>
            <h2>Tell the Jos team what you have in mind.</h2>
            <p>
              Whether it is a development, a property search, an ongoing
              management brief or a stay, write the subject as you understand
              it and add the details that matter.
            </p>
            <div className="contact-details">
              <AddressBlock
                label={PROPERTIES.office.label}
                address={PROPERTIES.office.address}
              />
              <div className="contact-details__phones">
                <p className="eyebrow">Telephone</p>
                {GROUP.phones.map((phone) => (
                  <a href={telephoneHref(phone)} key={phone}>
                    {phone} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-composer__form">
            <ContactForm
              recipient={PROPERTIES.name}
              business="properties"
              contextLabel="Property, location or stay dates"
              contextName="propertyContext"
              contextPlaceholder="e.g. Tudun Wada · two bedrooms · 12–16 August"
              subjectPlaceholder="What would you like the property team to help with?"
              messagePlaceholder="Share the brief, preferred timing and anything the team should know before replying."
              submitLabel="Send to Pengana Properties"
              submissionEndpoint={import.meta.env.VITE_PROPERTIES_FORM_ENDPOINT}
            />
          </Reveal>
        </div>

        <Reveal as="figure" className="contact-composer__media">
          <img
            src={IMAGES.properties.lifestyle}
            alt="A considered Pengana Properties interior in Jos"
            loading="lazy"
          />
          <figcaption>Property and hospitality · Jos</figcaption>
        </Reveal>

        <Reveal className="contact-composer__map">
          <OfficeMap
            coords={PROPERTIES.office.coords}
            label={PROPERTIES.name}
            business="properties"
            className="contact-composer__office-map"
          />
        </Reveal>
      </section>
    </BusinessPageFrame>
  );
}

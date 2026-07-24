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

      <ContactForm
        eyebrow="Property enquiry"
        title="Tell the Jos team what you have in mind."
        intro="Choose a route first. Your subject and details stay together, so the team can respond with useful context."
        defaultBusiness="Pengana Properties"
        business="properties"
        topics={[
          "Property development",
          "Buying a property",
          "Leasing & lettings",
          "Property management",
          "Short-let & serviced apartments",
          "Partnerships",
        ]}
      />

      <section className="entity-contact">
        <Reveal className="entity-contact__address">
          <AddressBlock
            label={PROPERTIES.office.label}
            address={PROPERTIES.office.address}
          />
          <OfficeMap
            coords={PROPERTIES.office.coords}
            label={PROPERTIES.name}
            business="properties"
            className="entity-contact__map"
          />
        </Reveal>
        <Reveal className="entity-contact__phones">
          <p className="eyebrow">Shared telephone lines</p>
          {GROUP.phones.map((phone) => (
            <a href={telephoneHref(phone)} key={phone}>
              {phone} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </Reveal>
      </section>
    </BusinessPageFrame>
  );
}

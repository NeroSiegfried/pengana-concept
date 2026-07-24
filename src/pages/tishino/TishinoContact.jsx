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

const TISHINO = BUSINESSES.tishino;

export default function TishinoContact() {
  return (
    <BusinessPageFrame business="tishino" title="Contact Tishino Ventures">
      <TypeHero
        eyebrow="Tishino Ventures"
        index="03 / Enquire"
        compact
        title={
          <>
            Start an agriculture
            <br />
            conversation.
          </>
        }
        text="For staple crop supply, cultivation, partnerships or a wider Tishino Ventures enquiry."
      />

      <ContactForm
        eyebrow="Agriculture enquiry"
        title="Begin with the kind of conversation."
        intro="A supply conversation needs different context from a partnership. Choose a subject and tell us what outcome you are looking for."
        defaultBusiness="Tishino Ventures"
        business="tishino"
        topics={[
          "Staple crop supply",
          "Cultivation & operations",
          "Distribution & offtake",
          "Agricultural partnership",
          "Livestock & poultry",
          "General agriculture enquiry",
        ]}
      />

      <section className="entity-contact">
        <Reveal className="entity-contact__address">
          <AddressBlock
            label={TISHINO.office.label}
            address={TISHINO.office.address}
          />
          <OfficeMap
            coords={TISHINO.office.coords}
            label={TISHINO.name}
            business="tishino"
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

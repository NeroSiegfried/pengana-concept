import {
  AddressBlock,
  TypeHero,
} from "../../components/blocks/EditorialBlocks.jsx";
import ContactForm from "../../components/blocks/ContactForm.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import ActionLink from "../../components/ui/ActionLink.jsx";
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
        text="For rice, beans, maize or a wider Tishino Ventures enquiry."
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

      <Reveal as="section" className="enquiry-routes">
        <p className="eyebrow">Current subjects</p>
        <div>
          <span>Rice</span>
          <span>Beans</span>
          <span>Maize</span>
          <span>General agriculture enquiry</span>
          <span>Livestock & poultry growth area</span>
        </div>
        <ActionLink to="/contact" variant="line">
          Group contact directory
        </ActionLink>
      </Reveal>

      <ContactForm
        eyebrow="Agriculture enquiry"
        title="Send Tishino Ventures a message."
        defaultBusiness="Tishino Ventures"
        business="tishino"
      />
    </BusinessPageFrame>
  );
}

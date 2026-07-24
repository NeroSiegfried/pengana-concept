import {
  AddressBlock,
  TypeHero,
} from "../../components/blocks/EditorialBlocks.jsx";
import ContactForm from "../../components/blocks/ContactForm.jsx";
import BusinessPageFrame from "../../components/chrome/BusinessPageFrame.jsx";
import SmartImage from "../../components/ui/SmartImage.jsx";
import { Arrow } from "../../components/ui/icons.jsx";
import OfficeMap from "../../components/ui/OfficeMap.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import { BUSINESSES } from "../../content/businesses.js";
import { GROUP, telephoneHref } from "../../content/company.js";
import { IMAGES } from "../../content/images.js";

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

      <section
        className="contact-composer contact-composer--tishino"
        data-site="tishino"
      >
        <div className="contact-composer__main">
          <Reveal className="contact-composer__intro">
            <p className="eyebrow">Agriculture enquiry</p>
            <h2>Put the opportunity into practical terms.</h2>
            <p>
              Supply, cultivation, distribution and partnership conversations
              each begin differently. Tell us the outcome you are looking for
              and the operational context behind it.
            </p>
            <div className="contact-details">
              <AddressBlock
                label={TISHINO.office.label}
                address={TISHINO.office.address}
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
              recipient={TISHINO.name}
              business="tishino"
              contextLabel="Produce, quantity or location"
              contextName="agricultureContext"
              contextPlaceholder="e.g. Cowpeas · volume · delivery area"
              subjectPlaceholder="What would you like to discuss with Tishino?"
              messagePlaceholder="Describe the supply, operating or partnership need and your preferred timing."
              submitLabel="Send to Tishino Ventures"
              submissionEndpoint={import.meta.env.VITE_TISHINO_FORM_ENDPOINT}
            />
          </Reveal>
        </div>

        <Reveal as="figure" className="contact-composer__media">
          <SmartImage
            src={IMAGES.tishino.agronomy}
            alt="An agronomist examining soil and diversified crop growth"
            sizes="(min-width: 900px) 45vw, 100vw"
          />
          <figcaption>Agriculture in operation · Nigeria</figcaption>
        </Reveal>

        <Reveal className="contact-composer__map">
          <OfficeMap
            coords={TISHINO.office.coords}
            label={TISHINO.name}
            business="tishino"
            className="contact-composer__office-map"
          />
        </Reveal>
      </section>
    </BusinessPageFrame>
  );
}

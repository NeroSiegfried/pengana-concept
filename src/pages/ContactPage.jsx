import {
  AddressBlock,
  TypeHero,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { GROUP, telephoneHref } from "../content/company.js";

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
        text="Use the shared telephone lines for Pengana Concept, Pengana Properties and Tishino Ventures, or choose a business below."
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

      <section className="business-contact-grid">
        <Reveal className="business-contact-card" data-site="properties">
          <p className="eyebrow">Property & hospitality</p>
          <h2>{BUSINESSES.properties.name}</h2>
          <AddressBlock
            label={BUSINESSES.properties.office.label}
            address={BUSINESSES.properties.office.address}
          />
          <ActionLink to="/properties/contact" variant="line">
            Property enquiries
          </ActionLink>
        </Reveal>

        <Reveal className="business-contact-card" data-site="tishino">
          <p className="eyebrow">Agriculture</p>
          <h2>{BUSINESSES.tishino.name}</h2>
          <AddressBlock
            label={BUSINESSES.tishino.office.label}
            address={BUSINESSES.tishino.office.address}
          />
          <ActionLink to="/tishino/contact" variant="line">
            Agriculture enquiries
          </ActionLink>
        </Reveal>

        <Reveal className="business-contact-card" data-site="concept">
          <p className="eyebrow">Telecommunications</p>
          <h2>{BUSINESSES.sunab.name}</h2>
          <AddressBlock
            label={BUSINESSES.sunab.office.label}
            address={BUSINESSES.sunab.office.address}
          />
          <ActionLink to="/sunab" variant="line">
            Continue to Sunab
          </ActionLink>
        </Reveal>
      </section>
    </PageFrame>
  );
}

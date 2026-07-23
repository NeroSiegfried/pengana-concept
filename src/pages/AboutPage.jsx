import { Link } from "react-router-dom";
import {
  ContactBand,
  ImageStatement,
  IntroSection,
  TypeHero,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { GROUP, GROUP_LEADERSHIP } from "../content/company.js";
import { IMAGES } from "../content/images.js";

export default function AboutPage() {
  return (
    <PageFrame site="concept" title="About">
      <TypeHero
        eyebrow="About Pengana"
        index="01 / Group"
        title={
          <>
            One group.
            <br />
            Three distinct businesses.
          </>
        }
        text={GROUP.summary}
      />

      <Reveal as="section" className="fact-rail">
        <div>
          <span>Ownership</span>
          <strong>Family-owned</strong>
        </div>
        <div>
          <span>Head office</span>
          <strong>Abuja</strong>
        </div>
        <div>
          <span>Operating locations</span>
          <strong>Abuja & Jos</strong>
        </div>
        <div>
          <span>Businesses presented</span>
          <strong>Three</strong>
        </div>
      </Reveal>

      <ImageStatement
        image={IMAGES.groupHero}
        imageAlt="Abstract sunlit architectural geometry"
        eyebrow="The holding company"
        title="A shared home for businesses with different work to do."
        text="The group structure provides a clear connection between Pengana’s property, agriculture and telecommunications interests while allowing each business a distinct voice."
        position="right"
      />

      <IntroSection
        eyebrow="Group structure"
        title="Clear at a glance."
        text="Pengana Concept Limited is the parent company. Pengana Properties and Tishino Ventures operate within the group; Sunab Telecoms Services maintains its own board and website."
      />

      <section className="structure-list">
        {Object.values(BUSINESSES).map((business, index) => (
          <Reveal
            as={Link}
            to={business.route}
            className="structure-list__item"
            delay={(index % 3) + 1}
            key={business.id}
          >
            <span>0{index + 1}</span>
            <div>
              <small>{business.eyebrow}</small>
              <h2>{business.name}</h2>
              <p>{business.summary}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </Reveal>
        ))}
      </section>

      <section className="leadership-section">
        <Reveal className="leadership-section__head">
          <p className="eyebrow">Leadership</p>
          <h2>The board</h2>
          <p>
            This board leads Pengana Concept, Pengana Properties and Tishino
            Ventures.
          </p>
        </Reveal>
        <div className="leadership-list">
          {GROUP_LEADERSHIP.map((member, index) => (
            <Reveal
              className="leadership-list__item"
              delay={(index % 3) + 1}
              key={member.name}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBand
        eyebrow="Group enquiries"
        title="Speak with Pengana Concept."
        text="Use the group contact page for office details and the shared telephone lines."
        to="/contact"
      />
    </PageFrame>
  );
}

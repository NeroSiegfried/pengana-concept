import { Link } from "react-router-dom";
import {
  BoardGrid,
  NumberedGrid,
  SplitStory,
  TypeHero,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { GROUP, GROUP_LEADERSHIP } from "../content/company.js";
import { IMAGES } from "../content/images.js";

const PILLARS = [
  {
    title: "Mission",
    text: "To build and steward businesses that serve their communities well and create durable value across Nigeria.",
  },
  {
    title: "Vision",
    text: "A diversified Nigerian group whose companies are trusted names in property, agriculture and telecommunications.",
  },
  {
    title: "Values",
    text: "Integrity, quality, local expertise and long-term partnership guide how each business operates.",
  },
];

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
          <strong>Abuja &amp; Jos</strong>
        </div>
        <div>
          <span>Businesses presented</span>
          <strong>Three</strong>
        </div>
      </Reveal>

      <SplitStory
        image={IMAGES.group.story}
        imageAlt="Contemporary architectural interior"
        eyebrow="Our story"
        title="A shared home for different work."
        text={[
          "Pengana Concept Limited is a family-owned holding company based at Plot 721, Cadastral Zone, Dakibiyu District, Abuja. It brings together property and hospitality through Pengana Properties in Jos, agriculture through Tishino Ventures, and telecommunications through Sunab Telecoms Services.",
          "The group structure gives each business a clear connection to the others while letting it keep its own market, voice and pace.",
        ]}
        caption="Abuja · Head office"
      />

      <section className="pillars-section">
        <Reveal className="pillars-section__head">
          <p className="eyebrow">What guides us</p>
          <h2>Mission, vision &amp; values.</h2>
        </Reveal>
        <NumberedGrid items={PILLARS} columns={3} />
      </section>

      <ImageStatementBand />

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

      <BoardGrid
        eyebrow="Leadership"
        title="The board"
        intro="A single board leads Pengana Concept, Pengana Properties and Tishino Ventures, chaired by Bitrus B. Nabasu, mni."
        members={GROUP_LEADERSHIP}
      />
    </PageFrame>
  );
}

function ImageStatementBand() {
  return (
    <SplitStory
      image={IMAGES.group.structure}
      imageAlt="Architectural geometry in daylight"
      eyebrow="Group structure"
      title="Parent, and three businesses."
      text="Pengana Concept Limited is the parent company. Pengana Properties and Tishino Ventures operate within the group; Sunab Telecoms Services maintains its own board and website."
      action={{ label: "Explore the businesses", to: "/companies" }}
      tone="natural"
      flip
      clip
    />
  );
}

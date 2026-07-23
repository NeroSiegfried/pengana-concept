import {
  ContactBand,
  TypeHero,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { IMAGES } from "../content/images.js";

const ENTRIES = [
  {
    business: BUSINESSES.properties,
    image: IMAGES.propertiesExterior,
    detail:
      "Development, sales, leasing and lettings, property management, and short-let hospitality from Jos.",
  },
  {
    business: BUSINESSES.tishino,
    image: IMAGES.tishinoFields,
    detail:
      "Rice, beans and maize are the present crop focus, with livestock and poultry identified as growth areas.",
  },
  {
    business: BUSINESSES.sunab,
    image: IMAGES.sunabNetwork,
    detail:
      "Carrier services under a separate board and brand, with more information on Sunab’s own website.",
  },
];

export default function CompaniesPage() {
  return (
    <PageFrame site="concept" title="Businesses">
      <TypeHero
        eyebrow="Our businesses"
        index="02 / Portfolio"
        title={
          <>
            Different sectors.
            <br />
            A connected group.
          </>
        }
        text="A concise view of what each Pengana business does — and where to go next."
      />

      <section className="company-index">
        {ENTRIES.map(({ business, image, detail }, index) => (
          <Reveal
            as="article"
            className={`company-index__item company-index__item--${business.id}`}
            key={business.id}
          >
            <div className="company-index__image">
              <img src={image} alt="" />
              <span>0{index + 1}</span>
            </div>
            <div className="company-index__copy">
              <p className="eyebrow">{business.eyebrow}</p>
              <h2>{business.name}</h2>
              <p>{detail}</p>
              <p className="company-index__location">{business.location}</p>
              <ActionLink to={business.route} variant="line">
                Enter {business.name}
              </ActionLink>
            </div>
          </Reveal>
        ))}
      </section>

      <ContactBand
        title="Not sure which business to contact?"
        text="Start with the group and your enquiry can be directed from there."
        to="/contact"
        label="Contact the group"
      />
    </PageFrame>
  );
}

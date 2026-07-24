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
    images: [
      IMAGES.properties.hero,
      IMAGES.properties.lifestyle,
      IMAGES.properties.detail,
    ],
    detail:
      "A place-led business in Jos, connecting development, sales, leasing, management and a more personal hospitality experience.",
  },
  {
    business: BUSINESSES.tishino,
    images: [
      IMAGES.tishino.hero,
      IMAGES.tishino.staples,
      IMAGES.tishino.operations,
    ],
    detail:
      "Staple agriculture across grains, legumes, roots and tubers, with livestock and poultry identified as directions for growth.",
  },
  {
    business: BUSINESSES.sunab,
    images: [
      IMAGES.sunab.hero,
      IMAGES.sunab.infrastructure,
      IMAGES.sunab.network,
    ],
    detail:
      "Carrier and interconnect infrastructure that helps operators extend reach and move voice traffic reliably.",
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
        {ENTRIES.map(({ business, images, detail }, index) => (
          <Reveal
            as="article"
            className={`company-index__item company-index__item--${business.id}`}
            key={business.id}
          >
            <div className="company-index__gallery">
              <div className="company-index__image company-index__image--lead">
                <img src={images[0]} alt="" />
                <span>0{index + 1}</span>
              </div>
              <div className="company-index__image company-index__image--detail">
                <img src={images[1]} alt="" loading="lazy" />
              </div>
              <div className="company-index__image company-index__image--detail">
                <img src={images[2]} alt="" loading="lazy" />
              </div>
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

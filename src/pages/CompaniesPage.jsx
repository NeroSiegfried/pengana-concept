import { Link } from "react-router-dom";
import {
  ContactBand,
  TypeHero,
} from "../components/blocks/EditorialBlocks.jsx";
import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";
import SmartImage from "../components/ui/SmartImage.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { BUSINESSES } from "../content/businesses.js";
import { IMAGES } from "../content/images.js";

const ENTRIES = [
  {
    business: BUSINESSES.properties,
    images: [
      {
        src: IMAGES.properties.hero,
        caption: "Place / Jos",
        alt: "A Pengana Properties development set within the Jos landscape",
      },
      {
        src: IMAGES.properties.lifestyle,
        caption: "Everyday living",
        alt: "A relaxed residential setting designed around everyday living",
      },
      {
        src: IMAGES.properties.developmentTeam,
        caption: "Development in progress",
        alt: "A Nigerian architect and site engineer reviewing a residential development in Jos",
      },
      {
        src: IMAGES.properties.stay,
        caption: "Short stays",
        alt: "A considered interior in a Pengana serviced apartment",
      },
      {
        src: IMAGES.properties.detail,
        caption: "Material detail",
        alt: "Architectural details and materials within a Pengana property",
      },
    ],
    detail:
      "A place-led business in Jos, connecting development, sales, leasing, management and a more personal hospitality experience.",
  },
  {
    business: BUSINESSES.tishino,
    images: [
      {
        src: IMAGES.tishino.hero,
        caption: "Land & livelihood",
        alt: "Cultivated land within Tishino Ventures' agricultural landscape",
      },
      {
        src: IMAGES.tishino.rootsSorting,
        caption: "Roots & tubers",
        alt: "Agricultural workers sorting and grading harvested yams and cassava",
      },
      {
        src: IMAGES.tishino.distribution,
        caption: "Distribution & offtake",
        alt: "A Nigerian produce aggregation warehouse preparing staples for delivery",
      },
      {
        src: IMAGES.tishino.agronomy,
        caption: "Field knowledge",
        alt: "An agronomist examining soil and diversified crop growth in the field",
      },
      {
        src: IMAGES.tishino.staples,
        caption: "Everyday staples",
        alt: "A varied selection of grains, legumes, roots and tubers",
      },
    ],
    detail:
      "Staple agriculture across grains, legumes, roots and tubers, with livestock and poultry identified as directions for growth.",
  },
  {
    business: BUSINESSES.sunab,
    images: [
      {
        src: IMAGES.sunab.hero,
        caption: "Connected Nigeria",
        alt: "Telecommunications infrastructure connecting a Nigerian city",
      },
      {
        src: IMAGES.sunab.infrastructure,
        caption: "Carrier infrastructure",
        alt: "Carrier-grade telecommunications infrastructure in operation",
      },
      {
        src: IMAGES.sunab.fieldEngineer,
        caption: "Field engineering",
        alt: "A field engineer working on telecommunications equipment",
      },
      {
        src: IMAGES.sunab.networkOperations,
        caption: "Network operations",
        alt: "Engineers monitoring telecommunications network operations",
      },
      {
        src: IMAGES.sunab.fibreOperations,
        caption: "Fibre operations",
        alt: "A telecom technician splicing fibre at a network cabinet",
      },
    ],
    detail:
      "Carrier and interconnect infrastructure that helps operators extend reach and move voice traffic reliably.",
  },
];

// A deliberate mix of treatment (exaggerated radius vs. angled chamfer) and
// position so a five-image mosaic never reads as a uniform, cookie-cutter grid.
// Lower-left is left alone — that corner carries the caption pill.
const CORNERS = [
  "img-cut--tl",
  "img-chamfer--tr",
  "img-cut--br",
  "img-chamfer--tl",
  "img-cut--tr",
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
        {ENTRIES.map(({ business, images, detail }) => (
          <Reveal
            as="article"
            className="company-index__item"
            key={business.id}
          >
            <Link
              className="company-index__gallery"
              to={business.route}
              aria-label={`Explore ${business.name}`}
            >
              <div className="company-index__mosaic-row company-index__mosaic-row--top">
                {images.slice(0, 2).map((image, imageIndex) => (
                  <figure
                    className={`company-index__image company-index__image--tile ${CORNERS[imageIndex]}`}
                    key={image.src}
                  >
                    <SmartImage
                      src={image.src}
                      alt={image.alt}
                      eager={imageIndex === 0}
                      sizes="(min-width: 900px) 24vw, 50vw"
                    />
                    <figcaption className="company-index__caption">
                      <span>0{imageIndex + 1}</span>
                      <span>{image.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <figure className={`company-index__image company-index__image--panorama ${CORNERS[2]}`}>
                <SmartImage
                  src={images[2].src}
                  alt={images[2].alt}
                  sizes="(min-width: 900px) 48vw, 100vw"
                />
                <figcaption className="company-index__caption">
                  <span>03</span>
                  <span>{images[2].caption}</span>
                </figcaption>
              </figure>

              <div className="company-index__mosaic-row company-index__mosaic-row--bottom">
                {images.slice(3).map((image, imageIndex) => (
                  <figure
                    className={`company-index__image company-index__image--tile ${CORNERS[imageIndex + 3]}`}
                    key={image.src}
                  >
                    <SmartImage
                      src={image.src}
                      alt={image.alt}
                      sizes="(min-width: 900px) 24vw, 50vw"
                    />
                    <figcaption className="company-index__caption">
                      <span>0{imageIndex + 4}</span>
                      <span>{image.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Link>
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

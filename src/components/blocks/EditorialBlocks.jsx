import ActionLink from "../ui/ActionLink.jsx";
import Reveal from "../ui/Reveal.jsx";

export function BusinessHero({
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  actions = [],
  align = "bottom",
  imageClassName = "",
}) {
  return (
    <section className={`business-hero business-hero--${align}`}>
      <img
        className={`business-hero__image ${imageClassName}`.trim()}
        src={image}
        alt={imageAlt}
      />
      <div className="business-hero__veil" />
      <Reveal className="business-hero__content">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        {text ? <p className="business-hero__text">{text}</p> : null}
        {actions.length ? (
          <div className="action-row">
            {actions.map((action) => (
              <ActionLink
                key={action.to}
                to={action.to}
                variant={action.variant || "light"}
                external={action.external}
              >
                {action.label}
              </ActionLink>
            ))}
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}

export function TypeHero({
  eyebrow,
  title,
  text,
  index,
  compact = false,
}) {
  return (
    <section className={`type-hero ${compact ? "type-hero--compact" : ""}`}>
      <Reveal className="type-hero__inner">
        <div className="type-hero__meta">
          <p className="eyebrow">{eyebrow}</p>
          {index ? <span>{index}</span> : null}
        </div>
        <h1>{title}</h1>
        {text ? <p className="type-hero__text">{text}</p> : null}
      </Reveal>
    </section>
  );
}

export function IntroSection({
  eyebrow,
  title,
  text,
  action,
  children,
  tone = "light",
}) {
  return (
    <Reveal
      as="section"
      className={`intro-section intro-section--${tone}`}
    >
      <div className="intro-section__label">
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <div className="intro-section__body">
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
        {action ? (
          <ActionLink
            to={action.to}
            variant={action.variant || "line"}
            external={action.external}
          >
            {action.label}
          </ActionLink>
        ) : null}
        {children}
      </div>
    </Reveal>
  );
}

export function ImageStatement({
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  action,
  position = "center",
}) {
  return (
    <section className="image-statement">
      <img
        className={`image-statement__image image-statement__image--${position}`}
        src={image}
        alt={imageAlt}
      />
      <div className="image-statement__veil" />
      <Reveal className="image-statement__content">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
        {action ? (
          <ActionLink to={action.to} variant="light">
            {action.label}
          </ActionLink>
        ) : null}
      </Reveal>
    </section>
  );
}

export function NumberedGrid({ items, columns = 3 }) {
  return (
    <div className={`numbered-grid numbered-grid--${columns}`}>
      {items.map((item, index) => (
        <Reveal
          className="numbered-grid__item"
          delay={(index % columns) + 1}
          key={item.title}
        >
          <span className="numbered-grid__number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
          {item.text ? <p>{item.text}</p> : null}
          {item.to ? (
            <ActionLink to={item.to} variant="line">
              {item.linkLabel || "Explore"}
            </ActionLink>
          ) : null}
        </Reveal>
      ))}
    </div>
  );
}

export function ContactBand({
  eyebrow = "Enquiries",
  title,
  text,
  to,
  label = "Contact us",
}) {
  return (
    <Reveal as="section" className="contact-band">
      <div>
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div>
        {text ? <p>{text}</p> : null}
        <ActionLink to={to} variant="light">
          {label}
        </ActionLink>
      </div>
    </Reveal>
  );
}

export function AddressBlock({ label, address, phones = [] }) {
  return (
    <div className="address-block">
      <p className="address-block__label">{label}</p>
      <address>
        {address.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </address>
      {phones.length ? (
        <div className="address-block__phones">{phones}</div>
      ) : null}
    </div>
  );
}

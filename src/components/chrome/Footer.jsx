import { Link } from "react-router-dom";
import { BUSINESSES } from "../../content/businesses.js";
import {
  GLOBAL_NAVIGATION,
  GROUP,
  telephoneHref,
} from "../../content/company.js";
import Wordmark from "../ui/Wordmark.jsx";

export default function Footer() {
  return (
    <footer className="site-footer" data-site="concept">
      <div className="site-footer__lead">
        <p className="eyebrow eyebrow--light">Start a conversation</p>
        <h2>Which part of Pengana can help?</h2>
        <Link className="site-footer__contact" to="/contact">
          Contact the group <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="site-footer__grid">
        <div className="site-footer__identity">
          <Wordmark inverted />
          <p>{GROUP.descriptor}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <div>
            <p className="site-footer__label">Group</p>
            {GLOBAL_NAVIGATION.map((item) => (
              <Link to={item.to} key={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="site-footer__label">Businesses</p>
            {Object.values(BUSINESSES).map((business) => (
              <Link to={business.route} key={business.id}>
                {business.name}
              </Link>
            ))}
          </div>
        </nav>

        <address className="site-footer__address">
          <p className="site-footer__label">{GROUP.office.label}</p>
          {GROUP.office.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>

        <div className="site-footer__phones">
          <p className="site-footer__label">Telephone</p>
          {GROUP.phones.map((phone) => (
            <a href={telephoneHref(phone)} key={phone}>
              {phone}
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} {GROUP.legalName}
        </span>
        <span>Abuja · Jos · Nigeria</span>
      </div>
    </footer>
  );
}

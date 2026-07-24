import { Link, useLocation } from "react-router-dom";
import { BUSINESSES } from "../../content/businesses.js";
import {
  GLOBAL_NAVIGATION,
  GROUP,
  siteFromPath,
  telephoneHref,
} from "../../content/company.js";
import { Arrow } from "../ui/icons.jsx";
import Wordmark from "../ui/Wordmark.jsx";

export default function Footer() {
  const { pathname } = useLocation();
  const site = siteFromPath(pathname);

  return (
    <footer className="site-footer" data-site={site}>
      <div className="site-footer__grid">
        <div className="site-footer__identity">
          <Wordmark inverted />
          <p>{GROUP.descriptor}</p>
          <Link className="site-footer__cta" to="/contact">
            Start a conversation <Arrow className="ui-arrow" />
          </Link>
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

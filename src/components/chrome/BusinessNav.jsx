import { NavLink } from "react-router-dom";
import { BUSINESSES } from "../../content/businesses.js";
import { BUSINESS_NAVIGATION } from "../../content/company.js";

export default function BusinessNav({ business }) {
  const company = BUSINESSES[business];

  return (
    <nav
      className="business-nav"
      data-site={business}
      aria-label={`${company.name} navigation`}
    >
      <NavLink className="business-nav__name" to={company.route} end>
        {company.name}
      </NavLink>
      <div className="business-nav__links">
        {BUSINESS_NAVIGATION[business].map((item) => (
          <NavLink
            className={({ isActive }) =>
              `business-nav__link ${isActive ? "is-active" : ""}`
            }
            to={item.to}
            end={item.to === company.route}
            key={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <NavLink className="business-nav__back" to="/">
        Group <span aria-hidden="true">↗</span>
      </NavLink>
    </nav>
  );
}

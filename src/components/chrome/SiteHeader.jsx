import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BUSINESSES } from "../../content/businesses.js";
import { GLOBAL_NAVIGATION } from "../../content/company.js";
import Wordmark from "../ui/Wordmark.jsx";

const OVERLAY_ROUTES = new Set([
  "/",
  "/properties",
  "/properties/stays",
  "/tishino",
  "/sunab",
]);

function siteFromPath(pathname) {
  if (pathname.startsWith("/properties")) return "properties";
  if (pathname.startsWith("/tishino")) return "tishino";
  return "concept";
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const businessButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const site = siteFromPath(pathname);
  const overlay = OVERLAY_ROUTES.has(pathname) && !scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setBusinessesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panelLinks = Array.from(
        mobileMenuRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) || [],
      );
      const focusable = [menuButtonRef.current, ...panelLinks].filter(Boolean);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        businessesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setBusinessesOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [businessesOpen]);

  useEffect(() => {
    if (!businessesOpen) return undefined;

    function handleDropdownKeyDown(event) {
      if (event.key === "Escape") {
        setBusinessesOpen(false);
        businessButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleDropdownKeyDown);
    return () =>
      document.removeEventListener("keydown", handleDropdownKeyDown);
  }, [businessesOpen]);

  return (
    <header
      className={`site-header ${overlay ? "site-header--overlay" : ""} ${
        scrolled ? "site-header--scrolled" : ""
      }`}
      data-site={site}
    >
      <div className="site-header__inner">
        <Wordmark inverted={overlay} />

        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLink to="/about" className="desktop-nav__link">
            About
          </NavLink>

          <div className="desktop-nav__dropdown" ref={dropdownRef}>
            <button
              ref={businessButtonRef}
              type="button"
              className="desktop-nav__link desktop-nav__trigger"
              aria-expanded={businessesOpen}
              aria-controls="businesses-dropdown"
              onClick={() => setBusinessesOpen((value) => !value)}
              onMouseEnter={() => setBusinessesOpen(true)}
            >
              Businesses
              <span aria-hidden="true">⌄</span>
            </button>
            <div
              id="businesses-dropdown"
              className={`business-dropdown ${
                businessesOpen ? "business-dropdown--open" : ""
              }`}
              aria-hidden={!businessesOpen}
              inert={businessesOpen ? undefined : ""}
              onMouseLeave={() => setBusinessesOpen(false)}
            >
              <Link className="business-dropdown__intro" to="/companies">
                <span>All businesses</span>
                <span aria-hidden="true">↗</span>
              </Link>
              {Object.values(BUSINESSES).map((business, index) => (
                <Link
                  className="business-dropdown__item"
                  to={business.route}
                  key={business.id}
                  data-business={business.id}
                >
                  <span className="business-dropdown__number">
                    0{index + 1}
                  </span>
                  <span>
                    <strong>{business.name}</strong>
                    <small>{business.eyebrow}</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className="desktop-nav__link">
            Contact
          </NavLink>
        </nav>

        <Link to="/contact" className="header-enquire">
          Enquire <span aria-hidden="true">↗</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : ""}
        role="dialog"
        aria-modal={menuOpen ? "true" : undefined}
        aria-label="Site navigation"
      >
        <div className="mobile-menu__top">
          <Wordmark inverted onClick={() => setMenuOpen(false)} />
        </div>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <NavLink to="/" className="mobile-menu__link">
            <span>01</span> Home
          </NavLink>
          {GLOBAL_NAVIGATION.slice(0, 2).map((item, index) => (
            <NavLink
              to={item.to}
              className="mobile-menu__link"
              key={item.to}
            >
              <span>0{index + 2}</span> {item.label}
            </NavLink>
          ))}
          {Object.values(BUSINESSES).map((business) => (
            <NavLink
              to={business.route}
              className="mobile-menu__business"
              key={business.id}
            >
              {business.name} <span aria-hidden="true">↗</span>
            </NavLink>
          ))}
          <NavLink to="/contact" className="mobile-menu__link">
            <span>04</span> Contact
          </NavLink>
        </nav>
        <p className="mobile-menu__foot">Abuja · Jos · Nigeria</p>
      </div>
    </header>
  );
}

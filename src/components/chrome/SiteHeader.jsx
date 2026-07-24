import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BUSINESSES } from "../../content/businesses.js";
import { BUSINESS_NAVIGATION, siteFromPath } from "../../content/company.js";
import { Arrow, Caret } from "../ui/icons.jsx";
import Wordmark from "../ui/Wordmark.jsx";

const OVERLAY_ROUTES = new Set([
  "/",
  "/properties",
  "/properties/stays",
  "/tishino",
  "/sunab",
]);

const CONTEXT_SITES = new Set(["properties", "tishino"]);

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const desktopTriggerRef = useRef(null);
  const desktopContactRef = useRef(null);
  const megaRef = useRef(null);
  const businessMenuRef = useRef(null);

  const site = siteFromPath(pathname);
  const hasContext = CONTEXT_SITES.has(site);
  const overlay = OVERLAY_ROUTES.has(pathname) && !scrolled && !megaOpen && !menuOpen;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (megaOpen && !businessMenuRef.current?.contains(event.target)) {
        setMegaOpen(false);
      }
    }
    function closeOnEscape(event) {
      if (event.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      } else if (megaOpen) {
        setMegaOpen(false);
        window.requestAnimationFrame(() => desktopTriggerRef.current?.focus());
      }
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [megaOpen, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const background = [
      document.querySelector("main"),
      document.querySelector(".site-footer"),
    ].filter(Boolean);

    background.forEach((element) => element.setAttribute("inert", ""));

    function trapFocus(event) {
      if (event.key !== "Tab") return;

      const links = Array.from(
        mobileMenuRef.current?.querySelectorAll("a[href]") || [],
      );
      const focusables = [menuButtonRef.current, ...links].filter(Boolean);
      const first = focusables[0];
      const last = focusables.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", trapFocus);
    window.requestAnimationFrame(() => {
      mobileMenuRef.current?.querySelector(".mobile-menu__link")?.focus();
    });

    return () => {
      document.removeEventListener("keydown", trapFocus);
      background.forEach((element) => element.removeAttribute("inert"));
    };
  }, [menuOpen]);

  function focusFirstMegaLink(defer = false) {
    const focus = () => {
      megaRef.current?.querySelector("a[href]")?.focus();
    };

    if (defer) {
      window.requestAnimationFrame(focus);
    } else {
      focus();
    }
  }

  function handleMegaTriggerKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setMegaOpen(true);
      focusFirstMegaLink(true);
    } else if (event.key === "Tab" && !event.shiftKey && megaOpen) {
      event.preventDefault();
      focusFirstMegaLink();
    }
  }

  function handleMegaKeyDown(event) {
    if (event.key !== "Tab") return;

    const links = Array.from(megaRef.current?.querySelectorAll("a[href]") || []);
    const first = links[0];
    const last = links.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      setMegaOpen(false);
      desktopTriggerRef.current?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      setMegaOpen(false);
      desktopContactRef.current?.focus();
    }
  }

  return (
    <div
      className={`chrome ${hasContext ? "chrome--context" : ""}`}
      data-site={site}
      ref={businessMenuRef}
    >
      <header
        className={`site-header ${overlay ? "site-header--overlay" : ""} ${
          scrolled ? "site-header--scrolled" : ""
        } ${megaOpen ? "site-header--mega" : ""} ${
          hasContext ? "site-header--context" : ""
        }`}
      >
        <div className="site-header__bar">
          <Wordmark inverted={overlay} />

          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavLink to="/about" className="desktop-nav__link">
              About
            </NavLink>
            <button
              ref={desktopTriggerRef}
              type="button"
              className={`desktop-nav__link desktop-nav__trigger ${
                megaOpen ? "is-open" : ""
              }`}
              aria-expanded={megaOpen}
              aria-controls="businesses-mega"
              onClick={() => setMegaOpen((value) => !value)}
              onKeyDown={handleMegaTriggerKeyDown}
            >
              Businesses
              <Caret className="desktop-nav__caret" />
            </button>
            <NavLink
              ref={desktopContactRef}
              to="/contact"
              className="desktop-nav__link"
            >
              Contact
            </NavLink>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>

        {hasContext ? <ContextRow site={site} /> : null}
      </header>

      <div
        ref={megaRef}
        id="businesses-mega"
        className={`mega ${megaOpen ? "mega--open" : ""}`}
        aria-hidden={!megaOpen}
        inert={megaOpen ? undefined : ""}
        onKeyDown={handleMegaKeyDown}
      >
        <div className="mega__inner">
          <div className="mega__head">
            <div>
              <p className="mega__label">Across the group</p>
              <p className="mega__intro">
                Three operating businesses. Each has its own work, place and voice.
              </p>
            </div>
            <Link to="/companies" className="mega__all">
              View the portfolio <Arrow className="ui-arrow" />
            </Link>
          </div>
          <div className="mega__cols">
            {Object.values(BUSINESSES).map((business, index) => (
              <div
                className="mega__col"
                data-business={business.id}
                key={business.id}
              >
                <Link className="mega__biz" to={business.route}>
                  <span className="mega__num">0{index + 1}</span>
                  <strong>{business.name}</strong>
                  <small>{business.eyebrow}</small>
                </Link>
                <div className="mega__links">
                  {BUSINESS_NAVIGATION[business.id]?.map((sub) => (
                    <Link to={sub.to} key={sub.to}>
                      {sub.label}
                    </Link>
                  )) || (
                    <Link to="/sunab?topic=Carrier%20services#carrier-enquiry">
                      Carrier enquiry
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : ""}
        role="dialog"
        aria-modal={menuOpen ? "true" : undefined}
        aria-label="Site navigation"
      >
        <div className="mobile-menu__top">
          <Wordmark onClick={() => setMenuOpen(false)} />
          <span>Menu</span>
        </div>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <NavLink to="/" className="mobile-menu__link" end>
            <span>01</span> Home
          </NavLink>
          <NavLink to="/about" className="mobile-menu__link">
            <span>02</span> About
          </NavLink>
          <NavLink to="/companies" className="mobile-menu__link">
            <span>03</span> Businesses
          </NavLink>
          <NavLink to="/contact" className="mobile-menu__link">
            <span>04</span> Contact
          </NavLink>

          <div className="mobile-menu__businesses">
            {Object.values(BUSINESSES).map((business) => (
              <div
                className="mobile-menu__biz"
                key={business.id}
                data-business={business.id}
              >
                <NavLink to={business.route} className="mobile-menu__biz-name">
                  <span>{business.name}</span>
                  <Arrow className="ui-arrow" />
                </NavLink>
                {BUSINESS_NAVIGATION[business.id] ? (
                  <div className="mobile-menu__sub">
                    {BUSINESS_NAVIGATION[business.id].map((sub) => (
                      <NavLink
                        to={sub.to}
                        key={sub.to}
                        end={sub.to === business.route}
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <div className="mobile-menu__sub">
                    <NavLink to="/sunab?topic=Carrier%20services#carrier-enquiry">
                      Carrier enquiry
                    </NavLink>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        <p className="mobile-menu__foot">Abuja · Jos · Nigeria</p>
      </div>
    </div>
  );
}

function ContextRow({ site }) {
  const business = BUSINESSES[site];
  const items = BUSINESS_NAVIGATION[site];

  return (
    <div className="site-header__context">
      <div className="context__crumb" aria-label="Breadcrumb">
        <Link to="/" className="context__group">Pengana</Link>
        <span className="context__sep" aria-hidden="true">/</span>
        <Link to={business.route} className="context__biz">
          {business.name}
        </Link>
      </div>
      <nav className="context__links" aria-label={`${business.name} pages`}>
        {items.map((item) => (
          <NavLink
            to={item.to}
            end={item.to === business.route}
            key={item.to}
            className={({ isActive }) =>
              `context__link ${isActive ? "is-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

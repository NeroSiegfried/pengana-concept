import { Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/chrome/Footer.jsx";
import ScrollToTop from "./components/chrome/ScrollToTop.jsx";
import SiteHeader from "./components/chrome/SiteHeader.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CompaniesPage from "./pages/CompaniesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SunabPage from "./pages/SunabPage.jsx";
import PropertiesContact from "./pages/properties/PropertiesContact.jsx";
import PropertiesOverview from "./pages/properties/PropertiesOverview.jsx";
import PropertyServicesPage from "./pages/properties/PropertyServicesPage.jsx";
import StaysPage from "./pages/properties/StaysPage.jsx";
import OperationsPage from "./pages/tishino/OperationsPage.jsx";
import ProducePage from "./pages/tishino/ProducePage.jsx";
import TishinoContact from "./pages/tishino/TishinoContact.jsx";
import TishinoOverview from "./pages/tishino/TishinoOverview.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sunab" element={<SunabPage />} />

        <Route path="/properties" element={<PropertiesOverview />} />
        <Route
          path="/properties/services"
          element={<PropertyServicesPage />}
        />
        <Route path="/properties/stays" element={<StaysPage />} />
        <Route path="/properties/contact" element={<PropertiesContact />} />

        <Route path="/tishino" element={<TishinoOverview />} />
        <Route path="/tishino/operations" element={<OperationsPage />} />
        <Route path="/tishino/produce" element={<ProducePage />} />
        <Route path="/tishino/contact" element={<TishinoContact />} />

        <Route
          path="/properties/development"
          element={<Navigate to="/properties/services" replace />}
        />
        <Route
          path="/properties/projects"
          element={<Navigate to="/properties" replace />}
        />
        <Route
          path="/tishino/gallery"
          element={<Navigate to="/tishino" replace />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}

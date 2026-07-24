export const GROUP = {
  name: "Pengana Concept",
  legalName: "Pengana Concept Limited",
  descriptor: "A family-owned Nigerian holding company",
  summary:
    "Pengana Concept Limited brings together businesses in property and hospitality, agriculture, and telecommunications.",
  office: {
    label: "Abuja head office",
    address: [
      "Plot 721, Cadastral Zone",
      "Dakibiyu District, Abuja",
      "Nigeria",
    ],
    // Approximate, district-level. Exact plot to be confirmed before launch.
    coords: { lat: 9.0742, lng: 7.4321, zoom: 14, area: "Dakibiyu District, Abuja" },
  },
  phones: [
    "+234 805 744 2250",
    "+234 809 818 2224",
    "+234 909 766 6667",
  ],
  // Placeholder enquiries address — confirm the verified group email before launch.
  email: "enquiries@penganaconcept.com",
};

// Where the contact form delivers. Leave null to compose an email in the
// visitor's mail client (works with no backend); set to a POST endpoint
// (Formspree, Netlify Forms, an API route…) to capture submissions directly.
export const FORM_ENDPOINT = null;

export const GROUP_LEADERSHIP = [
  {
    name: "Bitrus B. Nabasu, mni",
    role: "Chairman",
    initials: "BN",
    portrait: "/images/board/bitrus-b-nabasu.jpg",
  },
  {
    name: "Mrs. Victoria Nabasu",
    role: "Director",
    initials: "VN",
    portrait: "/images/board/victoria-nabasu.jpg",
  },
  {
    name: "Jerry A. Nabasu",
    role: "Director",
    initials: "JN",
    portrait: "/images/board/jerry-nabasu.jpg",
  },
  {
    name: "Jeffersen S. Nabasu",
    role: "Director",
    initials: "JN",
    portrait: "/images/board/jeffersen-nabasu.jpg",
  },
  {
    name: "Jibrin Victor Nabasu",
    role: "Director",
    initials: "JN",
    portrait: "/images/board/jibrin-victor-nabasu.jpg",
  },
];

export const SUNAB_LEADERSHIP = [
  { name: "Bitrus Bako Nabasu", role: "Chairman", initials: "BN" },
  { name: "Module Adewunmi Baiyere", role: "Director", initials: "MB" },
  { name: "Umar Abdulahi Bello", role: "Director", initials: "UB" },
];

export const GLOBAL_NAVIGATION = [
  { label: "About", to: "/about" },
  { label: "Businesses", to: "/companies" },
  { label: "Contact", to: "/contact" },
];

export const BUSINESS_NAVIGATION = {
  properties: [
    { label: "Overview", to: "/properties" },
    { label: "Property services", to: "/properties/services" },
    { label: "Stays", to: "/properties/stays" },
    { label: "Enquire", to: "/properties/contact" },
  ],
  tishino: [
    { label: "Overview", to: "/tishino" },
    { label: "Operations", to: "/tishino/operations" },
    { label: "Produce", to: "/tishino/produce" },
    { label: "Enquire", to: "/tishino/contact" },
  ],
};

export function telephoneHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

// The active theme is derived from the URL so chrome (header accent, footer,
// closing CTAs) shifts tone with the section you are in.
export function siteFromPath(pathname) {
  if (pathname.startsWith("/properties")) return "properties";
  if (pathname.startsWith("/tishino")) return "tishino";
  if (pathname.startsWith("/sunab")) return "sunab";
  return "concept";
}

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
  },
  phones: [
    "+234 805 744 2250",
    "+234 809 818 2224",
    "+234 909 766 6667",
  ],
};

export const GROUP_LEADERSHIP = [
  { name: "Bitrus B. Nabasu, mni", role: "Chairman" },
  { name: "Mrs. Victoria Nabasu", role: "Director" },
  { name: "Jerry A. Nabasu", role: "Director" },
  { name: "Jeffersen S. Nabasu", role: "Director" },
  { name: "Jibrin Victor Nabasu", role: "Director" },
];

export const SUNAB_LEADERSHIP = [
  { name: "Bitrus Bako Nabasu", role: "Chairman" },
  { name: "Module Adewunmi Baiyere", role: "Director" },
  { name: "Umar Abdulahi Bello", role: "Director" },
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

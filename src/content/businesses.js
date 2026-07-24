export const BUSINESSES = {
  properties: {
    id: "properties",
    name: "Pengana Properties",
    eyebrow: "Property & hospitality",
    route: "/properties",
    location: "Jos, Plateau State",
    summary:
      "A Jos-based business spanning property development, sales, leasing and lettings, property management, and short-let hospitality.",
    office: {
      label: "Jos office",
      address: [
        "No 2A Wamba Close, Off Wamba Road",
        "Tudun Wada, Jos",
        "Nigeria",
      ],
      coords: { lat: 9.9098, lng: 8.8859, zoom: 14, area: "Tudun Wada, Jos" },
    },
    services: [
      {
        title: "Property development",
        text: "Property development for people and organisations looking to create long-term value in Jos and beyond.",
      },
      {
        title: "Sales",
        text: "Property sales enquiries handled by the local Pengana Properties team.",
      },
      {
        title: "Leasing & lettings",
        text: "Leasing and lettings for property owners, tenants and prospective occupiers.",
      },
      {
        title: "Property management",
        text: "Ongoing property management as part of the company’s integrated real-estate offering.",
      },
    ],
    stays: {
      title: "Short-let & serviced apartments",
      text: "Hospitality in Jos through short-let accommodation and serviced apartments.",
    },
  },
  tishino: {
    id: "tishino",
    name: "Tishino Ventures",
    eyebrow: "Agriculture",
    route: "/tishino",
    location: "Abuja, Nigeria",
    summary:
      "An agriculture business cultivating the staple crops Nigerian households rely on — rice, beans and maize among them — with livestock and poultry identified as areas for growth.",
    focus:
      "Tishino works in staple agriculture: the everyday crops that feed Nigerian homes and markets. Rice, beans and maize are among the staples it grows today.",
    office: {
      label: "Abuja office",
      address: [
        "Plot 721, Cadastral Zone",
        "Dakibiyu District, Abuja",
        "Nigeria",
      ],
      coords: { lat: 9.0742, lng: 7.4321, zoom: 14, area: "Dakibiyu District, Abuja" },
    },
    produce: [
      {
        title: "Rice",
        text: "A staple grain grown for households and markets across the region.",
      },
      {
        title: "Beans",
        text: "A protein-rich legume at the centre of everyday Nigerian meals.",
      },
      {
        title: "Maize",
        text: "A versatile cereal used for food, animal feed and further processing.",
      },
    ],
    growth: ["Livestock", "Poultry"],
  },
  sunab: {
    id: "sunab",
    name: "Sunab Telecoms Services",
    eyebrow: "Telecommunications",
    route: "/sunab",
    location: "Abuja, Nigeria",
    summary:
      "The group's telecommunications company, providing carrier and interconnect services that help mobile network operators in Nigeria and beyond extend their reach.",
    description:
      "Sunab Telecoms Services operates enterprise-grade carrier and interconnect infrastructure for mobile network operators. It runs under its own board and brand, with its full service catalogue, network detail and contact routes maintained on its dedicated website.",
    office: {
      label: "Abuja office",
      address: [
        "Plot 260, Kamar Adeyemi Crescent",
        "KingsPark Estate, Kukwaba District",
        "Abuja, Nigeria",
      ],
      coords: { lat: 9.0797, lng: 7.4288, zoom: 14, area: "Kukwaba District, Abuja" },
    },
    // Service catalogue as described in the group brief; confirm with Sunab before launch.
    services: [
      "Interconnection",
      "Carrier services",
      "Traffic management",
      "Link optimization",
      "Interactive voice response",
      "Voice broadcast",
      "Collocation",
      "Call query",
    ],
    externalUrl: "https://sunabtelecomservices.com",
  },
};

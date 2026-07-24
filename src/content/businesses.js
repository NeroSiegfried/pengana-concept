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
        to: "/properties/contact?topic=Property%20development",
        linkLabel: "Discuss a development",
      },
      {
        title: "Sales",
        text: "Property sales enquiries handled by the local Pengana Properties team.",
        to: "/properties/contact?topic=Buying%20a%20property",
        linkLabel: "Make a sales enquiry",
      },
      {
        title: "Leasing & lettings",
        text: "Leasing and lettings for property owners, tenants and prospective occupiers.",
        to: "/properties/contact?topic=Leasing%20%26%20lettings",
        linkLabel: "Discuss a letting",
      },
      {
        title: "Property management",
        text: "Ongoing property management as part of the company’s integrated real-estate offering.",
        to: "/properties/contact?topic=Property%20management",
        linkLabel: "Talk to the team",
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
      "An agriculture business focused on the staple crops Nigerian households and markets rely on, with livestock and poultry identified as areas for growth.",
    focus:
      "Tishino works in staple agriculture: the grains, legumes, roots and tubers that feed Nigerian homes and markets. Rice, beans and maize are current examples within a much wider food system.",
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
        title: "Grains",
        text: "Rice and maize sit within a wider grain landscape that also includes millet and sorghum.",
        to: "/tishino/contact?topic=Staple%20crop%20supply",
        linkLabel: "Ask about grain supply",
      },
      {
        title: "Legumes",
        text: "Beans, cowpeas and groundnuts bring nutrition, resilience and variety to everyday food markets.",
        to: "/tishino/contact?topic=Distribution%20%26%20offtake",
        linkLabel: "Discuss distribution",
      },
      {
        title: "Roots & tubers",
        text: "Yams and cassava are foundational staples with value across household use and further processing.",
        to: "/tishino/contact?topic=Agricultural%20partnership",
        linkLabel: "Start a partnership enquiry",
      },
    ],
    staples: [
      "Rice",
      "Maize",
      "Millet",
      "Sorghum",
      "Beans & cowpeas",
      "Groundnuts",
      "Yams",
      "Cassava",
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

import FacebookIcon from "./components/icons/FacebookIcon";
import FigmaIcon from "./components/icons/FigmaIcon";
import TwitterIcon from "./components/icons/TwitterIcon";
import YoutubeIcon from "./components/icons/YoutubeIcon";

export const MAX_NEWS_ITEMS = 3;
export const MAX_INDUSTRIES = 3;

export const featureData = [
  {
    title: "Investing in the Future of Halal",
    description:
      "Halal Product Development Company (HDPC)'s investment strategy supports the halal industry's continued growth by empowering halal business and investors to make a mark within the industry and creating pathways for them to seamlessly integrate and thrive across supply chains of targeted sectors.",
    image: "/image.jpeg",
    items: [
      "Support Halal Industry Growth",
      "Empowerment",
      "Integration",
      "Sustainable Development",
    ],
  },
  {
    title: "Innovating Halal Solutions",
    description:
      "HDPC is at the forefront of developing innovative halal products and services, leveraging cutting-edge technology and research to meet the evolving needs of the global Muslim consumer market.",
    image: "/image.jpeg",
    items: [
      "Research & Development",
      "Technology Integration",
      "Market Adaptation",
      "Quality Assurance",
    ],
  },
  {
    title: "Expanding Global Reach",
    description:
      "We are committed to expanding the reach of halal products and services globally, fostering partnerships and creating distribution networks that bring quality halal offerings to consumers worldwide.",
    image: "/image.jpeg",
    items: [
      "International Partnerships",
      "Market Expansion",
      "Cultural Sensitivity",
      "Logistics Optimization",
    ],
  },
  {
    title: "Sustainable Halal Practices",
    description:
      "HDPC is dedicated to promoting sustainable practices within the halal industry, ensuring that our products and processes are not only compliant with Islamic principles but also environmentally responsible and socially beneficial.",
    image: "/image.jpeg",
    items: [
      "Eco-friendly Production",
      "Ethical Sourcing",
      "Community Development",
      "Waste Reduction",
    ],
  },
];


export const footerLinks = {
  call_center: ["800 100 975 20 34", "+(123) 1800-234-5678"],
  location: ["New York - 1060 ", "Str. First Avenue 1"],
  services: ["Investments", "Industries", "Advisory"],
  quick_links: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "News and Media", href: "/news" },
    { name: "Team", href: "/team" },
  ],
  email: "info@hpdc.sa",
  social_network: [
    { name: "Facebook", icon: <FacebookIcon className="size-8"/>, href: "#" },
    { name: "Twitter", icon: <TwitterIcon className="size-8"/>, href: "#" },
    { name: "Youtube", icon: <YoutubeIcon className="size-8"/>, href: "#" },
    { name: "Figma", icon: <FigmaIcon className="size-8"/>, href: "#" },
  ],
};

export const newsItems = [
  {
    date: "2024-05-14",
    title:
      "Islamic Development Bank Group Signs MoU With Halal Products Development Company",
    description:
      "The agreement aims to raise awareness and increase investment in Saudi Arabia's halal industry.",
    publishDate: "2023-05-14",
  },
  {
    date: "2024-04-20",
    title: "Saudi Arabia Hosts International Halal Conference",
    description:
      "The conference brought together experts and industry leaders to discuss the latest trends and innovations in the halal sector.",
    publishDate: "2023-04-18",
  },
  {
    date: "2024-03-10",
    title: "New Halal Certification Standards Announced",
    description:
      "The Saudi Food and Drug Authority introduces updated halal certification standards to enhance quality control.",
    publishDate: "2023-03-08",
  },
  {
    date: "2024-02-05",
    title: "Halal Tourism Sector Sees Significant Growth",
    description:
      "Saudi Arabia reports a 30% increase in halal tourism, attracting visitors from around the world.",
    publishDate: "2023-02-03",
  },
  {
    date: "2024-01-15",
    title: "Major Investment in Halal Food Production Facilities",
    description:
      "A $500 million investment project aims to boost Saudi Arabia's halal food production capacity.",
    publishDate: "2023-01-12",
  },
];

export const halalIndustries = {
  purpose: "Our Purpose",
  title: {
    main: "Championing",
    sub: "Saudi Arabia's",
    highlight: "Halal Industries",
  },
  industries: [
    {
      name: "Pharmaceuticals",
      image: "/image.jpeg",
      description:
        "Halal pharmaceuticals are strictly manufactured according to Islamic regulations. By establishing partnerships with industry leaders, HPDC aims to support the growth of the halal pharmaceutical industry and increase its effectiveness.",
    },
    {
      name: "Food and Beverages",
      image: "/image.jpeg",
      description:
        "The halal food and beverage industry is a cornerstone of Islamic dietary laws. HPDC is committed to promoting and developing this sector, ensuring that high-quality halal food products are readily available both locally and for export.",
    },
    {
      name: "Cosmetics and Personal Care",
      image: "/image.jpeg",
      description:
        "Halal cosmetics and personal care products are gaining popularity worldwide. HPDC supports the development of this industry, focusing on products that are not only halal-certified but also meet high quality and safety standards.",
    },
  ],
  description:
    "To localize and develop Saudi Arabia's halal industries, HPDC strives to enable its partners to succeed. As part of its support for the local halal industry, the company invests in multiple emerging subsectors to help create a vibrant commercial environment. With a focus on contributing to the growth of the food, pharmaceuticals, and cosmetics sectors, HPDC is committed to increasing exports and enabling Saudi Arabia to further strengthen its position at the center of the global halal industry.",
  buttonText: "Explore more",
};

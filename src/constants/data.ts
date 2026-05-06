export interface DetailsModalData {
  title: string;
  subtitle: string;
  image: string;
  details: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
  email: string;
  bio: string;
  details: string;
}

export interface Client {
  name: string;
  logo: string;
  industry: string;
  description: string;
  impact: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  description: string;
}

export const founders: Founder[] = [
  {
    name: "Musfikur Rahman",
    role: "Founder",
    image: "https://i.postimg.cc/BQz5Kn2T/image.png",
    email: "musfik@misoftexpert.cloud",
    bio: "A visionary entrepreneur and software leader focused on building scalable business solutions.",
    details:
      "Musfikur leads misoftexpert with a strong focus on product innovation, end-to-end software delivery, and client success. He combines deep technical expertise with practical business insight to create efficient AMS, POS, and web applications for growing companies.",
  },
  {
    name: "Engr. Iqram H Uzzol",
    role: "Founder",
    image: "https://i.postimg.cc/vZHBbr4n/image.png",
    email: "uzzol@misoftexpert.cloud",
    bio: "An experienced engineering leader with a passion for high-impact systems and digital transformation.",
    details:
      "Uzzol brings technical excellence and strategic direction to every project. He ensures misoftexpert delivers modern architectures, reliable deployments, and thoughtful user experiences across web and enterprise software solutions.",
  },
];

export const clients: Client[] = [
  {
    name: "A and H Enterprise",
    logo: "https://i.postimg.cc/P5YLphm6/image.png",
    industry: "Retail & Distribution",
    description:
      "A and H Enterprise relies on our AMS platform to manage inventory, accounts, and sales across multiple retail locations. The solution gives them real-time visibility into stock levels, simplifies order processing, and streamlines financial reporting.",
    impact:
      "Our software reduced manual tracking, enabled faster decision-making, and improved overall operational efficiency for the client. The integrated system also supports analytics that help optimize purchasing and sales strategies.",
  },
  {
    name: "DTMABD",
    logo: "https://i.postimg.cc/ncrgxMHp/image.png",
    industry: "Supply Chain & Logistics",
    description:
      "DTMABD uses our custom AMS and inventory system to manage products, track shipments, and maintain accurate stock information. The system integrates with point-of-sale channels and simplifies everyday logistics operations.",
    impact:
      "This software reduced errors in inventory reconciliation, accelerated order fulfillment, and improved resource allocation for the supply chain team. It also enabled more accurate forecasting and reporting across business units.",
  },
  {
    name: "Product Zoo BD",
    logo: "https://i.postimg.cc/Vkd8KDSR/product-zoo-bd-logo.png",
    industry: "E-Commerce",
    description:
      "Product Zoo BD operates an online storefront backed by our full-stack e-commerce solution. We provide a seamless shopping experience, integrated catalog management, and secure checkout processes tailored for their customers.",
    impact:
      "Our platform helped increase sales, improve customer retention, and simplify backend operations. Product Zoo BD now benefits from an intuitive admin panel, marketing tools, and scalable architecture that supports fast growth.",
  },
  {
    name: "LGED",
    logo: "https://i.postimg.cc/m2rfr8SR/image.png",
    industry: "Government / Environmental Management",
    description:
      "LGED implemented our IWRM MIS system to centralize water resource data, project management, and stakeholder reporting. The system supports monitoring, analysis, and decision-making for large-scale environmental programs.",
    impact:
      "This solution improved data accuracy, reduced reporting delays, and enabled more effective collaboration across departments. LGED can now track project progress and environmental metrics with confidence.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Client Meetings",
    image: "https://i.postimg.cc/yNnZbWxH/summit-002.png",
    description:
      "Collaborative strategy sessions where we align on goals, define product requirements, and map the roadmap for software delivery.",
  },
  {
    title: "Project Discussions",
    image: "https://i.postimg.cc/GtFmrMnR/meeting-01.jpg",
    description:
      "Focused conversations with stakeholders to refine features, prioritize workflows, and ensure every product decision supports client outcomes.",
  },
  {
    title: "Innovative Workspaces",
    image: "https://i.postimg.cc/fRZ2pWTF/image.png",
    description:
      "A modern development environment designed to keep teams productive, creative, and aligned while building technology solutions.",
  },
  {
    title: "Team Collaboration",
    image: "https://i.postimg.cc/P5pWSB1M/Gemini-Generated-Image-d1vos1d1vos1d1vo.png",
    description:
      "Cross-functional teamwork where developers, designers, and clients collaborate closely to deliver polished software quickly.",
  },
  {
    title: "Final Product Reviews",
    image: "https://i.postimg.cc/zXSZVcyn/image.png",
    description:
      "Review sessions that validate the final product, collect feedback, and guarantee the software meets business goals before launch.",
  },
];
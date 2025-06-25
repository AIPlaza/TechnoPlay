import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  AIAccelerators,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Decentralized Infrastructure",
    icon: web,
  },
  {
    title: "Modular 'Intelligent Stations'",
    icon: mobile,
  },
  {
    title: "Agentic AI Platforms",
    icon: backend,
  },
  {
    title: "Shared Value Economics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Module 0: The Foundations (Bioenergetic Efficiency)",
    company_name: "", // Leave company_name empty or set to null if not applicable
    icon: "", // Provide an appropriate icon or set to null
    iconBg: "#1a2e4b", // Using a shade of blue for the background color
    date: "", // Provide an appropriate date range or set to null
    points: [
      "Acquiring the physical site and embedding provisions for sustainable, independent energy sources like hydrogen generators.",
      "This forward-looking design reduces long-term operational risk and aligns with key ESG criteria.",
    ],
  },
  {
    title: "Module 1: The Lobby (Connectivity)",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "",
    points: [
      "Deploying Mini-PCs (\"Clients\") to monetize unused internet bandwidth through established DePIN networks.",
      "This establishes an immediate revenue stream and integrates the station into the broader data economy.",
    ],
  },
  {
    title: "Module 4: The Power Plant (AI Accelerators)",
    company_name: "",
    icon: "",
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Installing high-end GPUs to provide high-performance computing for AI model training and inference.",
      "This final module positions the station as a provider of the most critical resource for the agentic economy.",
    ],
  },
  {
    title: "Module 2: The Structure (Storage)",
    company_name: "",
    icon: "",
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Adding Network Attached Storage (NAS) systems to provide secure, decentralized data storage for networks like Arweave and Storj.",
      "Evolving the station from a data conduit to a high-value data repository.",
    ],
  },
  {
    title: "Module 3: The Smart Systems (Edge Computing)",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "",
    points: [
      "Integrating edge computing capabilities to offer low-latency data processing for IoT and preliminary AI tasks.",
      "This moves the station up the value chain from passive storage to active, intelligent processing.",

    ],
  },
];

const testimonials = [
  {
    testimonial: "Based on our market research, CryptoPlaza's approach to monetizing unused internet bandwidth through DePIN networks is a game-changer for crypto enthusiasts looking for passive income.",
    name: "Harry Gutierrez",
    designation: "Crypto enthusiast",
    company: "", // Company name for Harry Gutierrez
    image: "", // Image URL for Harry Gutierrez
  },
  {
    testimonial: "We analyzed Agentic Plaza's agentic framework and its potential for creating sophisticated AI systems. The 'Agentic Builder' could revolutionize how businesses automate complex functions.",
    name: "Frank Camelo",
    designation: "CEO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Our research into sustainable energy solutions for laundry services led us to BioEnergy's decentralized approach. Their focus on hydrogen generators and microgrids offers a promising path to energy independence.",
    name: "Maria Rangel",
    designation: "CEO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
 {
    name: "CryptoPlaza (The Hardware Division)",
    description:
 "CryptoPlaza builds and operates the tangible network of \"Intelligent Stations,\" monetizing every layer of the hardware stack from connectivity to high-performance GPU rentals. It also fosters ecosystem growth through a marketplace for certified, optimized hardware.",
    tags: [], // Keep for structural consistency
 tagline: "Forging the physical backbone of the agentic economy.",
  },
 {
    name: "Agentic Plaza (The Software Division)",
 description: "Agentic Plaza is developing the \"Agentic Builder,\" a no-code platform for creating and deploying sophisticated multi-agent AI systems that can automate complex business functions. Its mission is to democratize access to true agentic intelligence.",
    tags: [], // Keep for structural consistency
 tagline: "Building the collaborative mind of the new digital world.",
  },
 {
    name: "BioEnergy (The Power Division)",
    description:
 "BioEnergy develops and deploys sustainable, decentralized energy solutions including hydrogen generators, biogas systems, and renewable microgrids that power our Intelligent Stations. By achieving energy independence, we reduce operational costs while creating additional revenue streams through excess energy monetization and carbon credit generation.",
    tags: [

 ], // Keep for structural consistency
 tagline: "Powering the future with sustainable, decentralized energy.",
  },
];

export { services, technologies, experiences, testimonials, projects };

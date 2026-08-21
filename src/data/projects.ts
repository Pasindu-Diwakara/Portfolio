import { ReactNode } from "react";
import React from "react";

export type ProjectCategory = {
  name: string;
  images: string[];
};

export type Project = {
  id: string; // The slug used in the URL
  title: string;
  date: string;
  description: string;
  detailedDescription?: string;
  metric: string; // Used in the featured cards
  tags: string[];
  cost?: string;
  duration?: string;
  thumbnail: string;
  link?: string; // External link to the live project
  mainCategory: "AI Engineering" | "Web Development" | "UI/UX Design" | "Brand Design";
  categories: ProjectCategory[];
};

export const projectsData: Project[] = [
  {
    id: "serendrive",
    title: "SerenDrive - Premium Tourism & Booking Platform",
    date: "January 2026",
    description: "Showcasing migration, domain deployment, and architectural optimization focusing on unparalleled client speed and stability.",
    detailedDescription: "The Client & Objective: SerenDrive, a premium tourism and transportation agency, required an enterprise-grade web platform to scale international client acquisition. The goal was a standalone, conversion-optimized booking platform.",
    metric: "99.9% Uptime",
    tags: ["Reis- en toerismebureau", "Website Design", "Website Development", "Website Maintenance"],
    cost: "$200-$400",
    duration: "7-30 days",
    thumbnail: "/projects/project01/1.png",
    link: "https://www.serendrive.com/",
    mainCategory: "Web Development",
    categories: [
      {
        name: "Website Design",
        images: [
          "/projects/project01/1.png",
          "/projects/project01/2.png",
          "/projects/project01/3.png",
          "/projects/project01/4.png",
          "/projects/project01/5.png",
          "/projects/project01/6.png",
          "/projects/project01/7.png",
        ]
      }
    ]
  },
  {
    id: "jr-brickwork",
    title: "JR Brickwork & Pointing",
    date: "July 2026",
    description: "A professional and modern website designed for a specialized brickwork and pointing business.",
    detailedDescription: "The Client & Objective: JR Brickwork & Pointing needed a modern, professional website to showcase their specialized masonry services and attract new clients. We built a high-performance web presence that highlights their past work and makes it easy for potential customers to reach out.",
    metric: "High Performance",
    tags: ["Website Design", "Web Development", "Masonry"],
    cost: "$300-$600",
    duration: "14-21 days",
    thumbnail: "/projects/project02/1.png",
    link: "https://www.jrbrickworkandpointing.co.uk/",
    mainCategory: "Web Development",
    categories: [
      {
        name: "Website Design",
        images: [
          "/projects/project02/1.png",
          "/projects/project02/2.png",
        ]
      }
    ]
  },
  {
    id: "noir-luxury-ecommerce",
    title: "NOIR - Luxury E-Commerce App UI/UX",
    date: "August 2026",
    description: "A premium, high-fashion e-commerce mobile application interface designed for luxury brands.",
    detailedDescription: "NOIR is a premium, high-fashion e-commerce mobile application interface designed for luxury brands. The primary goal was to map out an upscale, immersive shopping journey that maximizes user engagement and matches the exclusivity of a high-end boutique. By blending an ultra-minimalist, all-black dark mode aesthetic with vivid neon magenta accents, the interface establishes a commanding visual hierarchy that guides users smoothly toward checkout. Key Screens Designed: Welcome & Secure Login Page, Curated Home Feed with bold editorial product layouts, Organized Shopping Bag/Cart to eliminate abandonment, Gallery-focused Product Detail Page with sticky CTAs. The final interactive prototype successfully bridges the gap between clean, next-generation UI aesthetics and a highly seamless checkout flow.",
    metric: "Seamless UX",
    tags: ["UI/UX Design", "Figma", "Mobile App", "E-Commerce"],
    cost: "$50-$100",
    duration: "3-4 weeks",
    thumbnail: "/projects/project03/1.png",
    mainCategory: "UI/UX Design",
    categories: [
      {
        name: "UI/UX Design",
        images: [
          "/projects/project03/1.png",
        ]
      }
    ]
  },
  {
    id: "rusl-dashboard",
    title: "Academic & Career Dashboard for RUSL",
    date: "July 2026",
    description: "An all-in-one dashboard tailored for the Faculty of Technology at RUSL to track degree requirements and discover career opportunities.",
    detailedDescription: "Balancing degree requirements while looking for career opportunities can be tough, so I built this tool to bridge the gap and automate the process. Key features include a detailed credit breakdown, real-time GPA calculation, an instant transcript generator, and a career hub to browse live job offers.",
    metric: "100+ Students",
    tags: ["Dashboard", "Next.js", "Academic", "Vercel"],
    duration: "2 months",
    link: "https://fot-credit-tracker.vercel.app/",
    thumbnail: "/projects/project04/1.png",
    mainCategory: "Web Development",
    categories: [
      {
        name: "Dashboard UI",
        images: [
          "/projects/project04/1.png",
        ]
      }
    ]
  },
  {
    id: "town-talk-restaurant",
    title: "Town Talk Restaurant",
    date: "July 2026",
    description: "A premium restaurant website featuring a luxury interior design, full menu, and order processing capabilities.",
    detailedDescription: "The Client & Objective: Town Talk Restaurant, a staple in the Copenhagen community since 1998, needed a modern digital presence. We designed a luxury website showcasing their culinary excellence, fresh ingredients, and homemade flavors. Features include a dynamic menu, online ordering, a gallery, and customer reviews.",
    metric: "50k+ Customers",
    tags: ["Website Design", "Web Development", "Restaurant", "Next.js"],
    cost: "$300-$600",
    duration: "2-3 weeks",
    link: "https://town-talk-restaurant.vercel.app/",
    thumbnail: "/projects/project05/1.png",
    mainCategory: "Web Development",
    categories: [
      {
        name: "Website Design",
        images: [
          "/projects/project05/1.png",
          "/projects/project05/2.png"
        ]
      }
    ]
  },
  {
    id: "state-of-fitness",
    title: "State of Fitness",
    date: "July 2026",
    description: "A premium luxury fitness center website featuring a dark, modern aesthetic, advanced animations, and a seamless user experience.",
    detailedDescription: "State of Fitness required a high-end digital presence to reflect their premium coaching, cutting-edge equipment, and motivating community. We designed a dark luxury website featuring glassmorphism UI, magnetic buttons, scroll-triggered reveals, and cinematic layouts. The platform is optimized for performance and SEO, providing an immersive experience that inspires visitors to start their fitness journey.",
    metric: "2500+ Members",
    tags: ["Website Design", "Web Development", "Fitness", "Next.js"],
    cost: "$400-$800",
    duration: "3-4 weeks",
    thumbnail: "/projects/project06/1.png",
    link: "https://state-of-fitness.vercel.app/",
    mainCategory: "Web Development",
    categories: [
      {
        name: "Website Design",
        images: [
          "/projects/project06/1.png",
          "/projects/project06/2.png"
        ]
      }
    ]
  }
];

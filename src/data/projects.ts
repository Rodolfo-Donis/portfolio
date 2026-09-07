import type { Project } from "@/models/project";

export const projects: readonly Project[] = [
  {
    id: "conviccion-leasing",
    name: "Convicción Leasing",
    kind: "Freelance Project",
    summary:
      "Designed and delivered a modern, high-converting Single Page Application (SPA) for a leasing company, focused on performance, responsiveness, and polished user experience. Built to reinforce brand credibility while optimizing lead generation through a seamless contact flow.",
    highlights: [
      "Developed with React 18 and Vite for fast load times and optimized performance",
      "Implemented smooth UI animations using Framer Motion to enhance user engagement",
      "Built dynamic light/dark theme switching with system preference detection",
      "Integrated contact form using EmailJS for reliable lead capture without backend overhead",
      "Fully responsive layout across mobile, tablet, and desktop",
      "SEO-optimized structure and metadata to improve discoverability",
      "Clean, maintainable component architecture ready for future scalability",
    ],
    skills: ["React 18", "Vite", "Framer Motion", "EmailJS", "Responsive", "SEO"],
    url: "https://www.conviccionleasing.com/",
    urlLabel: "Visit website",
  },
];

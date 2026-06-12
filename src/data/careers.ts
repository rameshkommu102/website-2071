export type RoleSection = {
  heading: string;
  bullets: string[];
};

export type Role = {
  slug: string;
  title: string;
  experience: string;
  type: string;
  location: string;
  workMode: string;
  category: string;
  team: string;
  openings: number;
  postedDaysAgo: number;
  summary: string;
  highlights: string[];
  sections: RoleSection[];
};

export const roles: Role[] = [
  {
    slug: "sap-functional-lead",
    title: "SAP Functional Lead",
    experience: "Exp: 4y to 8y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Engineering",
    team: "SAP Practice",
    openings: 2,
    postedDaysAgo: 4,
    summary:
      "Lead end-to-end SAP functional design across FI/CO, MM, SD, PP or HCM and shape solutions that move the needle for global enterprises.",
    highlights: [
      "Own a core SAP module end-to-end",
      "Mentor a team of 4–6 consultants",
      "Direct exposure to S/4HANA & BTP",
    ],
    sections: [
      {
        heading: "Functional Leadership",
        bullets: [
          "End-to-End Ownership: Lead the functional design and delivery of SAP solutions across one or more core modules (FI/CO, MM, SD, PP, HCM).",
          "Team Coordination: Guide junior consultants, manage functional workstreams, and ensure delivery alignment with project goals.",
          "Solution Architecture Input: Collaborate with technical and integration teams to design scalable, cross-functional solutions.",
        ],
      },
      {
        heading: "Business Process Expertise",
        bullets: [
          "Process Design & Optimization: Translate complex business requirements into efficient SAP processes.",
          "Fit-Gap Analysis: Lead workshops to assess standard SAP capabilities vs. custom requirements.",
          "Blueprinting & Documentation: Create detailed functional designs, process flows, and configuration documents.",
        ],
      },
      {
        heading: "Project Delivery & Methodology",
        bullets: [
          "Implementation Lifecycle Mastery across requirements, build, go-live and hyper care.",
          "Skilled with Agile and Waterfall delivery frameworks.",
          "Lead cutover planning, data migration and production deployment activities.",
        ],
      },
      {
        heading: "Tools & Platform Exposure",
        bullets: [
          "SAP S/4HANA expertise — Fiori apps and the deltas from ECC.",
          "Oversee functional testing, defect resolution and UAT.",
          "Drive change requests, incident resolution and continuous improvement.",
        ],
      },
    ],
  },
];

export const getRoleBySlug = (slug: string) => roles.find((r) => r.slug === slug);

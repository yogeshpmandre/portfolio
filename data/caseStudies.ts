export type CaseStudy = {
  id: number;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,

    title: "Enterprise GTM Analytics Platform",

    subtitle:
      "Building a trusted analytics ecosystem for global business teams.",

    challenge:
      "Business teams relied on disconnected reports and inconsistent metrics across Sales, Finance and Operations.",

    solution:
      "Designed a modern analytics platform using Snowflake, dbt and Tableau, creating reusable semantic models and executive dashboards.",

    impact: [
      "Trusted executive reporting",
      "Reusable analytics models",
      "Improved business decisions",
      "AI-ready data products",
    ],

    technologies: [
      "Snowflake",
      "dbt",
      "Python",
      "SQL",
      "Tableau",
    ],
  },

  {
    id: 2,

    title: "AI-ready Analytics Platform",

    subtitle:
      "Preparing enterprise data products for LLM-powered analytics.",

    challenge:
      "Business users required faster access to trusted insights through conversational interfaces.",

    solution:
      "Designed analytics datasets optimized for natural language querying and future AI integrations.",

    impact: [
      "LLM-ready datasets",
      "Business self-service",
      "Improved data trust",
    ],

    technologies: [
      "Snowflake",
      "dbt",
      "Cursor - Claude - Gemini",
      "Python",
    ],
  },

  {
    id: 3,

    title: "Executive KPI Dashboard",

    subtitle:
      "Delivering trusted KPIs across multiple business functions.",

    challenge:
      "Leadership lacked a consistent view of performance metrics.",

    solution:
      "Developed executive dashboards with governed metrics and reusable reporting layers.",

    impact: [
      "Single source of truth",
      "Executive visibility",
      "Scalable reporting",
    ],

    technologies: [
      "Tableau",
      "Snowflake",
      "SQL",
    ],
  },
];
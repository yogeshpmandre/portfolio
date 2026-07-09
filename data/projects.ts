export type Project = {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "gtm-platform",

    title: "Global GTM Analytics Platform",

    subtitle: "Enterprise Reporting Infrastructure",

    challenge:
      "Business teams relied on multiple disconnected reports with inconsistent metrics across Sales, Finance, and Deal Management.",

    solution:
      "Designed a centralized analytics platform using Snowflake, dbt, SQL, and Tableau with reusable semantic models and trusted KPIs.",

    impact: [
      "Created a single source of truth",
      "Reduced manual reporting effort",
      "Improved executive visibility",
      "Enabled AI-ready analytics",
    ],

    technologies: [
      "Snowflake",
      "dbt",
      "SQL",
      "Tableau",
      "Python",
    ],
  },

  {
    id: "ai-data-product",

    title: "AI-Ready Data Products",

    subtitle: "LLM-Powered Analytics",

    challenge:
      "Business users struggled to quickly find answers from large datasets without relying on analysts.",

    solution:
      "Designed semantic datasets and analytics models that could be queried naturally through LLM-powered interfaces.",

    impact: [
      "Improved self-service analytics",
      "Reduced analyst dependency",
      "Faster business insights",
      "Prepared analytics for GenAI adoption",
    ],

    technologies: [
      "Snowflake",
      "Python",
      "OpenAI",
      "SQL",
    ],
  },
];
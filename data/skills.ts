export type SkillCategory = {
  title: string;
  technologies: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Platforms",
    technologies: [
      "Snowflake",
      "Postgres SQL",
      "Salesforce",
      "Redshift",
    ],
  },
  {
    title: "Analytics Engineering",
    technologies: [
      "github",
      "Data Modeling",
      "ETL",
      "CI/CD",
      "Fivetran",
      "Airflow",
    ],
  },
  {
    title: "Programming",
    technologies: [
      "Python",
      "SQL",
      "vibe coding using cursor/claude/gemini",
    ],
  },
  {
    title: "Visualization",
    technologies: [
      "Tableau",
      "Preset.io",
      "Google App Script",
      "CRM Analytics",
    ],
  },
  {
    title: "AI",
    technologies: [
      "Gen AI",
      "NotebookLM",
      "Prompt Engineering",
      "MCPs",
      "RAG",
      "Cursor",
      "Claude",
      "Gemini"
    ],
  },
];
// src/data/certificates.ts

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  category: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Databricks AI Fundamentals",
    issuer: "Databricks",
    category: "AI",
    image: "images/Databricks AI Fundamentals.jpg",
  },
  {
    id: 2,
    title: "Google Gemini Productivity",
    issuer: "Google",
    category: "AI",
    image: "images/Google Gemini Productivity.jpg",
  },
  {
    id: 3,
    title: "Google Gemini",
    issuer: "Google",
    category: "AI",
    image: "images/Google Gemini.jpeg",
  },
  {
    id: 4,
    title: "IBM AI",
    issuer: "IBM",
    category: "AI",
    image: "images/IBM.jpg",
  },
  {
    id: 5,
    title: "Machine Learning Foundations",
    issuer: "LinkedIn Learning",
    category: "AI",
    image: "images/Machine Learning.jpg",
  },
  {
    id: 6,
    title: "Managers M-Series",
    issuer: "Red Hat",
    category: "Leadership",
    image: "images/Managers - M-Series.jpg",
  },
  {
    id: 7,
    title: "Red Hat AI Executive",
    issuer: "Red Hat",
    category: "AI",
    image: "images/Red Hat AI Executive.jpg",
  },
  {
    id: 8,
    title: "Red Hat AI Foundation",
    issuer: "Red Hat",
    category: "AI",
    image: "images/Red Hat AI Foundation.jpg",
  },
  {
    id: 9,
    title: "Advanced SQL",
    issuer: "LinkedIn Learning",
    category: "SQL",
    image: "images/SQL.jpeg",
  },
  {
    id: 10,
    title: "Tableau Analyst",
    issuer: "Tableau",
    category: "Tableau",
    image: "images/tableau-analyst.jpg",
  },
  {
    id: 11,
    title: "Tableau Community Leader",
    issuer: "Tableau",
    category: "Tableau",
    image: "images/tableau-community-leader.jpg",
  },
  {
    id: 12,
    title: "Tableau Data Scientist",
    issuer: "Tableau",
    category: "Tableau",
    image: "images/tableau-data-scientist.jpg",
  },
  {
    id: 13,
    title: "Tableau Data Steward",
    issuer: "Tableau",
    category: "Tableau",
    image: "images/tableau-data-steward.jpg",
  },
  {
    id: 14,
    title: "Tableau Designer",
    issuer: "Tableau",
    category: "Tableau",
    image: "images/tableau-designer.jpg",
  },
  {
    id: 15,
    title: "Tableau Developer",
    issuer: "Tableau",
    category: "Tableau",
    image: "images/tableau-developer.jpg",
  },
  {
    id: 16,
    title: "Tilt - Clarity",
    issuer: "Red Hat",
    category: "Leadership",
    image: "images/Tilt - Clarity.jpg",
  },
  {
    id: 17,
    title: "Tilt - Structure",
    issuer: "Red Hat",
    category: "Leadership",
    image: "images/Tilt - Structure.jpg",
  },
];
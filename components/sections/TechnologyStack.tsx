import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";

import { Database, BarChart3, BrainCircuit, Cloud } from "lucide-react";

import { skillCategories } from "@/data/skills";

const icons = {
  "Data Engineering": Database,
  Analytics: BarChart3,
  "AI & Automation": BrainCircuit,
  Cloud: Cloud,
};

export default function TechnologyStack() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          eyebrow="Technology Stack"
          title="Technologies I work with every day."
          description="A curated set of tools and platforms I use to build scalable analytics ecosystems and AI-ready data products."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon =
              icons[category.title as keyof typeof icons] || Database;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
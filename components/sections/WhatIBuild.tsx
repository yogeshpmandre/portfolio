import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const offerings = [
  {
    title: "Data Products",
    description:
      "Designing trusted datasets, semantic models, and reporting layers that become the single source of truth for business decisions.",
    icon: "📊",
  },
  {
    title: "Analytics Engineering",
    description:
      "Building scalable Snowflake and dbt pipelines that power reliable analytics across global business teams.",
    icon: "🏗️",
  },
  {
    title: "AI-Ready Analytics",
    description:
      "Creating analytics platforms that integrate naturally with LLMs, enabling conversational access to business data.",
    icon: "🤖",
  },
  {
    title: "Business Intelligence",
    description:
      "Delivering executive dashboards and insights that help Sales, Finance, Revenue Operations, and Leadership make confident decisions.",
    icon: "📈",
  },
];

export default function WhatIBuild() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          eyebrow="What I Build"
          title="Turning complex data into trusted business decisions."
          description="Over the past decade, I've focused on building analytics ecosystems that combine reliable engineering, intuitive reporting, and modern AI capabilities."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
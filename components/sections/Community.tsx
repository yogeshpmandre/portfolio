import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import { community } from "@/data";

export default function Community() {
  return (
    <Section id="community">
      <Container>
        <SectionTitle
          eyebrow="Community & Leadership"
          title="Contributing beyond my day-to-day responsibilities."
          description="I enjoy building communities, leading initiatives and creating experiences that bring people together."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {community.map((item) => (
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
                hover:shadow-2xl
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <p className="mt-6 text-sm font-semibold text-blue-600">
                {item.period}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>

              <p className="mt-2 font-medium text-slate-500 dark:text-slate-400">
                {item.organization}
              </p>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
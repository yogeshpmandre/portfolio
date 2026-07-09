import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import { impact } from "@/data";

export default function Impact() {
  return (
    <Section id="impact">
      <Container>
        <SectionTitle
          eyebrow="Impact at a Glance"
          title="Focused on building trusted analytics ecosystems."
          description="A snapshot of the experience, technologies and business domains that define my work."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <Card key={item.title} className="text-center">
              <h3 className="text-5xl font-extrabold text-blue-600">
                {item.value}
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
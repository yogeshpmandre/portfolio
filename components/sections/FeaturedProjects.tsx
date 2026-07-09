import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data";

export default function FeaturedProjects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          eyebrow="Featured Case Studies"
          title="Solving business problems through data."
          description="A selection of analytics platforms and AI-enabled data products I've designed to help organizations make faster, more confident decisions."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
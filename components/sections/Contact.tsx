import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { profile } from "@/data";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle
          eyebrow="Let's Connect"
          title="Interested in working together?"
          description="Whether it's analytics engineering, AI-ready data products, modern data platforms, or simply exchanging ideas—I would love to hear from you."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Let's build something impactful.
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I'm passionate about solving business problems through trusted
              data, analytics engineering, automation, and AI. If you're
              hiring, collaborating, or just want to connect, feel free to
              reach out.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>Email Me</Button>

              <Button variant="secondary">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800"
              >
                <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Email
                </p>

                <p className="mt-2 break-all text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {profile.email}
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800"
              >
                <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  LinkedIn
                </p>

                <p className="mt-2 break-all text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {profile.linkedin}
                </p>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800"
              >
                <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  GitHub
                </p>

                <p className="mt-2 break-all text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {profile.github}
                </p>
              </a>

              {/* Credly */}
              <a
                href={profile.credly}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800"
              >
                <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Credly
                </p>

                <p className="mt-2 break-all text-lg font-semibold text-slate-900 dark:text-slate-100">
                  View Certifications
                </p>
              </a>

              {/* Location */}
              <div className="rounded-2xl border border-slate-100 p-5 dark:border-slate-800">
                <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Location
                </p>

                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
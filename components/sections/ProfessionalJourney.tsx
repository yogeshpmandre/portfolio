import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { Briefcase } from "lucide-react";
import { experience } from "@/data";

export default function ProfessionalJourney() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          eyebrow="Professional Journey"
          title="Building trusted analytics platforms for over a decade."
          description="A journey of transforming business challenges into scalable data products and decision-ready insights."
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-5 top-0 h-full w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-14">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Briefcase size={18} />
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-sm font-semibold text-blue-600">
                    {job.period}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {job.role}
                  </h3>

                  <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">
                    {job.company}
                  </p>

                  <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                    {job.summary}
                  </p>

                  {/* Red Hat Career Progression */}
                  {"careerProgression" in job &&
                  job.careerProgression ? (
                    <div className="mt-10">
                      <h4 className="mb-8 text-lg font-semibold text-slate-900 dark:text-slate-100">
                        Career Progression at Red Hat
                      </h4>

                      <div className="relative border-l-2 border-blue-200 pl-8 dark:border-blue-900">
                        {job.careerProgression.map((role) => (
                          <div
                            key={role.title + role.period}
                            className="relative mb-10 last:mb-0"
                          >
                            <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-slate-900" />

                            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                              <div>
                                <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                  {role.title}
                                </h5>

                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                  {role.period}
                                </p>
                              </div>

                              <span className="w-fit rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                                {role.duration}
                              </span>
                            </div>

                            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                              {role.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <ul className="mt-6 space-y-3">
                      {job.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />

                          <span className="text-slate-600 dark:text-slate-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
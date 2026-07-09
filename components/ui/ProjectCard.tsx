import { ArrowUpRight } from "lucide-react";

import Badge from "./Badge";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

      {/* Top Accent */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

      <div className="p-8">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          {project.subtitle}
        </p>

        <div className="mt-3 flex items-start justify-between gap-4">

          <h3 className="text-3xl font-bold text-slate-900">
            {project.title}
          </h3>

          <ArrowUpRight className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8 space-y-8">

          <div>
            <h4 className="font-semibold text-slate-900">
              Challenge
            </h4>

            <p className="mt-2 leading-7 text-slate-600">
              {project.challenge}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Solution
            </h4>

            <p className="mt-2 leading-7 text-slate-600">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Business Impact
            </h4>

            <ul className="mt-4 space-y-3">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
import Container from "../ui/Container";
import Section from "../ui/Section";
import Stats from "../ui/Stats";
import Button from "../ui/Button";
import FadeIn from "../animations/FadeIn";
import Image from "next/image";

import { profile, technologies } from "@/data";

export default function Hero() {
  return (
    <Section className="flex min-h-screen items-center pt-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <FadeIn>
            <p className="font-large text-blue-600">
              👋 Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
              Senior Principal Data Analyst | Analytics Engineering | AI-Native Builder
            </h2>

            <p className="mt-8 max-w-2xl text-2xl font-medium leading-relaxed text-slate-900 dark:text-slate-100">
              {profile.tagline}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>

            {/* Tech Chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-700
                    dark:bg-slate-800
                    dark:text-blue-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12">
              <Stats />
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#projects">
                <Button>
                  View Case Studies →
                </Button>
              </a>

              <a
                href="/resume/ATS_Yogesh_Mandre_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                dark:bg-slate-800
                dark:text-blue-300
              "
            >
              LinkedIn ↗
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                dark:bg-slate-800
                dark:text-blue-300
              "
            >
              GitHub ↗
            </a>

            {profile.credly && (
              <a
                href={profile.credly}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full
                  bg-blue-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-blue-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  dark:bg-slate-800
                  dark:text-blue-300
                "
              >
                Credly ↗
              </a>
            )}
          </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-indigo-500/30 blur-3xl" />

                {/* Profile Image */}
                <div className="relative h-60 w-60 overflow-hidden rounded-full border-8 border-white shadow-2xl dark:border-slate-800 lg:h-96 lg:w-96">
                  <Image
                    src="/profile.jpg"
                    alt="Yogesh Mandre"
                    fill
                    priority
                    sizes="(max-width: 1024px) 320px, 384px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
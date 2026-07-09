import Container from "../ui/Container";

import { profile } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="py-14">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {profile.name}
              </h3>

              <p className="mt-3 max-w-md text-slate-600">
                Building trusted analytics platforms, modern data products
                and AI-ready solutions.
              </p>
            </div>

            <div className="flex gap-8 text-sm font-medium text-slate-600">

              <a
                href={`mailto:${profile.email}`}
                className="hover:text-blue-600"
              >
                Email
              </a>

              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                GitHub
              </a>

            </div>

          </div>

          <div className="mt-10 border-t pt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            TypeScript & Tailwind CSS.
          </div>

        </div>
      </Container>
    </footer>
  );
}
"use client";

import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white shadow-lg">
            YM
          </div>

          <div className="hidden sm:block">
            <p className="font-semibold leading-none text-slate-900 dark:text-slate-100">
              Yogesh Mandre
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Red Hatter | Data Expert | AI Pioneer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0 text-sm font-medium md:flex">
          <a
            href="#about"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            About
          </a>
          <a
            href="#education"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            Education
          </a>
          <a
            href="#impact"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            Impact
          </a>

          <a
            href="#experience"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            Experience
          </a>

          <a
            href="#projects"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            Projects
          </a>

          <a
            href="#community"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            Community
          </a>
          <a
            href="#recognition"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
              Recognition
          </a>
          <a
            href="#certificates"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            Certificates
          </a>

          <a
            href="#contact"
            className="
              rounded-xl
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600/10
              hover:text-blue-600
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
          >
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-0">
          <ThemeToggle />

          <a
            href="/resume/ATS_Yogesh_Mandre_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 md:block"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 md:hidden"
            aria-label="Toggle Menu"
          >
            <span className="text-2xl dark:text-slate-100">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col gap-0 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Education
            </a>
            <a
              href="#impact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Impact
            </a>

            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Experience
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#community"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Community
            </a>
            <a
              href="#recognition"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Recognition
            </a>
            <a
              href="#certificates"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Certificates
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Contact
            </a>

            <a
              href="/resume/ATS_Yogesh_Mandre_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
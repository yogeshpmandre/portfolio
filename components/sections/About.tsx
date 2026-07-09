import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Building trusted data products that enable better business decisions."
          description="With more than a decade of experience in analytics engineering and enterprise reporting, I specialize in transforming complex business requirements into scalable, AI-ready data platforms."
        />

        {/* About Text */}
<div
  className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-slate-200
    bg-white/80
    p-10
    shadow-sm
    backdrop-blur-sm
    dark:border-slate-800
    dark:bg-slate-900/80
  "
>
  {/* Glow */}
  <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
  <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

  <div className="relative">
    <span className="absolute left-0 top-0 text-7xl font-serif text-blue-600/20">“</span>

    <div className="space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
      <p>
        My journey began with solving reporting challenges, but over time
        evolved into designing complete analytics ecosystems that power
        global go-to-market strategy.
      </p>

      <p>
        Today, I work across the full analytics lifecycle—from data
        modeling in dbt and Snowflake to building executive dashboards,
        semantic data products, and AI-enabled analytics experiences.
      </p>

      <p>
        I enjoy simplifying complex problems, improving data trust, and
        creating solutions that allow business teams to make faster,
        evidence-based decisions.
      </p>
      <span className="absolute bottom-0 right-4 text-7xl font-serif text-blue-600/20">"</span>
    </div>
    
  </div>
</div>

        {/* Bottom Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* What I Enjoy */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              What I enjoy working on
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <li>✅ Analytics Engineering</li>
              <li>✅ Snowflake & dbt Architecture</li>
              <li>✅ AI-ready Data Products</li>
              <li>✅ Executive Dashboards</li>
              <li>✅ Data Quality & Governance</li>
              <li>✅ Cross-functional Collaboration</li>
            </ul>
          </div>

          {/* AI-Native Card */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              🤖 AI-Native Ways of Working
            </h3>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              I actively leverage modern AI tools including Gemini, Claude,
              Cursor, and NotebookLM to accelerate analytics engineering,
              automate repetitive workflows, explore data, generate
              documentation, and build AI-ready data products. I view AI as a
              collaborative engineering partner that amplifies productivity,
              experimentation, and business impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Gemini",
                "Claude",
                "Cursor",
                "NotebookLM",
                "AI Automation",
                "Prompt Engineering",
                "Data Engineering",
                "Vibe Coding",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-700
                    dark:bg-blue-950
                    dark:text-blue-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
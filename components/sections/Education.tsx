import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const education = [
  {
    degree: "Executive PGDBM",
    institution: "Symbiosis International University",
    location: "Pune, Maharashtra, India",
    period: "2013 – 2014",
  },
  {
    degree: "Master of Science (Information Technology)",
    institution:
      "Dept. of Computer Science & IT, Dr. Babasaheb Ambedkar Marathwada University Campus",
    location: "Sambhaji Nagar, Maharashtra, India",
    period: "2002",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution:
      "Vivekanand College of Science, Dr. Babasaheb Ambedkar Marathwada University",
    location: "Sambhaji Nagar, Maharashtra, India",
    period: "2000",
  },
  {
    degree: "SSC (10th Standard) & HSC (12th Standard)",
    institution:
      "State Board of Secondary & Higher Secondary Education, Maharashtra",
    location: "Sambhaji Nagar, Maharashtra, India",
    period: "1995 – 1997",
  },
];

const hobbies = [
  "🏋️ Fitness",
  "🏏 Cricket",
  "📚 Reading Books",
];

const languages = [
  "English",
  "Hindi",
  "Marathi",
];

export default function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionTitle
          eyebrow="Education & Beyond"
          title="Learning, curiosity and continuous growth."
          description="Academic foundations that shaped my analytical thinking, leadership mindset and passion for lifelong learning."
        />

        {/* Education Timeline */}
        <div className="mt-16 space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <p className="text-med font-semibold text-blue-600">
                {item.period}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
                🎓 {item.degree}
              </h3>

              <p className="mt-2 font-medium text-slate-600 dark:text-slate-300">
                {item.institution}
              </p>

              <p className="mt-1 text-slate-500 dark:text-slate-400">
                {item.location}
              </p>
            </div>
          ))}
        </div>

        {/* Interests & Languages */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              ❤️ Hobbies
            </h3>

            <div className="mt-6 flex flex-wrap gap-4">
              {hobbies.map((hobby) => (
                <span
                  key={hobby}
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
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              🌐 Languages
            </h3>

            <div className="mt-6 flex flex-wrap gap-4">
              {languages.map((language) => (
                <span
                  key={language}
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
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
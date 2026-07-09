type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "100+",
    label: "Dashboards",
  },
  {
    value: "GTM",
    label: "Analytics",
  },
  {
    value: "AI",
    label: "Ready",
  },
];

export default function Stats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
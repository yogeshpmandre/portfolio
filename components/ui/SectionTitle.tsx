type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-16 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
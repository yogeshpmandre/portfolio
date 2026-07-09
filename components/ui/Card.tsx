export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}
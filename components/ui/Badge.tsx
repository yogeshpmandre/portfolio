type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-blue-100
        bg-blue-50
        px-4
        py-2
        text-sm
        font-medium
        text-blue-700
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-300
        hover:bg-blue-600
        hover:text-white
        hover:shadow-lg
      "
    >
      {children}
    </span>
  );
}
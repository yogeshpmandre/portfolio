import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:-translate-y-1",
  };

  const content = (
    <>
      {children}
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group ${base} ${styles[variant]}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${base} ${styles[variant]}`}>
      {content}
    </button>
  );
}
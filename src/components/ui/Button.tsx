import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "emergency";
  className?: string;
};

const variants = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-700 focus-visible:outline-blue-600",
  secondary:
    "border border-navy-800/15 bg-white text-navy-900 shadow-sm hover:bg-silver-100 focus-visible:outline-blue-600",
  emergency:
    "bg-gold-500 text-navy-950 shadow-lg shadow-gold-600/25 hover:bg-gold-400 focus-visible:outline-gold-500",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

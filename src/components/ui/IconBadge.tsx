import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconBadgeVariant = "blue" | "gold" | "navy" | "light";
type IconBadgeSize = "sm" | "md" | "lg";

type IconBadgeProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: IconBadgeVariant;
  size?: IconBadgeSize;
  className?: string;
};

const variants: Record<IconBadgeVariant, string> = {
  blue: "border-blue-300/40 bg-blue-600 text-white shadow-blue-900/20",
  gold: "border-gold-400/40 bg-gold-500 text-navy-950 shadow-gold-700/20",
  navy: "border-blue-400/30 bg-navy-900 text-blue-300 shadow-black/20",
  light: "border-silver-200 bg-white text-blue-700 shadow-navy-900/10",
};

const sizes: Record<IconBadgeSize, string> = {
  sm: "h-10 w-10 [&_svg]:h-5 [&_svg]:w-5",
  md: "h-12 w-12 [&_svg]:h-7 [&_svg]:w-7",
  lg: "h-16 w-16 [&_svg]:h-10 [&_svg]:w-10",
};

export function IconBadge({
  icon: Icon,
  variant = "blue",
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl border shadow-lg",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <Icon aria-hidden="true" />
    </span>
  );
}

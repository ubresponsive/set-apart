import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("text-sm font-semibold uppercase tracking-wide", inverse ? "text-gold-400" : "text-blue-700")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl",
          inverse ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </h2>
      {children ? (
        <p className={cn("mt-4 text-base leading-7", inverse ? "text-silver-300" : "text-muted")}>
          {children}
        </p>
      ) : null}
    </div>
  );
}

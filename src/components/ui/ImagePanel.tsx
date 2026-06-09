import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImagePanel({
  src,
  alt,
  children,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src?: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_35%_25%,rgba(75,193,255,0.32),transparent_34%),linear-gradient(135deg,#061525,#020914)]",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("h-full w-full object-cover", imageClassName)}
        />
      ) : (
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      )}
      {children}
    </div>
  );
}

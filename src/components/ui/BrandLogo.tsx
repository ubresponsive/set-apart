import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/images/set-apart-logo.jpg"
        alt="Set Apart Plumbing logo with blue water drop and gold cross"
        width={160}
        height={160}
        className={cn("h-14 w-14 rounded-xl object-contain", imageClassName)}
      />
    </span>
  );
}

import { StarIcon } from "@heroicons/react/20/solid";

export function StarRating({ label = "5-star service" }: { label?: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className="h-5 w-5 text-gold-500" aria-hidden="true" />
      ))}
    </div>
  );
}

"use client";

import { ImageComparison } from "@/components/ui/image-comparison";

export function ImageHero() {
  return (
    <div className="w-full">
      <p className="text-center text-[11px] text-zinc-400 mb-2">
        Glissez pour comparer avant / après pose du film
      </p>
      <ImageComparison
        beforeImage="/images/films-design-et-intimite/before.jpg"
        afterImage="/images/films-design-et-intimite/after.jpg"
      />
    </div>
  );
}

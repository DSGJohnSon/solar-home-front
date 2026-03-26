"use client";

import { ImageComparison } from "@/components/ui/image-comparison";

export function ImageHero() {
  return (
    <div className="w-full">
      <p className="text-center text-[11px] text-zinc-400 mb-2">
        Glissez pour comparer avant / après pose
      </p>
      <ImageComparison
        beforeImage="/images/renovation-mobilier/before.jpg"
        afterImage="/images/renovation-mobilier/after.jpg"
      />
    </div>
  );
}

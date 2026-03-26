"use client";

import Image from "next/image";
import { ImageComparison } from "@/components/ui/image-comparison";

type SimpleItem = {
  kind: "simple";
  src: string;
  alt: string;
  caption?: string;
};

type ComparisonItem = {
  kind: "comparison";
  before: string;
  after: string;
  caption?: string;
};

export type GalleryItem = SimpleItem | ComparisonItem;

interface GalleryGridProps {
  items: GalleryItem[];
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const evenRow = "md:grid-cols-[10fr_6fr]";
const oddRow = "md:grid-cols-[6fr_10fr]";

export function GalleryGrid({ items }: GalleryGridProps) {
  const rows = chunk(items, 2);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-1 gap-4 md:gap-6 ${
            rowIndex % 2 === 0 ? evenRow : oddRow
          }`}
        >
          {row.map((item, itemIndex) => (
            <div key={itemIndex} className="group relative w-full overflow-hidden bg-zinc-900">
              {item.kind === "comparison" ? (
                <ImageComparison
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="relative h-60 sm:h-80 md:h-115 w-full overflow-hidden cursor-ew-resize select-none touch-none"
                />
              ) : (
                <div className="relative h-60 sm:h-80 md:h-115 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />
                </div>
              )}

              {item.caption && (
                <>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
                  {/* Caption top-left */}
                  <div className="absolute top-0 left-0 px-4 py-4 pointer-events-none">
                    <span className="text-white text-sm md:text-base font-title font-bold uppercase tracking-wide drop-shadow-sm">
                      {item.caption}
                    </span>
                  </div>
                </>
              )}

              {/* Gold accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

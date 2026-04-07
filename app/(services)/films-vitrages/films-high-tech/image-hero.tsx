import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/images/films-high-tech/high-tech.gif"
        alt="Film high-tech Solar Gard posé sur vitrage – Solar Home 37"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}

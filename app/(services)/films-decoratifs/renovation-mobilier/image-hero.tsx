import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/images/renovation-mobilier/films-renovation-mobilier.jpg"
        alt="Rénovation de mobilier par Solar Home 37"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}

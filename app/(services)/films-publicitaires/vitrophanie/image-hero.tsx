import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/images/services-solar-home-vitrophanie.webp"
        alt="Rénovation de mobilier par Solar Home 37"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}

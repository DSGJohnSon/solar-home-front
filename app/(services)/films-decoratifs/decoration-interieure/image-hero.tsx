import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/images/decoration-interieure/films-decoration-interieure-escalier.webp"
        alt="Film décoratif pour rénovation de mobilier par Solar Home 37 à Tours"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}

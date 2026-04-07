import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/images/films-securite/before_after.webp"
        alt="Film de sécurité posé sur vitrage – Solar Home 37"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

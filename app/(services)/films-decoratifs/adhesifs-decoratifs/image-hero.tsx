import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/images/services-solar-home-decoratifs.webp"
        alt="Adhésifs décoratifs Cover Styl par Solar Home 37"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}

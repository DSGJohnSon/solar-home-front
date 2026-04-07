import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="https://media.istockphoto.com/id/2220292070/fr/photo/biblioth%C3%A8que-oosterdok-de-labo.jpg?s=612x612&w=0&k=20&c=C-5C6-BuY9-4i0eSh1-1NW_zR0ToleiGex2GeYQuFYY="
        alt="Logo et visuels sur vitrages par Solar Home 37"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}

import Image from "next/image";

export function ImageHero() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src="https://media.istockphoto.com/id/2194339814/fr/photo/gros-plan-dun-marquage-blanc-soldes-jusqu%C3%A0-50-%C3%A9crit-en-fran%C3%A7ais-sur-la-vitrine-dun.jpg?s=612x612&w=0&k=20&c=n8f6JLJRv4seO-WRm8pVqdxLRURR10nw3YpMwW_iolw="
        alt="Lettrages & Découpe vinyle par Solar Home 37"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}

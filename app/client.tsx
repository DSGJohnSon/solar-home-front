"use client";

import { HomeHero } from "@/components/sections/heros/home-hero";
import { HomeHeroProps } from "@/types/sections/heros/hero-home";
import { SimpleSection } from "@/components/sections/simple-section";
import { SimpleSectionProps } from "@/types/sections/simple-section";
import homeData from "@/datas/pages/home.json";

function HomePageClient() {
  return (
    <>
      <HomeHero {...(homeData.hero as HomeHeroProps)} />
      {(homeData as any).sections.map((section: any, idx: number) => (
        <SimpleSection key={idx} {...(section as SimpleSectionProps)} />
      ))}
    </>
  );
}

export default HomePageClient;

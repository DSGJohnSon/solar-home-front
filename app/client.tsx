"use client";

import { HomeHero } from "@/components/sections/heros/home-hero";
import { HomeHeroProps } from "@/types/sections/heros/hero-home";
import homeData from "@/datas/pages/home.json";

function HomePageClient() {
  return (
    <>
      <HomeHero {...(homeData.hero as HomeHeroProps)} />
    </>
  );
}

export default HomePageClient;

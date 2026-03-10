"use client";

import { HomeHero } from "@/components/sections/heros/home-hero/home-hero";
import { homeData } from "@/datas/pages/home";
import { FeatureSteps } from "@/components/sections/features-steps/features-steps";
import { MapFrance } from "@/components/sections/map-france/map-france";
import { SectionWhy } from "@/components/sections/section-why/section-why";
import Services from "@/components/sections/services/services";
import { ContactSection } from "@/components/sections/contact/contact";

function HomePageClient() {
  return (
    <>
      <HomeHero {...homeData.hero} />
      {homeData.sections.map((section: any, index: number) => {
        switch (section._type) {
          case "FeatureSteps":
            return (
              <FeatureSteps
                key={index}
                title={section.title}
                subtitle={section.subtitle}
                features={section.features}
              />
            );
          case "SectionWhy":
            return <SectionWhy key={index} />;
          case "Services":
            return <Services key={index} />;
          case "MapFrance":
            return <MapFrance key={index} {...section} />;
          case "Contact":
            return <ContactSection key={index} {...section} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export default HomePageClient;

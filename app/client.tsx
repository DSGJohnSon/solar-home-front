"use client";

import { HomeHero } from "@/components/sections/heros/home-hero/home-hero";
import { homeData } from "@/datas/pages/home";
import type { PageSection } from "@/datas/types";
import { FeatureSteps } from "@/components/sections/features-steps/features-steps";
import { MapFrance } from "@/components/sections/map-france/map-france";
import { SectionWhy } from "@/components/sections/section-why/section-why";
import Services from "@/components/sections/services/services";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

function HomePageClient() {
  return (
    <>
      <HomeHero {...homeData.hero} />
      {homeData.sections.map((section: PageSection, index: number) => {
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
            return (
              <ContactCTA
                key={index}
                title={section.title ?? "Un projet pour vos vitrages ?"}
                subtitle={section.subtitle ?? "Contactez Solar Home 37 pour un devis gratuit, sans engagement."}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export default HomePageClient;

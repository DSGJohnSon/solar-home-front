import { PageData } from "../types";

export const homeData: PageData = {
  hero: {
    title: "Films solaires & adhésifs décoratifs pour vitrages et intérieurs",
    subtitle:
      "Protégez vos espaces de la chaleur et des regards indiscrets avec nos solutions innovantes.",
    primaryAction: {
      label: "Demander un devis",
      href: "#",
      title: "Demander un devis",
    },
    secondaryAction: {
      label: "Découvrir nos services",
      href: "#services",
      title: "Découvrir nos services",
    },
    disclaimer: "*Devis gratuit et sans engagement",
    socialProof: {
      avatars: [
        "https://i.pravatar.cc/150?img=1",
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
        "https://i.pravatar.cc/150?img=4",
      ],
      text: "Déjà 100 chantiers réalisés",
    },
    services: [
      {
        image:
          "https://t3.ftcdn.net/jpg/17/83/66/82/240_F_1783668215_7q6zTFdkBtANhdKV7XgaRmoKTo5Wwwro.jpg",
        category: "VITRAGE",
        title: "Films Design & Intimité",
      },
      {
        image:
          "https://media.istockphoto.com/id/187771508/fr/photo/en-m%C3%A9tal-moderne-et-un-mur-de-verre-avec-des-reflets-de-couleur.jpg?s=612x612&w=0&k=20&c=qo0hOD_dIcl9epWVXNFy_bg1wENzsszRl1rL3RDKeZU=",
        category: "VITRAGE",
        title: "Films Solaires",
      },
      {
        image:
          "https://media.istockphoto.com/id/487726505/fr/photo/verre-bris%C3%A9.jpg?s=612x612&w=0&k=20&c=NyEGa-6Bw8SCswYc5RiWxG2Zvzti2NtKLK7F7eJOKAw=",
        category: "VITRAGE",
        title: "Films Sécurité",
      },
      {
        image:
          "https://www.kokokikol.com/wp-content/uploads/2022/09/Film-led-adhesif-garde-corps.png",
        category: "VITRAGE",
        title: "Films High-Tech",
      },
      {
        image:
          "https://media.istockphoto.com/id/106061466/fr/photo/homme-daffaires-debout-derri%C3%A8re-la-porte-vitr%C3%A9e.jpg?s=612x612&w=0&k=20&c=MMVE9shRswm93jIi08A_J9KaF7OnYSoztEVMC9e-RQA=",
        category: "DÉCORATIFS",
        title: "Adhésifs Décoratifs",
      },
      {
        image:
          "https://t3.ftcdn.net/jpg/05/06/04/30/240_F_506043079_O4xKNgxmeHLaDIdOYnARYBYfkckCXamv.jpg",
        category: "DÉCORATIFS",
        title: "Rénovation mobilier",
      },
      {
        image:
          "https://t3.ftcdn.net/jpg/18/57/27/38/240_F_1857273831_oJ08oGSxWe8Yo6WovISFQpsNjsuBXQch.jpg",
        category: "DÉCORATIFS",
        title: "Décoration intérieure",
      },
      {
        image:
          "https://media.istockphoto.com/id/2196693406/fr/photo/un-travailleur-applique-des-affiches-promotionnelles-pour-les-soldes-dhiver-dans-la-vitrine.jpg?s=612x612&w=0&k=20&c=g-Sd1bOqMRGo8l_EXPRvepbZXYYQsEO0T29rMuyPg0M=",
        category: "STICKAGE PUBLICITAIRE",
        title: "Vitrophanie",
      },
      {
        image:
          "https://media.istockphoto.com/id/2194339814/fr/photo/gros-plan-dun-marquage-blanc-soldes-jusqu%C3%A0-50-%C3%A9crit-en-fran%C3%A7ais-sur-la-vitrine-dun.jpg?s=612x612&w=0&k=20&c=n8f6JLJRv4seO-WRm8pVqdxLRURR10nw3YpMwW_iolw=",
        category: "STICKAGE PUBLICITAIRE",
        title: "Lettrages & Découpe vinyle",
      },
      {
        image:
          "https://media.istockphoto.com/id/2220292070/fr/photo/biblioth%C3%A8que-oosterdok-de-labo.jpg?s=612x612&w=0&k=20&c=C-5C6-BuY9-4i0eSh1-1NW_zR0ToleiGex2GeYQuFYY=",
        category: "STICKAGE PUBLICITAIRE",
        title: "Logos & Visuels sur Vitrages",
      },
    ],
  },
  sections: [
    {
      _type: "SectionWhy",
    },
    {
      _type: "Services",
    },
    {
      _type: "FeatureSteps",
      title: "Une méthode simple & rapide",
      subtitle:
        "Nous intervenons efficacement et sans invasivité sur vos espaces",
      features: [
        {
          step: "Step 1",
          title: "Diagnostic de vos surfaces et de vos besoins",
          content:
            "Chaque projet commence par une analyse précise de vos vitrages ou surfaces intérieures. Nous identifions les contraintes : chaleur, vis-à-vis, sécurité ou rénovation esthétique.",
          image: "/images/feature-steps/step1.webp",
        },
        {
          step: "Step 2",
          title: "Sélection du film adhésif le plus adapté",
          content:
            "Nous vous orientons vers la solution la plus pertinente : film solaire, sécurité, décoratif ou vitrophanie professionnelle, selon l’usage de vos espaces.",
          image: "/images/feature-steps/step2.webp",
        },
        {
          step: "Step 3",
          title: "Installation précise et sans travaux lourds",
          content:
            "La pose est réalisée avec méthode pour garantir un rendu propre, durable et sans défaut, sans remplacement de vitrage ni travaux invasifs.",
          image: "/images/feature-steps/step3.webp",
        },
        {
          step: "Step 4",
          title: "Un espace transformé immédiatement",
          content:
            "Confort thermique amélioré, intimité préservée ou rénovation esthétique : vos espaces gagnent en performance et en design dès la pose.",
          image: "/images/feature-steps/step4.png",
        },
      ],
    },
    {
      _type: "MapFrance",
      title: "Solar Home™ intervient sur vos chantiers",
      description:
        "Nous accompagnons particuliers, entreprises et commerces dans leurs projets d’amélioration du confort, de la sécurité et de l’esthétique des espaces.",
      originX: 38,
      originY: 39.08,
      showCoordinates: false,
      cities: [
        {
          name: "Tours (37)",
          dept: "Indre-et-Loire",
          x: 37,
          y: 40,
          positionName: "left",
        },
        {
          name: "Blois (41)",
          dept: "Loir-et-Cher",
          x: 41.78,
          y: 38.59,
          positionName: "right",
        },
        {
          name: "Le Mans (72)",
          dept: "Sarthe",
          x: 33.71,
          y: 34.67,
          positionName: "top",
        },
        {
          name: "Angers (49)",
          dept: "Maine-et-Loire",
          x: 28.94,
          y: 39.57,
          positionName: "top",
        },
        {
          name: "Poitiers (86)",
          dept: "Vienne",
          x: 34.57,
          y: 47.15,
          positionName: "left",
        },
        {
          name: "Châteauroux (36)",
          dept: "Indre",
          x: 43.13,
          y: 45.92,
          positionName: "bottom",
        },
      ],
      primaryAction: {
        label: "Demander un devis",
        href: "#",
        title: "Demander un devis",
      },
      secondaryAction: {
        label: "Nos réalisations",
        href: "#",
        title: "Nos réalisations",
      },
    },
    {
      _type: "Contact",
      title: "Prêt à transformer vos vitrages ?",
      subtitle:
        "Contactez-nous pour une étude gratuite de votre projet. Notre équipe vous répond sous 24h.",
    },
  ],
};

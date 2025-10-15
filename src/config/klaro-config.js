"use client";

const klaroConfig = {
  storageKey: "bildungsnest-cookie-consent",
  cookieName: "klaro",
  cookieExpiresAfterDays: 365,
  elementID: "klaro",

  styling: {
    theme: ["light", "bottom", "wide"],
  },

  lang: "de",

  translations: {
    de: {
      consentModal: {
        title: "Cookie-Einstellungen",
        description:
          "Wir nutzen Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. Bitte wählen Sie, welche Cookies Sie zulassen möchten.",
      },
      consentNotice: {
        title: "🍪 Wir verwenden Cookies",
        description:
          "Mit Ihrer Einwilligung verwenden wir Cookies zur Verbesserung der Nutzererfahrung auf unserer Bildungsnest-Website.",
        learnMore: "Anpassen",
      },
      purposes: {
        analytics: "Analyse & Statistik",
        functional: "Funktional",
        marketing: "Marketing",
      },
      ok: "Alle akzeptieren",
      save: "Auswahl speichern",
      decline: "Nur notwendige",
      close: "Schließen",
      privacyPolicy: {
        name: "Datenschutzerklärung",
        text: "Weitere Informationen finden Sie in unserer {privacyPolicy}.",
      },
    },
  },

  services: [
    {
      name: "necessary",
      title: "Notwendige Cookies",
      description:
        "Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich.",
      purposes: ["functional"],
      required: true,
      optOut: false,
      onlyOnce: true,
    },
    // Beispiel für weitere Services:
    // {
    //   name: 'google-analytics',
    //   title: 'Google Analytics',
    //   description: 'Hilft uns zu verstehen, wie Besucher unsere Website nutzen.',
    //   purposes: ['analytics'],
    //   required: false,
    //   cookies: [
    //     /^_ga(_.*)?$/,
    //   ],
    // },
  ],
};

export default klaroConfig;

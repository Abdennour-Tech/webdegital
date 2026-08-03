import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import statique de la locale par défaut (FR) — les autres sont chargées en lazy
import fr from "./locales/fr.json";

const updateDirAndLang = (lng) => {
  if (typeof document !== "undefined") {
    const currentLng = lng ? lng.split("-")[0] : "fr";
    const dir = currentLng === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLng;
  }
};

async function loadLocale(lng) {
  switch (lng) {
    case "en":
      return (await import("./locales/en.json")).default;
    case "ar":
      return (await import("./locales/ar.json")).default;
    default:
      return fr;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
    },
    fallbackLng: "fr",
    supportedLngs: ["fr", "en", "ar"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Charger la locale active si ce n'est pas FR
const activeLng = i18n.language?.split("-")[0];
if (activeLng && activeLng !== "fr" && ["en", "ar"].includes(activeLng)) {
  loadLocale(activeLng).then((resources) => {
    i18n.addResourceBundle(activeLng, "translation", resources, true, true);
    i18n.changeLanguage(activeLng);
  });
}

// Charger les locales supplémentaires au changement de langue
i18n.on("languageChanged", async (lng) => {
  updateDirAndLang(lng);
  const code = lng.split("-")[0];
  if (code !== "fr" && !i18n.hasResourceBundle(code, "translation")) {
    const resources = await loadLocale(code);
    i18n.addResourceBundle(code, "translation", resources, true, true);
  }
});

// Précharger les autres locales en idle — sans bloquer le rendu initial
if (typeof window !== "undefined") {
  const preloadOthers = () => {
    ["en", "ar"].forEach(async (lng) => {
      if (!i18n.hasResourceBundle(lng, "translation")) {
        const resources = await loadLocale(lng);
        i18n.addResourceBundle(lng, "translation", resources, true, true);
      }
    });
  };
  if ("requestIdleCallback" in window) {
    requestIdleCallback(preloadOthers, { timeout: 4000 });
  } else {
    setTimeout(preloadOthers, 3000);
  }
}

updateDirAndLang(i18n.language);

export default i18n;

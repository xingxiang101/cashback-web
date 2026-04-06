import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import zhHant from "./locales/zh-Hant.json";

/** Current key for saved language preference */
export const STORAGE_KEY = "koox-web-lang";
const LEGACY_STORAGE_KEY = "cashback-web-lang";

export type WebLang = "en" | "zh-Hant";

function getInitialLng(): WebLang {
  try {
    const s =
      localStorage.getItem(STORAGE_KEY) ??
      localStorage.getItem(LEGACY_STORAGE_KEY);
    if (s === "en" || s === "zh-Hant") return s;
  } catch {
    /* private mode */
  }
  const nav = (navigator.language ?? "en").toLowerCase();
  if (!nav.startsWith("zh")) return "en";
  if (
    nav === "zh-tw" ||
    nav === "zh-hk" ||
    nav === "zh-mo" ||
    nav.includes("hant")
  ) {
    return "zh-Hant";
  }
  return "en";
}

function applyDocumentLang(lng: string) {
  const lang = lng === "zh-Hant" ? "zh-Hant" : "en";
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle("lang-zh-hant", lng === "zh-Hant");
}

export function setWebLanguage(lng: WebLang) {
  void i18n.changeLanguage(lng);
  try {
    localStorage.setItem(STORAGE_KEY, lng);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    /* noop */
  }
  applyDocumentLang(lng);
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    "zh-Hant": { translation: zhHant },
  },
  lng: getInitialLng(),
  fallbackLng: "en",
  supportedLngs: ["en", "zh-Hant"],
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

applyDocumentLang(i18n.language);

export default i18n;

import { useTranslation } from "react-i18next";
import { setWebLanguage, type WebLang } from "../i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { t, i18n } = useTranslation();
  const resolved = i18n.resolvedLanguage ?? i18n.language;

  const isActive = (lng: WebLang) =>
    lng === "en"
      ? resolved === "en" || resolved.startsWith("en")
      : resolved === "zh-Hant" || resolved.startsWith("zh-Hant");

  const pill = (lng: WebLang, label: string) => (
    <button
      key={lng}
      type="button"
      onClick={() => setWebLanguage(lng)}
      className={`rounded-full px-2.5 py-1.5 transition-colors sm:px-3 ${
        isActive(lng)
          ? "bg-primary text-on-primary shadow-sm"
          : "text-on-surface-variant hover:text-primary"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label={t("a11y.language")}
      className={`flex rounded-full border border-outline-variant/25 bg-surface-container-low/90 p-0.5 text-xs font-bold shadow-sm ${className}`}
    >
      {pill("en", "EN")}
      {pill("zh-Hant", "繁")}
    </div>
  );
}

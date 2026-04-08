/**
 * Hero store CTAs — matches stitch_product_detail design (dark pills + icon + two-line label).
 */
import { useTranslation } from "react-i18next";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../storeLinks";

const BTN =
  "flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-inverse-surface px-8 py-3.5 font-headline text-base font-bold text-white shadow-lg transition-transform active:scale-[0.98] hover:opacity-95";

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/** Google Play mark — same asset URL as stitch design `code.html`. */
function GooglePlayGlyph({ className }: { className?: string }) {
  return (
    <img
      alt=""
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnzCYymja9GnIqt4Ox8gQqWkN75TU7FxYErBJN32xEH9MgPvp4mEz4aVUAVdIwDSD16GkmeR0iTyBLlQZJBFxLgBZHR88l1B9U5dQNKN6AJP_Y5iAw8iJEZlARqfmgZvYjDLnhlUv97VPoNNsKI20vv9RPKbii7IxrMImp-eB4ZK0fb6-mT9-wKzl3Q-IUumA1KqxBQqi7bhIjKdPvtjXoZLm1f5AC78ZqXVG-aJRQaDkoFZqLKEFbuI_uDArJU8Bm-sRQx57SqgW"
      className={className}
      width={24}
      height={24}
      decoding="async"
    />
  );
}

export function StoreDownloadButtons() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={BTN}
        aria-label={t("a11y.appStoreBadge")}
      >
        <AppleGlyph className="h-6 w-6 shrink-0" />
        <div className="text-left">
          <p className="mb-0.5 text-[8px] font-bold uppercase leading-none opacity-60">
            {t("hero.storeAppLine1")}
          </p>
          <p className="text-base font-bold leading-none">{t("hero.storeAppLine2")}</p>
        </div>
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={BTN}
        aria-label={t("a11y.googlePlayBadge")}
      >
        <GooglePlayGlyph className="h-6 w-6 shrink-0" />
        <div className="text-left">
          <p className="mb-0.5 text-[8px] font-bold uppercase leading-none opacity-60">
            {t("hero.storeGoogleLine1")}
          </p>
          <p className="text-base font-bold leading-none">{t("hero.storeGoogleLine2")}</p>
        </div>
      </a>
    </div>
  );
}

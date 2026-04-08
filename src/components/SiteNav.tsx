import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageToggle } from "./LanguageToggle";

type NavVariant = "product" | "merchant";

export function SiteNav({ variant }: { variant: NavVariant }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isProduct = location.pathname === "/";
  const isMerchant = location.pathname === "/merchants";

  const productLinkClass = (active: boolean) =>
    active
      ? "border-b-2 border-primary pb-1 font-bold text-primary dark:text-violet-400"
      : "font-medium text-slate-600 transition-colors duration-300 hover:text-primary dark:text-slate-400";

  const merchantLinkClass = (active: boolean) =>
    active
      ? "border-b-2 border-primary pb-1 font-bold text-primary dark:text-violet-400"
      : "font-medium text-slate-600 transition-colors duration-300 hover:text-primary dark:text-slate-400";

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full bg-surface/80 shadow-ambient backdrop-blur-xl dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link
          to="/"
          className="font-headline text-2xl font-black tracking-tighter text-violet-700 dark:text-violet-400"
          onClick={() => setMenuOpen(false)}
        >
          Koox
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <Link className={productLinkClass(isProduct)} to="/#product-detail">
            {t("nav.productDetail")}
          </Link>
          <Link className={merchantLinkClass(isMerchant)} to="/merchants">
            {t("nav.forMerchants")}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle className="hidden sm:flex" />
          {variant === "product" ? (
            <button
              type="button"
              className="editorial-gradient hidden rounded-full px-8 py-3 font-headline text-sm font-bold text-on-primary shadow-ambient transition-transform active:scale-95 sm:inline-flex"
              onClick={() =>
                document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.download")}
            </button>
          ) : (
            <Link
              to="/#download"
              className="editorial-gradient hidden rounded-full px-8 py-3 font-headline text-sm font-bold text-on-primary shadow-ambient transition-transform active:scale-95 sm:inline-flex"
            >
              {t("nav.download")}
            </Link>
          )}
          <button
            type="button"
            className="inline-flex rounded-full p-2 text-violet-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-violet-300 dark:hover:bg-white/10 dark:hover:text-white md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-outline-variant/15 bg-surface/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mb-4 flex justify-center">
            <LanguageToggle />
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="/#product-detail"
              className="font-medium text-on-surface"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.productDetail")}
            </Link>
            <Link
              to="/merchants"
              className="font-medium text-on-surface"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.forMerchants")}
            </Link>
            {variant === "product" ? (
              <button
                type="button"
                className="editorial-gradient w-full rounded-full py-3 font-headline font-bold text-on-primary"
                onClick={() => {
                  setMenuOpen(false);
                  document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("nav.download")}
              </button>
            ) : (
              <Link
                to="/#download"
                className="editorial-gradient block w-full rounded-full py-3 text-center font-headline font-bold text-on-primary"
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.download")}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

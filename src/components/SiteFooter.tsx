import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61573303800942",
    labelKey: "a11y.socialFacebook",
    icon: "facebook" as const,
  },
  {
    href: "https://www.instagram.com/koox_io/",
    labelKey: "a11y.socialInstagram",
    icon: "instagram" as const,
  },
  {
    href: "https://x.com/koox2012",
    labelKey: "a11y.socialX",
    icon: "x" as const,
  },
] as const;

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer
      id="site-footer"
      className="mt-20 w-full rounded-t-[48px] bg-surface-container-low px-6 py-16 sm:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <div className="mb-4 font-headline text-xl font-bold text-violet-700">Koox</div>
          <p className="font-body text-sm leading-relaxed text-slate-500">
            © {new Date().getFullYear()} Koox. {t("footer.rights")}
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8">
          <a
            className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-emerald-400"
            href="#"
          >
            {t("footer.privacy")}
          </a>
          <a
            className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-emerald-400"
            href="#"
          >
            {t("footer.terms")}
          </a>
          <a
            className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-emerald-400"
            href="#"
          >
            {t("footer.cookie")}
          </a>
        </nav>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <LanguageToggle />
          <div className="flex items-center gap-2 sm:gap-3">
            {SOCIAL_LINKS.map(({ href, labelKey, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-slate-600 transition-colors hover:text-primary dark:text-slate-400"
                aria-label={t(labelKey)}
              >
                {icon === "facebook" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                )}
                {icon === "instagram" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                )}
                {icon === "x" && (
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

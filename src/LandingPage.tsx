import { useEffect, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./components/LanguageToggle";

const SHOWCASE_WEBP = "/showcase-smart-planner.webp";
const SHOWCASE_JPG = "/showcase-smart-planner.jpg";
const SHOWCASE_W = 265;
const SHOWCASE_H = 1024;

/** AI Concierge / 比价: three phone mockups */
const AI_COMPARISON = [
  {
    webp: "/features/ai-comparison-1.webp",
    jpg: "/features/ai-comparison-1.jpg",
    w: 341,
    h: 1024,
  },
  {
    webp: "/features/ai-comparison-2.webp",
    jpg: "/features/ai-comparison-2.jpg",
    w: 266,
    h: 1024,
  },
  {
    webp: "/features/ai-comparison-3.webp",
    jpg: "/features/ai-comparison-3.jpg",
    w: 160,
    h: 1024,
  },
] as const;

const AI_COMPARISON_ALTS = [
  "features.aiConciergeAlt1",
  "features.aiConciergeAlt2",
  "features.aiConciergeAlt3",
] as const;

export function LandingPage() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.description"));
  }, [t, i18n.language]);

  return (
    <>
      <nav className="glass-nav fixed top-0 z-50 w-full bg-surface/80 shadow-ambient backdrop-blur-xl dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <a href="#" className="font-headline text-2xl font-black tracking-tighter text-violet-700 dark:text-violet-400">
            Koox
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              className="font-medium text-slate-600 transition-colors duration-300 hover:text-violet-500 dark:text-slate-400"
              href="#features"
            >
              {t("nav.features")}
            </a>
            <a
              className="font-medium text-slate-600 transition-colors duration-300 hover:text-violet-500 dark:text-slate-400"
              href="#how-it-works"
            >
              {t("nav.howItWorks")}
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle className="hidden sm:flex" />
            <button
              type="button"
              className="editorial-gradient hidden rounded-full px-8 py-3 font-headline text-sm font-bold text-on-primary shadow-ambient transition-transform active:scale-95 sm:inline-flex"
              onClick={() =>
                document
                  .getElementById("download")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.download")}
            </button>
            <button
              type="button"
              className="inline-flex rounded-full p-2 text-on-surface md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="material-symbols-outlined">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-outline-variant/15 bg-surface/95 px-4 py-4 backdrop-blur-xl md:hidden">
            <div className="mb-4 flex justify-center">
              <LanguageToggle />
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="font-medium text-on-surface"
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.features")}
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-on-surface"
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.howItWorks")}
              </a>
              <button
                type="button"
                className="editorial-gradient w-full rounded-full py-3 font-headline font-bold text-on-primary"
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById("download")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("nav.download")}
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="overflow-x-hidden pt-24 sm:pt-28">
        <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
            <div className="z-10 flex-1 text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-tertiary-container/30 px-4 py-1.5 text-on-tertiary-container">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                <span className="font-label text-sm font-bold uppercase tracking-wider">
                  {t("hero.badge")}
                </span>
              </div>
              <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface md:text-6xl lg:text-7xl">
                {t("hero.titleBefore")}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl lg:mx-0">
                {t("hero.subtitle")}
              </p>
              <div
                id="download"
                className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-full bg-on-surface px-8 py-4 font-bold text-surface shadow-xl transition-all hover:shadow-primary/20 active:scale-95"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    ios
                  </span>
                  {t("stores.appStore")}
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-full bg-surface-container-highest px-8 py-4 font-bold text-on-secondary-container transition-all active:scale-95"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  {t("stores.googlePlay")}
                </button>
              </div>
            </div>

            <div className="relative flex w-full max-w-[min(100%,265px)] flex-1 justify-center lg:max-w-none lg:justify-end">
              <div className="absolute inset-0 scale-150 rounded-full bg-primary/5 blur-[120px]" />
              <div className="glass-card relative w-full max-w-[265px] rotate-3 overflow-hidden rounded-[2.5rem] p-3 shadow-2xl transition-transform duration-700 hover:rotate-0 sm:rounded-[3rem] sm:p-4">
                <div className="max-h-[min(68vh,520px)] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
                  <picture>
                    <source srcSet={SHOWCASE_WEBP} type="image/webp" />
                    <img
                      src={SHOWCASE_JPG}
                      alt={t("hero.imgAlt")}
                      className="h-full w-full object-cover object-top"
                      width={SHOWCASE_W}
                      height={SHOWCASE_H}
                      decoding="async"
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>
              <div className="glass-card absolute left-3 top-1/4 flex animate-bounce items-center gap-3 rounded-full px-4 py-3 shadow-xl sm:-left-6 sm:px-6 sm:py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed">
                  <span className="material-symbols-outlined text-on-tertiary-fixed">
                    payments
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                    {t("hero.cashbackReceived")}
                  </p>
                  <p className="font-headline text-base font-bold sm:text-lg">
                    {t("hero.cashbackAmount")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="bg-surface-container-low py-24 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-16 text-center sm:mb-20 lg:mb-24">
              <h2 className="mb-6 font-headline text-4xl font-black text-on-surface md:text-5xl">
                {t("steps.heading")}
              </h2>
              <div className="mx-auto h-1.5 w-24 rounded-full bg-primary" />
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
              <StepWithArrow
                step={
                  <StepCard
                    icon="restaurant_menu"
                    title={t("steps.step1.title")}
                    body={t("steps.step1.body")}
                    iconBg="bg-primary-container"
                    iconColor="text-primary"
                    rotate="rotate-3 group-hover:rotate-6"
              />
                }
              />
              <StepWithArrow
                step={
                  <StepCard
                    icon="shopping_cart"
                    title={t("steps.step2.title")}
                    body={t("steps.step2.body")}
                    iconBg="bg-tertiary-container"
                    iconColor="text-on-tertiary-container"
                    rotate="-rotate-3 group-hover:-rotate-6"
                  />
                }
              />
              <StepWithArrow
                step={
                  <StepCard
                    icon="stars"
                    title={t("steps.step3.title")}
                    body={t("steps.step3.body")}
                    iconBg="bg-secondary-container"
                    iconColor="text-secondary"
                    rotate="rotate-6 group-hover:rotate-12"
                    filled
                  />
                }
              />
              <StepWithArrow
                step={
                  <StepCard
                    icon="verified"
                    title={t("steps.step4.title")}
                    body={t("steps.step4.body")}
                    iconBg="bg-primary"
                    iconColor="text-on-primary"
                    rotate="-rotate-6 group-hover:-rotate-12"
                  />
                }
                last
              />
            </div>
          </div>
        </section>

        <section id="features" className="px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[2rem] bg-primary p-8 sm:min-h-[500px] sm:rounded-[3rem] sm:p-12">
                <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                    <span className="material-symbols-outlined text-3xl text-white">
                      smart_toy
                    </span>
                  </div>
                  <h3 className="mb-6 font-headline text-4xl font-black leading-tight text-white">
                    {t("features.aiTitle")}
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-white/80">
                    {t("features.aiBody")}
                  </p>
                </div>
                <div className="relative mt-8 flex flex-col gap-3 transition-transform duration-500 group-hover:scale-[1.02] sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-2">
                  {AI_COMPARISON.map((asset, i) => (
                    <picture
                      key={asset.jpg}
                      className="flex min-w-0 flex-1 justify-center sm:max-w-[34%] sm:flex-1"
                    >
                      <source srcSet={asset.webp} type="image/webp" />
                      <img
                        src={asset.jpg}
                        alt={t(AI_COMPARISON_ALTS[i])}
                        className="mx-auto h-auto max-h-[min(420px,52vh)] w-auto max-w-full rounded-2xl object-contain object-top shadow-xl"
                        width={asset.w}
                        height={asset.h}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  ))}
                </div>
              </div>

              <div className="group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[2rem] bg-surface-container-highest p-8 sm:rounded-[3rem] sm:p-12">
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      calendar_today
                    </span>
                  </div>
                  <h3 className="mb-6 font-headline text-4xl font-black leading-tight text-on-surface">
                    {t("features.plannerTitle")}
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
                    {t("features.plannerBody")}
                  </p>
                </div>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-4">
                  <div className="flex-1 rounded-3xl border border-primary/5 bg-surface p-6 shadow-sm">
                    <p className="mb-2 text-xs font-bold uppercase text-primary">
                      {t("features.cardTonight")}
                    </p>
                    <p className="font-bold text-on-surface">{t("features.restaurant1")}</p>
                    <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-tertiary-container px-3 py-1">
                      <span className="text-xs font-black text-on-tertiary-container">
                        {t("features.cashback15")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xl border border-primary/5 bg-surface p-6 shadow-sm">
                    <p className="mb-2 text-xs font-bold uppercase text-slate-400">
                      {t("features.cardTomorrow")}
                    </p>
                    <p className="font-bold text-on-surface">{t("features.restaurant2")}</p>
                    <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-surface-container px-3 py-1">
                      <span className="text-xs font-black text-on-surface-variant">
                        {t("features.cashback10")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 w-full rounded-t-[48px] bg-surface-container-low px-6 py-16 sm:px-12">
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
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container transition-colors hover:text-primary"
                aria-label={t("a11y.share")}
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function StepWithArrow({ step, last }: { step: ReactNode; last?: boolean }) {
  return (
    <div className="relative">
      {step}
      {!last && (
        <div
          className="pointer-events-none absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 lg:block"
          aria-hidden
        >
          <span className="material-symbols-outlined text-3xl text-outline-variant">east</span>
        </div>
      )}
    </div>
  );
}

function StepCard({
  icon,
  title,
  body,
  iconBg,
  iconColor,
  rotate,
  filled,
}: {
  icon: string;
  title: string;
  body: string;
  iconBg: string;
  iconColor: string;
  rotate: string;
  filled?: boolean;
}) {
  return (
    <div className="group relative min-w-0">
      <div className="h-full rounded-[2.5rem] border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm transition-all duration-500 hover:shadow-2xl">
        <div
          className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg} ${rotate}`}
        >
          <span
            className={`material-symbols-outlined text-3xl ${iconColor}`}
            style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {icon}
          </span>
        </div>
        <h3 className="mb-4 font-headline text-xl font-bold">{title}</h3>
        <p className="text-sm leading-relaxed text-on-surface-variant">{body}</p>
      </div>
    </div>
  );
}

import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import productHeroHome from "./assets/product-hero-home.png";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { StoreDownloadButtons } from "./components/StoreDownloadButtons";
import { applyWebSeo } from "./seo";

const HERO_SCREENSHOT_W = 473;
const HERO_SCREENSHOT_H = 1024;

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

/** Brand marks — `public/features/` */
const KEETA_LOGO = "/features/keeta.png";
const FOODPANDA_LOGO = "/features/foodpanda.png";

export function ProductPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const locale = i18n.language === "zh-Hant" ? "zh-Hant" : "en";
    applyWebSeo({
      title: t("meta.title"),
      description: t("meta.description"),
      locale,
      path: "/product-detail",
    });
  }, [t, i18n.language, location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/product-detail") return;
    const target = document.getElementById("product-detail");
    if (!target) return;
    // Defer until layout settles to avoid jittery jump.
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname]);

  return (
    <>
      <SiteNav variant="product" />

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
              <div id="download">
                <StoreDownloadButtons />
              </div>
            </div>

            <div className="relative flex w-full max-w-[min(100%,300px)] flex-1 justify-center lg:max-w-none lg:justify-end">
              <div className="absolute inset-0 scale-150 rounded-full bg-primary/5 blur-[120px]" />
              <div className="glass-card relative w-full max-w-[300px] rotate-3 overflow-hidden rounded-[2.5rem] px-0.5 py-3 shadow-2xl transition-transform duration-700 hover:rotate-0 sm:rounded-[3rem] sm:px-1 sm:py-4">
                <div className="max-h-[min(68vh,520px)] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
                  <img
                    src={productHeroHome}
                    alt={t("hero.imgAlt")}
                    className="h-auto w-full max-h-[min(68vh,520px)] origin-top scale-x-[1.14] scale-y-100 object-contain object-top sm:scale-x-[1.1]"
                    width={HERO_SCREENSHOT_W}
                    height={HERO_SCREENSHOT_H}
                    decoding="async"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="glass-card absolute -right-2 top-[22%] z-20 flex animate-bounce items-center gap-3 rounded-full px-4 py-3 shadow-xl sm:-right-10 sm:px-6 sm:py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed">
                  <span className="material-symbols-outlined text-on-tertiary-fixed">payments</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                    {t("hero.cashbackReceived")}
                  </p>
                  <p className="font-headline text-base font-bold sm:text-lg">{t("hero.cashbackAmount")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="product-detail" className="scroll-mt-24">
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
                    icon="verified"
                    title={t("steps.step3.title")}
                    body={t("steps.step3.body")}
                    iconBg="bg-primary"
                    iconColor="text-on-primary"
                    rotate="rotate-6 group-hover:rotate-12"
                  />
                }
              />
              <StepWithArrow
                step={
                  <StepCard
                    icon="stars"
                    title={t("steps.step4.title")}
                    body={t("steps.step4.body")}
                    iconBg="bg-secondary-container"
                    iconColor="text-secondary"
                    rotate="-rotate-6 group-hover:-rotate-12"
                    filled
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
                    <span className="material-symbols-outlined text-3xl text-white">smart_toy</span>
                  </div>
                  <h3 className="mb-6 font-headline text-4xl font-black leading-tight text-white">
                    {t("features.aiTitle")}
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-white/80">{t("features.aiBody")}</p>
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

              <div className="flex flex-col gap-8">
                <div className="group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[2rem] bg-surface-container-highest p-8 sm:rounded-[3rem] sm:p-12">
                  <div>
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <span className="material-symbols-outlined text-3xl text-primary">calendar_today</span>
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
                      <p className="mb-2 text-xs font-bold uppercase text-primary">{t("features.cardTonight")}</p>
                      <p className="font-bold text-on-surface">{t("features.restaurant1")}</p>
                      <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-tertiary-container px-3 py-1">
                        <span className="text-xs font-black text-on-tertiary-container">
                          {t("features.cashback15")}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 rounded-3xl border border-primary/5 bg-surface p-6 shadow-sm">
                      <p className="mb-2 text-xs font-bold uppercase text-slate-400">{t("features.cardTomorrow")}</p>
                      <p className="font-bold text-on-surface">{t("features.restaurant2")}</p>
                      <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-surface-container px-3 py-1">
                        <span className="text-xs font-black text-on-surface-variant">
                          {t("features.cashback10")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-[2rem] bg-surface-container-low px-6 py-8 text-center shadow-ambient sm:px-8">
                  <h4 className="font-headline text-2xl font-bold tracking-tight text-on-surface">
                    {t("features.unifiedRewardsTitle")}
                  </h4>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-on-surface-variant sm:max-w-none sm:text-base">
                    {t("features.unifiedRewardsBody")}
                  </p>
                  <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-4 sm:max-w-none sm:gap-5">
                    <div className="flex flex-col items-center rounded-3xl bg-white px-4 py-6 shadow-sm ring-1 ring-outline-variant/10">
                      <div className="mb-4 flex h-20 w-[5.5rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-sm ring-1 ring-outline-variant/10">
                        <img
                          src={KEETA_LOGO}
                          alt={t("features.unifiedKeetaAlt")}
                          className="max-h-full max-w-full object-contain object-center"
                          width={88}
                          height={80}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="font-headline text-base font-bold text-on-surface">
                        {t("features.unifiedKeetaAlt")}
                      </span>
                    </div>
                    <div className="flex flex-col items-center rounded-3xl bg-white px-4 py-6 shadow-sm ring-1 ring-outline-variant/10">
                      <div className="mb-4 h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-sm ring-1 ring-outline-variant/10">
                        <img
                          src={FOODPANDA_LOGO}
                          alt={t("features.unifiedFoodpandaAlt")}
                          className="h-full w-full object-cover object-center"
                          width={80}
                          height={80}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="font-headline text-base font-bold text-on-surface">
                        {t("features.unifiedFoodpandaAlt")}
                      </span>
                    </div>
                  </div>
                  <p className="mt-6 text-sm italic text-on-surface-variant/90">
                    {t("features.unifiedRewardsTagline")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>

        <SiteFooter />
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

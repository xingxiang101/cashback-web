import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { applyWebSeo } from "./seo";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJhxuMwc6-zaNb24F87pgaGhklb7QDbX55RrQVseKvBjwPnRASlX7w6oIrFtLkoxbYps6_WizllmwCOXzmkRU023WHP1fPElxOUeXUr3hVwP8xr9x5Ef2cqmIFcLA_lkL6p3DM8bim9Jt6yBzphZTLQpMEmqmpEX5WQsxp4wwddE4690VKXZjtTQe4cAanmouOBpRFf78ZZ4Nyd0tyjlJhCnDU-fSJCgR-6kI1qYFkfILLLseBCIb8XyHicuimlf-Zsjh00LfB_H3H";

const BENEFIT_DASHBOARD_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8LYmCaxodGPcEWZbjSJQ-FCOMpvPxv6Duh4lkV-7mTH78yWzXUFj43ekvoLYjQEH7lq_ih5JbPtTN4tiIkLtUdvEMXCamX8gH4yzkRP-UZhjG7LaW8MSUrU0ORXYKbbJY5YpXnp3eBV3XNjp8-FBhzVSzFEJY_gVCPDnR1nwsc3OXOM2-OKRtE382Sd9026f50XJd0jq2w92iRE0qmoIZS2CC9EVAUnaS-rfAb53VAi7DSXOa7hYV4dlLKzOt2JjwbFsRdMbJuSt3";

const AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZKe6gPaBO3UQ0ZecL1jbl1MxASW8jhFpaAeipkiIeyjqILxRRXS7RZrle2Vi7gubJDg9KbPInjbJEjyuCxCy9oFudIBZ_xXzeMGUbVZNIVH9CkOyyC2JzauVsGlSlVqF7rjMfuff0X3woJ2K6eYi2ryJpwQVyGVi6HxGyCg5LUg6C2CPvSu1EhUE0CjTvC8WPabVmOB5JABk2sbUaL6_PT3IjyjG9tba6NrBvVPHGCtBpiV-1yA7TeLTmS56uLeA8LZObk0hUYovP",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOtjSpmnzM8H0RPrwRim3pHReKl17ecz092PrWoSsRy3A64Os4YNm5WY6BeaUSjGjw5lWY2uLoLDJyBv12lHloOEEk1wGbssL9QZ-TQYbpMTT0EWzdrMX_U-3F5JrAh6LXrM6HihTtICmlmZsuhOnQ-GRNhGnanDvEN8cy_TX_PY8MiXlXBl6G2aQkaMKI1b52g1PoCHYDq4dILV_29x-H6Lf_zpcIvznL5tqrY2Y1QnSRozkAvX2RkwHxXp0y2YYuKpHDbfphsLcI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvCln_pRuKcBjBG_5pPTUwH1W9TyD459POnDMtYYmS6CXofV0xnycp1fV2IqUrjHBagYMFbUYQsPk24jASkBx8XvwcYB5ihO3-iVRWfj6ENZ0PXkYeR0aW-jcmF2Jb98FclC94HHAjQHt5LJUVJpANglLmX_tNdzyFMXY7hI8I35gjPTLEAfIXGSrt50xmcYR34UWgHJZaRNxO4K3nCzeMsRFtD4jRknMUDLvNtaQLPHhbq-TM1dKENBqBlzNfeOfhwBBwCDBFah0M",
] as const;

export function MerchantPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const locale = i18n.language === "zh-Hant" ? "zh-Hant" : "en";
    applyWebSeo({
      title: t("meta.merchantTitle"),
      description: t("meta.merchantDescription"),
      locale,
      path: "/merchants",
    });
  }, [t, i18n.language]);

  return (
    <>
      <SiteNav variant="merchant" />

      <main className="overflow-x-hidden pt-20 sm:pt-24">
        <section className="relative flex min-h-[min(100vh,920px)] items-center overflow-hidden px-4 pb-16 pt-8 sm:px-8 lg:min-h-[870px]">
          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-1.5 text-sm font-bold tracking-wide text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary-fixed" />
                {t("merchantPage.heroBadge").toUpperCase()}
              </div>
              <h1 className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface lg:text-6xl xl:text-7xl">
                {t("merchantPage.heroTitleBefore")}
                <span className="text-primary italic">{t("merchantPage.heroTitleHighlight")}</span>
                {t("merchantPage.heroTitleAfter")}
              </h1>
              <p className="max-w-xl text-lg font-medium leading-relaxed text-on-surface-variant md:text-xl">
                {t("merchantPage.heroSubtitle")}
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <a
                  href={`tel:${t("merchant.phoneTel")}`}
                  className="editorial-gradient inline-flex items-center justify-center rounded-full px-10 py-5 text-center font-headline text-lg font-bold text-on-primary shadow-[0_20px_40px_rgba(79,48,248,0.2)] transition-transform hover:scale-[1.02] active:scale-95"
                  aria-label={t("a11y.callMerchant")}
                >
                  {t("merchantPage.joinCta")}
                </a>
                <button
                  type="button"
                  className="rounded-full bg-surface-container-highest px-10 py-5 font-headline text-lg font-bold text-on-surface transition-colors hover:bg-surface-container-high"
                  onClick={() =>
                    document.getElementById("merchant-advantages")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("merchantPage.learnMore")}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-tertiary-container/30 blur-[100px]" />
              <div className="absolute -bottom-10 -left-10 h-80 w-80 rounded-full bg-primary-container/30 blur-[120px]" />
              <img
                src={HERO_IMG}
                alt=""
                className="relative z-10 h-[min(520px,70vh)] w-full rounded-[3rem] object-cover shadow-2xl md:h-[600px]"
                width={800}
                height={600}
                loading="eager"
                decoding="async"
              />
              <div className="glass-card absolute -bottom-4 -right-2 z-20 w-[min(100%,20rem)] max-w-xs rounded-3xl p-6 shadow-xl sm:-bottom-6 sm:-right-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tertiary-container/30">
                      <span className="material-symbols-outlined text-xl text-primary">trending_up</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        {t("merchantPage.heroStat1Label")}
                      </p>
                      <p className="font-headline text-xl font-extrabold text-primary">
                        {t("merchantPage.heroStat1Value")}
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-on-surface-variant/10" />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container/30">
                      <span className="material-symbols-outlined text-xl text-primary">shopping_cart</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        {t("merchantPage.heroStat2Label")}
                      </p>
                      <p className="font-headline text-xl font-extrabold text-primary">
                        {t("merchantPage.heroStat2Value")}
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-on-surface-variant/10" />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container/30">
                      <span className="material-symbols-outlined text-xl text-primary">savings</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        {t("merchantPage.heroStat3Label")}
                      </p>
                      <p className="font-headline text-xl font-extrabold text-primary">
                        {t("merchantPage.heroStat3Value")}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="pt-1 text-right text-[10px] font-medium italic text-on-surface-variant">
                  {t("merchantPage.heroStatsDisclaimer")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="merchant-advantages" className="bg-surface-container-low py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center md:mb-20">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
                {t("merchantPage.advantagesHeading")}
              </h2>
              <p className="font-medium text-on-surface-variant">{t("merchantPage.advantagesSub")}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="flex flex-col justify-between rounded-[3rem] bg-surface-container-lowest p-10 md:col-span-7 md:p-12">
                <div className="space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-container/20 text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-4xl">payments</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface">
                    {t("merchantPage.benefit1Title")}
                  </h3>
                  <p className="text-xl font-medium leading-relaxed text-on-surface-variant">
                    {t("merchantPage.benefit1Body")}
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-tertiary-container px-4 py-2 text-xs font-bold tracking-widest text-on-tertiary-container">
                    {t("merchantPage.benefit1TagA")}
                  </span>
                  <span className="rounded-full bg-surface-container-high px-4 py-2 text-xs font-bold tracking-widest text-on-surface-variant">
                    {t("merchantPage.benefit1TagB")}
                  </span>
                </div>
              </div>

              <div className="relative flex flex-col justify-between overflow-hidden rounded-[3rem] bg-primary p-10 text-on-primary md:col-span-5 md:p-12">
                <span className="pointer-events-none absolute right-0 top-0 text-[12rem] opacity-10 transition-transform duration-700">
                  <span className="material-symbols-outlined">verified_user</span>
                </span>
                <div className="relative z-10 space-y-6">
                  <h3 className="font-headline text-3xl font-bold">{t("merchantPage.benefit2Title")}</h3>
                  <p className="text-lg font-medium leading-relaxed opacity-90">{t("merchantPage.benefit2Body")}</p>
                </div>
                <div className="relative z-10 mt-10">
                  <div className="flex -space-x-4">
                    {AVATARS.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="h-12 w-12 rounded-full border-2 border-primary object-cover"
                        width={48}
                        height={48}
                        loading="lazy"
                      />
                    ))}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-secondary text-xs font-bold font-headline">
                      5k+
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[3rem] bg-surface-container-highest p-10 transition-colors duration-500 hover:bg-surface-container-high md:col-span-5 md:p-12">
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/50 text-on-surface-variant">
                      <span className="material-symbols-outlined text-4xl">tune</span>
                    </div>
                    <h3 className="font-headline text-3xl font-bold text-on-surface">
                      {t("merchantPage.benefit3Title")}
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-on-surface-variant">
                      {t("merchantPage.benefit3Body")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-10 rounded-[3rem] bg-white p-10 shadow-ambient md:col-span-7 md:flex-row md:p-12">
                <div className="flex-1 space-y-6">
                  <h3 className="font-headline text-3xl font-bold text-on-surface">
                    {t("merchantPage.benefit4Title")}
                  </h3>
                  <p className="text-lg font-medium leading-relaxed text-on-surface-variant">
                    {t("merchantPage.benefit4Body")}
                  </p>
                </div>
                <div className="flex w-full flex-1 items-center justify-center rounded-[2rem] bg-surface-container-low p-8">
                  <img
                    src={BENEFIT_DASHBOARD_IMG}
                    alt=""
                    className="w-full max-w-md rounded-xl shadow-lg transition-transform duration-500 hover:rotate-2"
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 pt-4 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="editorial-gradient relative overflow-hidden rounded-[3rem] p-10 text-center text-on-primary shadow-[0_40px_80px_rgba(79,48,248,0.15)] md:rounded-[4rem] md:p-16 lg:p-24">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
                <div className="absolute left-10 top-10 h-96 w-96 rounded-full bg-white blur-[120px]" />
                <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-tertiary-fixed blur-[120px]" />
              </div>
              <div className="relative z-10 mx-auto max-w-4xl space-y-8">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  {t("merchantPage.ctaHeading")}
                </h2>
                <p className="text-lg font-medium opacity-90 md:text-xl">{t("merchantPage.ctaBody")}</p>
                <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-3 md:gap-8 md:items-stretch">
                  <a
                    href={`tel:${t("merchant.phoneTel")}`}
                    className="flex flex-col items-center gap-4 rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md transition-colors hover:bg-white/15"
                    aria-label={t("a11y.callMerchant")}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <span className="material-symbols-outlined text-3xl">call</span>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest opacity-80">
                        {t("merchantPage.ctaPhoneLabel")}
                      </p>
                      <p className="font-headline text-2xl font-bold md:text-3xl">{t("merchant.phoneDisplay")}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${t("merchant.emailMailto")}`}
                    className="flex flex-col items-center gap-4 rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md transition-colors hover:bg-white/15"
                    aria-label={t("a11y.emailMerchant")}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <span className="material-symbols-outlined text-3xl">mail</span>
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest opacity-80">
                        {t("merchantPage.ctaEmailLabel")}
                      </p>
                      <p className="break-all font-headline text-xl font-bold md:text-2xl">
                        {t("merchant.emailDisplay")}
                      </p>
                    </div>
                  </a>
                  <div className="flex min-h-[140px] items-center justify-center md:min-h-0">
                    <a
                      href={`tel:${t("merchant.phoneTel")}`}
                      className="inline-flex w-full items-center justify-center rounded-3xl bg-white px-8 py-8 font-headline text-lg font-extrabold text-primary shadow-xl transition-transform hover:scale-105 md:h-full md:min-h-[200px] md:py-0"
                      aria-label={t("a11y.callMerchant")}
                    >
                      {t("merchantPage.partnerApplication")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

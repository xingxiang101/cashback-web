import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import caseStudy01 from "./assets/delivery-case-studies/case-study-01.png";
import caseStudy02 from "./assets/delivery-case-studies/case-study-02.png";
import caseStudy03 from "./assets/delivery-case-studies/case-study-03.png";
import iconFoodpanda from "./assets/platform-icons/foodpanda.png";
import iconKeeta from "./assets/platform-icons/keeta.png";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { applyWebSeo } from "./seo";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlRgjImpBdA4VJwi8sbZLPQFvz7YiZVGNgTQ7oJzqz9LDtetljSoKEf_oO2xg0E9sCwUPlNN3Zc1JEJTCrJalUZdiPf5z6VmC1dQaHEiWBZw_MWCpeEdASrIR9GeWpiqREBphSCR4PQ2Yi2j6KRGa3UwmMSwYMI6NFwVnfz3Lq8MrPdDmViAeCKM9UrjY3p9gucT-cOfB1DU5Sg7wsuMqRgF-Ld93bBSyjcWzUQQ_UFYIHtV3FC15iy1JsvjDtWCo8CqJqJkKbTzJ4";

const PRICING_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbRufHVt1EleMiGTUepLh0k9hN_IpDKtJjdUbB6bnzsKtInUlvwRRYs-m3xAaUYg3PWlKBBOf6t5nZPyhgMbWUP225pF4A3AzwRlEFVyfIgNYN5JWA7b9kOJYNmvkKsUe5cgkcQIWJEuE6Uom5Wtt2IZqvh_p5sMG9YGdEd0R0GXiJKSHV9e_p-ArNJLLewwHbgLkAfw7piiYSrWSN_OoodGpQqTyZ_NHu4kppT8lQEEb1XorNyhRK0Vujj1WQKUKOmMPUTZaIqCNm";

const CASE_STUDIES: { src: string; captionKey: string }[] = [
  { src: caseStudy01, captionKey: "deliveryOpsPage.caseCaption1" },
  { src: caseStudy02, captionKey: "deliveryOpsPage.caseCaption2" },
  { src: caseStudy03, captionKey: "deliveryOpsPage.caseCaption3" },
];

const CHALLENGES = [
  { icon: "psychology_alt" as const, titleKey: "deliveryOpsPage.challenge1Title", bodyKey: "deliveryOpsPage.challenge1Body" },
  { icon: "trending_down" as const, titleKey: "deliveryOpsPage.challenge2Title", bodyKey: "deliveryOpsPage.challenge2Body" },
  { icon: "group_remove" as const, titleKey: "deliveryOpsPage.challenge3Title", bodyKey: "deliveryOpsPage.challenge3Body" },
  { icon: "settings_account_box" as const, titleKey: "deliveryOpsPage.challenge4Title", bodyKey: "deliveryOpsPage.challenge4Body" },
] as const;

const SERVICES = [
  { icon: "inventory_2" as const, titleKey: "deliveryOpsPage.service1Title", bodyKey: "deliveryOpsPage.service1Body" },
  { icon: "bar_chart" as const, titleKey: "deliveryOpsPage.service2Title", bodyKey: "deliveryOpsPage.service2Body" },
  { icon: "campaign" as const, titleKey: "deliveryOpsPage.service3Title", bodyKey: "deliveryOpsPage.service3Body" },
  { icon: "monitor_heart" as const, titleKey: "deliveryOpsPage.service4Title", bodyKey: "deliveryOpsPage.service4Body" },
  { icon: "palette" as const, titleKey: "deliveryOpsPage.service5Title", bodyKey: "deliveryOpsPage.service5Body" },
  { icon: "ads_click" as const, titleKey: "deliveryOpsPage.service6Title", bodyKey: "deliveryOpsPage.service6Body" },
  { icon: "settings" as const, titleKey: "deliveryOpsPage.service7Title", bodyKey: "deliveryOpsPage.service7Body" },
  { icon: "edit_note" as const, titleKey: "deliveryOpsPage.service8Title", bodyKey: "deliveryOpsPage.service8Body" },
  { icon: "stars" as const, titleKey: "deliveryOpsPage.service9Title", bodyKey: "deliveryOpsPage.service9Body" },
] as const;

export function DeliveryOperationsPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const locale = i18n.language === "zh-Hant" ? "zh-Hant" : "en";
    applyWebSeo({
      title: t("meta.deliveryTitle"),
      description: t("meta.deliveryDescription"),
      locale,
      path: "/delivery-operations",
    });
  }, [t, i18n.language, location.pathname]);

  return (
    <>
      <SiteNav variant="merchant" />

      <main className="overflow-x-hidden bg-surface pt-20 font-body text-on-surface sm:pt-24">
        <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          <div className="space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-tertiary-container px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-on-tertiary-container" aria-hidden />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-on-tertiary-container">
                {t("deliveryOpsPage.heroBadge")}
              </span>
            </div>
            <h1 className="font-headline text-4xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-5xl lg:text-6xl xl:text-7xl">
              {t("deliveryOpsPage.heroTitleLine1")}
              <br />
              <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
                {t("deliveryOpsPage.heroTitleHighlight")}
              </span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant">
              {t("deliveryOpsPage.heroSubtitle")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <a
                href={`tel:${t("merchant.phoneTel")}`}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-headline text-lg font-bold text-white shadow-[0_20px_40px_rgba(79,48,248,0.2)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:px-10 sm:py-5"
              >
                {t("deliveryOpsPage.ctaConsult")}
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-surface-container-highest px-8 py-4 font-headline text-lg font-bold text-on-secondary-container transition-colors hover:bg-surface-container-high sm:px-10 sm:py-5"
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("deliveryOpsPage.ctaLearnMore")}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-tertiary-container/30 blur-3xl lg:-left-12 lg:-top-12 lg:h-64 lg:w-64" aria-hidden />
            <div className="relative z-10 aspect-square overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] lg:aspect-auto lg:h-[min(600px,70vh)] lg:rounded-[3rem]">
              <img
                src={HERO_IMG}
                alt={t("deliveryOpsPage.heroImgAlt")}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" aria-hidden />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border-t border-white/40 bg-surface/70 p-6 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-on-surface-variant">
                      {t("deliveryOpsPage.heroStatLabel")}
                    </span>
                    <span className="font-headline text-2xl font-black text-primary sm:text-3xl">
                      {t("deliveryOpsPage.heroStatValue")}
                    </span>
                  </div>
                  <div className="shrink-0 rounded-full bg-tertiary-fixed p-3 text-[#006838]">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-4 rounded-[32px] bg-surface-container-low py-20 sm:mx-6 sm:rounded-[48px] sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-16 space-y-4 text-center sm:mb-24">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
                {t("deliveryOpsPage.challengesHeading")}
              </h2>
              <p className="text-lg text-on-surface-variant">{t("deliveryOpsPage.challengesSub")}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {CHALLENGES.map(({ icon, titleKey, bodyKey }) => (
                <div
                  key={titleKey}
                  className="group rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all duration-500 hover:bg-primary sm:p-10"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-high transition-colors group-hover:bg-white/20 sm:mb-8">
                    <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">{icon}</span>
                  </div>
                  <h3 className="mb-3 font-headline text-xl font-bold group-hover:text-white sm:text-2xl">{t(titleKey)}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant group-hover:text-white/80 sm:text-base">
                    {t(bodyKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:h-fit lg:w-1/3">
              <h2 className="mb-6 font-headline text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
                {t("deliveryOpsPage.servicesHeading")}
              </h2>
              <p className="mb-8 text-lg text-on-surface-variant lg:mb-12">{t("deliveryOpsPage.servicesLead")}</p>
              <div className="rounded-xl bg-surface-container-highest p-6 sm:p-8">
                <h4 className="mb-4 font-headline text-xl font-bold text-primary">{t("deliveryOpsPage.servicesWhyTitle")}</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3 font-medium">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    {t("deliveryOpsPage.servicesWhy1")}
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    {t("deliveryOpsPage.servicesWhy2")}
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    {t("deliveryOpsPage.servicesWhy3")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
              {SERVICES.map(({ icon, titleKey, bodyKey }) => (
                <div
                  key={titleKey}
                  className="rounded-xl border border-outline-variant/10 bg-surface p-6 transition-shadow hover:shadow-lg sm:p-8"
                >
                  <span className="material-symbols-outlined mb-4 block text-4xl text-primary sm:mb-6">{icon}</span>
                  <h4 className="mb-2 font-headline text-xl font-bold">{t(titleKey)}</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{t(bodyKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-4 rounded-[32px] bg-surface-container-low py-20 sm:mx-6 sm:rounded-[48px] sm:py-28 lg:py-32" id="case-studies">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-container/20 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">verified</span>
                  <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">
                    {t("deliveryOpsPage.casesBadge")}
                  </span>
                </div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
                  {t("deliveryOpsPage.casesHeading")}
                </h2>
                <p className="max-w-2xl text-lg text-on-surface-variant">{t("deliveryOpsPage.casesSub")}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              {CASE_STUDIES.map(({ src, captionKey }) => (
                <div key={captionKey} className="group">
                  <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl md:rounded-[2.5rem]">
                    <img
                      src={src}
                      alt={`${t("deliveryOpsPage.caseStudyImgAlt")} — ${t(captionKey)}`}
                      className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-on-surface-variant">{t(captionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-4 py-16 sm:mx-8 sm:py-24 lg:mx-12 lg:py-32">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[32px] bg-inverse-surface p-10 text-center sm:rounded-[48px] sm:p-16 lg:p-20">
            <img
              src={PRICING_BG}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-20"
              aria-hidden
            />
            <div className="relative z-10 max-w-3xl space-y-8 sm:space-y-12">
              <h2 className="font-headline text-4xl font-black text-white sm:text-5xl md:text-6xl">
                {t("deliveryOpsPage.pricingTitle")}
              </h2>
              <div className="inline-block rounded-full border-4 border-white/10 bg-tertiary-container px-8 py-4 sm:px-12 sm:py-6">
                <span className="font-headline text-2xl font-black text-primary sm:text-4xl md:text-5xl">
                  {t("deliveryOpsPage.pricingFee")}
                </span>
              </div>
              <p className="text-lg leading-relaxed text-inverse-on-surface sm:text-xl">
                {t("deliveryOpsPage.pricingBody")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 pt-4 sm:gap-12 sm:pt-8">
                <div className="flex items-center gap-3 text-white sm:gap-4">
                  <img src={iconKeeta} alt="" className="h-10 w-10 rounded-full sm:h-12 sm:w-12" />
                  <span className="font-bold sm:text-lg">{t("deliveryOpsPage.pricingKeeta")}</span>
                </div>
                <div className="flex items-center gap-3 text-white sm:gap-4">
                  <img src={iconFoodpanda} alt="" className="h-10 w-10 rounded-full sm:h-12 sm:w-12" />
                  <span className="font-bold sm:text-lg">{t("deliveryOpsPage.pricingFoodpanda")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 lg:px-12 lg:py-32">
          <h2 className="mb-10 text-center font-headline text-3xl font-extrabold text-on-surface sm:mb-16 sm:text-4xl md:text-5xl">
            {t("deliveryOpsPage.bottomCtaHeading")}
          </h2>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            <a
              href={`tel:${t("merchant.phoneTel")}`}
              className="flex items-center gap-6 rounded-xl bg-surface-container p-6 transition-transform duration-300 hover:-translate-y-1 sm:gap-8 sm:p-10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:h-16 sm:w-16">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">call</span>
              </div>
              <div className="min-w-0 text-left">
                <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant sm:text-sm">
                  {t("deliveryOpsPage.contactPhoneLabel")}
                </p>
                <p className="truncate font-headline text-xl font-black text-primary sm:text-2xl md:text-3xl">
                  {t("merchant.phoneDisplay")}
                </p>
              </div>
            </a>
            <a
              href={`mailto:${t("merchant.emailMailto")}`}
              className="flex items-center gap-6 rounded-xl bg-surface-container p-6 transition-transform duration-300 hover:-translate-y-1 sm:gap-8 sm:p-10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:h-16 sm:w-16">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">mail</span>
              </div>
              <div className="min-w-0 text-left">
                <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant sm:text-sm">
                  {t("deliveryOpsPage.contactEmailLabel")}
                </p>
                <p className="break-all font-headline text-xl font-black text-primary sm:text-2xl md:text-3xl">
                  {t("merchant.emailDisplay")}
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

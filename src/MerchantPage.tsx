import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import benefitFlexible from "./assets/merchant-benefits/flexible.png";
import benefitMultiChannel from "./assets/merchant-benefits/multi-channel.png";
import benefitPayPerformance from "./assets/merchant-benefits/pay-performance.png";
import benefitReputation from "./assets/merchant-benefits/reputation.png";
import logoDasanyuan from "./assets/merchant-logos/dasanyuan.png";
import logoBetOnChefFriedRice from "./assets/merchant-logos/bet_on_chef_fried_rice.png";
import logoCakeShop from "./assets/merchant-logos/cake_shop.jpg";
import logoCongYouLaMian from "./assets/merchant-logos/cong_you_la_mian_logo.webp";
import logoCreativeBistro from "./assets/merchant-logos/creative_bistro.png";
import logoForestKitchen from "./assets/merchant-logos/forest_kitchen_logo.webp";
import logoFunHeeAveCafe from "./assets/merchant-logos/fun_hee_ave_cafe_logo.webp";
import logoIndependentCoffee from "./assets/merchant-logos/independent_coffee.png";
import logoIzakaya from "./assets/merchant-logos/izakaya.jpg";
import logoJiaJiaTangBao from "./assets/merchant-logos/jia_jia_tang_bao.jpg";
import logoJinbaiwan from "./assets/merchant-logos/jinbaiwan.png";
import logoMiGang from "./assets/merchant-logos/mi_gang_logo.webp";
import logoPhoHongKong from "./assets/merchant-logos/pho_hong_kong.jpg";
import logoShanxiNoodle from "./assets/merchant-logos/shanxi-noodle.png";
import logoShenwansan from "./assets/merchant-logos/shenwansan.png";
import logoShiZaiShiZai from "./assets/merchant-logos/shi_zai_shi_zai_logo.webp";
import logoTrendyDessert from "./assets/merchant-logos/trendy_dessert.png";
import logoTheChippy from "./assets/merchant-logos/the_chippy.png";
import logoXiyuanxiaoguan from "./assets/merchant-logos/xiyuanxiaoguan.png";
import logoYexiangge from "./assets/merchant-logos/yexiangge.png";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { applyWebSeo } from "./seo";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJhxuMwc6-zaNb24F87pgaGhklb7QDbX55RrQVseKvBjwPnRASlX7w6oIrFtLkoxbYps6_WizllmwCOXzmkRU023WHP1fPElxOUeXUr3hVwP8xr9x5Ef2cqmIFcLA_lkL6p3DM8bim9Jt6yBzphZTLQpMEmqmpEX5WQsxp4wwddE4690VKXZjtTQe4cAanmouOBpRFf78ZZ4Nyd0tyjlJhCnDU-fSJCgR-6kI1qYFkfILLLseBCIb8XyHicuimlf-Zsjh00LfB_H3H";

const MERCHANT_TESTIMONIALS = [
  {
    id: "dasanyuan",
    logo: logoDasanyuan,
    name: "大三元",
    quote: "書法品牌識別結合傳統紋樣，喺高端客群中辨識度持續提升。用唔晒嘅營銷費用仲可以退，靈活又抵玩。",
  },
  {
    id: "xiyuan",
    logo: logoXiyuanxiaoguan,
    name: "喜苑小館",
    quote: "Koox 幫我哋精準觸達目標客群，落單快、見效快，活動轉化穩定，效果仲好持久，唔使成日煩。",
  },
  {
    id: "jinbaiwan",
    logo: logoJinbaiwan,
    name: "金百萬烤鴨",
    quote: "以結果收費，數據面板清晰，旺季淡季都靈活調節。慳錢又慳心，性價比真係高。",
  },
  {
    id: "shenwansan",
    logo: logoShenwansan,
    name: "沈萬三",
    quote: "特色招牌結合地方故事，品牌記憶點鮮明，回頭客持續增加。一條龍服務好省心，收費又平，抵過自己搞。",
  },
  {
    id: "friedrice",
    logo: logoBetOnChefFriedRice,
    name: "賭上廚師生涯的炒飯",
    quote: "用爆款單品做活動測試，Koox 即時數據反應快，加碼決策快狠準。效果長尾好持久，埋單又唔貴。",
  },
  {
    id: "shanxi",
    logo: logoShanxiNoodle,
    name: "山西麵館",
    quote: "門店上線後曝光明顯提升，晚市尖峰時段自然下單量穩定增長。速度快、效果持續、服務周到、價錢公道，四樣齊晒。",
  },
  {
    id: "phohongkong",
    logo: logoPhoHongKong,
    name: "Phở Hồng Kông",
    quote:
      "Koox giúp chúng tôi tiếp cận đúng khách hàng mục tiêu. Chi phí marketing chưa dùng hết được hoàn lại, rất linh hoạt. Triển khai nhanh, hiệu quả đến nhanh, và kết quả bền vững lâu dài. Dịch vụ rất nhẹ nhàng, không lo lắng, mà giá cả lại rẻ hơn các nền tảng khác.",
  },
  {
    id: "thechippy",
    logo: logoTheChippy,
    name: "The Chippy",
    quote:
      "Koox helped us nail the exact crowd—expats craving a taste of home and locals after proper British grub. Unused marketing budget? Fully refunded. Setup was blazing fast, results kept rolling in for months, and the whole thing was completely hands-off. Cheaper than running ads ourselves, honestly.",
  },
] as const;

const PARTNER_LOGOS = [
  { name: "山西面馆", src: logoShanxiNoodle },
  { name: "椰香阁", src: logoYexiangge },
  { name: "Cake Shop", src: logoCakeShop },
  { name: "蔥油拉麵", src: logoCongYouLaMian },
  { name: "Creative Bistro", src: logoCreativeBistro },
  { name: "Forest Kitchen", src: logoForestKitchen },
  { name: "Fun Hee Ave Cafe", src: logoFunHeeAveCafe },
  { name: "Independent Coffee", src: logoIndependentCoffee },
  { name: "Izakaya", src: logoIzakaya },
  { name: "Jia Jia Tang Bao", src: logoJiaJiaTangBao },
  { name: "Mi Gang", src: logoMiGang },
  { name: "Shi Zai Shi Zai", src: logoShiZaiShiZai },
  { name: "Trendy Dessert", src: logoTrendyDessert },
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
        <section className="relative flex min-h-[min(100vh,920px)] items-start overflow-hidden px-4 pb-16 pt-6 sm:px-8 lg:min-h-[870px]">
          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-1.5 text-sm font-bold tracking-wide text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary-fixed" />
                {t("merchantPage.heroBadge").toUpperCase()}
              </div>
              <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-on-surface lg:text-5xl xl:text-6xl">
                {t("merchantPage.heroHeadingLine1")}
                <br />
                <span className="font-bold text-on-surface-variant">
                  {t("merchantPage.heroHeadingLine2")}
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                <span className="mb-2 block font-semibold text-primary">{t("merchantPage.heroIntroLead")}</span>
                {t("merchantPage.heroIntroBody")}
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

        <section className="bg-surface pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <p className="mb-8 text-center font-headline text-2xl font-bold tracking-tight text-on-surface sm:mb-10 md:text-3xl">
              超30+商家合作
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MERCHANT_TESTIMONIALS.map((item) => (
                <article
                  key={item.id}
                  className="flex h-full flex-col justify-between rounded-2xl border border-outline-variant/35 bg-surface-container-low p-6 shadow-[0_10px_30px_rgba(79,48,248,0.04)] md:p-8"
                >
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-outline-variant/25 bg-white shadow-sm">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <p className="font-headline text-base font-bold text-on-surface">
                          {item.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm italic leading-relaxed text-on-surface">
                      "{item.quote}"
                    </p>
                  </div>
                </article>
              ))}
              <article className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/25 bg-surface-container-low/50 p-6 text-center shadow-[0_10px_30px_rgba(79,48,248,0.04)] md:p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-4xl">more_horiz</span>
                </div>
                <p className="font-headline text-base font-bold text-on-surface-variant">
                  {t("merchantPage.moreReviewsLabel")}
                </p>
                <p className="mt-1 text-sm text-on-surface-variant">{t("merchantPage.moreReviewsHint")}</p>
              </article>
            </div>
          </div>

          <div className="mt-10 border-y border-outline-variant/25 bg-surface-container-low py-4 sm:mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <div
                className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {PARTNER_LOGOS.map((logo) => (
                  <figure
                    key={logo.name}
                    className="shrink-0 rounded-2xl border border-outline-variant/30 bg-white p-2 shadow-sm"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-14 w-24 rounded-xl object-cover sm:h-16 sm:w-28"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="merchant-advantages" className="bg-surface-container-low py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="mb-10 space-y-4 text-left md:mx-auto md:mb-20 md:max-w-2xl md:text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
                {t("merchantPage.advantagesHeading")}
              </h2>
              <p className="font-medium text-on-surface-variant">{t("merchantPage.advantagesSub")}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
              {/* Pay-per-performance */}
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_10px_30px_rgba(79,48,248,0.04)] transition-all duration-500 hover:shadow-xl md:col-span-7 md:flex-row md:items-center md:gap-8 md:rounded-[3rem] md:p-12 md:shadow-none">
                <div className="order-1 w-full overflow-hidden md:order-2 md:max-h-[400px] md:min-h-0 md:flex-1 md:rounded-2xl">
                  <img
                    src={benefitPayPerformance}
                    alt=""
                    className="h-auto w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 md:h-full md:max-h-[400px] md:object-contain"
                    width={800}
                    height={520}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="order-2 flex flex-1 flex-col gap-4 p-8 md:order-1 md:space-y-6 md:p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 md:h-16 md:w-16 md:rounded-2xl md:bg-primary-container/20 md:text-primary">
                    <span className="material-symbols-outlined text-2xl text-primary md:text-4xl">payments</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface md:text-3xl">
                    {t("merchantPage.benefit1Title")}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-on-surface-variant md:text-xl">
                    {t("merchantPage.benefit1Body")}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1 md:pt-0">
                    <span className="rounded-full bg-tertiary-container px-4 py-2 text-xs font-bold tracking-widest text-on-tertiary-container">
                      {t("merchantPage.benefit1TagA")}
                    </span>
                    <span className="rounded-full bg-surface-container-high px-4 py-2 text-xs font-bold tracking-widest text-on-surface-variant">
                      {t("merchantPage.benefit1TagB")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Real reputation */}
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_10px_30px_rgba(79,48,248,0.04)] transition-all duration-500 hover:shadow-xl md:col-span-5 md:rounded-[3rem] md:bg-primary md:p-12 md:text-on-primary md:shadow-none">
                <div className="order-1 w-full overflow-hidden md:order-2 md:mt-8 md:h-72 md:shrink-0 md:rounded-2xl">
                  <img
                    src={benefitReputation}
                    alt=""
                    className="h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:h-full md:object-contain md:object-top"
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="order-2 flex flex-col gap-4 p-8 md:relative md:z-10 md:order-1 md:space-y-6 md:p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container/20 md:hidden">
                    <span className="material-symbols-outlined text-2xl text-tertiary">verified</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface md:text-3xl md:text-on-primary">
                    {t("merchantPage.benefit2Title")}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-on-surface-variant md:text-lg md:text-on-primary md:opacity-90">
                    {t("merchantPage.benefit2Body")}
                  </p>
                </div>
              </div>

              {/* Flexible management */}
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_10px_30px_rgba(79,48,248,0.04)] transition-all duration-500 hover:shadow-xl md:col-span-5 md:rounded-[3rem] md:bg-surface-container-highest md:p-12 md:shadow-none md:transition-colors md:duration-500 md:hover:bg-surface-container-high">
                <div className="order-1 h-[240px] w-full overflow-hidden md:order-2 md:h-auto md:max-h-[350px] md:rounded-2xl">
                  <img
                    src={benefitFlexible}
                    alt=""
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:max-h-[350px] md:object-cover"
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="order-2 flex flex-col gap-4 p-8 md:order-1 md:flex-1 md:space-y-8 md:p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container/30 md:h-16 md:w-16 md:rounded-2xl md:bg-white/50 md:text-on-surface-variant">
                    <span className="material-symbols-outlined text-2xl text-secondary md:text-4xl">tune</span>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="font-headline text-xl font-bold text-on-surface md:text-3xl">
                      {t("merchantPage.benefit3Title")}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-on-surface-variant md:text-lg">
                      {t("merchantPage.benefit3Body")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-channel */}
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_10px_30px_rgba(79,48,248,0.04)] transition-all duration-500 hover:shadow-xl md:col-span-7 md:flex-row md:items-center md:gap-8 md:rounded-[3rem] md:bg-white md:p-12 md:shadow-[0_20px_40px_rgba(79,48,248,0.05)]">
                <div className="order-1 w-full overflow-hidden md:order-2 md:max-h-[400px] md:flex-1 md:rounded-2xl">
                  <img
                    src={benefitMultiChannel}
                    alt=""
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105 md:max-h-[400px] md:object-contain md:object-center"
                    width={800}
                    height={520}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="order-2 flex flex-1 flex-col gap-4 p-8 md:order-1 md:space-y-6 md:p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed/20 md:hidden">
                    <span className="material-symbols-outlined text-2xl text-on-primary-container">hub</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface md:text-3xl">
                    {t("merchantPage.benefit4Title")}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-on-surface-variant md:text-lg">
                    {t("merchantPage.benefit4Body")}
                  </p>
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

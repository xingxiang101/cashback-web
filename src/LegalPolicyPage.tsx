import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { applyWebSeo } from "./seo";

type PolicyType = "privacy" | "cookie";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PolicyContent = {
  title: string;
  effectiveDateLabel: string;
  effectiveDateValue: string;
  intro: string;
  sections: Section[];
};

const PRIVACY_EMAIL = "privacy@cashbite.hk";

const POLICY_CONTENT: Record<"en" | "zh-Hant", Record<PolicyType, PolicyContent>> = {
  "zh-Hant": {
    privacy: {
      title: "隱私政策",
      effectiveDateLabel: "生效日期",
      effectiveDateValue: "2026年4月17日",
      intro:
        "本隱私政策（「政策」）說明 CashBite Limited（「我們」）如何收集、使用、披露、傳輸及儲存您的個人資料。我們致力保護您的私隱，並遵守香港《個人資料（私隱）條例》（第486章）（PDPO）。",
      sections: [
        {
          title: "1. 我們收集的個人資料",
          bullets: [
            "身份資料：例如姓名、用戶名稱、電郵地址、電話號碼。",
            "交易資料：例如購買記錄、返現記錄、支付資料（不包括完整信用卡號碼）。",
            "技術資料：例如 IP 地址、登入資料、瀏覽器類型與版本、時區與位置、作業系統與平台等。",
            "使用資料：例如您如何使用本網站、產品與服務的資訊。",
            "行銷與通訊資料：例如您接收我們或第三方行銷資訊及通訊偏好。",
          ],
        },
        {
          title: "2. 收集目的",
          bullets: [
            "提供及管理服務：處理返現交易、管理帳戶、提供客戶支援。",
            "改進服務：分析網站使用情況，改善網站、產品與服務。",
            "行銷與推廣：在您同意下發送產品、服務及優惠資訊。",
            "遵守法律義務：遵守適用法律、法規及法院命令。",
            "安全保障：偵測與防範欺詐、濫用及其他非法活動。",
          ],
        },
        {
          title: "3. 個人資料使用方式",
          paragraphs: ["我們僅在法律允許情況下使用個人資料，通常包括履行合約、基於合法利益，或遵守法律及監管義務。"],
        },
        {
          title: "4. 保存期限",
          paragraphs: [
            "我們僅在達成收集目的所需期間內保留個人資料；若法律要求或允許更長保存期限，則按法律規定執行。",
          ],
        },
        {
          title: "5. 披露與傳輸",
          bullets: [
            "服務供應商：如支付處理商、數據分析供應商、行銷服務供應商。",
            "業務合作夥伴：如提供返現優惠的商戶。",
            "法律及監管機構：在法律要求或為保障我們權利時。",
            "資料可能傳輸至香港以外司法管轄區；我們會採取合理措施確保保護水平與香港相當。",
          ],
        },
        {
          title: "6. 您的權利（根據 PDPO）",
          bullets: ["查閱權：查閱我們持有的您的個人資料。", "更正權：要求更正不準確或不完整資料。", "撤回同意權：在適用情況下可隨時撤回同意。"],
        },
        {
          title: "7. 聯絡方式",
          paragraphs: ["如對本政策有疑問或希望行使權利，請聯絡我們的資料保障負責人：", `電郵：${PRIVACY_EMAIL}`],
        },
      ],
    },
    cookie: {
      title: "Cookie 政策",
      effectiveDateLabel: "生效日期",
      effectiveDateValue: "2026年4月17日",
      intro:
        "本 Cookie 政策（「政策」）說明 CashBite Limited（「我們」）如何使用 Cookie 及類似技術收集和儲存資訊。本政策應與我們的隱私政策一併閱讀。",
      sections: [
        {
          title: "1. 什麼是 Cookie？",
          paragraphs: ["Cookie 是您瀏覽網站時儲存在電腦或流動裝置上的小型文字檔案，可協助網站正常運作及提供分析資訊。"],
        },
        {
          title: "2. 我們如何使用 Cookie",
          bullets: [
            "基本功能：保持登入狀態、記住偏好設定等。",
            "效能與分析：了解頁面瀏覽與連結點擊，以改善網站表現。",
            "廣告與追蹤：按興趣展示相關廣告並衡量活動成效，可能涉及與第三方合作夥伴共享資料。",
          ],
        },
        {
          title: "3. 我們使用的 Cookie 類型",
          bullets: [
            "會話 Cookie：於關閉瀏覽器後失效。",
            "持久性 Cookie：於裝置保留一段時間，直至過期或被刪除。",
            "第一方 Cookie：由我們設置。",
            "第三方 Cookie：由第三方（例如 Google Analytics、廣告合作夥伴）設置。",
          ],
        },
        {
          title: "4. 您的 Cookie 選擇",
          paragraphs: [
            "您可透過瀏覽器設定管理及／或刪除 Cookie。停用 Cookie 可能影響網站功能與使用體驗。",
            "您亦可透過 Cookie 提示條與偏好設定管理 Cookie 偏好，至少可拒絕非必要 Cookie。",
          ],
        },
        {
          title: "5. 更多資訊",
          paragraphs: ["如對 Cookie 使用有疑問，請參閱隱私政策或透過以下方式聯絡我們：", `電郵：${PRIVACY_EMAIL}`],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      effectiveDateLabel: "Effective Date",
      effectiveDateValue: "April 17, 2026",
      intro:
        'This Privacy Policy ("Policy") describes how CashBite Limited ("we," "our," or "us") collects, uses, discloses, transfers, and stores your personal data. We are committed to protecting your privacy and complying with the Personal Data (Privacy) Ordinance (Cap. 486) ("PDPO") of Hong Kong.',
      sections: [
        {
          title: "1. Personal Data We Collect",
          bullets: [
            "Identity Information: such as your name, username, email address, and phone number.",
            "Transaction Information: such as purchase history, cashback records, and payment information (excluding full credit card numbers).",
            "Technical Data: such as IP address, login data, browser type and version, time zone and location, operating system, platform, and related device data.",
            "Usage Data: information about how you use our website, products, and services.",
            "Marketing and Communications Data: your marketing and communication preferences.",
          ],
        },
        {
          title: "2. Purposes of Collecting Personal Data",
          bullets: [
            "Provide and manage services, including account support and cashback transaction handling.",
            "Improve our website, products, and services through analytics.",
            "Send marketing or promotional information where you have consented.",
            "Comply with legal, regulatory, and court requirements.",
            "Detect and prevent fraud, abuse, and other unlawful activities.",
          ],
        },
        {
          title: "3. How We Use Personal Data",
          paragraphs: [
            "We only use your personal data where permitted by law, including contract performance, legitimate interests, and compliance with legal or regulatory obligations.",
          ],
        },
        {
          title: "4. Retention Period",
          paragraphs: [
            "We retain personal data only as long as necessary for the purposes collected, unless a longer retention period is required or permitted by law.",
          ],
        },
        {
          title: "5. Disclosure and Transfer of Personal Data",
          bullets: [
            "Service providers, such as payment processors, data analytics vendors, and marketing partners.",
            "Business partners, such as merchants offering cashback promotions.",
            "Legal and regulatory authorities, where required by law or to protect our rights.",
            "Data may be transferred outside Hong Kong; we take reasonable steps to ensure an equivalent level of protection.",
          ],
        },
        {
          title: "6. Your Rights Under PDPO",
          bullets: [
            "Right of access to personal data held by us.",
            "Right of correction if your data is inaccurate or incomplete.",
            "Right to withdraw consent where consent is the legal basis.",
          ],
        },
        {
          title: "7. Contact Information",
          paragraphs: [
            "If you have questions about this Policy or wish to exercise your rights, please contact our Data Protection Officer:",
            `Email: ${PRIVACY_EMAIL}`,
          ],
        },
      ],
    },
    cookie: {
      title: "Cookie Policy",
      effectiveDateLabel: "Effective Date",
      effectiveDateValue: "April 17, 2026",
      intro:
        'This Cookie Policy ("Policy") explains how CashBite Limited ("we," "our," or "us") uses cookies and similar technologies to collect and store information. This Policy should be read together with our Privacy Policy.',
      sections: [
        {
          title: "1. What Are Cookies?",
          paragraphs: [
            "Cookies are small text files placed on your computer or mobile device when you visit a website. They help websites function properly and provide reporting information.",
          ],
        },
        {
          title: "2. How We Use Cookies",
          bullets: [
            "Essential functions: such as keeping you logged in and remembering preferences.",
            "Performance and analytics: such as understanding page views and link clicks to improve site performance.",
            "Advertising and tracking: to show relevant ads and measure campaign performance, which may involve data sharing with third-party partners.",
          ],
        },
        {
          title: "3. Types of Cookies We Use",
          bullets: [
            "Session cookies: expire when you close your browser.",
            "Persistent cookies: remain until expiration or manual deletion.",
            "First-party cookies: set by us.",
            "Third-party cookies: set by third parties such as Google Analytics or advertising partners.",
          ],
        },
        {
          title: "4. Your Cookie Choices",
          paragraphs: [
            "You can manage and/or delete cookies through browser settings. Disabling cookies may affect website functionality and user experience.",
            "You can also manage cookie preferences via our cookie banner and preference settings, including the ability to refuse non-essential cookies.",
          ],
        },
        {
          title: "5. More Information",
          paragraphs: [
            "If you have questions about our use of cookies, please refer to our Privacy Policy or contact us at:",
            `Email: ${PRIVACY_EMAIL}`,
          ],
        },
      ],
    },
  },
};

function SectionView({ section }: { section: Section }) {
  return (
    <section className="rounded-3xl border border-outline-variant/15 bg-surface-container-lowest p-6 sm:p-8">
      <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-sm leading-7 text-on-surface-variant sm:text-base">
          {paragraph}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-on-surface-variant sm:text-base">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function LegalPolicyPage({ type }: { type: PolicyType }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const locale: "en" | "zh-Hant" = i18n.language === "zh-Hant" ? "zh-Hant" : "en";
  const content = POLICY_CONTENT[locale][type];

  useEffect(() => {
    applyWebSeo({
      title: `Koox | ${content.title}`,
      description: content.intro,
      locale,
      path: location.pathname,
    });
  }, [content.intro, content.title, locale, location.pathname]);

  return (
    <>
      <SiteNav variant="product" />
      <main className="overflow-x-hidden pt-24 sm:pt-28">
        <section className="bg-surface-container-low px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[2rem] bg-surface p-8 shadow-ambient sm:p-10">
              <h1 className="font-headline text-4xl font-black text-on-surface sm:text-5xl">
                {content.title}
              </h1>
              <p className="mt-4 text-sm font-medium text-on-surface-variant sm:text-base">
                {content.effectiveDateLabel}: {content.effectiveDateValue}
              </p>
              <p className="mt-6 text-base leading-8 text-on-surface-variant">{content.intro}</p>
              <div className="mt-10 space-y-6">
                {content.sections.map((section) => (
                  <SectionView key={section.title} section={section} />
                ))}
              </div>
              <div className="mt-10 border-t border-outline-variant/15 pt-6">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-violet-600"
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  {locale === "zh-Hant" ? "返回首頁" : "Back to Home"}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
}

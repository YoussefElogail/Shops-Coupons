import { useTranslations } from "next-intl";

export default function CouponIntro() {
    const t = useTranslations("couponInstruction");
  
    return (
      <div className="bg-white p-6 border border-gray-300 min-h-[600px] lg:col-span-6 col-span-12 rounded-md">
        <h2 className="text-lg">{t("coupon_intro_title")}</h2>
        <p className="text-gray-600 text-base pt-4 leading-relaxed">
          {t("coupon_intro_text")}
        </p>
        <p className="text-gray-600 text-base py-4 leading-relaxed">
          {t("coupon_process_step")}
        </p>
        <p className="text-gray-600 text-base leading-relaxed">
          {t("coupon_difficulties_text")}
        </p>
      </div>
    );
  }
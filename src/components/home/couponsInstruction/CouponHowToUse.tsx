import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function CouponHowToUse() {
  const t = useTranslations("couponInstruction");

  return (
    <div className="col-span-12  bg-white p-6 border  border-gray-300 rounded-md">
      <h2 className="text-lg">
        <Link href="/" className="text-primary no-underline">
          {t("how_to_use_coupon")}
        </Link>
      </h2>
      <p className="text-gray-600 text-base py-4">{t("coupon_usage_text")}</p>
    </div>
  );
}

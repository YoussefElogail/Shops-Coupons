import { useTranslations } from "next-intl";

export default function SectionFooter() {
  const t = useTranslations("couponFeature"); // Assuming you use the "homeDiscountAd" namespace

  return (
    <div className="bg-white p-4 md:p-8 my-4 border border-gray-300 rounded-md">
      <h1 className="text-xl font-bold">{t("title")}</h1>

      <p className="text-gray-600 my-4">{t("description1")}</p>

      <p className="text-gray-600">{t("description2")}</p>
    </div>
  );
}

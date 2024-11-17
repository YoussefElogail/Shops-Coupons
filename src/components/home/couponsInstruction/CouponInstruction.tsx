import { useTranslations } from "next-intl";
import Image from "next/image";
import CouponSteps from "./CouponSteps";
import CouponIntro from "./CouponIntro";
import CouponHowToUse from "./CouponHowToUse";

export default function CouponInstruction() {
  const t = useTranslations("couponInstruction");

  return (
    <>
      <div className="grid grid-cols-12 my-3 gap-4">
        <CouponIntro />
        <div className="bg-white border border-gray-300 min-h-[600px] lg:col-span-6 col-span-12 rounded-md">
          <Image
            src="/images/CouponInstruction/instruction.svg"
            width={600}
            height={242}
            className="rounded-md w-full"
            alt="coupon instruction image"
          />
          <div className="p-6">
            <h2 className="text-lg py-4">{t("how_to_find_code")}</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {t("how_to_find_code_text")}
            </p>
            <p className="text-gray-600 text-base py-4 leading-relaxed">
              {t("coupon_applicability")}
            </p>
          </div>
        </div>

        <CouponHowToUse />

        <CouponSteps />
      </div>
    </>
  );
}

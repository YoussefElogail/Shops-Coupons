import { useTranslations } from "next-intl";
import CouponStep from "./CouponStep";

export default function CouponSteps() {
  const t = useTranslations("couponInstruction");

  return (
    <>
      <CouponStep
        stepImg="/images/CouponInstruction/step-1.svg"
        stepTitle={t("apply_promo_code")}
        stepText={t("apply_promo_code_text")}
      />
      <CouponStep
        stepImg="/images/CouponInstruction/step-2.svg"
        stepTitle={t("apply_voucher_code")}
        stepText={t("apply_voucher_code_text")}
      />
      <CouponStep
        stepImg="/images/CouponInstruction/step-3.svg"
        stepTitle={t("meet_order_value")}
        stepText={t("meet_order_value_text")}
      />
    </>
  );
}

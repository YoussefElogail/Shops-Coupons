import { ICoupon } from "@/app/cors/interfaces/icoupon";
import { useTranslations } from "next-intl";
import CouponFlags from "./CouponFlags";
import CouponCode from "./CouponCode";
import { IStore } from "@/app/cors/interfaces/istore";

export default function StoreCoupon({
  coupon,
  store,
}: {
  coupon: ICoupon;
  store: IStore;
}) {
  const t = useTranslations("storeCoupon");

  return (
    <div className="box-layout col-span-12 grid grid-cols-12 gap-4">
      <div className="md:col-span-3 flex md:flex-col justify-between text-center col-span-12 text-red-600 font-bold border-black border p-4  rounded-lg shadow-gray-500 shadow-lg">
        <h6 className="text-red-600 ">{coupon.title}</h6>
        <h6>{t("coupon")}</h6>
      </div>
      <div className="md:col-span-9 grid grid-cols-12 col-span-12 gap-4">
        <div className="md:col-span-7 col-span-12 font-extrabold">
          {coupon.title}
        </div>
        <div className="md:col-span-7 col-span-12  text-center">
          <CouponFlags flagCode={coupon.flag_code} />
        </div>
        <div className="md:col-span-5 col-span-12  text-center">
          <CouponCode code={coupon.code} store={store} />
        </div>
      </div>
    </div>
  );
}

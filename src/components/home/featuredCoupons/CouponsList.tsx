// app/CouponList.tsx
import { ICoupon } from "@/app/cors/interfaces/icoupon";
import CouponCard from "@/components/cards/CouponCard";
import { useFeaturedCoupons } from "@/app/cors/Services/Coupons";
import { getLocale } from "next-intl/server";

export default async function CouponsList() {
  const locale = await getLocale();
  const featuredCoupons: ICoupon[] = await useFeaturedCoupons(locale);
  return (
    <div className="grid grid-cols-12 gap-3">
      {featuredCoupons.map((coupon) => (
        <div
          className="bg-white shadow-md rounded-lg p-4 xl:col-span-3 lg:col-span-4 md:col-span-6  col-span-12"
          key={coupon.id}
        >
          <CouponCard coupon={coupon} />
        </div>
      ))}
    </div>
  );
}

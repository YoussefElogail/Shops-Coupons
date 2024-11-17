// app/CouponList.tsx
import { ICoupon } from "@/app/cors/interfaces/icoupon";
import CouponCard from "@/components/cards/CouponCard";
import { GetAllCoupons } from "@/app/cors/Services/Coupons";
import { getLocale } from "next-intl/server";


export default async function CouponsList({ page }: { page: number }) {
  const locale = await getLocale();
  const { data: coupons } = await GetAllCoupons(locale, page || 1);
  return (
    <div className="grid grid-cols-12 gap-3">
      {coupons.map((coupon: ICoupon) => (
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

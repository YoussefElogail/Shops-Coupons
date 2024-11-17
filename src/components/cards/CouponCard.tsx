import React from "react";
import { Flame, ShieldCheck, ShieldOff } from "lucide-react";
import { useTranslations } from "next-intl";
import { ICoupon } from "@/app/cors/interfaces/icoupon";
import Image from "next/image";
import CouponBoxText from "./CouponBoxText";
import { Link } from "@/i18n/routing";
type CouponCardProps = {
  coupon: ICoupon;
};

export default function CouponCard({ coupon }: CouponCardProps) {
  const t = useTranslations("card");

  const renderStatusButton = (status: boolean | string) => {
    const isActive = !!status;
    return (
      <button
        className={`flex items-center ${
          isActive ? "text-green-600" : "text-red-600"
        } gap-2`}
      >
        {isActive ? <ShieldCheck /> : <ShieldOff />}
        {isActive ? t("active") : t("inactive")}
      </button>
    );
  };

  return (
    <>
      <Link
        href={`/discount-codes/${coupon.store.id}`}
        className="block w-full text-center"
      >
        <Image
          height={100}
          width={300}
          className="w-full h-24 object-contain"
          alt={coupon.title}
          src={coupon.store.image}
        />
      </Link>
      <div className="mt-4">
        <p className="text-sm capitalize">
          {t("discountCodeFor") + " " + coupon.store.name}
        </p>
        <div className="mt-2 font-bold flex items-center text-sm">
          {coupon.title}
          <Flame className="ml-2 text-orange-400" />
        </div>
        <div className="mt-2 font-bold">
          {renderStatusButton(coupon.status)}
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <Link
          href={`/discount-codes/${coupon.store.id}`}
          className="w-full text-center bg-gradient-to-r from-red-500 to-orange-400 text-black py-2 font-bold rounded-md hover:from-red-600 hover:to-orange-500"
        >
          {t("goToStore")}
        </Link>
        <CouponBoxText code={coupon.code} />
      </div>
    </>
  );
}

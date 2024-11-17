import React from "react";
import { Flame, ShieldCheck, ShieldOff } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IStore } from "@/app/cors/interfaces/istore";
import { Link } from "@/i18n/routing";
type StoreCardProps = {
  store: IStore;
};
export default function StoreCard({ store }: StoreCardProps) {
  const t = useTranslations("card");
  const renderStatusButton = (status: boolean | string) => {
    const isActive = status === "active" || status === true;
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
        href={`/discount-codes/${store.id}`}
        className="block w-full text-center"
      >
        <Image
          height={100}
          width={300}
          className="w-full h-24 object-contain"
          alt={store.title}
          src={store.image}
          loading="eager"
        />
      </Link>
      <div className="mt-4">
        <p className="text-sm capitalize">
          {t("discountCodeFor") + " " + store.name}
        </p>
        <div className="mt-2 font-bold flex items-center text-sm">
          {store.discount}
          <Flame className="ml-2 text-orange-400" />
        </div>
        <div className="mt-2 font-bold">
          {renderStatusButton(store.status)}
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <Link
          href={`/discount-codes/${store.id}`}
          className="w-full text-center bg-gradient-to-r from-red-500 to-orange-400 text-black py-2 font-bold rounded-md hover:from-red-600 hover:to-orange-500"
        >
          {t("goToStore")}
        </Link>
      </div>
    </>
  );
}

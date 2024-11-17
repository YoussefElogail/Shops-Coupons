"use client";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { Link } from "@/i18n/routing";
import { IStore } from "@/app/cors/interfaces/istore";

const copyText = (entryText: string) => {
  navigator.clipboard.writeText(entryText);
};

export default function CouponCode({
  code,
  store,
}: {
  code: string;
  store: IStore;
}) {
  const t = useTranslations("storeCoupon");
  const [isCopied, setCopy] = useState<boolean>(false);

  const handleCopyClick = useCallback(() => {
    if (code) {
      copyText(code);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 3000);
    }
  }, [code]);

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <div className="border border-gray-300 bg-gray-100 font-bold py-4 px-10 text-lg cursor-text rounded">
          {code}
        </div>
        <button
          className="border border-red-500 text-red-500 font-bold p-4  rounded"
          onClick={handleCopyClick}
        >
          {t("copy")}
        </button>
      </div>
      {isCopied ? (
        <div className="text-center text-green-600 font-bold flex justify-center items-center">
          ✔ {t("copied")}
        </div>
      ) : (
        <Link
          href={store.link}
          target="_blank"
          className="text-center text-[#0558A0] "
        >
          {t("copy_instructions")}
          <h4 className=" my-3 flex justify-center items-center gap-2">
            {t("go")} {store.name} <Send size={20} />
          </h4>
        </Link>
      )}
    </>
  );
}

import Image from "next/image";
import { useTranslations } from "next-intl";

type flag = {
  code: string;
  image: string;
};
const flags: flag[] = [
  { code: "EG", image: "/images/flags/eg.svg" },
  { code: "SA", image: "/images/flags/sa.svg" },
  { code: "QA", image: "/images/flags/qa.svg" },
  { code: "OM", image: "/images/flags/om.svg" },
  { code: "KW", image: "/images/flags/kw.svg" },
  { code: "AE", image: "/images/flags/ae.svg" },
  { code: "BH", image: "/images/flags/bh.svg" },
  { code: "WW", image: "/images/flags/ww.svg" },
];
export default function CouponFlags({ flagCode }: { flagCode: string[] }) {
  const t = useTranslations("storeCoupon");
  console.log(flagCode)
  const couponCountryList = flagCode?.map((code) => {
    const flag = flags.find((f) => f.code === code);
    return (
      flag && (
        <Image
          key={flag.code}
          src={flag.image}
          className="rounded-full m-2"
          width={30}
          height={30}
          alt={`${flag.code} flag`}
        />
      )
    );
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-bold text-red-600 capitalize py-2">
        {t("available")}
      </div>
      <div className="flex justify-center flex-wrap">{couponCountryList}</div>
    </div>
  );
}

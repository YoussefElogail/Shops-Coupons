import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
interface StoreSiteProps {
  link: string;
  image: string;
  discount: string;
  title: string;
}
export default function StoreSite({link,image,discount,title}:StoreSiteProps) {
    const t=useTranslations("store")
  return (
    <>
      <Link href={link} target="_blank" className="mx-auto inline-block ">
        <Image
          width={210}
          height={210}
          src={`${image}`}
          alt={`${title}`}
          className="rounded-md"
        />
      </Link>
      <h4 className="my-3 text-[#F15043] text-lg font-bold">
        {discount} 
      </h4>
      <Link href={link} target="_blank">
        <Button className="bg-gradient-to-r from-red-500 to-orange-400 px-16 py-8 rounded-3xl uppercase text-black font-extrabold text-lg">
          {t("storeSite")}
        </Button>
      </Link>
    </>
  );
}

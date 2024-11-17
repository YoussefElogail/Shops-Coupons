import { ChevronLeft, ChevronRight, HouseIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

interface TitleProps {
  title: string;
  name: string;
}
export default function Title({ title, name }: TitleProps) {
  const t = useTranslations("store");
  const locale = useLocale();

  return (
    <>
      {" "}
      <h2 className="flex gap- items-center ">
        <HouseIcon size={20} />
        {locale == "en" ? <ChevronRight size={20} /> : <ChevronLeft />}
        {t("storeTitle")}
        {locale == "en" ? <ChevronRight size={20} /> : <ChevronLeft />}
        {name}
      </h2>
      <h3 className="text-3xl font-extrabold mt-4">{title}</h3>
    </>
  );
}

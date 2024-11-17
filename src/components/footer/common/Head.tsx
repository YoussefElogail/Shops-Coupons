import { useTranslations } from "next-intl";

export default function Head({ title }: { title: string }) {
    const t = useTranslations("footer");
    return (
    <>
      <h3 className="text-[#F69314] text-2xl font-bold my-3">{t(title)}</h3>
    </>
  );
}

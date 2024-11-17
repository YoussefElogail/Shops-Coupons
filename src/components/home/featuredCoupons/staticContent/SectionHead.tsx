import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function SectionHead({
  titleKey,
  linkKey,
  linkHref,
}: {
  titleKey: string;
  linkKey: string;
  linkHref: string;
}) {
  const t = useTranslations("sectionHead");

  return (
    <div className="flex items-center gap-3 lg:text-2xl text-lg my-5 bg-white rounded-md shadow-md p-4">
      <h2 className="text-gray-900 font-semibold">{t(titleKey)}</h2>

      <Link
        className="font-bold text-[#E03224] hover:underline duration-500"
        href={`${linkHref}`}
        aria-label={t(linkKey)}
      >
        {t(linkKey)}
      </Link>
    </div>
  );
}

import { ICategory } from "@/app/cors/interfaces/icategory";
import { GetStoresByCategory } from "@/app/cors/Services/Categories";
import { getLocale, getTranslations } from "next-intl/server";
export default async function SectionHead({
  categoryId,

}: {
  categoryId: string;
}) {
  const locale = await getLocale();

  const t = await getTranslations({ locale, namespace: "category" });
  const category: ICategory = await GetStoresByCategory(locale, categoryId);

  return (
    <>
      <h2 className="capitalize text-4xl text-center my-7">
        {t("mainTitle")} {category.name?.replace("-", " ")}
      </h2>
      <div className="bg-white rounded-md shadow-lg p-4 my-4">
        <h3 className="text-xl font-bold my-3">{t("secondTitle")}</h3>
        <p>{t("description")}</p>
      </div>
    </>
  );
}

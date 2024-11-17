import { ICategory } from "@/app/cors/interfaces/icategory";
import LinkLayout from "./LinkLayout";
import { useLocale, useTranslations } from "next-intl";
import MoreCategories from "./MoreCategories";
import { formatHref } from "@/lib/utils";
import { getLocale } from "next-intl/server";
import { GetCategories } from "@/app/cors/Services/Categories";
export default async function DynamicLinks() {
  const locale = await getLocale();

  const categoriesData: ICategory[] = await GetCategories(locale);
  const categories: ICategory[] = categoriesData.slice(0, 8);
  const moreCategories: ICategory[] = categoriesData.slice(8);
  return (
    <>
      {categories.map((category) => {
        return (
          <LinkLayout
            key={category.id}
            title={category.name}
            href={`/${formatHref(category.name)}/${category.id}`}
          />
        );
      })}
      {moreCategories.length > 0 && (
        <MoreCategories moreCategories={moreCategories} />
      )}
    </>
  );
}

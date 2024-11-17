import { useTranslations } from "next-intl";
import LinkLayout from "./LinkLayout";
import { GetCategories } from "@/app/cors/Services/Categories";
import { ICategory } from "@/app/cors/interfaces/icategory";
import { formatHref } from "@/lib/utils";
import { getLocale } from "next-intl/server";

export default async function DynamicLinks() {
  const locale = await getLocale();
  const categories: ICategory[] = await GetCategories(locale);
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
    </>
  );
}

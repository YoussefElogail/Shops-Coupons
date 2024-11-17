import { ICategory } from "@/app/cors/interfaces/icategory";
import { GetStoresByCategory } from "@/app/cors/Services/Categories";
import CardSkeleton from "@/components/cards/skeleton/CardSkeleton";
import SkeletonLoader from "@/components/cards/skeleton/SkeletonLoader";
import SectionHead from "@/components/category/sectionHead";
import StoresList from "@/components/category/StoresList";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Suspense } from "react";
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const locale = await getLocale();
  const category: ICategory = await GetStoresByCategory(locale, params.id);
  const t = await getTranslations({ locale, namespace: "home" });
  const baseUrl = "https://shops-coupons.com";
  return {
    title: category?.meta_title,
    description: category?.meta_description,
    keywords: category?.meta_keyword,
    openGraph: {
      images: [`${baseUrl}${t("meta.openGraph")}`],
    },
  };
};
export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section className="my-5">
      <SectionHead categoryId={params.id} />
      <Suspense
        fallback={
          <SkeletonLoader>
            <CardSkeleton />
          </SkeletonLoader>
        }
      >
        <StoresList categoryId={params.id} />
      </Suspense>
    </section>
  );
}

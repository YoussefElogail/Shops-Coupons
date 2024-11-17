// app/CouponsPagePage.tsx
import CouponsList from "@/components/AllCoupons/CouponsList";
import { PaginationComponent } from "@/components/Coupon-Store-Common/Pagination";
import SectionHead from "@/components/Coupon-Store-Common/SectionHead";
import CardSkeleton from "@/components/cards/skeleton/CardSkeleton";
import SkeletonLoader from "@/components/cards/skeleton/SkeletonLoader";
import { Suspense } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GetAllStores } from "@/app/cors/Services/Stores";
import StoresList from "@/components/AllStores/StoresList";
export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "stores" });
  const baseUrl = "https://shops-coupons.com";
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"), 
    openGraph: {
      images: [`${baseUrl}${t("meta.openGraph")}`],
    },
  };
};
export default async function StorePage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const locale = await getLocale();
  const { current_page, last_page } = await GetAllStores(locale);
  console.log(current_page)

  return (
    <section className="my-7">
      <SectionHead
        mainTitleKey="mainTitle"
        secondTitleKey="secondTitle"
        descriptionKey="description"
        section="stores"
      />
      <Suspense
        fallback={
          <SkeletonLoader>
            <CardSkeleton />
          </SkeletonLoader>
        }
      >
        <StoresList page={Number(searchParams.page)} />
      </Suspense>

      <PaginationComponent currentPage={current_page} lastPage={last_page} />
    </section>
  );
}

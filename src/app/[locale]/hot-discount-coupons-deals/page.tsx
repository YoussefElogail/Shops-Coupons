// app/CouponsPagePage.tsx
import CouponsList from "@/components/AllCoupons/CouponsList";
import { PaginationComponent } from "@/components/Coupon-Store-Common/Pagination";
import SectionHead from "@/components/Coupon-Store-Common/SectionHead";
import CardSkeleton from "@/components/cards/skeleton/CardSkeleton";
import SkeletonLoader from "@/components/cards/skeleton/SkeletonLoader";
import { Suspense } from "react";
import { GetAllCoupons } from "@/app/cors/Services/Coupons";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "coupons" });
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
export default async function CouponsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const locale = await getLocale();
  const { current_page, last_page } = await GetAllCoupons(locale);

  return (
    <section className="my-7">
      <SectionHead
        mainTitleKey="mainTitle"
        secondTitleKey="secondTitle"
        descriptionKey="description"
        section="coupons"
      />
      <Suspense
        fallback={
          <SkeletonLoader>
            <CardSkeleton />
          </SkeletonLoader>
        }
      >
        <CouponsList page={Number(searchParams.page)} />
      </Suspense>

      <PaginationComponent currentPage={current_page} lastPage={last_page} />
    </section>
  );
}

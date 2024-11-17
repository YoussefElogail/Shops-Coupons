import { IStore } from "@/app/cors/interfaces/istore";
import { GetSingleStore } from "@/app/cors/Services/Stores";
import UserRegisterSkeleton from "@/components/home/userRegister/UserRegisterSkeleton";
import StoreCoupon from "@/components/SingleStore/StoreCoupon";
import StoreSite from "@/components/SingleStore/StoreSite";
import Title from "@/components/SingleStore/Title";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
const UserRegister = lazy(
  () => import("@/components/home/userRegister/UserRegister") // Lazy load the registration section
);

import { lazy, Suspense } from "react";
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const locale = await getLocale();
  const store: IStore = await GetSingleStore(locale, params.id);
  return {
    title: store.meta?.meta_title,
    description: store.meta?.meta_description,
    keywords: store.meta?.meta_keyword,
    openGraph: {
      images: [`${store.image}`],
    },
  };
};
export default async function SingleStore({
  params,
}: {
  params: { id: string };
}) {
  const locale = await getLocale();
  const store = await GetSingleStore(locale, params.id);
  return (
    <section className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 col-span-12 space-y-4">
          <div className="box-layout">
            <Title title={store.title} name={store.name} />
          </div>

          <div className=" grid grid-cols-12 gap-3 ">
            {store.coupons.map((coupon) => {
              return (
                <StoreCoupon key={coupon.code} coupon={coupon} store={store} />
              );
            })}
          </div>
          <div
            className="box-layout"
            dangerouslySetInnerHTML={{ __html: store.description }}
          ></div>
        </div>
        <div className="md:col-span-4 col-span-12 space-y-4  ">
          <div className="box-layout text-center ">
            <StoreSite
              link={store.link}
              image={store.image}
              title={store.title}
              discount={store.discount}
            />
          </div>
          <div className="box-layout">
            <Suspense fallback={<UserRegisterSkeleton />}>
              <UserRegister />
            </Suspense>
          </div>
          <div
            className="box-layout"
            dangerouslySetInnerHTML={{ __html: store.about }}
          ></div>
        </div>
      </div>
    </section>
  );
}

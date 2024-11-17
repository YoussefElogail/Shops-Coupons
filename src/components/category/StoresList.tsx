import { ICategory } from "@/app/cors/interfaces/icategory";
import { GetStoresByCategory } from "@/app/cors/Services/Categories";
import StoreCard from "@/components/cards/StoreCard";
import { getLocale } from "next-intl/server";
export default async function StoresList({
  categoryId,
}: {
  categoryId: string;
}) {
  const locale = await getLocale();
  const category: ICategory = await GetStoresByCategory(locale, categoryId);
  return (
    <div className="grid grid-cols-12 gap-3">
      {category.stores?.map((store) => (
        <div
          className="bg-white shadow-md rounded-lg p-4 xl:col-span-3 lg:col-span-4 md:col-span-6  col-span-12"
          key={store.id}
        >
          <StoreCard store={store} />
        </div>
      ))}
    </div>
  );
}


import { getLocale } from "next-intl/server";
import { GetAllStores } from "@/app/cors/Services/Stores";
import { IStore } from "@/app/cors/interfaces/istore";
import StoreCard from "../cards/StoreCard";

export default async function StoresList({ page }: { page: number }) {
  const locale = await getLocale();
  const { data: stores } = await GetAllStores(locale, page || 1);
  return (
    <div className="grid grid-cols-12 gap-3">
      {stores.map((store: IStore) => (
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

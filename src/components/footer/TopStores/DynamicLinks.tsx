import { useTranslations } from "next-intl";
import LinkLayout from "../common/LinksLayout";
import { useFeaturedStores } from "@/app/cors/Services/Stores";
import { IStore } from "@/app/cors/interfaces/istore";
import { getLocale } from "next-intl/server";

export default async function DynamicLinks() {
  const locale=await getLocale()
  const stores: IStore[] = await useFeaturedStores(locale);
  return (
    <>
      {stores.slice(0,5).map((store) => {
        return (
          <LinkLayout
            key={store.id}
            title={store.name}
            href={`/discount-codes/${store.id}`}
          />
        );
      })}
    </>
  );
}

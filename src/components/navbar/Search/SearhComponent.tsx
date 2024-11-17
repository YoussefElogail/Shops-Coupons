"use client";
import { fetchSearchStoresData } from "@/app/cors/Services/Stores";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { IStore } from "@/app/cors/interfaces/istore";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function SearchComponent() {
  const [searchParam, setSearchParam] = useState("");
  const [stores, setStores] = useState<IStore[]>([]);
  const t = useTranslations("searchBar");
  const locale = useLocale();
  const fetchStores = async (query: string) => {
    if (!query.trim()) {
      setStores([]);
      return;
    }
    try {
      const data = await fetchSearchStoresData(query, locale);
      setStores(data);
    } catch (error) {
      console.error("Error fetching stores:", error);
    }
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchStores(searchParam);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchParam]);

  return (
    <form className="relative" onSubmit={(e) => e.preventDefault()}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground cursor-pointer" />
      </div>
      <Input
        type="search"
        placeholder={t("placeHolder")}
        className="w-full pl-10 pr-4"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
      />
      <Button type="submit" className="sr-only">
        {t("searchButton")}
      </Button>
      {stores?.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
          <div className="p-2 divide-y-2">
            {stores.map((store) => (
              <SearchResult
                key={store.id}
                store={store}
                setSearchParam={setSearchParam}
              />
            ))}
          </div>
        </div>
      )}
    </form>
  );
}

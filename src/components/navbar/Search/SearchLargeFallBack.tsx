import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SearchLargeFallBack() {
  const t = useTranslations("searchBar");

  return (
    <form className="relative" >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground cursor-pointer" />
      </div>
      <Input
        type="search"
        placeholder={t("placeHolder")}
        className="w-full pl-10 pr-4"
      />
      <Button type="submit" className="sr-only">
        {t("searchButton")}
      </Button>
    </form>
  );
}

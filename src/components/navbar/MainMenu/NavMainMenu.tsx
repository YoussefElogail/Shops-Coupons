import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../../ui/button";
import StaticLinks from "./StaticLinks";
import DynamicLinks from "./DynamicLinks";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";
export default function NavMainMenu() {
  const t = useTranslations("navigationLinks");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="overflow-auto">
        <SheetHeader>
          <SheetTitle>{t("menu")}</SheetTitle>
        </SheetHeader>
        <ul className="mt-4 space-y-4">
          <StaticLinks />
          <Suspense fallback={<Loading />}>
            <DynamicLinks />
          </Suspense>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

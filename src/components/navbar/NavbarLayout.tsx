import LanguageSwitcher from "./Language/LanguageSwitcher";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const NavMainMenu = lazy(() => import("./MainMenu/NavMainMenu"));
const SearchLarge = lazy(() => import("./Search/SearchLarge"));
import NavCategories from "./Categories/NavCategories";
import { lazy, Suspense } from "react";
import Loading from "@/app/[locale]/loading";
import SearchSmall from "./Search/SearchSmall";
import SearchFallBck from "./Search/SearchLargeFallBack";
import SearchSmallFallBack from "./Search/SearchSmallFallBack";
export default function NavbarLayout() {
  const t = useTranslations("navImage");
  return (
    <header>
      <nav className="bg-[#212121] shadow-md text-white">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <Image
                    src={t("logo")}
                    width={151}
                    height={51}
                    alt="Logo"
                    className="aspect-square	"
                  />
                </Link>
              </div>
            </div>
            <Suspense fallback={<SearchFallBck />}>
              <div className="hidden md:block flex-1 max-w-md mx-4 bg-white text-black rounded">
                <SearchLarge />
              </div>
            </Suspense>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <div className="md:hidden">
                <Suspense fallback={<SearchSmallFallBack />}>
                  <SearchSmall />
                </Suspense>
              </div>
              <div className="md:hidden">
                <Suspense fallback={<Loading />}>
                  <NavMainMenu />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <NavCategories />
    </header>
  );
}

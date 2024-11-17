import { ICategory } from "@/app/cors/interfaces/icategory";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/routing";
import { MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MoreCategories({
  moreCategories,
}: {
  moreCategories: ICategory[];
}) {
    const t =useTranslations("navigationLinks")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <li className="mx-2 flex items-center text-white text-md font-bold  cursor-pointer">
         {t("more")}
          <MoreHorizontal className="ml-1 h-4 w-4" />
        </li>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {moreCategories.map((category) => (
          <DropdownMenuItem key={category.name} className="p-2">
            <Link href={`/${category.name}`}>{category.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

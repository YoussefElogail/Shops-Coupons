import { useTranslations } from "next-intl";
import LinkLayout from "../common/LinksLayout";

export default function StaticLinks() {
  const t = useTranslations("navigationLinks");
  const staticLinks = [
    { title: t("home"), href: "/" },
    { title: t("allStores"), href: "/discount-codes" },
    { title: t("allCoupons"), href: "/hot-discount-coupons-deals" },
  ];
  return (
    <>
      {staticLinks.map((link) => {
        return (
          <LinkLayout key={link.href} title={link.title} href={link.href} />
        );
      })}
    </>
  );
}

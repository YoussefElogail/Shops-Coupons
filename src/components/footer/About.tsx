import { useTranslations } from "next-intl";
import Head from "./common/Head";

export default function About() {
  const t = useTranslations("footer");
  return (
    <>
      <Head title="about.title" />
      <p className="text-white text-sm">{t("about.description")}</p>
    </>
  );
}

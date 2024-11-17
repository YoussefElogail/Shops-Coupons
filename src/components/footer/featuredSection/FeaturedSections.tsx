import { useTranslations } from "next-intl";
import Head from "../common/Head";
import StaticLinks from "./StaticLink";

export default function FeaturedSection() {
  return (
    <>
      <Head title="featuredSection.title" />
      <ul className="space-y-4">
        <StaticLinks />
      </ul>
    </>
  );
}

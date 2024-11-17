import { Suspense } from "react";
import Head from "../common/Head";
import DynamicLinks from "./DynamicLinks";
import Loading from "@/app/[locale]/loading";

export default function TopStores() {
  return (
    <>
      <Head title="topStores" />
      <ul className="space-y-4">
        <Suspense fallback={<Loading />}>
          <DynamicLinks />
        </Suspense>
      </ul>
    </>
  );
}

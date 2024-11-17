import StaticLinks from "./StaticLinks";
import DynamicLinks from "./DynamicLinks";
import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";

export default function NavCategories() {
  return (
    <div className="bg-custom-gradient hidden md:block ">
      <div className="container">
        <div className="flex items-center h-12 text-sm ">
          <ul className=" flex ">
            <StaticLinks />
              <DynamicLinks />
          </ul>
        </div>
      </div>
    </div>
  );
}

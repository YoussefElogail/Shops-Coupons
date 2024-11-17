import { ReactNode } from "react";

function SkeletonLoader({children}:{children:ReactNode}) {
  return (
    <div className="grid grid-cols-12 gap-3">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12"
            key={index}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
export default SkeletonLoader;

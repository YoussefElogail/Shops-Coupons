"use client";
import ReactPaginate from "react-paginate";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export function PaginationComponent({
  currentPage,
  lastPage,
}: {
  currentPage: number;
  lastPage: number;
}) {
  const t = useTranslations("pagination");
  const searchParam = useSearchParams();
  const router = useRouter();
  const [currentPageState, setCurrentPage] = useState(currentPage);

  useEffect(() => {
    const pageFromUrl = Number(searchParam.get("page")) || 1;
    if (pageFromUrl >= 1 && pageFromUrl <= lastPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [searchParam, lastPage]);


  const handlePageClick = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1; 
    router.push(`?page=${newPage}`);
    setCurrentPage(newPage);
  };
  return (
    <div className="flex justify-center mt-4 shadow-lg bg-white p-3 rounded-md">
      <ReactPaginate
        previousLabel={t("previous")}
        nextLabel={t("next")}
        breakLabel="..."
        breakClassName="text-gray-500"
        pageCount={lastPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="flex flex-wrap justify-center space-x-2 sm:space-x-4"
        pageClassName="px-3 sm:px-4 py-2 text-base sm:text-lg border rounded-md hover:bg-gray-100 text-gray-700"
        previousClassName="px-3 sm:px-4 py-2 text-base sm:text-lg border rounded-md hover:bg-gray-100 text-gray-700"
        nextClassName="px-3 sm:px-4 py-2 text-base sm:text-lg border rounded-md hover:bg-gray-100 text-gray-700"
        activeClassName="bg-blue-500 text-white"
        disabledClassName="opacity-50 cursor-not-allowed"
        forcePage={currentPageState - 1} 
      />
    </div>
  );
}

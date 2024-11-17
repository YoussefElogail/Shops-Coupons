import { IStore } from "@/app/cors/interfaces/istore";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function SearchResult({
  store,
  setSearchParam,
}: {
  store: IStore;
  setSearchParam: (param: string) => void;
}) {
  return (
    <>
      {" "}
      <Link
        href={`/discount-codes/${store.id}`}
        className="flex items-center py-4 hover:bg-slate-100 "
        onClick={() => {
          setSearchParam("");
        }}
      >
        <Image
          width={"80"}
          height={"80"}
          src={store.image}
          alt={store.discount}
        />
        <h3 className="flex flex-col text-lg">
          {store.name}
          <span> {store.discount}</span>
        </h3>
      </Link>
    </>
  );
}

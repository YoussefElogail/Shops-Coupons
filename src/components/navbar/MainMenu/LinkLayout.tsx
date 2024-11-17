import { Link } from "@/i18n/routing";

export default function LinkLayout({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li className="text-gray-700 hover:text-gray-900 hover:bg-slate-200 rounded duration-150   ">
      <Link href={href} className="block p-1 font-bold text-lg" >
        {title}
      </Link>
    </li>
  );
}

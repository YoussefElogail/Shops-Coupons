import { Link } from "@/i18n/routing";

export default function LinkLayout({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li className="text-white">
      <Link href={href} className="block p-1 font-bold text-lg"  scroll={true}>
        {title}
      </Link>
    </li>
  );
}

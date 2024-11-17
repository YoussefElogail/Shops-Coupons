import { Link } from "@/i18n/routing";

export default function LinkLayout({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li className="mx-2" >
      <Link
        href={href}
        className="font-bold block text-md text-black  "
      >
        {title}
      </Link>
    </li>
  );
}

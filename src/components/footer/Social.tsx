import * as React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faTelegram,
  faTiktok,
  faSnapchat,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  const t = useTranslations("footer");

  const socialLinks = [
    {
      href: "https://www.instagram.com/shops.coupon/?igsh=dGJmc3Zpcm1ncTl6",
      label: "Instagram",
      icon: faInstagram,
    },
    {
      href: "https://twitter.com/i/flow/login?redirect_after_login=%2Fshops_coupon_",
      label: "Twitter",
      icon: faTwitter,
    },
    {
      href: "https://www.facebook.com/shops.coupon.codes?mibextid=ZbWKwL",
      label: "Facebook",
      icon: faFacebook,
    },
    {
      href: "https://t.me/shops_couponz",
      label: "Telegram",
      icon: faTelegram,
    },
    {
      href: "https://www.tiktok.com/@shopscoupons?_t=8k81TXP1Pd9&_r=1",
      label: "TikTok",
      icon: faTiktok,
    },
    {
      href: "https://www.snapchat.com/add/shops_coupons?share_id=ApMe0YNX2TA&locale=en-US",
      label: "Snapchat",
      icon: faSnapchat,
    },
    {
      href: "https://www.youtube.com/@shopscoupons",
      label: "YouTube",
      icon: faYoutube,
    },

  ];

  return (
    <div className="text-center ">
      <Link href="/">
        <div className="flex justify-center mb-4">
          <Image
            src={t("social.logo")}
            width={151}
            height={51}
            alt="Logo"
            className="h-14"
          />
        </div>
      </Link>
      <p className="font-bold text-white mb-4">{t("social.followUs")}</p>
      <ul className="flex justify-center flex-wrap gap-7 ">
        {socialLinks.map((link) => (
          <li key={link.label} className=" p-3 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white duration-300">
            <Link
              target="_blank"
              href={link.href}
              aria-label={`Follow us on ${link.label}`}
            >
              <FontAwesomeIcon icon={link.icon} className="w-8 h-8 rounded-full" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

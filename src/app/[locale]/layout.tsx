import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NavbarLayout from "@/components/navbar/NavbarLayout";
import FooterLayout from "@/components/footer/FooterLayout";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "shops coupon",
    url: "https://shops-coupons.com",
    logo: "/images/logo/Logo_En.svg",
    sameAs: [
      "https://www.facebook.com/shop.coupon.codes?mibextid=ZbWKwL",
      "https://twitter.com/i/flow/login?redirect_after_login=%2Fshopss_coupon_",
      "https://www.instagram.com/shop.coupon/?igsh=dGJmc3Zpcm1ncTl6",
      "https://www.snapchat.com/add/shop_coupons?share_id=ApMe0YNX2TA&locale=en-US",
      "https://www.youtube.com/@shop-coupons",
      "https://www.tiktok.com/@shopcoupons?_t=8k81TXP1Pd9&_r=1",
      "https://t.me/shop_couponz",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "01024856345",
      contactType: "Customer Service",
      areaServed: "EG",
      availableLanguage: ["English", "Arabic"],
    },
  };
  return (
    <html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
      <link rel="icon" href="/images/title/favicon.ico" sizes="any" />
      <GoogleTagManager gtmId="UA-137368123-1" />
      <body className={tajawal.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="bg-gray-100 flex justify-between flex-col min-h-screen">
            <NavbarLayout />
            <div className="container">{children}</div>
            <FooterLayout />
          </div>
          <Toaster />
        </NextIntlClientProvider>
        {/* Adding JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      <GoogleAnalytics gaId="UA-137368123-1" />
    </html>
  );
}

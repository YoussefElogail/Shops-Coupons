import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coupon.kyanlabs.com",
        port: "",
        pathname: "/uploads/images/**",
        
      },
      {
        protocol: "https",
        hostname: "shops-coupons.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "ayadty.com",
        port: "",
        pathname: "/newcoupon/uploads/images/stores/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

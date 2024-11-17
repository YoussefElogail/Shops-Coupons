import type { MetadataRoute } from "next";
import { GetCategories } from "@/app/cors/Services/Categories";
import { getStoresId } from "@/app/cors/Services/Stores"; // Assuming you have a function to fetch store IDs
import { formatHref } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap[]> {
  const locales = ["ar", "en"];
  const sitemapEntries: any = [];
  locales.forEach((locale) => {
    sitemapEntries.push(
      {
        url: `https://shops-coupons.com/${locale}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `https://shops-coupons.com/${locale}/discount-codes`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://shops-coupons.com/${locale}/hot-discount-coupons-deals`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `https://shops-coupons.com/${locale}/thank-you`,
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 0.5,
      }
    );
  });

  for (const locale of locales) {
    const categoriesData = await GetCategories(locale); // Fetch categories for the current locale

    categoriesData.forEach((category) => {
      sitemapEntries.push({
        url: `https://shops-coupons.com/${locale}/${formatHref(
          category.name
        )}/${category.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  }
  const storesId = await getStoresId();
  console.log(storesId);

  storesId.forEach((id: number) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `https://shops-coupons.com/${locale}/discount-codes/${id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}

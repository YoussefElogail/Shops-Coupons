import { environment } from "../environment/environment";
import { ICoupon } from "../interfaces/icoupon";

const fetchFeaturedCouponsData = async (url: string): Promise<ICoupon[]> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as ICoupon[];
  } catch (error) {
    console.error("Fetching coupons data failed:", error);
    throw error;
  }
};

interface ICouponResponse {
  data: ICoupon[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

const fetchAllCouponsData = async (
  url: string,
  pag: number
): Promise<ICouponResponse> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      data: data?.data as ICoupon[],
      current_page: data?.current_page,
      last_page: data?.last_page,
      per_page: data?.per_page,
      total: data?.total,
    };
  } catch (error) {
    console.error("Fetching coupons data failed:", error);
    throw error;
  }
};

const useFeaturedCoupons = async (lang: string) => {
  try {
    const couponsData = await fetchFeaturedCouponsData(
      `${environment.baseUrl}/coupon-featured/${lang}`
    );
    return couponsData;
  } catch (error) {
    console.error("Error in retrieving coupons data:", error);
    return [];
  }
};
const GetAllCoupons = async (lang: string, page: number = 1) => {
  try {
    const couponsData = await fetchAllCouponsData(
      `${environment.baseUrl}/coupon-user/${lang}?page=${page}`,
      page
    );
    return couponsData as ICouponResponse;
  } catch (error) {
    console.error("Error in retrieving coupons data:", error);
    return {
      data: [],
      current_page: 1,
      last_page: 1,
      per_page: 0,
      total: 0,
    };
  }
};

export { useFeaturedCoupons, GetAllCoupons };

import { environment } from "../environment/environment";
import { ISlider } from "../interfaces/islider";

const fetchSwiperData = async (getSwiperUrl: string): Promise<ISlider[]> => {
  try {
    const response = await fetch(getSwiperUrl, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as ISlider[];
  } catch (error) {
    console.error("Fetching Swiper data failed:", error);
    throw error;
  }
};

const useGetSwiper = async (lang: string) => {
  try {
    const SwiperData = await fetchSwiperData(
      `${environment.baseUrl}/slider-images/${lang}`
    );
    return SwiperData;
  } catch (error) {
    console.error("Error in retrieving Swiper data:", error);
    return [];
  }
};
export default useGetSwiper;

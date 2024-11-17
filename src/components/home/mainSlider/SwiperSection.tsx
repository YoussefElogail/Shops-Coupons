import { ISlider } from "@/app/cors/interfaces/islider";
import useGetSwiper from "@/app/cors/Services/Slider";
import { getLocale } from "next-intl/server";
import MainSlider from "./mainSlider";

export default async function SwiperSection() {
  const locale = await getLocale();
  const swiperData: ISlider[] = await useGetSwiper(locale);

  return <MainSlider images={swiperData} />;

}

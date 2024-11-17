"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ISlider } from "@/app/cors/interfaces/islider";

interface MainSliderProps {
  images: ISlider[];
}

export default function MainSlider({ images }: MainSliderProps) {
  const swiperList = images?.map((swiper, index) => (
    <SwiperSlide key={index}>
      <Image
        src={swiper.image}
        width={948}
        height={332}
        alt="Hot offer Image"
        priority={true}
        className="w-full"
      />
    </SwiperSlide>
  ));
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={images.length > 1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {swiperList}
    </Swiper>
  );
}

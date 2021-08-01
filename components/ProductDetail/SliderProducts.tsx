import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination]);

export default function SliderProducts() {
  const slides = [];

  for (let i = 1; i < 6; i++) {
    slides.push(
      <SwiperSlide key={i + 1}>
        <div className="text-center">
          <img
            className="hover:cursor-pointer"
            src={"/images/products/12-noi" + i + ".jpg"}
            alt="Slider images Products"
          />
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper id="main-slider" navigation pagination={{ clickable: true }}>
      {slides}
    </Swiper>
  );
}

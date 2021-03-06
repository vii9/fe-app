import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function SliderComponent() {
  const slides = [];

  for (let i = 0; i < 6; i++) {
    slides.push(
      <SwiperSlide key={i + 1}>
        <img
          className="hover:cursor-pointer"
          src={"/images/slider/" + (i + 1) + ".png"}
          alt="Slider images"
        />
      </SwiperSlide>
    );
  }

  return (
    <div className="max-w-7xl m-auto">
      <div className="flex h-auto mt-2">
        <section className="slider-box w-2/3 sm:hover:shadow-xl">
          <Swiper
            id="main-slider"
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slides}
          </Swiper>
        </section>

        <section className="slider-box-right w-1/3 flex flex-wrap justify-around content-between">
          <img
            className="hover:cursor-pointer rounded-md max-w-full"
            src="/images/slider/999.png"
            alt="Main Logo"
          />
        </section>
      </div>
    </div>
  );
}

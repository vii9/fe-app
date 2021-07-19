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
        <Image
          className="hover:cursor-pointer"
          src={"/images/slider/" + (i + 1) + ".png"}
          alt="Slider images"
          width="853"
          height="320"
        />
      </SwiperSlide>
    );
  }

  return (
    <div className="flex h-80 mt-2">
      <section className="slider-box w-2/3 hover:shadow-xl">
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

      <section className="slider-box-right  w-1/3 flex flex-wrap justify-around content-between">
        <Image
          className="hover:cursor-pointer rounded-md"
          src="/images/slider-right/1.jpg"
          alt="Main Logo"
          width="200"
          height="155"
        />
        <Image
          className="hover:cursor-pointer rounded-md"
          src="/images/slider-right/2.jpg"
          alt="Main Logo"
          width="200"
          height="155"
        />
        <Image
          className="hover:cursor-pointer rounded-md"
          src="/images/slider-right/3.jpg"
          alt="Main Logo"
          width="200"
          height="155"
        />
        <Image
          className="hover:cursor-pointer rounded-md"
          src="/images/slider-right/4.jpg"
          alt="Main Logo"
          width="200"
          height="155"
        />
      </section>
    </div>
  );
}

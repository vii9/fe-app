import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function SliderMobileComponent() {
  const slides = [];

  for (let i = 0; i < 6; i++) {
    slides.push(
      <SwiperSlide key={i + 1}>
        <Link href="/auth/login">
          <a>
            <img
              className="hover:cursor-pointer rounded-md"
              src={"/images/slider/" + (i + 1) + ".png"}
              alt="Slider images"
            />
          </a>
        </Link>
      </SwiperSlide>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-400 to-purple-500 md:flex md:justify-around">
      <div className=" flex justify-around px-3 pb-3 sm:h-auto md:h-auto md:items-center md:max-w-4xl md:px-10">
        <section className="slider-box w-full rounded-md md:text-center">
          <Swiper
            id="main-slider"
            //   navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slides}
          </Swiper>
        </section>
      </div>
    </div>
  );
}

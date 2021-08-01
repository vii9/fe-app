import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";
import useMediaQueryLarger from "../../utils/useMediaQueryLarger";

SwiperCore.use([Pagination]);

export default function CategoriesComponent() {
  const categoriesSlider = [];

  for (let i = 0; i < 10; i++) {
    categoriesSlider.push(
      <SwiperSlide key={i + 1}>
        <Link href="/auth/register">
          <a>
            <div className="w-20">
              <div className="text-center">
                {/* animate */}
                <img
                  className="sm:hover:cursor-pointer rounded-3xl shadow-3xl hover:-translate-y-0.5 transform transition"
                  src={"/images/categories/" + (i + 1) + ".jpg"}
                  alt="Slider images"
                />
              </div>
              <div className="text-sm text-center h-11 truncated-2line text-gray-700">
                Sách Hay - Yoga more new
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-pink-200 pb-2 lg:max-w-7xl lg:m-auto lg:mt-2">
      <div className="flex justify-between items-center p-3">
        <div className="font-semibold text-gray-600 text-lg">
          Danh Mục Nổi Bật
        </div>
        <div className="text-md flex items-center text-purple-500 font-semibold">
          XEM THÊM <i className="bx bx-chevrons-right text-2xl ml-1"></i>
        </div>
      </div>
      <div className="px-3">
        <Swiper
          id="xmain-slider"
          slidesPerView={useMediaQueryLarger(576) ? 8 : 4}
          spaceBetween={useMediaQueryLarger(370) ? 5 : 20}
        >
          {categoriesSlider}
        </Swiper>
      </div>
    </div>
  );
}

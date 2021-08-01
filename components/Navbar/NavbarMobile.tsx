import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function NavbarMobile() {
  const [showSearch, setShowSearch] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  Router.events.on("routeChangeStart", () => setShowSideBar(false));
  const handleScroll = () => {
    const h = window.scrollY;
    if (h > 52) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
    // console.log("scroll event", window.scrollY);
    // console.log("scroll:", showSearch);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className="bg-gradient-to-r from-green-400 to-purple-500">
      <div
        className={`bg-white/40 backdrop-blur-md w-5/6 h-full z-30 fixed ${
          showSideBar ? " block" : " hidden"
        }`}
      >
        <div
          onClick={() => setShowSideBar(false)}
          className="animate-bounce absolute left-full top-20 text-4xl text-red-500 w-12 h-12 bg-red-200 flex justify-around items-center"
        >
          <i className="bx bx-x-circle animate-spin"></i>
        </div>
        <Link href="/auth/login">
          <div className="flex items-center justify-between border-b-2 border-gray-200">
            <div className="text-gray-600 flex items-center p-4">
              <div className="">
                <i className="bx bx-user-circle text-5xl animate-bounce"></i>
              </div>
              <div className="flex flex-col ml-3">
                <span className="text-lg font-semibold text-purple-500">
                  Đăng Nhập
                </span>
                <span className="">Nhận nhiều ưu đãi hơn</span>
              </div>
            </div>
            <div className="text-purple-500 pr-5">
              <i className="bx bx-right-arrow-alt text-3xl"></i>
            </div>
          </div>
        </Link>

        <div className="mt-2 text-gray-600 font-semibold border-b-2 border-gray-200">
          <div className="flex items-center ml-6 mb-2">
            <i className="bx bxs-home text-3xl animate-pulse text-gray-800"></i>
            <span className="ml-4">Trang Chủ</span>
          </div>
          <div className="flex items-center ml-6 mb-2">
            <i className="bx bx-category text-3xl animate-bounce"></i>
            <span className="ml-4">Danh Sách Ngành Hàng</span>
          </div>
          <div className="flex items-center ml-6 mb-2 relative">
            <i className="bx bx-notification text-3xl"></i>
            <span className="ml-4">Thông Báo</span>
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75 left-4 top-1"></span>
          </div>
          <div className="flex items-center ml-6 mb-2">
            <i className="bx bx-cog text-3xl animate-spin"></i>
            <span className="ml-4">Cài Đặt Chung</span>
          </div>
        </div>

        <div className="mt-2 text-gray-600">
          <div className="flex items-center ml-6 mb-4 text-lg font-semibold">
            KHUYẾN MÃI HOT
          </div>
          <div className="flex items-center ml-6 mb-4">Nita voucher</div>
          <div className="flex items-center ml-6 mb-4">Thông tin cửa hàng</div>
          <div className="flex items-center ml-6 mb-2">
            <i className="bx bx-phone-call text-3xl animate-bounce"></i>
            <span className="ml-4 font-bold">
              Liên Hệ với chúng tôi <br />
              (0985690098)
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-3 pb-1 pt-2">
        <div className="font-semibold text-yellow-100">FREESHIP +</div>
        <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-400">
          NiTA
        </div>
        <Link href="/checkout">
          <div className="shopping-card-box flex hover:cursor-pointer">
            <div className="icon-card-box relative">
              <i className="bx bx-cart text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500"></i>
              <span className="absolute rounded-full w-5 h-5 bg-yellow-400 text-center text-sm font-bold left-5 shadow-md">
                0
              </span>
            </div>
            <span className="text-sm text-yellow-50 pt-4">Giỏ Hàng</span>
          </div>
        </Link>
      </div>

      <div
        className={`${
          showSearch ? "flex " : "hidden "
        } items-center justify-between pr-4 pl-2 pb-2 pt-1 mb-14 fixed top-0 left-0 right-0 bg-gradient-to-r from-green-400 to-purple-500 z-10`}
      >
        <div className="flex items-center w-16">
          <Link href="/auth/register">
            <a className="mx-2">
              <i className="bx bx-left-arrow-alt text-2xl text-yellow-100"></i>
            </a>
          </Link>

          <div
            className="category-box flex hover:cursor-pointer mr-2"
            onClick={() => setShowSideBar(true)}
          >
            <i className="bx bx-category text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-pink-400"></i>
          </div>
        </div>
        <div className="main-search-box flex mt-1 w-full pl-3 pr-2">
          <input
            type="text"
            className="h-9 focus:outline-none pl-2 border rounded-l-md text-sm shadow-md w-full"
            placeholder="Tìm tất cả sản phẩm..."
          />
          <div className="btn-search-box h-9 text-yellow-50 p-1 flex justify-around shadow-md hover:cursor-pointer bg-gray-50 rounded-r-md">
            <i className="bx bx-search-alt text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500 font-bold"></i>
          </div>
        </div>
        <Link href="/checkout">
          <div className="shopping-card-box flex hover:cursor-pointer w-10">
            <div className="icon-card-box relative">
              <i className="bx bx-cart text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500"></i>
              <span className="absolute rounded-full w-4 h-4 bg-yellow-400 text-center text-xs font-bold left-5 shadow-md">
                0
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

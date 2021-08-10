import Image from "next/image";

export default function CheckoutComponent() {
  return (
    <section className='max-w-7xl m-auto'>
      <h2 className="font-bold text-lg mt-4 mb-2 text-gray-600">GIỎ HÀNG</h2>
      <div className="lg:flex ">
        <div className="lg:w-3/4">
          <div className="flex justify-between bg-gray-100 h-8 items-center mb-2 rounded-t-md shadow-sm font-semibold">
            <div className="pl-3 lg:w-80">Thông tin sản phẩm</div>
            <div className='hidden lg:block'>Đơn giá</div>
            <div className='hidden lg:block'>Số Lượng</div>
            <div className='hidden lg:block'>Thành Tiền</div>
            <div>
              <i
                className="bx bx-box text-lg pr-3 hover:cursor-pointer hover:text-red-600"
                title="Xoá tất cả sảm phẩm"
              ></i>
            </div>
          </div>

          <div className="lg:flex justify-between bg-gray-100 lg:h-28 items-center mb-2 rounded-md">
            <div className="pl-3 lg:w-80 flex items-center hover:cursor-pointer">
              <a href="#" className="text-center mr-3">
                <Image
                  className="hover:cursor-pointer"
                  src="/images/products/1.jpg"
                  alt="Slider images"
                  width="200"
                  height="200"
                />
              </a>
              <div className="truncated-3line">
                Bình Giữ Nhiệt Lock&Lock rất bền đẹp, thương hiệu EFRSDFA 10L
                Philips USA 2021 NEW
              </div>
            </div>
            <div className="px-3 py-1">
              <span className="font-bold">
                285.000 đ <br />
                <span className="text-gray-400 line-through">660.000 ₫</span>
              </span>
            </div>
            <div className="px-3 py-1">
              <div className="flex">
                <i className="bx bx-minus text-2xl px-1 border border-gray-300 rounded-l-md hover:cursor-pointer hover:bg-gray-400"></i>
                <input
                  className="w-12 text-center focus:outline-none border-t border-b border-gray-300"
                  type="text"
                  defaultValue="1"
                />
                <i className="bx bx-plus text-2xl px-1 border border-gray-300 rounded-r-md hover:cursor-pointer hover:bg-gray-400"></i>
              </div>
            </div>
            <div className="font-bold text-red-500 px-3 py-1">774.000 đ</div>
            <div className="text-right">
              <i
                className="bx bx-box text-lg pr-3 hover:cursor-pointer hover:text-red-600"
                title="Xoá"
              ></i>
            </div>
          </div>

          <div className="lg:flex justify-between bg-gray-100 lg:h-28 items-center rounded-md">
            <div className="pl-3 lg:w-80 flex items-center hover:cursor-pointer">
              <a href="#" className="text-center mr-3">
                <Image
                  className="hover:cursor-pointer"
                  src="/images/products/3.jpg"
                  alt="Slider images"
                  width="200"
                  height="200"
                />
              </a>
              <div className="truncated-3line">
                Bình Giữ Nhiệt Lock&Lock rất bền đẹp, thương hiệu EFRSDFA 10L
                Philips USA 2021 NEW
              </div>
            </div>
            <div className="px-3 py-1">
              <span className="font-bold">
                285.000 đ <br />
                <span className="text-gray-400 line-through">660.000 ₫</span>
              </span>
            </div>
            <div className="px-3 py-1">
              <div className="flex">
                <i className="bx bx-minus text-2xl px-1 border border-gray-300 rounded-l-md hover:cursor-pointer hover:bg-gray-400"></i>
                <input
                  className="w-12 text-center focus:outline-none border-t border-b border-gray-300"
                  type="text"
                  defaultValue="1"
                />
                <i className="bx bx-plus text-2xl px-1 border border-gray-300 rounded-r-md hover:cursor-pointer hover:bg-gray-400"></i>
              </div>
            </div>
            <div className="font-bold text-red-500 px-3 py-1">774.000 đ</div>
            <div className="text-right">
              <i
                className="bx bx-box text-lg pr-3 hover:cursor-pointer hover:text-red-600"
                title="Xoá"
              ></i>
            </div>
          </div>
        </div>
        <div className="mt-2 lg:mt-0 lg:w-1/4 lg:ml-2">
          <div className=" pt-2 px-3 bg-gray-100 mb-3 rounded-md">
            <div className="flex justify-between">
              <div className="font-semibold text-gray-600">Nita Khuyến Mãi</div>
              <div className="hover:cursor-pointer hover:text-indigo-600">
                <span className="text-gray-500 text-xs">Có thể chọn 2 </span>
                <i className="bx bx-question-mark border w-5 h-5 rounded-full text-center text-xs text-gray-500 shadow-3xl z-10"></i>
              </div>
            </div>
            <div className="text-indigo-500 flex items-center py-2 hover:cursor-pointer">
              <i className="bx bxs-pie-chart-alt-2 text-2xl mr-2"></i>Chọn hoặc nhập Khuyến mãi
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-md shadow-3xl">
            <div className="flex justify-between">
              <div className="text-gray-600">Tạm tính</div>
              <div className="font-bold">1.445.400 đ</div>
            </div>
            <div className="flex justify-between mt-1 pb-6 border-purple-300 border-b">
              <div className="text-gray-600">Giảm giá</div>
              <div className="">0 đ</div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-gray-600 font-semibold">Tổng cộng</div>
              <div className="text-red-600 font-semibold text-lg">1.445.400 đ</div>
            </div>
            <span className="flex text-xs text-gray-400 justify-end">(Đã bao gồm VAT nếu có)</span>
          </div>
          <div className="text-center">
            <button className="text-white mt-6 font-bold bg-red-500 w-80 h-10 text-lg rounded-sm hover:bg-red-700">
              Chọn Mua
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

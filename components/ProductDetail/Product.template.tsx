import Image from "next/image";
import SliderProducts from "./SliderProducts";

export default function ProductComponent() {
  return (
    // h647px  460x640
    <div className="flex h-160">
      <div className="bg-blue-50 w-94">
        <SliderProducts />
        <div className="ads-google">
          <div className="text-center mt-5">
            <Image
              className="hover:cursor-pointer"
              src={"/images/products/ads.png"}
              alt="Slider images Products"
              width="400"
              height="150"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-blue-50 shadow-2xl">
        {/* <div className="border border-purple-500 mt-6 mb-5 ml-3 mr-5"> */}
        <div className="mt-6 mb-5 ml-3 mr-5">
          <div className="">
            Thương hiệu:{" "}
            <span className="text-indigo-600 border-r-2 border-gray-400 pr-2 mr-2">
              Lock&Lock
            </span>{" "}
            Đứng thứ 3 trong{" "}
            <span className="text-indigo-600">
              Top 1000 Lò nướng bán chạy tháng này
            </span>
          </div>
          <div className="flex mt-1 mb-1">
            <div className="text-2xl w-101 h-16 text-gray-600">
              Lò Nướng Chân Không Điện Tử Lock&Lock EFISSWEBK 10L - Hàng Chính
              Hãng
            </div>
            <div className="flex items-center">
              <i className="bx bx-heart text-3xl text-gray-500 rounded-full shadow-3xl w-11 h-11 text-center pt-1 z-10 ml-4 hover:cursor-pointer hover:shadow-lg"></i>
              <i className="bx bx-share-alt text-3xl text-gray-500 rounded-full shadow-3xl w-11 h-11 text-center pt-1 z-10 ml-4 hover:cursor-pointer hover:shadow-lg"></i>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-row items-center text-lg">
              <i className="bx bxs-star text-yellow-300"></i>
              <i className="bx bxs-star text-yellow-300"></i>
              <i className="bx bxs-star text-yellow-300"></i>
              <i className="bx bxs-star text-yellow-300"></i>
              <i className="bx bxs-star-half text-yellow-300"></i>
            </div>
            <span className="ml-2 text-gray-500">
              (Xem 89 đánh giá){" "}
              <span className="border-l-2 border-gray-300 ml-2 pl-2">
                Đã Bán 194
              </span>
            </span>
          </div>
          {/* <div className="flex border-red-600 border mt-4"> */}
          <div className="flex mt-4">
            <div className=" w-2/3">
              <div className="p-3 bg-gradient-to-r from-red-600 to-yellow-500 rounded-md">
                <div className="font-semibold text-4xl text-indigo-100">
                  3.190.000 ₫
                </div>
                <span className="text-white font-semibold">
                  -47%{" "}
                  <span className="text-gray-400 line-through">
                    6.000.000 ₫
                  </span>
                </span>
              </div>
              <div className="border-t-2 border-b-2 border-gray-200 my-6 py-4">
                Bạn hãy{" "}
                <a className="text-indigo-500 font-bold hover:cursor-pointer">
                  NHẬP ĐỊA CHỈ
                </a>{" "}
                nhận hàng để được dự báo thời gian & chi phí giao hàng một cách
                chính xác nhất.
              </div>
              <div className="mb-5">Số Lượng</div>
              <div className="flex">
                <i className="bx bx-minus text-2xl px-1 border border-gray-300 rounded-l-md hover:cursor-pointer hover:bg-gray-400"></i>
                <input
                  className="w-12 text-center focus:outline-none border-t border-b border-gray-300"
                  type="text"
                  defaultValue="1"
                />
                <i className="bx bx-plus text-2xl px-1 border border-gray-300 rounded-r-md hover:cursor-pointer hover:bg-gray-400"></i>
              </div>
              <button className="text-white mt-6 font-bold bg-red-500 w-80 h-12 text-lg rounded-md hover:bg-red-700">
                Chọn Mua
              </button>
            </div>
            <div className="w-1/3 pl-32">y</div>
          </div>
        </div>
      </div>
    </div>
  );
}

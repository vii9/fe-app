import Image from "next/image";

export default function ProductsComponent() {
  const products = [];

  for (let i = 1; i < 26; i++) {
    products.push(
      <a className="w-1/5 bg-gray-50 h-80 hover:shadow-3xl hover:cursor-pointer hover:bg-white hover:z-10 rounded-sm">
        <div className="text-center">
          <Image
            className="hover:cursor-pointer"
            src={"/images/products/" + i + ".jpg"}
            alt="Slider images"
            width="200"
            height="200"
          />
        </div>
        <div className="text-sm h-11 font-semibold px-2 truncated-2line text-gray-700">
          [Chỉ giao HCM] - combo [7kg] Rau củ tươi sạch đủ dùng 3 ngày - new
          food
        </div>
        <div className="flex">
          <div className="flex flex-row items-center justify-between pl-2">
            <i className="bx bxs-star text-yellow-400"></i>
            <i className="bx bxs-star text-yellow-400"></i>
            <i className="bx bxs-star text-yellow-400"></i>
            <i className="bx bxs-star text-yellow-400"></i>
            <i className="bx bxs-star-half text-yellow-400"></i>
          </div>
          <div className="sole border-l-2 border-indigo-400 text-xs ml-2 pl-2 text-indigo-400">
            Đã bán 301
          </div>
        </div>
        <div className="mt-2">
          <span className="font-semibold pl-2">
            225.000 ₫{" "}
            <span className="bg-red-500 p-1 text-xs text-pink-50 rounded-md">
              -100%
            </span>
          </span>
        </div>
      </a>
    );
  }

  return (
    <section className="mt-2 border-indigo-600">
      <div className="flex flex-wrap">{products}</div>
    </section>
  );
}

import Link from "next/link";

export default function DesignIndex() {
  return (
    <div className="">
      <header className="bg-gradient-to-r from-green-400 to-purple-500">
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

        <div className="flex items-center justify-between pr-4 pl-2 pb-2 pt-1">
          <div className="flex items-center w-16">
            <Link href="/auth/register">
              <a className="mx-2">
                <i className="bx bx-left-arrow-alt text-2xl text-yellow-100"></i>
              </a>
            </Link>

            <div className="category-box flex hover:cursor-pointer mr-2">
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
      </header>
    </div>
  );
}

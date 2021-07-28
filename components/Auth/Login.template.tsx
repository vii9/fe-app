import Link from "next/link";

export default function LoginComponent() {
  return (
    // bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-screen h-screen
    // <div className="bg-gradient-to-r from-gray-400 via-green-600 to-red-500 h-screen relative">
    //   <div className="w-192 h-160 bg-white/40 backdrop-blur-md rounded-3xl absolute left-1/3 top-14">
    //     <div className="m-10 border">Welcome to login pages</div>
    //   </div>
    // </div>
    <div className="flex justify-around">
      <div className="pt-3 w-94">
        <h1 className="text-3xl font-semibold text-indigo-500 mt-4 text-center">
          Đăng Nhập
        </h1>
        <div className="text-md text-gray-500 mt-2 mb-8 text-center">
          Đăng nhập sử dụng số điện thoại hoặc email
        </div>
        <div className="mx-8 my-7 text-gray-500">
          <div className="font-semibold mb-2">Email / Số điện thoại</div>
          <div className="flex items-center">
            <i className="bx bx-mail-send text-3xl"></i>
            <input
              className="ml-3 w-full h-10 focus:outline-none rounded-md pl-3 shadow-3xl"
              type="text"
              name="email"
              placeholder="nhập số điện thoại hoặc email"
            />
          </div>
        </div>
        <div className="mx-8 my-7 text-gray-500">
          <div className="font-semibold mb-2">Mật khẩu</div>
          <div className="flex items-center">
            <i className="bx bx-lock text-3xl"></i>
            <input
              className="ml-3 w-full h-10 focus:outline-none rounded-md pl-3 shadow-3xl"
              type="password"
              name="password"
              placeholder="nhập mật khẩu"
            />
          </div>
        </div>

        <div className="mx-8 my-8 text-gray-500 flex justify-between">
          <div className="font-semibold mb-2 flex items-center">
            <input
              className="w-5 h-5 focus:outline-none mr-4 ml-1 outline-none"
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
            />{" "}
            <label htmlFor="rememberMe" className="hover:cursor-pointer">
              Ghi nhớ đăng nhập
            </label>
          </div>
          <div className="hover:font-bold hover:text-indigo-400 hover:cursor-pointer">
            Quên mật khẩu ?
          </div>
        </div>
        <div className="flex justify-around mb-9">
          <button className="bg-green-500 w-64 h-10 rounded-md font-semibold text-purple-100 text-lg hover:bg-green-600 hover:cursor-pointer">
            Đăng Nhập
          </button>
        </div>
        <div className="text-center">
          <i className="text-indigo-500 pt-1 text-2xl rounded-full w-10 h-10 text-center mr-3 bg-gray-100 shadow-3xl hover:cursor-pointer hover:bg-gray-300 bx bxl-facebook"></i>
          <i className="text-red-500 pt-1 text-2xl rounded-full w-10 h-10 text-center mr-3 bg-gray-100 shadow-3xl hover:cursor-pointer hover:bg-gray-300 bx bxl-google"></i>
          <i className="text-yellow-600 pt-1 text-2xl rounded-full w-10 h-10 text-center mr-3 bg-gray-100 shadow-3xl hover:cursor-pointer hover:bg-gray-300 bx bxl-instagram"></i>
        </div>
        <div className="text-center mt-5 font-semibold text-gray-500">
          Chưa đăng ký ?{" "}
          <Link href="/auth/register">
            <a className="text-indigo-400 hover:cursor-pointer">
              Tạo tài khoản
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

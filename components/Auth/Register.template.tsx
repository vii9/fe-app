export default function RegisterComponent() {
  return (
    <div className="flex justify-around">
      <div className="pt-3 w-101">
        <h1 className="text-3xl font-semibold text-indigo-500 mt-4 text-center">
          Đăng Ký
        </h1>
        <div className="ml-8 my-5 text-gray-500 flex items-center">
          <div className="font-semibold w-48">Họ và Tên</div>
          <div className="flex items-center w-full">
            <i className="bx bx-user text-3xl"></i>
            <input
              className="ml-3 w-full h-10 focus:outline-none rounded-md pl-3 shadow-3xl"
              type="text"
              name="fname"
              placeholder="nhập họ và tên"
            />
          </div>
        </div>

        <div className="ml-8 my-5 text-gray-500 flex items-center">
          <div className="font-semibold w-48">Số điện thoại</div>
          <div className="flex items-center w-full">
            <i className="bx bx-phone-call text-3xl"></i>
            <input
              className="ml-3 w-full h-10 focus:outline-none rounded-md pl-3 shadow-3xl"
              type="text"
              name="myPhone"
              placeholder="nhập số điện thoại"
            />
          </div>
        </div>

        <div className="ml-8 my-5 text-gray-500 flex items-center">
          <div className="font-semibold w-48">Email</div>
          <div className="flex items-center w-full">
            <i className="bx bx-mail-send text-3xl"></i>
            <input
              className="ml-3 w-full h-10 focus:outline-none rounded-md pl-3 shadow-3xl"
              type="text"
              name="email"
              placeholder="nhập số điện thoại hoặc email"
            />
          </div>
        </div>
        <div className="ml-8 my-5 text-gray-500 flex items-center">
          <div className="font-semibold w-48">Mật khẩu</div>
          <div className="flex items-center w-full">
            <i className="bx bx-lock-open text-3xl"></i>
            <input
              className="ml-3 w-full h-10 focus:outline-none rounded-md pl-3 shadow-3xl"
              type="password"
              name="password"
              placeholder="nhập mật khẩu"
            />
          </div>
        </div>

        <div className="ml-8 my-5 text-gray-500 flex items-center">
          <div className="font-semibold w-48">Xác nhận mật khẩu</div>
          <div className="flex items-center w-full">
            <i className="bx bx-lock text-3xl"></i>
            <input
              className="ml-3 w-full h-10 focus:outline-none rounded-md pl-3 shadow-3xl"
              type="password"
              name="password_confirmation"
              placeholder="nhập lại mật khẩu"
            />
          </div>
        </div>

        <div className="ml-8 my-4 text-gray-500 flex justify-between items-baseline">
          <div className="font-semibold mb-2 flex items-center">
            <input
              className="w-5 h-5 focus:outline-none mr-4 ml-20 outline-none"
              type="checkbox"
              name="acceptTerms"
              id="accept-terms"
            />{" "}
            <label htmlFor="accept-terms" className="hover:cursor-pointer">
              Chấp nhận điều khoản
            </label>
          </div>
          <div className="hover:font-bold hover:text-indigo-400 hover:cursor-pointer">
            Điều khoản tham gia <span className="text-lg">Nita</span>{" "}
            <i className="bx bx-book-reader text-lg underline"></i>
          </div>
        </div>
        <div className="flex justify-around mb-4">
          <button className="bg-green-500 w-64 h-10 rounded-md font-semibold text-purple-100 text-lg hover:bg-green-600 hover:cursor-pointer">
            Đăng Ký
          </button>
        </div>
        <div className="text-center mt-5 font-semibold text-gray-500">
          Đã có tài khoản ?{" "}
          <a href="#" className="text-indigo-400 hover:cursor-pointer">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
}

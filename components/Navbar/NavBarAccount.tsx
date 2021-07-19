import { useState } from "react";

const NavBarAccount = () => {
  const [displayAccountOption, setDisplayAccountOption] = useState("invisible");
  //  onMouseEnter and onMouseLeave
  const accountOnMouseEnter = () => setDisplayAccountOption("");

  const accountOnMouseLeave = () => setDisplayAccountOption("invisible");

  return (
    <div
      className="relative account-hover"
      onMouseEnter={accountOnMouseEnter}
      onMouseLeave={accountOnMouseLeave}
    >
      <div className="account-box flex hover:cursor-pointer">
        <i className="bx bx-user text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500"></i>
        <div className="account-text-options text-sm text-yellow-50 ml-2">
          Đăng nhập/ Đăng ký <br />
          <span className="font-bold text-yellow-50">
            Tài khoản <i className="bx bxs-chevron-down"></i>
          </span>
        </div>
      </div>

      {/* Show Options Login, Register */}
      <div
        className={
          "z-50 auth-account-option py-2 absolute bg-gray-200 w-60 h-64 flex flex-col justify-around items-center rounded-b-md shadow-2xl " +
          displayAccountOption
        }
      >
        <button className="bg-yellow-400 h-10 rounded-md w-52 font-bold hover:bg-yellow-300">
          Đăng nhập
        </button>
        <button className="bg-yellow-400 h-10 rounded-md w-52 font-bold hover:bg-yellow-300">
          Tạo tài khoản
        </button>
        {/* supper center| flex justify-around items-center */}
        <button className="h-10 w-52 rounded-md bg-blue-700 flex justify-around items-center px-1 hover:bg-blue-600">
          <i className="bx bxl-facebook-circle text-3xl text-blue-300"></i>
          <span className="text-xs font-bold text-yellow-400">
            Đăng nhập bằng Facebook
          </span>
        </button>
        <button className="h-10 w-52 rounded-md bg-red-500 flex justify-around items-center px-1 hover:bg-red-400">
          <i className="bx bxl-google text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 font-bold"></i>
          <span className="text-xs font-bold text-yellow-100">
            Đăng nhập bằng Google
          </span>
        </button>
        <button className="h-10 w-52 rounded-md bg-blue-500 flex justify-around items-center hover:bg-blue-400">
          <i className="bx bxl-amazon text-2xl text-yellow-300"></i>
          <span className="text-sm font-bold text-yellow-400">
            Đăng nhập bằng Zalo
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBarAccount;

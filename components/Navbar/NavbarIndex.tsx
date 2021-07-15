import NavBarFooter from "./NavBarFooter";
import Image from "next/image";
import NavBarCategory from "./NavBarCategory";
import NavBarSearchBox from "./NavBarSearchBox";
import NavBarAccount from "./NavBarAccount";

const NavBar = () => {
  const logoSize = 45;

  return (
    <>
      <div className="bg-red-500 h-11 flex flex-row justify-between">
        <Image
          className="hover:cursor-pointer"
          src="/images/logo.png"
          alt="Main Logo"
          width={logoSize}
          height={logoSize}
        />

        <NavBarCategory />

        <NavBarSearchBox />

        <NavBarAccount />

        <div className="shopping-card-box flex">
          <div className="icon-card-box relative">
            <i className="bx bx-cart text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"></i>
            <span className="absolute rounded-full w-5 h-5 bg-yellow-400 text-center text-sm font-bold left-5 shadow-md">
              0
            </span>
          </div>
          <span className="text-sm text-yellow-50 pt-4">Giỏ Hàng</span>
        </div>
      </div>

      <NavBarFooter />
    </>
  );
};

export default NavBar;

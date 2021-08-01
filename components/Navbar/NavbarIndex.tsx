import NavBarFooter from "./NavBarFooter";
import Image from "next/image";
import Link from "next/link";
import NavBarCategory from "./NavBarCategory";
import NavBarSearchBox from "./NavBarSearchBox";
import NavBarAccount from "./NavBarAccount";

const NavBar = () => {
  const logoSize = 45;

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-24 p-5">
      <section className="max-w-7xl m-auto">
        <div className="h-11 flex flex-row justify-between">
          <Link href="/">
            <div className="xds bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg">
              <Image
                className="hover:cursor-pointer"
                src="/images/logo.png"
                alt="Main Logo"
                width={logoSize}
                height={logoSize}
              />
            </div>
          </Link>

          <NavBarCategory />

          <NavBarSearchBox />

          <NavBarAccount />

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

        <NavBarFooter />
      </section>
    </div>
  );
};

export default NavBar;

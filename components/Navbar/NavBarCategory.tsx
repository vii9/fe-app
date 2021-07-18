import { useState } from "react";
import CategoryItem from "./CategoryItem";

const dataCateRaw = {
  monitor: [
    {
      isHref: 'monitor',
      data: [
        'monitor01',
        'monitor02',
        'monitor03',
      ]
    },
    {
      isHref: 'Xmonitor',
      data: [
        'Xmonitor01',
        'Xmonitor02',
        'Xmonitor03',
      ]
    },
    {
      isHref: 'ZXmonitor',
      data: [
        'ZXmonitor01',
        'ZXmonitor02',
        'ZXmonitor03',
      ]
    },
  ],
  laptop: {
    isHref: 'laptop',
    data: [
      'laptop01',
      'laptop02',
      'laptop03',
    ]
  },
  camera: {
    isHref: '',
    data: [
      'camera01',
      'camera02',
      'camera03',
    ]
  },

}

const NavBarCategory = () => {
  const [displayCategoryOption, setDisplayCategoryOption] =
    useState("invisible");
  //  onMouseEnter and onMouseLeave
  const categoryOnMouseEnter = () => setDisplayCategoryOption("");

  const categoryOnMouseLeave = () => {
    setDisplaySubBox("invisible");
    setDisplayCategoryOption("invisible");
  };

  const [displaySubBox, setDisplaySubBox] = useState("invisible");
  const [menuCategoryItem, setMenuCategoryItem] = useState("");

  const categorySubMouseEnter = (e: any) => {
    setDisplaySubBox("");
    console.log(e.target.getAttribute("data-category"));

    const categorySlug = e.target.getAttribute("data-category");

    setMenuCategoryItem(categorySlug);
  };
  const categorySubMouseLeave = () => setDisplayCategoryOption("");

  return (
    <div
      className="relative"
      onMouseEnter={categoryOnMouseEnter}
      onMouseLeave={categoryOnMouseLeave}
    >
      <div className="category-box flex hover:cursor-pointer">
        {/* <i className="bx bx-category text-yellow-50 text-4xl bg-gradient-to-r from-purple-400 via-pink-500"></i> */}
        <i className="bx bx-category text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"></i>
        <span className=" text-sm text-yellow-50 ml-2 ">
          Danh Mục <br />
          <b className="">
            Sản Phẩm <i className="bx bxs-chevron-down"></i>
          </b>
        </span>
      </div>

      <div
        className={
          "absolute bg-gray-50 w-60 h-64 shadow-2xl top-11 -left-12 " +
          displayCategoryOption
        }
      >
        <a
          href="monitor"
          className="flex items-center h-8 hover:bg-blue-600 hover:text-white"
          data-category="monitor"
          onMouseEnter={categorySubMouseEnter}
          onMouseLeave={categorySubMouseLeave}
        >
          <i className="bx bx-desktop mx-3 text-xl"></i>
          <span className="text-sm">Màn hình - Phụ kiện IT</span>
        </a>

        <a
          href="laptop"
          className="flex items-center h-8 hover:bg-blue-600 hover:text-white"
          data-category="laptop"
          onMouseEnter={categorySubMouseEnter}
          onMouseLeave={categorySubMouseLeave}
        >
          <i className="bx bx-laptop mx-3 text-xl"></i>
          <span className="text-sm">Laptop - Bàn Phím</span>
        </a>

        <a
          href="camera"
          className="flex items-center h-8 hover:bg-blue-600 hover:text-white"
          data-category="camera"
          onMouseEnter={categorySubMouseEnter}
          onMouseLeave={categorySubMouseLeave}
        >
          <i className="bx bxs-cctv mx-3 text-xl"></i>
          <span className="text-sm">Camera Box</span>
        </a>
      </div>

      <div
        className={
          "absolute bg-gray-200 w-192 h-96 shadow-md top-11 left-48 " +
          displaySubBox
        }
      >
        <a
          href="#"
          className="flex items-center h-8 hover:bg-blue-600 hover:text-white"
        >
          <i className="bx bx-desktop mx-3 text-xl"></i>
          <span className="text-sm">Màn hình - Phụ kiện IT</span>
        </a>
        <a
          href="#"
          className="flex items-center h-8 hover:bg-blue-600 hover:text-white"
        >
          <i className="bx bx-laptop mx-3 text-xl"></i>
          <span className="text-sm">Laptop - Bàn Phím {menuCategoryItem}</span>
        </a>
      </div>
    </div>
  );
};

export default NavBarCategory;

const NavBarFooter = () => {
  return (
    <div className=" h-7 flex flex-row justify-between text-yellow-50">
      <div className="font-semibold uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-yellow-500">
        NiTa <span className="font-bold italic text-yellow-400">+</span>
      </div>
      <ul className="quick-trend-menu flex justify-between w-3/6 text-sm pt-1">
        <li>
          <a href="#" className="hover:font-bold hover:text-blue-600">
            thời trang nữ
          </a>
        </li>
        <li>
          <a href="#" className="hover:font-bold hover:text-blue-600">
            giày nữ
          </a>
        </li>
        <li>
          <a href="#" className="hover:font-bold hover:text-blue-600">
            túi nữ
          </a>
        </li>
        <li>
          <a href="#" className="hover:font-bold hover:text-blue-600">
            thời trang nam
          </a>
        </li>
        <li>
          <a href="#" className="hover:font-bold hover:text-blue-600">
            giày nam
          </a>
        </li>
        <li>
          <a href="#" className="hover:font-bold hover:text-blue-600">
            túi nam
          </a>
        </li>
      </ul>
      <div className="flex hover:cursor-pointer">
        <i className="bx bxs-dollar-circle text-lg text-yellow-500"></i>
        <span className="pt-1 ml-1 text-sm hover:font-bold">
          Bán hàng cùng <span className="text-indigo-50 font-bold">NiTa</span>
        </span>
      </div>
    </div>
  );
};

export default NavBarFooter;

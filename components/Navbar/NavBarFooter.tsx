const NavBarFooter = () => {
  return (
    <div className="bg-green-500 h-7 flex flex-row justify-between text-yellow-50">
      <div className="font-bold uppercase italic">
        Freship <span className="font-bold italic text-yellow-400">+</span>
      </div>
      <ul className="quick-trend-menu flex justify-between w-3/6 text-sm pt-1">
        <li>
          <a href="#" className='hover:font-bold'>thời trang nữ</a>
        </li>
        <li>
          <a href="#" className='hover:font-bold'>giày nữ</a>
        </li>
        <li>
          <a href="#" className='hover:font-bold'>túi nữ</a>
        </li>
        <li>
          <a href="#" className='hover:font-bold'>thời trang nam</a>
        </li>
        <li>
          <a href="#" className='hover:font-bold'>giày nam</a>
        </li>
        <li>
          <a href="#" className='hover:font-bold'>túi nam</a>
        </li>
      </ul>
      <div className="flex hover:cursor-pointer">
        <i className="bx bxs-dollar-circle text-lg text-yellow-500"></i>
        <span className="pt-1 ml-1 text-sm hover:font-bold">Bán hàng cùng NiTa</span>
      </div>
    </div>
  );
};

export default NavBarFooter;

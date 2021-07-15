const NavBarSearchBox = () => {
  return (
    <div className="main-search-box flex mt-1">
      <input
        type="text"
        className="h-9 w-96 focus:outline-none pl-2 border rounded-l-sm text-sm shadow-md"
        placeholder="Tìm sản phẩm, everything from here..."
      />
      <div className="btn-search-box w-32 h-9 bg-blue-900 text-yellow-50 p-1 flex justify-around shadow-md hover:cursor-pointer hover:bg-blue-800">
        <i className="bx bx-search-alt text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 font-bold"></i>
        <span className="pt-1 text-red-100 font-bold">Tìm kiếm</span>
      </div>
    </div>
  );
};

export default NavBarSearchBox;

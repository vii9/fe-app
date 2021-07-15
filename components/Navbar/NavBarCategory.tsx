const NavBarCategory = () => {
  return (
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
  );
};

export default NavBarCategory;

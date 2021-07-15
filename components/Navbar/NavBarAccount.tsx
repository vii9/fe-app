const NavBarAccount = () => {
  return (
    <div className="account-box flex hover:cursor-pointer">
      <i className="bx bx-user text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"></i>
      <div className="account-text-options text-sm text-yellow-50 ml-2">
        Đăng nhập/ Đăng ký <br />
        <span className="font-bold text-yellow-50">
          Tài khoản <i className="bx bxs-chevron-down"></i>
        </span>
      </div>
    </div>
  );
};

export default NavBarAccount;

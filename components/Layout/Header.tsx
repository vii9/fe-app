import useMediaQueryLarger from "../../utils/useMediaQueryLarger";
import NavBar from "../Navbar/NavbarIndex";
import NavbarMobile from "../Navbar/NavbarMobile";

const Header = () => {
  const isDesktop = useMediaQueryLarger(1060);
  return <>{isDesktop ? <NavBar /> : <NavbarMobile />}</>;
};

export default Header;

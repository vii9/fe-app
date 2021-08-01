import SliderMobileComponent from "../../components/Home/SliderMobileComponent";
import ProductsComponent from "../../components/Home/ProductsComponent";
import CategoriesComponent from "../../components/Home/CategoriesComponent";
import useMediaQueryLarger from "../../utils/useMediaQueryLarger";
import SliderComponent from "../../components/Home/SliderComponent";

export default function DesignIndex() {
  const isDesktop = useMediaQueryLarger(1060); //1060 is limit navbar desktop display

  return (
    <>
      {isDesktop ? <SliderComponent /> : <SliderMobileComponent />}
      <CategoriesComponent />
      <ProductsComponent />
    </>
  );
}

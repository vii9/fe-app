import Head from "next/head";
import SliderComponent from "./SliderComponent";
import ProductsComponent from "./ProductsComponent";
import SliderMobileComponent from "./SliderMobileComponent";
import CategoriesComponent from "../../components/Home/CategoriesComponent";
import useMediaQueryLarger from "../../utils/useMediaQueryLarger";

const HomeComponent = () => {
  const isDesktop = useMediaQueryLarger(1060); //1060 is limit navbar desktop display

  return (
    <>
      <Head>
        <title>@SSR App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {isDesktop ? <SliderComponent /> : <SliderMobileComponent />}
      <CategoriesComponent />
      <ProductsComponent />
    </>
  );
};

export default HomeComponent;

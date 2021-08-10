import Breadcrumb from "../../components/Layout/Breadcrumb";
import ProductDetailComponent from "../../components/ProductDetail/ProductDetail.template";

export default function ProductID() {
  return (
    <>
      <Breadcrumb
        slug1="CategoryName"
        slug2="slug-laptop-new-macbook-pro-2020"
        slug3=""
      />
      <ProductDetailComponent />
    </>
  );
}

import Breadcrumb from "../../components/Layout/Breadcrumb";
import ProductComponent from "../../components/ProductDetail/Product.template";

export default function ProductID() {
  return (
    <>
      <Breadcrumb
        slug1="CategoryName"
        slug2="slug-laptop-new-macbook-pro-2020"
        slug3=""
      />
      <ProductComponent />
    </>
  );
}

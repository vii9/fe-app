import Breadcrumb from "../../components/Layout/Breadcrumb";
import ProductComponent from "../../components/ProductDetail/Product.template";

export default function ProductID() {
  return (
    <div>
      <div className="bg-gray-300">
        <Breadcrumb
          slug1="CategoryName"
          slug2="slug-laptop-new-macbook-pro-2020"
          slug3=""
        />
      </div>
      <div className="max-w-7xl m-auto">
        <ProductComponent />
      </div>
    </div>
  );
}

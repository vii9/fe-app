import CheckoutComponent from "../../components/Checkout/Checkout.template";
import Breadcrumb from "../../components/Layout/Breadcrumb";

export default function CheckoutRoute() {
  return (
    <div>
      <div>
        <div className="bg-gray-300">
          <Breadcrumb slug1="Checkout ( Giỏ Hàng )" slug2="All" slug3="" />
        </div>
        <div className="max-w-7xl m-auto">
          <CheckoutComponent />
        </div>
      </div>
    </div>
  );
}

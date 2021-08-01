import CheckoutComponent from "../../components/Checkout/Checkout.template";
import Breadcrumb from "../../components/Layout/Breadcrumb";

export default function CheckoutRoute() {
  return (
    <>
      <Breadcrumb slug1="Checkout ( Giỏ Hàng )" slug2="All" slug3="" />
      <CheckoutComponent />
    </>
  );
}

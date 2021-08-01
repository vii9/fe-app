import RegisterComponent from "../../../components/Auth/Register.template";
import Breadcrumb from "../../../components/Layout/Breadcrumb";

export default function RegisterRoute() {
  return (
    <>
    <Breadcrumb slug1='Đăng ký' slug2='' slug3='' />
      <RegisterComponent />
    </>
  );
};

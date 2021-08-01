import LoginComponent from "../../../components/Auth/Login.template";
import Breadcrumb from "../../../components/Layout/Breadcrumb";

export default function LoginRoute() {
  return (
    <>
      <Breadcrumb slug1="Đăng Nhập" slug2="" slug3="" />
      <LoginComponent />
    </>
  );
}

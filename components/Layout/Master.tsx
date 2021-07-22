import Footer from "./Footer";
import Header from "./Header";

const LayoutMaster = (props: any) => {
  return (
    <div className="">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default LayoutMaster;

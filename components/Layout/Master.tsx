import Footer from "./Footer";
import Header from "./Header";

const LayoutMaster = (props: any) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default LayoutMaster;

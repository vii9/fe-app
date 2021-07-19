import Footer from "./Footer";
import Header from "./Header";

const LayoutMaster = (props: any) => {
  return (
    <div className="">
      <Header />
      <section className="max-w-7xl m-auto">
        <main>{props.children}</main>
        <Footer />
      </section>
    </div>
  );
};

export default LayoutMaster;

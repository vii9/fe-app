import Footer from "./Footer";
import Header from "./Header";

const LayoutMaster = (props: any) => {
  return (
    <section className='max-w-7xl m-auto'>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </section>
  );
};

export default LayoutMaster;

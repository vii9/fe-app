import HomeComponent from "../components/Home/Home.template";

const Index = ({ homeData }: any) => {
  return <HomeComponent {...homeData} />;
};

export default Index;

export async function getStaticProps() {
  const data = await fetch("http://s2api.test/api/v1/categories");
  const categories = await data.json();
  console.log(categories[0].slug);
  return {
    props: { homeData: { categories } },
  };
}

export default function Breadcrumb() {
  return (
    <div className="max-w-7xl m-auto bg-gray-300 text-gray-500 h-9 flex items-center">
      Home <i className="bx bxs-right-arrow-alt text-indigo-400 text-2xl"></i>
      <a href="#" className="hover:text-indigo-600 hover:font-bold">
        CategoryName
      </a>{" "}
      <i className="bx bxs-right-arrow-alt text-indigo-400 text-2xl"></i>
      <a href="#" className="hover:text-indigo-600 hover:font-bold">
        slug-laptop-new-macbook-pro-2020
      </a>
    </div>
  );
}

interface Props {
  slug1: string;
  slug2: string;
  slug3: string;
}

export default function Breadcrumb({
  slug1 = "CategoryName",
  slug2 = "slug-laptop-new-macbook-pro-2020",
  slug3 = "",
}: Props) {
  return (
    <div className="max-w-7xl m-auto bg-gray-300 text-gray-500 h-9 flex items-center">
      Home <i className="bx bxs-right-arrow-alt text-indigo-400 text-2xl"></i>
      <a href="#" className="hover:text-indigo-600 hover:font-bold">
        {slug1}
      </a>{" "}
      <i className="bx bxs-right-arrow-alt text-indigo-400 text-2xl"></i>
      <a href="#" className="hover:text-indigo-600 hover:font-bold">
        {slug2}
      </a>
    </div>
  );
}

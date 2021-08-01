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
    <div className="bg-gray-300">
      <div className="m-auto max-w-7xl bg-gray-300 text-gray-500 h-9 flex items-center px-3">
        Trang Chủ
        {slug1.length > 0 && (
          <>
            <i className="bx bxs-right-arrow-alt text-indigo-400 text-2xl"></i>
            <a href="#" className="hover:text-indigo-600 hover:font-bold">
              {slug1}
            </a>
          </>
        )}
        {slug2.length > 0 && (
          <>
            <i className="bx bxs-right-arrow-alt text-indigo-400 text-2xl"></i>
            <a href="#" className="hover:text-indigo-600 hover:font-bold">
              {slug2}
            </a>
          </>
        )}
        {slug3.length > 0 && (
          <>
            <i className="bx bxs-right-arrow-alt text-indigo-400 text-2xl"></i>
            <a href="#" className="hover:text-indigo-600 hover:font-bold">
              {slug3}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

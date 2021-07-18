type CategoryProps = {
    icon: string,
    title: string
  }

const CategoryItem = ({icon, title} : CategoryProps) => {
  return (
    <a
      href="#"
      className="flex items-center h-8 hover:bg-blue-600 hover:text-white"
    >
      <i className={icon + " mx-3 text-xl"}></i>
      <span className="text-sm">{title}</span>
    </a>
  );
};

export default CategoryItem;

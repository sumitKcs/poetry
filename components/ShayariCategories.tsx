import APP_DATA from "@/data";

const ShayariCategories = () => {
  return (
    <section className="w-full mt-7 mb-7 flex flex-col gap-3">
      <div className="flex justify-start ">
        <p className="headingText">Shayari Categories</p>
      </div>
      <div className="w-full flex justify-between items-center ">
        {APP_DATA.CATEGORIES.map((category, key) => (
          <a
            href="#"
            key={key}
            className="categoryShadow h-28 w-36 md:w-48 md:h-28 shadow-lg flex justify-center items-center"
          >
            {category}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShayariCategories;

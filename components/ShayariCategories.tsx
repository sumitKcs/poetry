import APP_DATA from "@/data";

const ShayariCategories = () => {
  return (
    <section className="w-full mt-7 mb-96 flex flex-col gap-3">
      <div className="flex justify-start ">
        <p className="headingText">Shayari Categories</p>
      </div>
      <div className="w-full flex justify-evenly items-center ">
        {APP_DATA.CATEGORIES.map((category, key) => (
          <div
            key={key}
            className=" h-28 w-32 shadow-lg flex justify-center items-center"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShayariCategories;

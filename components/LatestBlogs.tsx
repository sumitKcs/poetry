import { LiaGreaterThanSolid } from "react-icons/lia";
import APP_DATA from "@/data";
import Image from "next/image";

const LatestBlogs = () => {
  return (
    <section className="w-full mt-7 mb-60 md:mb-40 flex flex-col gap-3">
      <div className="flex justify-between ">
        <p className="headingText">Latest blogs</p>
        <div className=" flex justify-center items-center ">
          <p className=" text-sm">View All&nbsp;</p>
          <span>
            <LiaGreaterThanSolid className="w-3 h-3" />
          </span>
        </div>
      </div>
      {APP_DATA.BLOGS_LATEST.map((blog, key) => (
        <div
          key={key}
          className="w-full relative flex flex-col justify-center items-center"
        >
          <div className="w-full">
            <Image
              className="w-full"
              src={blog.thumbnail}
              alt={blog.title}
              width={476}
              height={320}
            />
          </div>
          <div className="w-[94%] latesBlogShadow absolute flex flex-col justify-center top-[15rem] lg:top-96 bg-white shadoow-lg p-4 gap-4 ">
            <h3 className="text-2xl">{blog.title}</h3>
            <p className="blogDescription">{blog.description}</p>
            <div className=" flex justify-between items-center gap-4">
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src={blog.author_image}
                  alt={blog.author_name}
                  width={30}
                  height={30}
                />
                <span className=" text-xs">{blog.author_name}</span>
              </div>
              <span className=" text-xs font-medium text-gray-500">
                {blog.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LatestBlogs;

import APP_DATA from "@/data";
import Image from "next/image";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { writer } from "repl";

const Writers = () => {
  return (
    <section className="w-full mt-7 mb-96 flex flex-col gap-3">
      <div className="flex justify-between ">
        <p className="headingText">Latest blogs</p>
        <div className=" flex justify-center items-center ">
          <p className=" text-sm">View All&nbsp;</p>
          <span>
            <LiaGreaterThanSolid className="w-3 h-3" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
        {APP_DATA.WRITERS.map((writer) => (
          <a href="#" key={writer.name}>
            <div className=" flex flex-col justify-center items-center gap-2 text-xs">
              <Image
                src={writer.image}
                alt={writer.name}
                width={150}
                height={150}
              />
              <span>{writer.name}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Writers;

import { MdOutlineExplore, MdOutlineStorefront } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { FaPenNib } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const BottomMenu = () => {
  return (
    <div className="w-screen bg-transparent flex justify-center items-center">
      <div className=" w-[90%] fixed bottom-0  mb-4 border border-grey-300 pt-7 pb-7 pl-2 pr-2 bottomMenu-shadow rounded-lg flex justify-evenly items-center overflow-visible">
        <LuHome className="w-7 h-7" />

        <MdOutlineExplore className="w-7 h-7" />

        <div className="relative w-12 h-12 overflow-visible flex justify-center items-center">
          <FaPenNib
            className=" pen w-7 h-7  absolute z-3 bottom-11"
            style={{ transform: "rotate(135deg)" }}
          />
        </div>

        <div>
          <MdOutlineStorefront className="w-7 h-7" />
        </div>
        <div>
          {" "}
          <CgProfile className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;

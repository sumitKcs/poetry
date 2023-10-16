import { MdOutlineExplore, MdOutlineStorefront } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { FaPenNib } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
const BottomMenu = () => {
  return (
    <div className="lg:hidden w-screen flex justify-center items-center bg-white">
      <div className="bottomMenu-shadow  w-[90%] fixed bottom-0  mb-4 border border-grey-300 pt-4 pb-4 pl-2 pr-2 rounded-lg flex justify-evenly items-center overflow-visible bg-white">
        <Link href="/">
          <LuHome className="w-7 h-7" />
        </Link>

        <MdOutlineExplore className="w-7 h-7" />

        <div className="pen relative w-12 h-12 overflow-visible flex justify-center items-center">
          <FaPenNib
            className="  w-6 h-6  absolute z-3 bottom-11  text-white"
            style={{ transform: "rotate(135deg)" }}
          />
        </div>

        <div>
          <MdOutlineStorefront className="w-7 h-7" />
        </div>
        <div>
          <Link href="/login">
            <CgProfile className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;

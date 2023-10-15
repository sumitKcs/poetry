import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import APP_DATA from "../../data";

const Header = () => {
  return (
    <header className=" w-full flex justify-start items-center pl-4 pr-4 border-b-1 pb-4 pt-4  lg:p-4 border header-shadow bg-[#fafafa]">
      {/* menu */}

      <div className=" grid grid-cols-3 w-full text-center">
        {/* mobile menu icon */}
        <FiMenu className="w-6 h-6 lg:hidden " />
        {/* mobile menu icon */}
        <div className="hidden lg:flex justify-center items-center lg:row-start-1 lg:col-start-2 lg:col-end-3">
          {/* desktop menu */}
          <ul className=" list-none space-x-2 flex justify-around gap-4  ">
            {APP_DATA.MENU.map((item, key) => (
              <li
                className=" font-medium float-left tracking-wider opacity-90"
                key={key}
              >
                {item}
              </li>
            ))}
          </ul>
          {/* desktop menu */}
        </div>
        <div className=" col-start-2 col-end-3  lg:col-start-1 lg:col-end-2 lg:text-left lg:pl-2">
          <div className=" flex justify-center items-center lg:justify-start">
            <Image src={APP_DATA.LOGO} alt="logo" width={100} height={100} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

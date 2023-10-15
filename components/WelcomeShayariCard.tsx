import APP_DATA from "../data.js";

import { MdOutlineRefresh } from "react-icons/md";
import { AiOutlineHeart, AiOutlineDownload } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiShare2 } from "react-icons/fi";

const WelcomeShayariCard = () => {
  return (
    <div className="w-full shayariCard shadow-lg relative">
      <div className="flex flex-col justify-between items-center rounded shadow-lg px-4 py-2 relative text-center">
        <div className="w-full">
          <MdOutlineRefresh className="w-8 h-8 float-right text-gray-500" />
        </div>
        <div className="py-12 flex flex-col justify-center items-center">
          <a
            href={APP_DATA.WELCOME_SHAYARI_LINK}
            className="inline-block mb-2 text-lg md:text-2xl"
          >
            {APP_DATA.WELCOME_SHAYARI.map((line, key) => (
              <p key={key}>
                {line} <br />
              </p>
            ))}
          </a>
          <a
            href={APP_DATA.WELCOME_SHAYARI_LINK}
            className="text-sm text-gray-700"
          >
            {APP_DATA.WELCOME_SHAYARI_AUTHOR}
          </a>
        </div>
        <div className="w-full flex justify-end gap-2">
          <AiOutlineHeart className="w-6 h-6" />
          <BsBookmark className="w-6 h-6" />
          <LiaTelegramPlane className="w-6 h-6" />
          <FiShare2 className="w-6 h-6" />
          <AiOutlineDownload className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeShayariCard;

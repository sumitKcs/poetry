import { LiaGreaterThanSolid } from "react-icons/lia";
import { ImSad } from "react-icons/im";
import { AiOutlineHeart, AiFillFlag } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { GiLovers } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";

const ShayariMoods = () => {
  return (
    <section className="w-full mt-7 mb-8 flex flex-col gap-3">
      <div className="flex justify-between ">
        <p className="headingText">Shayari Moods</p>
        <div className=" flex justify-center items-center ">
          <p className=" text-sm">View All&nbsp;</p>
          <span>
            <LiaGreaterThanSolid className="w-3 h-3" />
          </span>
        </div>
      </div>
      <div className=" grid grid-cols-5 gap-4">
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <ImSad className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Sad</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <AiOutlineHeart className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Love</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <FaHandshake className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Friendship</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <AiFillFlag className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">DeshBhakti</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <LuPartyPopper className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">festive</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <BsFillHeartbreakFill className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Breakup</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <TbTargetArrow className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Motivational</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <BsFillHeartbreakFill className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Breakup</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <GiLovers className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Romantic</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="moodCircle">
            <BsFillHeartPulseFill className="w-8 h-8 text-gray-300" />
          </div>
          <span className=" text-xs">Life</span>
        </div>
      </div>
    </section>
  );
};

export default ShayariMoods;

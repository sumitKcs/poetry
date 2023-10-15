import React from "react";

const OutlineButton = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center mt-7">
      <button className="w-[90%] border border-black rounded py-4 text-sm lg:text-base">
        {text}
      </button>
    </div>
  );
};

export default OutlineButton;

import APP_DATA from "@/data";
import Image from "next/image";
import React from "react";

const AppDownload = () => {
  return (
    <section className="w-full mt-10 h-60 mb-40 border-2 border-dotted border-gray-500 rounded-2xl">
      <div className="flex flex-col justify-center items-center gap-4 py-10">
        <p className=" text-xl font-semibold font-gray-700">
          {APP_DATA.APP_NAME} App is Coming Soon
        </p>
        <p className="text-lg text-gray-500">
          A Plaform to explore best poetry
        </p>
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/google-play.png"
            alt="google playstore"
            width={50}
            height={50}
          />
          <span>Google Play</span>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

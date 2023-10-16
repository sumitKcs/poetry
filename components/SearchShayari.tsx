import React from "react";

const SearchShayari = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-4">
      <div>
        <p>Enter keywords to search any shayari</p>
      </div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="e.g. Raat, Safar, Mohabbat"
          required
          className="shadow appearance-none border text-md rounded w-full py-4 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />{" "}
        {/* svg search icon */}
        <span
          data-v-7017e173=""
          className=" inline-block absolute top-4 left-3"
          style={{ width: "20px", height: "20px" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="7 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.726 15.4623C10.7454 15.4623 7.5 12.2122 7.5 8.22578C7.5 4.23934 10.7454 0.989258 14.726 0.989258C18.7066 0.989258 21.952 4.23934 21.952 8.22578C21.952 12.2122 18.732 15.4623 14.726 15.4623ZM14.726 1.95413C11.2778 1.95413 8.46347 4.77256 8.46347 8.22578C8.46347 11.679 11.2778 14.4974 14.726 14.4974C18.1742 14.4974 20.9885 11.679 20.9885 8.22578C21.0139 4.74717 18.1995 1.95413 14.726 1.95413Z"
              fill="#262626"
            ></path>
            <path
              d="M19.3152 12.7969C19.5687 12.543 19.9744 12.543 20.2279 12.7969L24.31 16.8849C24.5635 17.1388 24.5635 17.5451 24.31 17.799C24.0564 18.0529 23.6508 18.0529 23.3972 17.799L19.3152 13.711C19.0616 13.4571 19.0616 13.0508 19.3152 12.7969Z"
              fill="#262626"
            ></path>
          </svg>
        </span>
      </div>
      <button
        type="submit"
        className="w-full whatsapp-btn p-4 bg-[#333333] font-medium text-white rounded"
      >
        Search Sher
      </button>
    </div>
  );
};

export default SearchShayari;

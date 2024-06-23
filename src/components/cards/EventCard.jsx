import React from "react";
import { Event1 } from "../constant/Data";
import { IoIosArrowForward } from "react-icons/io";

const EventCard = ({ category, title, date, duration, price, image }) => {
  return (
    <div className="min-h-40 bg-[#F1F0FE] rounded-3xl flex max-lg:flex-col items-center justify-center relative lg:pl-36 max-lg:py-8 max-lg:gap-6">
      <div
        className="absolute size-48 max-lg:size-60 max-lg:-top-14 lg:left-10 bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <button className="absolute bg-[#7a6ad8] text-white h-28 w-16  bg-cover bg-center rounded-l-full z-10 text-4xl flex items-center justify-center right-0">
        <IoIosArrowForward />
      </button>
      <div className="lg:flex max-lg:pt-48">
        <div className="max-lg:pb-6 lg:w-80">
          <h1 className="font-medium bg-white text-[#7a6ad8] inline-block px-4 py-1 rounded-full uppercase mb-4">
            {category}
          </h1>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>

        <div className="flex items-center justify-center lg:gap-20 max-lg:gap-12 max-lg:border-t-2 max-lg:pt-6 ">
          <div>
            <p className="mb-1 max-lg:text-sm">Date:</p>
            <p className="lg:text-lg max-lg:text-sm font-semibold text-[#7a6ad8]">
              {date}
            </p>
          </div>
          <div>
            <p className="mb-1 max-lg:text-sm">Duration:</p>
            <p className="lg:text-lg max-lg:text-sm font-semibold text-[#7a6ad8]">
              {duration}
            </p>
          </div>
          <div>
            <p className="mb-1 max-lg:text-sm">Price:</p>
            <p className="lg:text-lg max-lg:text-sm font-semibold text-[#7a6ad8]">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

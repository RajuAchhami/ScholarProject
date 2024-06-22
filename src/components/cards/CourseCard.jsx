import React from "react";
import { Course1 } from "../constant/Data";

const CourseCard = ({ title, aurthor, price, category, image }) => {
  return (
    <div className=" group max-w-[355px] bg-[#F1F0FE] relative rounded-3xl overflow-hidden">
      <h1 className="absolute top-8 left-6 bg-white px-3 py-2 rounded-full text-sm font-medium text-[#7a6ad8]">
        {category}
      </h1>
      <div className="rounded-3xl overflow-hidden">
        <img src={image} alt="" />
      </div>
      <div className="px-6 py-8 flex flex-col gap-1">
        <p className="text-[#7a6ad8]">{aurthor}</p>
        <p className="text-2xl font-semibold">{title}</p>
      </div>
      <div className="absolute -top-10 -right-5 size-28 group-hover:size-[122px] duration-300 rounded-full flex items-center justify-center bg-[#7b6ad8df] z-10 pt-10 pr-4">
        <p className="text-3xl group-hover:text-[33px] duration-300 font-bold text-white">
          <sup className="font-medium">$</sup>
          {price}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;

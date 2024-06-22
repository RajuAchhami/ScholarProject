import React from "react";
import { Services1 } from "../constant/Data";

const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div className="group max-w-72 bg-[#f1f0fe] px-9 py-16 flex flex-col justify-center items-start gap-6 rounded-3xl relative">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="font-light text-sm leading-loose">{desc}</p>
      <button className="px-4 py-2 bg-white rounded-full font-medium text-[#7a6ad8]">
        Read More
      </button>
      <div className="absolute bg-[#7a6ad8] size-32 xl:size-36 rounded-full p-8 -top-16 -right-16 mr-10 lg:mr-0">
        <img
          className="transform group-hover:-translate-y-1 duration-200"
          src={icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceCard;

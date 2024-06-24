import React from "react";
import { Link } from "react-scroll";

const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div className="group select-none max-w-72 bg-[#F1F0FE] px-9 py-16 flex flex-col justify-center items-start gap-6 rounded-3xl relative">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="font-light text-sm leading-loose">{desc}</p>
      <button className="px-4 py-2 bg-white rounded-full font-medium text-[#7a6ad8] cursor-pointer">
        <Link className="cursor-pointer" to="home" smooth={true} duration={500}>
          Read More
        </Link>
      </button>
      <div className="absolute -top-12 -right-10 lg:-top-16 lg:-right-16  bg-[#7a6ad8] size-32 flex items-center justify-center p-8 rounded-full">
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

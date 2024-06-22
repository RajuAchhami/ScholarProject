import React from "react";
import ServiceCard from "./cards/ServiceCard";
import { servicesItem, accordianItem } from "./constant/Data";
import Accordian from "./cards/Accordian";

const Services = () => {
  return (
    <div className="section pt-44" id="services">
      <div className=" grid xl:grid-cols-3 md:grid-cols-2  grid-cols-1 place-items-center gap-28 xl:px-20 lg:px-16 md:px-12">
        {servicesItem.map((item, i) => {
          return <ServiceCard key={i} {...item} />;
        })}
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 pt-28">
        <div className=" bg-[#7a6ad8] rounded-2xl flex flex-col items-center w-full p-6 lg:p-14 space-y-12">
          {accordianItem.map((item, i) => {
            return (
              <Accordian
                key={i}
                accTitle={item.accordianTitle}
                accDesc={item.accordianDesc}
              />
            );
          })}
        </div>

        <div className="flex flex-col bg-[#F1F0FE] justify-center p-10 md:p-20 gap-6">
          <p className="text-[#7a6ad8] font-semibold text-xl">ABOUT US</p>
          <h1 className="font-semibold text-2xl capitalize">
            What make us the best academy online?
          </h1>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravid risus commodo.
          </p>
          <div>
            <button className="bg-[white] text-[#7a6ad8] font-medium text-sm px-5 py-2 rounded-full cursor-pointer hover:bg-[#7a6ad8] hover:text-white hover:duration-300 ">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import ServiceCard from "./cards/ServiceCard";
import { servicesItem, accordianItem } from "./constant/Data";
import Accordian from "./cards/Accordian";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div className="container mx-auto xl:px-20 px-4 pt-36" id="services">
      <div className="grid  grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-y-24  place-items-center">
        {servicesItem.map((item, i) => {
          return <ServiceCard key={i} {...item} />;
        })}
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5 place-items-center mt-24 ">
        <div className="max-w-full bg-[#7a6ad8] px-4 md:px-10 py-12 flex flex-col gap-8 rounded-3xl">
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

        <div className="flex flex-col justify-center gap-4 px-14 py-10 h-full bg-[#F1F0FE] ">
          <p className="text-[#7a6ad8] font-semibold text-xl">ABOUT US</p>
          <h1 className="font-semibold text-3xl capitalize">
            What make us the best academy online?
          </h1>
          <p className="leading-loose ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravid risus commodo.
          </p>
          <div>
            <button className="bg-[white] text-[#7a6ad8] font-medium text-sm px-5 py-2 rounded-full cursor-pointer hover:bg-[#7a6ad8] hover:text-white hover:duration-300 ">
              <Link
                className="cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
              >
                Discover More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

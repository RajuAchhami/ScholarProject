import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-scroll";

const HeroCard = ({ header, title, desc, btn, imgUrl }) => {
  return (
    <div
      className="w-full max-md:h-[670px] lg:h-[650px]  md:h-[570px] bg-cover bg-center bg-no-repeat flex items-center max-lg:justify-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="flex flex-col gap-8 lg:pl-24 max-lg:items-center">
        <div>
          <h1 className="px-4 py-1 bg-[#7a6ad8] text-white inline-block rounded-full text-sm font-medium uppercase">
            {header}
          </h1>
        </div>
        <h2 className="text-5xl max-lg:text-4xl max-lg:leading-normal text-white font-bold max-w-96 max-md:max-w-80 leading-normal max-lg:text-center">
          {title}
        </h2>
        <p className="max-w-[680px] max-lg:px-4 text-white text-sm leading-loose max-lg:text-center">
          {desc}
        </p>
        <div>
          <div className="flex items-center max-lg:flex-col py-1 gap-6">
            <button className=" bg-white text-[#7a6ad8] text-sm font-medium px-4 py-3 rounded-full">
              <Link
                className="cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
              >
                Request Demo
              </Link>
            </button>
            <button>
              <Link
                className="cursor-pointer flex items-center justify-center gap-3 "
                to="home"
                smooth={true}
                duration={500}
              >
                <span className="bg-white size-10 flex items-center justify-center rounded-full text-[#7a6ad8]">
                  <FaPlay />
                </span>
                <p className=" text-sm text-white font-medium">{btn}</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

import React, { useState } from "react";
import TeamCard from "./cards/TeamCard";
import { teamMembers } from "./constant/Data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(teamMembers.length - 1);
    }
    setCurrentIndex(currentIndex - 1);
  };
  const nextSlide = () => {
    if (currentIndex === teamMembers.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div id="team">
      <div className="section pt-44">
        <div className="grid xl:grid-cols-4 xl:px-16 lg:px-32 md:grid-cols-2 place-items-center gap-28">
          {teamMembers.map((item, i) => {
            return <TeamCard key={i} {...item} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center pt-28 relative">
        <div className=" section grid md:grid-cols-2 place-items-center md:px-12  max-md:gap-28  ">
          <div className="select-none h-[424px] w-full bg-[#7a6ad8] text-white p-6 lg:p-20 rounded-3xl flex flex-col items-start justify-center gap-8 md:gap-10 relative ">
            <div className="absolute flex md:flex-col gap-6 md:-right-5 max-md:-bottom-16 max-md:right-28 ">
              <button
                onClick={prevSlide}
                className="bg-white max-md:bg-[#7a6ad8] max-md:text-white text-[#7a6ad8] shadow-lg p-2 rounded-full text-3xl  md:hover:bg-[#ffffffc0] max-md:active:bg-[#7b6ad8c3] md:duration-300 max-md:duration-100"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white text-[#7a6ad8] max-md:bg-[#7a6ad8] max-md:text-white shadow-lg p-2 rounded-full text-3xl md:hover:bg-[#ffffffc0] max-md:active:bg-[#7b6ad8c3] md:duration-300 max-md:duration-100"
              >
                <IoIosArrowForward />
              </button>
            </div>
            <i className="leading-loose">"{teamMembers[currentIndex].desc}"</i>
            <div className="flex items-center gap-8">
              <div
                className="size-24 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url(${teamMembers[currentIndex].profile})`,
                }}
              ></div>
              <div>
                <p className="font ">{teamMembers[currentIndex].designation}</p>
                <p className="text-2xl font-semibold">
                  {teamMembers[currentIndex].fullName}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:p-10 max-md:p-8 lg:p-20">
            <h1 className="text-[#7a6ad8] font-semibold ">TESTIMONIALS</h1>
            <h2 className="max-w-80 text-4xl font-semibold">
              What They Say About Us?
            </h2>
            <p className="pt-4">
              You can search free CSS templates on Google using different
              keywords such as templatemo portfolio, templatemo gallery,
              templatemo blue color, etc.
            </p>
          </div>
        </div>
        <div className="w-[70vw] rounded-l-full absolute text-start right-0 content-center -z-10">
          <div className="md:h-[500px] bg-[#F1F0FE] rounded-l-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Team;

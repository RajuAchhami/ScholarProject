import React, { useState } from "react";
import { courseData } from "./constant/Data";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(courseData.length - 1);
    }
    setCurrentIndex(currentIndex - 1);
  };
  const nextSlide = () => {
    if (currentIndex === courseData.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg-[url('/Background1.jpg')] bg-cover bg-no-repeat bg-center rounded-br-[100px] ">
      <div
        className="section py-24  relative flex flex-col items-center lg:items-center"
        id="home"
      >
        <div className="lg:w-[80%] lg:h-full w-[100%]  mx-auto rounded-3xl flex items-center relative overflow-hidden">
          <img
            className="h-[500px] max-md:h-[550px] lg:h-full object-cover"
            src={courseData[currentIndex].imgUrl}
            alt=""
          />
          <div className="absolute text-white lg:left-20 flex flex-col items-center lg:items-start gap-8 md:gap-12 xl:gap-12">
            <div>
              <span className="bg-[#7a6ad8] px-3 py-1 rounded-full text-sm">
                {courseData[currentIndex].header}
              </span>
            </div>
            <div className="max-w-96 max-md:w-64 text-center lg:text-left">
              <span className="xl:leading-normal text-4xl md:leading-normal leading-normal font-bold   ">
                {courseData[currentIndex].title}
              </span>
            </div>

            <p className="text-sm px-2 md:px-4 lg:px-0 lg:pr-40 text-center lg:text-start ">
              {courseData[currentIndex].desc}
            </p>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4 lg:gap-5">
              <button className="bg-white px-4 py-3 text-[#7a6ad8] text-sm font-semibold rounded-full">
                Request Demo
              </button>
              <div className="flex justify-center items-center gap-3">
                <div className="text-[#7a6ad8] text-sm px-2 py-2 lg:px-3 lg:py-3 bg-white rounded-3xl flex justify-center items-center">
                  <FaPlay />
                </div>
                <p className="text-sm">{courseData[currentIndex].btn}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:bottom-48 bottom-8  lg:left-14 flex lg:flex-col  justify-center items-center gap-6 ">
          <button
            onClick={prevSlide}
            className="bg-[#FFFFFF1A] text-white p-2 rounded-full text-3xl hover:bg-[#ffffff8f] duration-300"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#FFFFFF1A] text-white p-2 rounded-full text-3xl hover:bg-[#ffffff8f] duration-300"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useRef } from "react";
import TeamCard from "./cards/TeamCard";
import { teamMembers } from "./constant/Data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Team = () => {
  const slideRef = useRef();

  const prevSlide = () => {
    slideRef.current.swiper.slidePrev();
  };
  const nextSlide = () => {
    slideRef.current.swiper.slideNext();
  };
  return (
    <div id="team">
      <div className="container mx-auto px-4 xl:px-20 pt-40 ">
        <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 place-items-center  xl:gap-5 lg:gap-3 md:gap-x-6 max-lg:gap-y-28 ">
          {teamMembers.map((item, i) => {
            return <TeamCard key={i} {...item} />;
          })}
        </div>
      </div>
      <div className="relative flex items-center justify-center pt-24 lg:pt-24   ">
        <div className="container mx-auto xl:px-20 px-4 grid grid-cols-1 lg:grid-cols-2 max-lg:grid-rows-2">
          <div className="w-full bg-[#7a6ad8] text-white rounded-3xl flex justify-center items-center relative">
            <Swiper
              className="mySwiper overflow-hidden rounded-3xl select-none active:cursor-grabbing"
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              speed={800}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              navigation={false}
              ref={slideRef}
            >
              {teamMembers.map((item, i) => {
                return (
                  <SwiperSlide
                    className="flex items-center justify-center"
                    key={i}
                  >
                    <div className="w-full md:px-20 max-md:px-8 py-20 flex justify-center flex-col gap-10 ">
                      <em className="text-lg leading-loose font-light ">
                        "{item.desc}"
                      </em>
                      <div className="flex items-center gap-10">
                        <div
                          className="size-28 rounded-full bg-center bg-cover"
                          style={{ backgroundImage: `url(${item.profile})` }}
                        ></div>
                        <div>
                          <h1>{item.designation}</h1>
                          <p className="max-md:text-xl text-2xl font-semibold">
                            {item.fullName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="absolute  flex md:flex-col gap-6 md:-right-5 max-md:-bottom-14 z-10 ">
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
          </div>
          <div className="w-full flex items-center justify-start max-lg:pt-20">
            <div className="flex flex-col gap-6 md:p-10 max-md:p-8 lg:p-20">
              <h1 className="text-[#7a6ad8] font-semibold ">TESTIMONIALS</h1>
              <h2 className="max-w-80 text-4xl font-semibold">
                What They Say About Us?
              </h2>
              <p className="pt-4 leading-loose">
                You can search free CSS templates on Google using different
                keywords such as templatemo portfolio, templatemo gallery,
                templatemo blue color, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[65vw] absolute right-0 max-lg:hidden h-[500px]  bg-[#F1F0FE]  rounded-l-full -z-10"></div>
      </div>
    </div>
  );
};

export default Team;

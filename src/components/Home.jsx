import React, { useRef } from "react";
import HeroCard from "./cards/HeroCard";
import { courseData } from "./constant/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const slideRef = useRef();

  const handlePrev = () => {
    slideRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    slideRef.current.swiper.slideNext();
  };

  return (
    <div className="mx-auto flex items-center justify-center " id="home">
      <div className=" w-full h-full mx-auto bg-no-repeat bg-cover bg-center bg-[url('/Background1.jpg')] xl:rounded-br-[180px] max-xl:rounded-br-[80px] py-24 px-4 flex items-center justify-center">
        <div className="container max-w-[1080px] relative flex items-center justify-center">
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
            {courseData.map((item, i) => {
              return (
                <SwiperSlide
                  className="flex items-center justify-center"
                  key={i}
                >
                  <HeroCard {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="absolute xl:-left-16 xl:bottom-40 max-xl:-bottom-16 z-10 flex flex-col items-center max-xl:flex-row justify-center gap-5 ">
            <button
              className="size-12 bg-[#ffffff33] flex items-center justify-center text-3xl text-white rounded-full hover:shadow-md active:bg-[#ffffff95] duration-100"
              onClick={handlePrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="size-12 bg-[#ffffff33] flex items-center justify-center text-3xl text-white rounded-full hover:shadow-md active:bg-[#ffffff95] duration-100"
              onClick={handleNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

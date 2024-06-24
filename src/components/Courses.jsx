import React, { useState } from "react";
import CourseCard from "./cards/CourseCard";
import {
  LatestCourseCategory,
  happpCount,
  latestCourseItems,
} from "./constant/Data";

const Courses = () => {
  const [data, setData] = useState(latestCourseItems);

  const handleClick = (item) => {
    if (!item || !item.title) return;
    const newFilterText = item.title.toUpperCase();
    console.log(item.title);

    if (newFilterText === "SHOW ALL") {
      setData(latestCourseItems);
    } else {
      setData(
        latestCourseItems.filter(
          (latestCourseItems) =>
            latestCourseItems.category.toUpperCase() === newFilterText
        )
      );
    }
  };
  return (
    <div id="courses">
      <div className="container bg-[#ffffffb0] mx-auto py-24 px-4 xl:px-20 flex flex-col items-center gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-[#7a6ad8] font-semibold">
            Latest Courses
          </h1>
          <p className="text-center text-4xl font-semibold">Latest Course</p>
        </div>
        <div className="bg-[#F1F0FE] grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 md:gap-8  px-10 py-4 rounded-full">
          {LatestCourseCategory.map((item, i) => {
            return (
              <button
                className="inline-block font-medium hover:text-[#7a6ad8] duration-200"
                key={i}
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="grid  w-full lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6">
          {data.map((item, i) => {
            return <CourseCard key={i} {...item} />;
          })}
        </div>
      </div>

      <div className="mr-4 lg:mr-10 xl:mr-20 bg-[url('/Background.jpg')] rounded-r-full bg-cover bg-no-repeat bg-center ">
        <div className="min-h-80 md:flex grid grid-cols-2 flex-wrap items-center justify-center md:gap-8 lg:gap-20 xl:gap-32 p-10  ">
          {happpCount.map((item, i) => {
            return (
              <div
                className="text-white flex flex-col justify-center items-center gap-4"
                key={i}
              >
                <h1 className="text-3xl md:text-5xl font-bold">{item.count}</h1>
                <p className="text-sm md:text-base">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;

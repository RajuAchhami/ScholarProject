import React, { useState } from "react";

const Accordian = ({ accTitle, accDesc }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className=" bg-white rounded-2xl w-full ">
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className="flex p-4 justify-between w-full items-center"
      >
        <span
          className={`font-semibold ${accordianOpen ? "text-[#7a6ad8]" : ""}`}
        >
          {accTitle}
        </span>
        {accordianOpen ? (
          <span className="transform rotate-180 duration-300  size-7 text-white rounded-full  bg-[#7a6ad8] content-center">
            -
          </span>
        ) : (
          <span className="transform -rotate-90 duration-300 size-7 text-white rounded-full  bg-[#7a6ad8] content-center">
            +
          </span>
        )}
      </button>
      <div
        className={` grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100 py-2 "
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm leading-loose px-4 inline-block ">
          {accDesc}
        </div>
      </div>
    </div>
  );
};

export default Accordian;

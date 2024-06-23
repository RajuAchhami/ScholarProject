import React from "react";
import EventCard from "./cards/EventCard";
import { eventsItems } from "./constant/Data";

const Events = () => {
  return (
    <div className="section flex flex-col pt-28 " id="events">
      <div className="flex flex-col">
        <p className="text-center font-semibold text-[#7a6ad8] pb-4 uppercase">
          Schedule
        </p>

        <h1 className="text-center text-3xl font-semibold lg:pb-10 max-lg:pb-28 uppercase">
          Upcoming Events
        </h1>
      </div>
      <div className=" grid lg:grid-rows-3 lg:grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-y-24 max-md:gap-24 lg:gap-24 lg:px-12">
        {eventsItems.map((item, i) => {
          return <EventCard {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Events;

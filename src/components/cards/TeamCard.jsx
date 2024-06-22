import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ profile, fullName, designation }) => {
  return (
    <div className="group w-[270px] bg-[#F1F0FE] flex flex-col items-center py-10 gap-5 rounded-3xl relative">
      <div className="flex flex-col items-center gap-2 pt-24">
        <p className="text-[#7a6ad8] ">{designation}</p>
        <p className="text-2xl font-semibold">{fullName}</p>
      </div>
      <div className="text-[#7a6ad8] flex items-center justify-center gap-4">
        <div className="size-9 flex items-center justify-center rounded-full bg-white">
          <FaFacebook />
        </div>
        <div className="size-9 flex items-center justify-center rounded-full bg-white">
          <FaTwitter />
        </div>
        <div className="size-9 flex items-center justify-center rounded-full bg-white">
          <FaLinkedin />
        </div>
      </div>
      <div
        className="absolute size-48 rounded-full bg-cover bg-center bg-no -top-20 transform group-hover:-translate-y-1 duration-200"
        style={{ backgroundImage: `url(${profile})` }}
      ></div>
    </div>
  );
};

export default TeamCard;

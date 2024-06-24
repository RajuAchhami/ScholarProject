import React, { useEffect, useState } from "react";
import { navLinks } from "../constant/Data";
import NavLinks from "./NavLinks";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={` fixed ${
        sticky ? "bg-[#7a6ad8] rounded-b-3xl" : ""
      } top-0 left-0 w-full z-20 duration-300 `}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-10 xl:px-20 relative ">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-semibold text-white uppercase border-[#e9e8efbb] border-r pr-4">
            Scholar
          </h1>
          <form className="hidden relative lg:flex " action="">
            <input
              className="bg-[#ffffff33] placeholder:text-[#e9e8efbb] placeholder:text-sm rounded-full px-4 py-2 text-white"
              type="text"
              placeholder="Type Something"
            />
            <i>
              <FaSearch className="absolute top-3 right-5 text-[#e9e8efbb]" />
            </i>
          </form>
        </div>

        <div className="hidden lg:flex items-center">
          {navLinks.map((navLink, i) => {
            return <NavLinks key={i} {...navLink} />;
          })}
        </div>
        <HiMenuAlt1
          onClick={() => setToggle(true)}
          className="text-3xl text-white lg:hidden cursor-pointer"
        />

        {toggle && (
          <div className="fixed h-full w-72 top-0 right-0 bg-slate-400 text-white flex flex-col justify-start items-start pl-20 py-20 gap-8 shadow-lg ">
            {navLinks.map((navLink, i) => {
              return (
                <MobileNavLinks key={i} {...navLink} setToggle={setToggle} />
              );
            })}
            <HiX
              onClick={(prev) => setToggle(!prev)}
              className="absolute top-7 left-20  text-3xl cursor-pointer"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

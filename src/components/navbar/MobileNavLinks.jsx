import React from "react";
import { Link } from "react-scroll";

const MobileNavLinks = ({ setToggle, link, href }) => {
  return (
    <li className="list-none cursor-pointer lg:pl-6 lg:whitespace-pre xl:pl-10 ">
      <Link
        className="text-white font-light text-sm transition-all duration-300"
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-20}
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLinks;

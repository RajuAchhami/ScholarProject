import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Register = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8d53d87d-2181-40ac-ba8c-f4b00840068f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      className="flex justify-center items-center relative pt-24 lg:pt-28 "
      id="register"
    >
      <div className="container mx-auto px-4 xl:px-20 lg:px-14 grid lg:grid-cols-2 max-lg:gap-10">
        <div className="w-full  flex flex-col justify-center gap-6 lg:px-16">
          <h1 className="font-medium text-[#7a6ad8]">CONTACT US</h1>
          <p className="text-3xl font-semibold">
            Feel Free To Contact Us Anytime
          </p>
          <p className="leading-loose pt-2">
            Thank you for choosing our templates. We provide you best CSS
            templates at absolutely 100% free of charge. You may support us by
            sharing our website to your friends.
          </p>
          <div className="flex flex-col items-center justify-center bg-[#F1F0FE] lg:bg-white py-8 rounded-3xl overflow-hidden gap-2 relative">
            <p>
              VALID:&ensp;
              <span className="max-md:text-sm font-semibold text-[#7a6ad8]">
                24 APRIL 2036
              </span>
            </p>
            <p className="text-2xl max-md:text-lg font-semibold">
              Special Offer <span className="text-[#7a6ad8]"> 50% </span> OFF!
            </p>
            <div className="absolute max-md:size-24 size-28 bg-[#7a6ad8] rounded-full -left-7 flex flex-col items-start pl-9 justify-center font-semibold text-white">
              <span>OFF</span>
              <span className="text-3xl max-md:text-xl">50%</span>
            </div>
            <div className="size-12 max-md:size-8 bg-[#7a6ad8] flex items-center justify-center text-3xl max-md:text-lg rounded-full text-white absolute right-5 max-lg:right-2">
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        <div className="w-ful bg-[url('/Background1.jpg')] rounded-3xl bg-cover bg-center flex flex-col gap-4 items-center justify-center py-14 ">
          <form
            onSubmit={onSubmit}
            className="flex flex-col content-center justify-center gap-5 md:w-full max-md:max-w-72 md:px-16  "
          >
            <input
              className="bg-[#FFFFFF1A] placeholder:text-[#ffffff] placeholder:text-sm rounded-full px-4 py-4 text-white outline-none "
              type="text"
              placeholder="Your Name..."
              required
            />
            <input
              className="bg-[#FFFFFF1A] placeholder:text-[#ffffff] placeholder:text-sm rounded-full px-4 py-4 text-white outline-none "
              type="email"
              id="email"
              name="email"
              placeholder="Your E-mail..."
              required
            ></input>
            <textarea
              className="bg-[#FFFFFF1A] placeholder:text-[#ffffff] placeholder:text-sm rounded-3xl px-4 py-4 text-white outline-none "
              placeholder="message"
              name=""
              id=""
              rows={4}
              required
            ></textarea>
            <div>
              <button
                className="text-start px-4 py-3 bg-white text-[#7a6ad8] rounded-full font-medium active:bg-[#ffffffb5] active:shadow-lg"
                type="submit"
              >
                Send Message Now
              </button>
            </div>
          </form>
          <span className=" text-white">{result}</span>
        </div>
      </div>
      <div className="max-lg:hidden w-[75vw] absolute -z-10 left-0 ">
        <div className="md:h-[500px] bg-[#F1F0FE] rounded-r-full"></div>
      </div>
    </div>
  );
};

export default Register;

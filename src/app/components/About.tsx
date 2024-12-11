import React from "react";
import { FaCheck } from "react-icons/fa6";
import About1 from "./public/About1.png";
import About2 from "./public/About1.png";

import About3 from "./public/About1.png"

function AboutUs() {
  return (
    <section className="bg-black px-3 md:px-[40px] lg:px-[100px] py-[50px]">
      {/* Heading and Images Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-evenly">

        {/* Text Section */}
        <div className="text-white w-full lg:w-[50%] mb-8 lg:mb-0">
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-normal text-[#FF9F0D] font-whitespace-nowrap font-greatVibes">
            About us
          </h1>
          <h1 className="text-[10px] md:text-[25px] lg:text-[35px] font-bold md:whitespace-normal">
            <span className="text-[#FF9F0D]">We</span> Create the best foody product
          </h1>
          <p className="text-[10px] md:text-[16px] lg:text-[18px] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <ul className="mt-6">
            <li className="text-[12px] md:text-[16px] lg:text-[18px] font-normal flex items-center mt-4">
              <FaCheck className="mr-2" /> Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="text-[12px] md:text-[16px] lg:text-[18px] font-normal flex items-center mt-4">
              <FaCheck className="mr-2" /> Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="text-[12px] md:text-[16px] lg:text-[18px] font-normal flex items-center mt-4">
              <FaCheck className="mr-2" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[20px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
              See More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col  lg:w-[50%] justify-center items-center">
          {/* First Image (Responsive) */}
          <div className="relative w-[420px] sm:w-[320px] md:w-[450px] lg:w-[450px]  h-[200px] mb-4 lg:mb-0">
            <img src="About1.png" alt="About Image 1" className="object-cover w-[620px] h-auto rounded-[6px_0px_0px_0px] opacity-100"/>
          </div>

          {/* Two Images in Row */}
          <div className="flex flex-col md:flex-row gap-5 lg:flex-row mt-[16px] lg:mt-[45px] w-full justify-between">
            <div className="relative w-full sm:w-[300px] md:w-[322px] lg:w-[322px] xl:w-[350px] h-[auto] mb-4 md:mb-0">
              <img
                src="About2.png"
                alt="About Image 2"
                className="object-cover rounded-[6px_0px_0px_0px] opacity-100"
                width={322}
                height={194}
              />
            </div>
            <div className="relative w-full sm:w-[300px] md:w-[322px] lg:w-[322px] xl:w-[350px] h-[auto]">
              <img
                src="About3.png"
                alt="About Image 3"
                className="object-cover rounded-[6px_0px_0px_0px] opacity-100"
                width={322}
                height={194}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

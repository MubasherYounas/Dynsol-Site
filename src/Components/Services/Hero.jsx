import React from "react";
import Button from "../../Components/common/Button";
import Icon from "../../Components/common/icons/index";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full text-black max-h-[818px] bg-secondary">
      <div className="flex flex-col md:flex-row justify-center">
        {/* Left Text Section */}
        <div className="pl-4 lg:pl-8 xl:pl-8 2xl:pl-20 flex justify-start items-start md:items-center md:basis-[45%] lg:basis-1/2">
          <div className="py-8 md:py-0 flex flex-col basis-[90%] md:basis-[90%] md:pl-4 2xl:basis-[85%] 3xl:basis-[80%]">
            <h1 className="fly-in-1s uppercase font-poppins font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px] 3xl:text-[50px] lg:mb-2 2xl:leading-[58px] 3xl:leading-[69px] tracking-[1.5%]">
              <span className="text-gray-800">
                Comprehensive Microsoft Dynamics
              </span>{" "}
              <span className="text-customCyan">365 Solutions</span>
            </h1>
            <p className="fly-in-1-5s mb-4 md:mb-2 lg:mb-4 2xl:mb-[25px] font-poppins font-light text-[16px] md:text-[13.3px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] leading-6 md:leading-6 xl:leading-[32.78px] tracking-[2%]">
              Transform your business operations with our expert Dynamics 365
              services, from implementation and upgrades to ongoing support and
              customization for optimal performance.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="basis-full md:basis-[55%] lg:basis-1/2 md:pt-16 3xl:pr-8">
          <div className="flex flex-col md:flex-row justify-end md:justify-center items-center 3xl:justify-end">
            <div className="relative">
              <img
                src="/hero1.webp"
                className="w-full md:h-[272px] lg:h-[340px] xl:h-[410px] 2xl:h-[490px] 3xl:h-[515px]"
                alt="Dynamics 365 Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

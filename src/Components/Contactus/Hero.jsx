import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full text-black max-h-[818px] bg-secondary">
      <div className="flex flex-col md:flex-row justify-center">
        {/* Left Text Section */}
        <div className="flex justify-start items-start md:items-center md:basis-[45%] lg:basis-1/2 2xl:px-20 lg:px-8 md:px-4" data-aos="fade-right">
          <div className="px-4 py-8 md:py-0 2xl:pt-12 xl:pl-4 flex flex-col basis-[90%] md:basis-[86%] 2xl:basis-[92%]">
            <h1 className="fly-in-1s uppercase font-poppins font-bold text-2xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-[45px] 3xl:text-[50px] leading-[35px] md:leading-[30px] lg:leading-10 lg:mb-2 xl:leading-[45px] 2xl:leading-[60px] 3xl:leading-[69px] tracking-[1.5%]">
              <span className="text-gray-800">
                Transform Your Business <br />
                <span className="text-customCyan">With Dynamics 365</span>
              </span>
            </h1>
            <p className="fly-in-1-5s mb-4 md:mb-2 lg:mb-4 2xl:mb-[25px] font-poppins font-light text-[16px] md:text-[13.3px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] leading-6 md:leading-6 xl:leading-[32.78px] tracking-[2%]">
              Connect with our Dynamics 365 experts to discuss implementation,
              upgrades, and customized solutions for your business growth.
            </p>
            <div className="fly-in-2s xl:mb-8">
              <Link
                to="/hireus"
                className={pathname === "/hireus" ? "active" : ""}
              ></Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="basis-full md:basis-[55%] lg:basis-1/2 3xl:pr-8" data-aos="fade-left">
          <div className="px-4 flex flex-col md:flex-row justify-end md:justify-center items-center 3xl:justify-end">
            <div className="flex flex-col justify-center items-center pt-12 md:pt-14 md:pr-12 xl:pt-24 2xl:pt-[6.9rem]">
              <img
                src="/contact-hero.svg"
                alt="Dynamics 365 Solutions"
                className="flex z-10 md:w-[360px] md:h-[174px] lg:w-[300px] lg:h-60 xl:w-[410px] xl:h-[238px] 2xl:w-[430px] 2xl:h-[297px] 3xl:w-[430px] 3xl:h-[325px]"
              />

              <img
                src="/icons/portfolio-hero-section2.svg"
                alt="Business Transformation"
                className="mt-[-25px] sm:-mt-12 md:-mt-6 lg:-mt-10 xl:mt-[-2.4rem] 2xl:mt-[-2.7rem] 3xl:mt-[-3.2rem] md:w-[420px] md:h-[120px] lg:w-[420px] lg:h-[138px] xl:w-[430px] xl:h-40 2xl:w-[440px] 2xl:h-[190px] 3xl:w-[450px] 3xl:h-[195px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

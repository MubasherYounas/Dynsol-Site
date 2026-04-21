import React from "react";
import "keen-slider/keen-slider.min.css";

export default function WhyDynSol() {
  return (
    <div className="w-full bg-secondary overflow-hidden">
      <div className="2xl:container 2xl:mx-auto py-12 px-8 md:p-12 xl:p-24 2xl:px-12">
        {/* ---------- Heading ---------- */}
        <div className="text-center font-poppins mb-12 xl:mb-24">
          <div className="flex items-center gap-2 md:gap-8 justify-center uppercase font-bold text-xl md:text-2xl lg:text-3xl xl:text-5xl lg:leading-[69px] tracking-[1.5%] mb-4">
            <img
              src="/hori-line.svg"
              className="w-[70px] h-[9px] sm:w-[90px] md:w-auto md:h-auto"
              alt=""
            />
            <h1>
              <span className="text-darkText">Why DynSol?</span>
            </h1>
            <img
              src="/hori-line2.svg"
              className="w-[70px] h-[9px] sm:w-[90px] md:w-auto md:h-auto"
              alt=""
            />
          </div>
          <h2 className="text-mediumText mb-4 md:mb-[25px] text-[18px] md:text-[20px] lg:text-[22px] font-light leading-[32.78px] tracking-[2%]">
            Your Trusted Microsoft Dynamics 365 Partner
          </h2>
        </div>

        {/* ---------- Image + Text Section ---------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center">
          {/* Static Image Section */}
          <div className="lg:px-12 2xl:px-6 basis-[55%] md:basis-[45%] 2xl:basis-[52%] flex justify-center" data-aos="fade-right">
            <div
              className="relative flex items-center justify-center"
              style={{
                height: "350px",
                width: "350px",
              }}
            >
               <img
              src="/icons/2-business-central-implementation.png"
              className="w-full h-full object-contain"
              alt="Dynamics 365 Business Solutions"
            />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:px-12 basis-[45%] md:basis-[55%] 2xl:basis-[48%] flex" data-aos="fade-left">
            <div className="hidden md:block md:basis-[35%]">
              <div className="flex items-center">
                <img
                  src="/whycodesynline.svg"
                  alt=""
                  className="invert-30 sepia-0 saturate-10 hue-rotate-0 brightness-120 contrast-85"
                />
              </div>
            </div>
            <div className="md:basis-[65%] py-8 flex flex-col items-center justify-between">
              <div className="mb-6">
                <h3 className="font-poppins font-medium text-[18px] md:text-[26.48px] leading-[39.72px] tracking-[6%] text-darkText">
                  Microsoft Certified Experts
                </h3>
                <p className="font-Chenla text-[14px] leading-[22px] md:leading-[25.75px] text-mediumText">
                  Our specialists are Microsoft-certified professionals with
                  proven expertise in deploying, optimizing, and maintaining
                  business-critical solutions. We ensure high-quality
                  implementation and support tailored to your organizational
                  needs.
                </p>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-[18px] md:text-[26.48px] leading-[39.72px] tracking-[6%] text-darkText">
                  Microsoft Certified Trainers
                </h3>
                <p className="font-Chenla text-[14px] leading-[22px] md:leading-[25.75px] text-mediumText">
                  Our training programs are led by Microsoft-certified
                  instructors who deliver hands-on, practical guidance. We equip
                  your teams with the skills needed to effectively use, manage,
                  and optimize Microsoft Business Central and Dynamics 365
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

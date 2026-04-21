import React from "react";

export default function Hero({ title, description, sitename, sitelink }) {
  return (
    <div className="w-full text-white max-h-[818px] bg-linear-to-r from-[#237DCE] to-[#C3FAFA]">
      <div className="bg-[url('/projectdetails-hero-bg.svg')] bg-right bg-no-repeat p-12 md:p-24 flex">
        <div className="flex flex-col md:basis-[85%] lg:basis-[75%] xl:basis-[65%] xl:pt-20">
          <div className="fly-in-1s uppercase font-poppins font-bold text-2xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-[50px] leading-[35px] md:leading-[30px] lg:leading-10 lg:mb-2 xl:leading-[45px] 2xl:leading-[55px] tracking-[15%]">
            <span>{title}</span>
          </div>
          <p className="fly-in-1-5s mb-4 md:mb-2 lg:mb-4 font-work-sans font-light text-[16px] md:text-[16.3px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-6 md:leading-6 lg:leading-7 xl:leading-[31.46px]">
            <span>{description}</span>&nbsp;
            {sitename && sitelink && (
              <a
                href={sitelink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-400 font-medium"
              >
                {sitename}
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

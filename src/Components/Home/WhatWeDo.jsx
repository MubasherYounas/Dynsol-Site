import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  const whatwedoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fly-in-top");
          } else {
            entry.target.classList.remove("fly-in-top");
          }
        });
      },
      { threshold: 0 },
    );

    const currentRefs = whatwedoRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const limitWords = (text, count = 13) => {
    const words = text.split(" ");
    return words.length <= count
      ? text
      : words.slice(0, count).join(" ") + "...";
  };

  const services = [
    {
      imgSrc: "/d365businesscentral_256x256.png",
      title: "Business Central Implementation",
      description:
        "We provide comprehensive Microsoft Dynamics 365 Business Central implementation services tailored to your business needs. Our expert team ensures seamless deployment, configuration, and integration.",
      serviceName: "BusinessCentralImplementation",
    },
    {
      imgSrc: "/Dynamics4.png",
      title: "Dynamics NAV Upgrade",
      description:
        "Our specialized Dynamics NAV upgrade services help businesses transition smoothly from legacy NAV systems to modern Dynamics 365 platforms with minimal disruption.",
      serviceName: "DynamicsNAVUpgrade",
      imgClass: "h-[64px] w-[64px]",
    },
    {
      imgSrc: "/buss-central.webp",
      title: "Support & Maintenance",
      description:
        "We offer dedicated Dynamics 365 support and maintenance services including monitoring, updates, optimization, training and issue resolution.",
      serviceName: "SupportMaintenance",
      imgClass: "h-[64px] w-[64px]",
    },
  ];

  return (
    <div className="w-full bg-[#E1E2E5]">
      <div className="py-12 md:py-20 xl:py-28">
        {/* Heading */}
        <div className="text-center font-poppins">
          <div className="flex items-center gap-2 mb-2 md:gap-8 justify-center uppercase font-bold text-lg md:text-2xl lg:text-3xl xl:text-5xl tracking-[1.5%]">
            <img src="/hori-line.svg" className="w-[70px]" alt="" />
            <h1>
              <span className="text-lightBlue600">What</span>{" "}
              <span className="text-darkText">we do?</span>
            </h1>
            <img src="/hori-line2.svg" className="w-[70px]" alt="" />
          </div>
          <h2 className="text-[18px] md:text-[20px] lg:text-[22px] font-light text-mediumText">
            Transforming businesses with Dynamics 365 expertise!
          </h2>
        </div>

        {/* Services */}
        <div className="pt-12 lg:pt-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="flex flex-wrap justify-center gap-6 md:gap-6 xl:gap-10">
            {services.map((service, index) => (
              <Link
                to={`/services?tab=${service.serviceName}`}
                key={index}
                className="w-full sm:w-[48%] md:w-[30.5%] flex"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  ref={(el) => (whatwedoRefs.current[index] = el)}
                  className="
      w-full h-full
      bg-white/90 backdrop-blur 
      flex flex-col justify-start items-center gap-6 
      p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 
      transition-all duration-300 hover:scale-[1.03] cursor-pointer
    "
                >
                  <div className="h-[108px] w-[108px] rounded-xl flex justify-center items-center hover:shadow-lg transition-all duration-300 shrink-0">
                    <img
                      className={`object-contain ${
                        service.imgClass ? service.imgClass : ""
                      }`}
                      src={service.imgSrc}
                      alt={service.title}
                    />
                  </div>

                  <div className="flex flex-col items-center md:items-start flex-1 justify-start">
                    <h3 className="font-poppins text-center md:text-start uppercase text-[20px] md:text-[18px] xl:text-[22px] font-semibold text-darkText mb-3">
                      {service.title}
                    </h3>

                    {/* 13 Words Description */}
                    <p className="text-center md:text-start text-[14px] leading-6 text-mediumText">
                      {limitWords(service.description, 13)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

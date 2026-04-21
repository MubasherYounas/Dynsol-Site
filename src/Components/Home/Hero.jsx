import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";

export default function Hero() {
  const location = useLocation();
  const pathname = location.pathname;

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const dataText = [
    "Transforming Businesses with Microsoft Dynamics 365 Solutions",
    "Unlock Business Potential with Dynamics 365 Expertise",
    "Empower Growth Through Dynamics 365 Implementation",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const getFirstWord = (phrase) => {
    return phrase.split(" ")[0];
  };

  return (
    <div className="relative text-darkText w-full aspect-video bg-secondary overflow-hidden">
      <video
  className="absolute inset-0 w-full h-full object-contain z-0"
  src="/videos/Home-bg-video.mp4"
  autoPlay
  loop
  muted
  playsInline
/>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center md:pt-8 lg:pt-16 text-white">
        {/* Left Side (Text) */}
        <div className="basis-full md:basis-[45%] lg:basis-1/2 flex justify-start items-start md:items-center pl-4 md:pl-8 lg:pl-12 xl:pl-12 2xl:pl-24 pt-12 md:pt-0" data-aos="fade-right">
          <div className="flex flex-col basis-[89%] sm:basis-[70%] md:basis-[88%] lg:basis-[90%] 2xl:basis-[85%] 3xl:basis-[97%]">
            <div className="uppercase font-poppins font-bold text-2xl md:text-xl lg:text-3xl xl:text-3xl 2xl:text-[43px] 3xl:text-[48px] lg:mb-2 2xl:leading-[60px] 3xl:leading-[69px] tracking-[15%] text-white min-h-24 ">
              <span className="typing-container">
                <span className="text-white">
                  {getFirstWord(dataText[loopNum % dataText.length])}
                </span>{" "}
                <span className="text-white">
                  {text.split(" ").slice(1).join(" ")}
                </span>
              </span>
              <span className="border-r-2 border-darkText ml-1 animate-pulse"></span>
            </div>

            <p className="mb-4 md:mb-2 lg:mb-4 font-poppins text-[16px] md:text-[13.3px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] leading-6 md:leading-[22px] xl:leading-[32.78px] tracking-[2%] text-white">
              Streamline your business operations with our comprehensive
              Dynamics 365 services, including implementation, customization,
              upgrades, and ongoing support for maximum efficiency and growth.
            </p>

            <div className="md:mb-4 xl:mb-8 2xl:mb-10">
              <Link
                to="/hireus"
                className={pathname === "/hireus" ? "active" : ""}
              ></Link>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="basis-full md:basis-[55%] lg:basis-1/2 mb-4" data-aos="fade-left">
          <div className="flex flex-col md:flex-row justify-center items-center lg:h-[330px] xl:h-[400px] 2xl:h-[490px] 3xl:h-[515px] animate-fadeIn">
            {/* <img
              src="/hero2.png"
              className="w-[80%] p-8 mb-2"
              alt="Dynamics 365 Business Solutions"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

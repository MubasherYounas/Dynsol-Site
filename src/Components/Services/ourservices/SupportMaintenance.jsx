import React from "react";
import {
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
  FaTools,
  FaDownload,
  FaFileAlt,
  FaBug,
  FaLock,
  FaKey,
  FaDesktop,
  FaCog,
  FaComments,
} from "react-icons/fa";

function SupportMaintenance() {
  const initialServices = [
    {
      icon: (
        <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "PROACTIVE SUPPORT",
      content:
        "We provide proactive monitoring and maintenance services to prevent issues before they occur...",
    },
    {
      icon: (
        <FaHeadset className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "TECHNICAL ASSISTANCE",
      content:
        "Our expert technical support team is always ready to assist with any Dynamics 365 related challenges...",
    },
    {
      icon: (
        <FaChartLine className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "CONTINUOUS OPTIMIZATION",
      content:
        "We deliver ongoing optimization services to enhance your Dynamics 365 performance and functionality...",
    },
  ];

  const additionalServices = [
    {
      icon: (
        <FaHeadset className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "TECHNICAL SUPPORT",
      content:
        "Our dedicated technical support team provides immediate assistance for any Dynamics 365 issues...",
    },
    {
      icon: (
        <FaDownload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "SOFTWARE UPDATES",
      content:
        "We manage and implement all necessary software updates for your Dynamics 365 environment...",
    },

    {
      icon: (
        <FaBug className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "MAINTENANCE & BUG FIXES",
      content:
        "Regular maintenance and prompt bug fixing services ensure your Dynamics 365 systems remain stable...",
    },
    {
      icon: (
        <FaLock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "SECURITY UPDATES",
      content:
        "We proactively implement security updates and patches to protect your Dynamics 365 environment...",
    },

    {
      icon: (
        <FaDesktop className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "REMOTE ASSISTANCE",
      content:
        "We offer prompt remote assistance for immediate resolution of Dynamics 365 issues...",
    },

    {
      icon: (
        <FaComments className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-icongray" />
      ),
      heading: "CONSULTATION",
      content:
        "Strategic consultation services to help you make the most of your Dynamics 365 investment...",
    },
  ];

  const allServices = [...initialServices, ...additionalServices];

  const limitWords = (text, maxWords = 30) => {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  return (
    <div className="flex flex-col gap-8 md:gap-12 py-8 md:py-12 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-36 2xl:py-24">
      {/* Heading Section */}
      <div className="w-full" data-aos="fade-up">
        <h1 className=" uppercase font-bold text-2xl sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48.6px] leading-8 sm:leading-9 md:leading-11 lg:leading-[50px] 2xl:leading-[60.51px] mb-4">
          Support & Maintenance
        </h1>
        <p className="font-Chenla text-base sm:text-lg md:text-xl lg:text-[22px] 2xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-8 2xl:leading-[39.96px] tracking-[2%] 2xl:w-[90%] lg:w-[95%] text-[#454545]">
          A forward-thinking team dedicated to providing exceptional support
          services. At the heart of our mission is a commitment to our
          customers' success. We offer a range of tailored support solutions
          designed to meet any organization's unique needs. Our expert team is
          always ready to assist, ensuring that operations run smoothly, and
          your customers are satisfied.
        </p>
      </div>

      {/* Services Details - Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {allServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col p-5 md:p-6 rounded-lg transition-all duration-300 hover:shadow-lg bg-gray-200 border border-gray-100 h-full"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-start mb-4 md:mb-5">
              <div className="  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0 mr-4 flex items-center justify-center bg-gray-100 rounded-lg">
                {service.icon}
              </div>
              <div className="flex-1">
                {/* Heading with fixed min-height for consistent spacing */}
                <h3
                  className="font-bold 
text-base sm:text-lg md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 
leading-5 sm:leading-6 md:leading-7 lg:leading-8 xl:leading-9 2xl:leading-[42px] 
tracking-[2%] text-gray-600 
mb-2 md:mb-3 
min-h-[55px] md:min-h-[65px] lg:min-h-[75px] 
flex items-start"
                >
                  {service.heading}
                </h3>
              </div>
            </div>

            
            <p className="font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-5 sm:leading-6 md:leading-7 lg:leading-7 xl:leading-8 2xl:leading-[30px] tracking-[1%] text-[#454545] flex-1">
              {limitWords(service.content, 30)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportMaintenance;

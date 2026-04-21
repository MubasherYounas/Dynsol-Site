import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "@react-spring/web";

import SupportMaintenance from "./ourservices/SupportMaintenance";
import DynamicsNAVUpgrade from "./ourservices/DynamicsNAVUpgrade";
import BusinessCentralImplementation from "./ourservices/BusinessCentralImplementation";
import BusinessCentralUpgrade from "./ourservices/BusinessCentralUpgrade";
import ServicesTab from "./ourservices/ServicesTab";

const serviceTab = [
  
  {
    id: 1,
    title: "Business Central ImplementationS",
    icon: "./buss-central.webp",
    tab: <BusinessCentralImplementation />,
    name: "BusinessCentralImplementation",
  },
  {
    id: 2,
    title: "Support & Maintenance",
    icon: "./Support1.png",
    tab: <SupportMaintenance />,
    name: "SupportMaintenance",
  },
  {
    id: 3,
    title: "Dynamics NAV Upgrade",
    icon: "./Dynamics4.png",
    tab: <DynamicsNAVUpgrade />,
    name: "DynamicsNAVUpgrade",
  },
  {
    id: 4,
    title: "Customization & Third-Party Integration",
    icon: "./d365businesscentral_256x256.png",
    tab: <BusinessCentralUpgrade />,
    name: "BusinessCentralUpgrade",
    iconClass: "h-full w-full", 
  },
];

export default function OurServices({ selectedTab }) {
  const [currentTab, setCurrentTab] = useState(serviceTab[0].tab);
  const contentRef = useRef(null);

  const transitions = useTransition(currentTab, {
    from: { opacity: 0, transform: "scale(0.9)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: { duration: 300 },
  });

  const handleTabClick = (tabContent) => {
    setCurrentTab(tabContent);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (selectedTab) {
      const tab = serviceTab.find((t) => t.name === selectedTab);
      if (tab) {
        setCurrentTab(tab.tab);
        // Scroll to content after state update
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [selectedTab]);

  return (
    <div className="w-full bg-linear-to-r from-customLightBlue to-customVeryLightBlue">
      <div className="py-12 md:py-20 xl:py-28 2xl:pb-32">
        {/* Heading */}
        <div className="text-center font-poppins">
          <div className="flex items-center gap-2 mb-2 md:gap-8 justify-center uppercase font-bold text-lg md:text-2xl lg:text-3xl xl:text-5xl leading-5 md:leading-[50px] lg:leading-[69px] tracking-[1.5%]">
            <img
              src="/hori-line.svg"
              className="w-[70px] sm:w-[90px] h-[9px] md:w-[120px] md:h-3 lg:w-auto lg:h-auto"
              alt=""
            />
            <h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[50px] 2xl:leading-[69px] tracking-[1.5%]">
              <span className="text-customBlue1">Our </span>
              <span className="text-customDarkGray">services</span>
            </h1>
            <img
              src="/hori-line2.svg"
              className="w-[70px] sm:w-[90px] h-[9px] md:w-[120px] md:h-3 lg:w-auto lg:h-auto"
              alt=""
            />
          </div>
          <h2 className="mb-4 md:mb-[25px] text-[18px] md:text-[20px] lg:text-[22px] font-light leading-[32.78px] tracking-[2%]">
            We let our ideas grow!
          </h2>
        </div>

        {/* Services Tabs */}
        <ServicesTab tabs={serviceTab} setSelectedTab={handleTabClick} />

       
        <div ref={contentRef} className="w-full">
          {transitions((style, item) =>
            item ? <animated.div style={style}>{item}</animated.div> : null
          )}
        </div>
      </div>
    </div>
  );
}

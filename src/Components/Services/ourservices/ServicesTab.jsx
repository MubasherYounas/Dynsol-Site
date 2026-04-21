import React from "react";

function ServicesTab({ tabs, setSelectedTab }) {
  return (
    <div
      className="p-8 sm:p-12 xl:px-36 xl:py-24  bg-[#F3F4F6] bg-center"
      style={{ backgroundImage: 'url("/")' }}
    >
      {/* Center All Boxes Vertically */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center h-full items-stretch">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setSelectedTab(tab.tab)}
            className="group w-full flex flex-col items-center gap-5 cursor-pointer h-full"
          >
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 xl:w-40 xl:h-40 2xl:w-56 2xl:h-56 rounded-lg bg-gray-300 flex justify-center items-center 
                group-hover:scale-105 group-hover:shadow-lg group-hover:outline-4 group-hover:outline-white transition-all duration-300 ease-in-out flex-shrink-0"
            >
              <img
                src={tab.icon}
                alt="icon"
className={`object-contain 
    ${tab.iconClass || "w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24"}
  `}              />
            </div>
            <div className="text-center flex-1 flex items-center justify-center w-full">
              <h3
                className="font-poppins font-bold text-gray-700 uppercase text-base md:text-lg xl:text-xl group-hover:text-blue-500 transition-colors duration-300"
              >
                {tab.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesTab;

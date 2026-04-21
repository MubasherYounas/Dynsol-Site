import React from "react";

function BusinessCentralUpgrade() {
  const BusinessCentralUpgradeDetail = [
    {
      img: "/versionUpgrade.png",
      heading: "CUSTOM EXTENSIONS & MODIFICATIONS",
      content:
        "Tailor Business Central to your unique business requirements with custom extensions, modifications, and AL language development. We create bespoke solutions that enhance functionality, automate processes, and integrate seamlessly with your existing workflows, ensuring the platform adapts to your specific needs rather than forcing you to adapt to the system.",
    },
    {
      img: "/feautresimplementiaon.png",
      heading: "THIRD-PARTY INTEGRATIONS",
      content:
        "Connect Business Central with your essential third-party applications including CRM systems, e-commerce platforms, payment gateways, shipping providers, and industry-specific software. Using APIs, Power Automate, and Azure Logic Apps, we create seamless data flow between systems, eliminating manual data entry and ensuring real-time synchronization across your entire technology ecosystem.",
    },
  ];

  return (
    <div className="px-6 sm:px-8 md:px-12 xl:px-36 py-10 sm:py-12 md:py-16 xl:py-24">
      
      {/* ---------- Heading ---------- */}
      <div className="mb-10 sm:mb-14 md:mb-16 xl:mb-24 text-center md:text-left" data-aos="fade-up">
        <h1 className="text-gray-800 uppercase font-bold text-2xl md:text-4xl xl:text-5xl leading-snug md:leading-tight xl:leading-snug mb-2">
          CUSTOMIZATION AND INTEGRATION WITH THIRD PARTY
        </h1>
        <p className="font-sans text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed md:leading-7 xl:leading-10 max-w-3xl mx-auto md:mx-0">
          Unlock the full potential of Business Central with tailored customizations and seamless third-party integrations. 
          We transform your ERP into a unified ecosystem that connects all your business applications, 
          streamlines operations, and delivers exceptional efficiency.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {BusinessCentralUpgradeDetail.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={detail.img}
              alt={detail.heading}
              className="w-16 h-16 sm:w-28 sm:h-28 md:w-28 md:h-28 object-contain mx-auto md:mx-0"
            />
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl leading-snug mt-3 text-gray-800">
              {detail.heading}
            </h3>
            <p className="font-normal text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed mt-2 text-gray-700">
              {detail.content}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default BusinessCentralUpgrade;

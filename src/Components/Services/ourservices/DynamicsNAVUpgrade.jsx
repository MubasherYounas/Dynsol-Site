import React from "react";

const NAVUpgradeDetails = [
  {
    img: "/Dynamics-2.webp",
    heading: "Dynamics 365 Business Central",
    content:
      "Upgrade your legacy Dynamics NAV system to the modern, cloud-based Dynamics 365 Business Central platform. Our seamless migration process ensures minimal disruption to your business operations while unlocking enhanced functionality, improved scalability, and advanced analytics capabilities. We handle everything from data migration to feature implementation, providing you with a future-proof business management solution.",
  },
  {
    img: "/Dynamics13.png",
    heading: "All Version Upgrades",
    content:
      "Keep your Dynamics NAV system current with our comprehensive version upgrade services. We specialize in upgrading from older NAV versions to the latest releases, ensuring you benefit from new features, security enhancements, and performance improvements. Our expert team manages the entire upgrade process, including compatibility testing, custom code adaptation, and user training to guarantee a smooth transition.",
  },
];

function DynamicsNAVUpgrade() {
  return (
    <div className="px-8 py-12 sm:p-12 xl:px-36 xl:py-24 2xl:px-48">
      {/* ---------- Heading ---------- */}
      <div className="mb-12 md:mb-16 xl:mb-24" data-aos="fade-up">
        <h1 className="text-gray-800 uppercase font-bold text-2xl md:text-4xl xl:text-5xl leading-snug md:leading-tight xl:leading-snug mb-2">
          DYNAMICS NAV UPGRADE
        </h1>
        <p className="font-sans text-base md:text-lg xl:text-xl leading-relaxed md:leading-7 xl:leading-10 mb-4 md:w-4/5">
          Modernize your business operations with our expert Dynamics NAV
          upgrade services. We help you transition smoothly to advanced
          platforms while preserving your existing investments and enhancing
          functionality.
        </p>
      </div>

      {/* Center Image */}
      <div className="py-8 flex justify-center items-center mb-8" data-aos="zoom-in">
        <img
          src="/DynamicsNavUp1.png"
          alt="Dynamics NAV Upgrade"
          className="w-full max-w-xl"
        />
      </div>

      <div className="hidden lg:flex flex-row items-start justify-between w-full gap-8 xl:gap-16">
        <div className="w-2/5 flex flex-col" data-aos="fade-right">
          <div className="flex flex-col">
            <img
              className="w-50 h-50 object-contain mb-6"
              src={NAVUpgradeDetails[0].img}
              alt={NAVUpgradeDetails[0].heading}
            />
            <h3 className="font-bold text-2xl xl:text-3xl leading-snug mb-4 text-gray-800">
              {NAVUpgradeDetails[0].heading}
            </h3>
            <p className="font-normal text-lg xl:text-xl leading-relaxed text-gray-700">
              {NAVUpgradeDetails[0].content}
            </p>
          </div>
        </div>

        <div className="w-2/5 flex flex-col" data-aos="fade-left">
          <div className="flex flex-col">
            <img
              className="w-50 h-50 object-contain mb-6"
              src={NAVUpgradeDetails[1].img}
              alt={NAVUpgradeDetails[1].heading}
            />
            <h3 className="font-bold text-2xl xl:text-3xl leading-snug mb-4 text-gray-800">
              {NAVUpgradeDetails[1].heading}
            </h3>
            <p className="font-normal text-lg xl:text-xl leading-relaxed text-gray-700">
              {NAVUpgradeDetails[1].content}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Mobile/Tablet Layout ---------- */}
      <div className="lg:hidden flex flex-col">
        <div className="flex flex-col gap-12 md:gap-16">
          {NAVUpgradeDetails.map((detail, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-44 h-44 md:w-60 md:h-60 mb-6 flex justify-center items-center bg-gray-50 rounded-xl">
                <img
                  className="object-contain w-full h-full"
                  src={detail.img}
                  alt={detail.heading}
                />
              </div>

              <h3 className="font-bold text-xl md:text-2xl leading-snug mb-4 text-blue-600">
                {detail.heading}
              </h3>
              <p className="font-normal text-base md:text-lg leading-relaxed text-gray-700">
                {detail.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DynamicsNAVUpgrade;

import React from "react";

function BusinessCentralImplementation() {
  return (
    <div className="px-6 py-10 sm:px-10 sm:py-12 xl:px-24 xl:py-16 2xl:px-32">
     
      <div className="mb-10 md:mb-14 xl:mb-20 text-center" data-aos="fade-up">
        <h1 className="text-gray-800 font-bold text-3xl md:text-4xl xl:text-5xl leading-snug md:leading-tight xl:leading-snug mb-6">
          Business Central Implementation
        </h1>

        <p className="font-sans text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-8 xl:leading-10 text-gray-600 max-w-3xl mx-auto">
          Streamline your business operations with comprehensive Microsoft
          Dynamics 365 Business Central Implementation services.
        </p>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="space-y-8" data-aos="fade-right">
          <div className="flex items-center gap-6">
            <div className="bg-gray-100 p-4 rounded-xl">
              <img
                src="/d365businesscentral_256x256.png"
                alt="Business Central Implementation"
                className="w-25 h-25 object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-2xl text-gray-800 mb-2">
                Complete ERP Solution
              </h2>
              <p className="text-gray-600 text-sm">
                End-to-end implementation services
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-800">Key Features</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-700 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  Financial Management
                </span>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-700 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  Supply Chain Optimization
                </span>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-700 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  Real-time Analytics
                </span>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-700 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  Seamless Integration
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6" data-aos="fade-left">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="font-normal text-base md:text-lg leading-relaxed text-gray-700 mb-6">
              Dynsol provides end-to-end Microsoft Dynamics 365 Business Central
              Implementation services designed to unify your business
              operations. Our comprehensive approach includes financial
              management, supply chain optimization, project management, and
              sales/service automation.
            </p>

          
          </div>

          {/* Microsoft Logos */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">
              Microsoft Ecosystem
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img
                    src="/msshare.webp"
                    alt="SharePoint Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <span className="text-gray-700 text-xs mt-2">SharePoint</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img
                    src="/office365.png"
                    alt="SharePoint Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <span className="text-gray-700 text-xs mt-2">office 365</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img
                    src="/team.png"
                    alt="SharePoint Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <span className="text-gray-700 text-xs mt-2">
                  Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCentralImplementation;

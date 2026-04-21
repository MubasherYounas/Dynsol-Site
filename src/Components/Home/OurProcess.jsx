import React, { useEffect, useRef } from "react";

export default function OurProcess() {
  const airplaneRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            if (target.classList.contains("right")) {
              target.classList.add("fly-in-right");
            } else {
              target.classList.add("fly-in-left");
            }
          } else {
            if (target.classList.contains("right")) {
              target.classList.remove("fly-in-right");
            } else {
              target.classList.remove("fly-in-left");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    airplaneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      airplaneRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="w-full bg-linear-to-br from-white via-lightBlue50 to-mint50">
      <div className="2xl:container 2xl:mx-auto p-12 lg:p-20 xl:p-24">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 2xl:mb-28 lg-32 mt-12">
          <div className="text-center font-poppins font-semibold text-[18px] md:text-[21px] leading-[31.5px] tracking-[14.5%] uppercase text-mediumText">
            What's the process?
          </div>
          <hr className="w-20 md:w-24 mx-auto border-b-[3px] mt-3 border-lightBlue500" />
          <h1 className="text-center font-poppins font-bold text-2xl md:text-4xl lg:text-[55px] lg:leading-[68.48px] mb-3">
            <span className="text-darkText">Our</span>{" "}
            <span className="text-lightBlue600">Process</span>
          </h1>
          <h2 className="text-center text-mediumText font-light text-lg lg:text-[21px] lg:leading-[34.96px] tracking-[4%]">
            POWERED BY EXPERTISE, PRECISION AND BUSINESS EXCELLENCE
          </h2>
        </div>

        {/* Process Steps */}
        <div className="max-w-[1200px] mx-auto xl:px-12 2xl:px-0">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="md:basis-[25%] xl:basis-[35%] flex justify-center md:justify-start">
              <img
                src="/OurProcess1.svg"
                alt="step1"
                className="h-[128px] w-[130px] md:h-auto md:w-auto"
              />
            </div>
            <div className="md:basis-[60%] xl:basis-[57%]">
              <h3 className="text-center md:text-left font-poppins font-semibold text-[24px] md:text-[27.3px] text-darkText right">
                DISCOVERY & ANALYSIS
              </h3>
              <p className="text-center md:text-left font-poppins font-light text-[16px] lg:text-[20px] xl:text-[22px] text-mediumText right">
                We conduct in-depth analysis of your business processes,
                requirements, and objectives to design the optimal Dynamics 365
                solution tailored to your specific needs.
              </p>
            </div>
          </div>

          <div className="hidden md:block relative">
            <img
              src="/OurProcessline.svg"
              alt="line1"
              className="mx-auto h-20 lg:h-[127.07px] w-[75%]"
            />
            <img
              ref={(el) => (airplaneRefs.current[0] = el)}
              src="/airoplane.svg"
              className="absolute top-3 left-[220px] lg:top-[30px] xl:left-[350px]"
              alt="airplane1"
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 bg-lightBlue50 rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="md:basis-[25%] xl:basis-[35%] flex justify-center md:order-2 md:justify-end">
              <img
                src="./OurProcess2.svg"
                alt="step2"
              className="h-[128px] w-[130px] md:h-auto md:w-auto"
              />
            </div>
            <div className="md:basis-[60%] xl:basis-[57%] md:order-1">
              <h3 className="text-center md:text-left font-poppins font-semibold text-[24px] md:text-[27.3px] text-darkText left">
                SOLUTION DESIGN
              </h3>
              <p className="text-center md:text-left font-poppins font-light text-[16px] lg:text-[20px] xl:text-[22px] text-mediumText left">
                Our experts design comprehensive Dynamics 365 architecture,
                including system configuration, customization requirements, and
                integration strategies for seamless implementation.
              </p>
            </div>
          </div>

          <div className="hidden md:block relative">
            <img
              src="/OurProcessline2.svg"
              alt="line2"
              className="mx-auto h-20 lg:h-[127.07px] w-[75%]"
            />
            <img
              ref={(el) => (airplaneRefs.current[1] = el)}
              src="/airoplane2.svg"
              className="absolute top-3 right-[220px] lg:top-[30px] xl:right-[350px] right"
              alt="airplane2"
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 bg-mint50 rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="md:basis-[25%] xl:basis-[35%] flex justify-center md:justify-start">
              <img
                src="/OurProcess3.svg"
                alt="step3"
                className="h-[128px] w-[130px] md:h-auto md:w-auto"
              />
            </div>
            <div className="md:basis-[60%] xl:basis-[57%]">
              <h3 className="text-center md:text-left font-poppins font-semibold text-[24px] md:text-[27.3px] text-darkText right">
                IMPLEMENTATION
              </h3>
              <p className="text-center md:text-left font-poppins font-light text-[16px] lg:text-[20px] xl:text-[22px] text-mediumText right">
                We execute the implementation with precision, handling data
                migration, system configuration, custom development, and
                integration with your existing business applications.
              </p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <img
              src="/OurProcessline.svg"
              alt="line3"
              className="mx-auto h-20 lg:h-[127.07px] w-[75%]"
            />
            <img
              ref={(el) => (airplaneRefs.current[2] = el)}
              src="/airoplane.svg"
              className="absolute top-3 left-[220px] lg:top-[30px] xl:left-[350px]"
              alt="airplane3"
            />
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="md:basis-[25%] xl:basis-[35%] flex justify-center md:order-2 md:justify-end">
              <img
                src="/OurProcess4.svg"
                alt="step4"
                className="h-[128px] w-[130px] md:h-auto md:w-auto"
              />
            </div>
            <div className="md:basis-[60%] xl:basis-[57%] md:order-1">
              <h3 className="text-center md:text-left font-poppins font-semibold text-[24px] md:text-[27.3px] text-darkText left">
                TESTING & QUALITY ASSURANCE
              </h3>
              <p className="text-center md:text-left font-poppins font-light text-[16px] lg:text-[20px] xl:text-[22px] text-mediumText left">
                Rigorous testing ensures your Dynamics 365 solution performs
                flawlessly. We validate all functionalities, integrations, and
                business processes to guarantee optimal performance.
              </p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <img
              src="/OurProcessline2.svg"
              alt="line4"
              className="mx-auto h-20 lg:h-[127.07px] w-[75%]"
            />
            <img
              ref={(el) => (airplaneRefs.current[3] = el)}
              src="/airoplane2.svg"
              className="absolute top-3 right-[220px] lg:top-[30px] xl:right-[350px] right"
              alt="airplane4"
            />
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 bg-lightBlue50 rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="md:basis-[25%] xl:basis-[35%] flex justify-center md:justify-start">
              <img
                src="/OurProcess5.svg"
                alt="step5"
                className="h-[128px] w-[130px] md:h-auto md:w-auto"
              />
            </div>
            <div className="md:basis-[60%] xl:basis-[57%]">
              <h3 className="text-center md:text-left font-poppins font-semibold text-[24px] md:text-[27.3px] text-darkText right">
                DEPLOYMENT & SUPPORT
              </h3>
              <p className="text-center md:text-left font-poppins font-light text-[16px] lg:text-[20px] xl:text-[22px] text-mediumText right">
                We ensure smooth go-live and provide ongoing support, training,
                and maintenance to optimize your Dynamics 365 investment and
                drive continuous business improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

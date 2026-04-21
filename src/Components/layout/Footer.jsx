import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileBeam,
  faLocationDot,
  faPhone,
  faEnvelope,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../../public/svg/dynsol.svg";

export function Footer() {
  const [loading, setLoading] = useState("");

  const handleLinkClick = (path, tab) => {
    setLoading(tab);
    setTimeout(() => {
      window.location.href = `${path}?tab=${tab}`;
    }, 500);
  };

  const handleSimpleLinkClick = (path) => {
    setLoading(path);
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  };

  return (
    <div className="w-full bg-primary text-black">
    
      <div className="md:ml-12! p-6 md:p-8  lg:pl-10 lg:py-10 xl:px-20 xl:pt-16">
      
        <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-4 lg:gap-6">
          {/* ============ LEFT SECTION ============ */}
          <div className="xl:p-2 basis-1/3 flex flex-col gap-3 xl:gap-5">
            <div className="flex flex-col gap-2">
              <div>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 w-[150px] cursor-pointer"
                  onClick={() => (window.location.href = "/")}
                />
              </div>

              <div className="font-poppins font-light text-[14px] lg:text-[16px]">
                (C) IT Solution
              </div>
            </div>

            <div className="flex flex-col gap-2 font-poppins font-light text-[15px] leading-[26px]">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                <a href="tel:+923319660156">+92 335 1148888</a>
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                <a href="mailto:info@Dynsol.co" target="_blank">
                  info@Dynsol.co
                </a>
              </div>

              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-4 w-4 mt-1"
                />
                <a href="https://goo.gl/maps/6x5jkDZgode7pP4v6" target="_blank">
                  House # 14 SubhanAllah Garden Welfare Society Lahore
                </a>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-2">
              <a href="#" target="_blank">
                <img
                  src="/icons/insta.svg"
                  className="h-10 w-10 cursor-pointer hover:-translate-y-1 transition filter grayscale-70 brightness-90"
                  alt="Instagram"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/dynamics365solution/"
                target="_blank"
              >
                <img
                  src="/icons/linkedin.svg"
                  className="h-10 w-10 cursor-pointer hover:-translate-y-1 transition filter grayscale-70 brightness-90"
                  alt="LinkedIn"
                />
              </a>

              <a href="#" target="_blank">
                <img
                  src="/icons/fb.svg"
                  className="h-10 w-10 cursor-pointer hover:-translate-y-1 transition filter grayscale-70 brightness-90"
                  alt="Facebook"
                />
              </a>
            </div>
          </div>

          {/* ============ MIDDLE SECTION ============ */}
          <div className="xl:p-2 basis-1/3 flex flex-col gap-3 xl:gap-4">
            <h3 className="font-poppins font-semibold text-[20px] tracking-[4%] uppercase">
              Our Services
            </h3>

            <div className="flex flex-col gap-2 font-poppins font-light text-[15px] leading-[26px]">
              <span
                onClick={() =>
                  handleLinkClick("/services", "SupportMaintenance")
                }
                className="cursor-pointer "
              >
                Support Maintenance
              </span>

              <span
                onClick={() =>
                  handleLinkClick("/services", "DynamicsNAVUpgrade")
                }
                className="cursor-pointer "
              >
                Dynamics NAV Upgrade
              </span>

              <span
                onClick={() =>
                  handleLinkClick("/services", "BusinessCentralImplementation")
                }
                className="cursor-pointer "
              >
                Business Central Implementation
              </span>

              <span
                onClick={() =>
                  handleLinkClick("/services", "BusinessCentralUpgrade")
                }
                className="cursor-pointer "
              >
                Business Central Upgrade
              </span>
            </div>
          </div>

          {/* ============ RIGHT SECTION ============ */}
          <div className="xl:p-2 basis-1/3 flex flex-col gap-3 xl:gap-4">
            <h3 className="uppercase font-poppins font-semibold text-[20px] tracking-[4%]">
              Information
            </h3>

            <div className="flex flex-col gap-2 font-poppins font-light text-[15px] leading-[26px]">
              <span
                className="cursor-pointer"
                onClick={() => handleSimpleLinkClick("/services")}
              >
                {loading === "/services" ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "Services"
                )}
              </span>

              <span
                className="cursor-pointer"
                onClick={() => handleSimpleLinkClick("/blog")}
              >
                {loading === "/blog" ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "Blog"
                )}
              </span>

              <span
                className="cursor-pointer"
                onClick={() => handleSimpleLinkClick("/contact")}
              >
                {loading === "/contact" ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "Contact Us"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

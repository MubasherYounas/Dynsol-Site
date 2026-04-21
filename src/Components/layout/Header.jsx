import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/svg/dynsol.svg";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const [hoverMain, setHoverMain] = useState(false);
  const [mobileMain, setMobileMain] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClose = () => {
    setIsOpen(false);
    setHoverMain(false);
    setMobileMain(false);
    clearTimeout(timeoutRef.current);
  };

  const isActive = (path) => location.pathname === path;

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      handleClose();
    }
  };

  const delayedClose = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverMain(false);
    }, 150);
  };

  const cancelClose = () => {
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  return (
    <nav className="bg-primary text-black relative p-4 md:py-[18px] md:px-8 lg:py-[15px] lg:px-12 z-20 2xl:py-6 2xl:px-24">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={handleClose}>
          <img
            src={logo}
            alt="DynSol Logo"
            className="w-[110px] h-auto md:w-[100px] md:h-[47px] lg:w-[180px]"
          />
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* MAIN MENU */}
        <div ref={menuRef} className={`navMenu ${isOpen ? "open" : ""}`}>
          <div className=" bg-primary flex flex-col md:flex-row md:gap-1 md:items-center lg:gap-3 xl:gap-3 py-4 px-6 md:p-0 ">
            {/* HOME */}
            <Link to="/" onClick={handleClose}>
              <div
                className={`nav-link link ${
                  isActive("/") ? "active" : ""
                } md:px-3 lg:px-[18px] py-2 hover:text-[#2CCBFF] transition duration-300`}
              >
                Home
              </div>
            </Link>

            {/* ===================== WHAT WE DO ===================== */}
            <div
              className="relative w-full md:w-auto"
              onMouseEnter={() =>
                !isMobile && (cancelClose(), setHoverMain(true))
              }
              onMouseLeave={() => !isMobile && delayedClose()}
            >
              <div
                className="nav-link link md:px-3 lg:px-[18px]   py-2 cursor-pointer flex justify-between items-center hover:text-[#2CCBFF] transition duration-300"
                onClick={() => isMobile && setMobileMain(!mobileMain)}
              >
                What We Do ▾
              </div>

              {/* DESKTOP DROPDOWN */}
              {!isMobile && hoverMain && (
                <div
                  ref={dropdownRef}
                  onMouseEnter={cancelClose}
                  onMouseLeave={delayedClose}
                  className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-64 py-2 z-50 border border-gray-200"
                >
                  <Link
                    to="/business-Central-Implementationn"
                    onClick={handleClose}
                  >
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Business Central Implementation
                    </div>
                  </Link>

                  <Link to="/upgrade-to-Business-Central" onClick={handleClose}>
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Upgrade to Business Central
                    </div>
                  </Link>

                  <Link to="/business-Central-NAVSupport" onClick={handleClose}>
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Business Central/NAV Support
                    </div>
                  </Link>

                  <Link
                    to="/business-Central-Customization"
                    onClick={handleClose}
                  >
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Business Central Customization
                    </div>
                  </Link>

                  <Link to="/power-bi" onClick={handleClose}>
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      PowerBI
                    </div>
                  </Link>
                </div>
              )}

              {/* MOBILE DROPDOWN */}
              {isMobile && mobileMain && (
                <div className="w-full bg-white shadow-md mt-2 rounded-2xl">
                  <Link
                    to="/business-Central-Implementationn"
                    onClick={handleClose}
                  >
                    <div className="px-4 py-3 bg-white hover:bg-gray-100 text-black cursor-pointer">
                      Business Central Implementation
                    </div>
                  </Link>

                  <Link to="/upgrade-to-Business-Central" onClick={handleClose}>
                    <div className="px-4 py-3 bg-white hover:bg-gray-100 text-black cursor-pointer">
                      Upgrade to Business Central
                    </div>
                  </Link>

                  <Link to="/business-Central-NAVSupport" onClick={handleClose}>
                    <div className="px-4 py-3 bg-white hover:bg-gray-100 text-black cursor-pointer">
                      Business Central/NAV Support
                    </div>
                  </Link>

                  <Link
                    to="/business-Central-Customization"
                    onClick={handleClose}
                  >
                    <div className="px-4 py-3 bg-white hover:bg-gray-100 text-black cursor-pointer">
                      Business Central Customization
                    </div>
                  </Link>

                  <Link to="/power-bi" onClick={handleClose}>
                    <div className="px-4 py-3 bg-white hover:bg-gray-100 text-black cursor-pointer">
                      PowerBI
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <Link to="/services" onClick={handleClose}>
              <div
                className={`nav-link link ${
                  isActive("/services") ? "active" : ""
                } md:px-3 lg:px-[18px] py-2 hover:text-[#2CCBFF] transition duration-300`}
              >
                Services
              </div>
            </Link>

            {/* BLOG */}
            <Link to="/blog" onClick={handleClose}>
              <div
                className={`nav-link link ${
                  isActive("/blog") ? "active" : ""
                } md:px-3 lg:px-[18px] py-2 hover:text-[#2CCBFF] transition duration-300`}
              >
                Blog
              </div>
            </Link>

            {/* CONTACT */}
            <Link to="/contact" onClick={handleClose}>
              <div
                className={`nav-link link ${
                  isActive("/contact") ? "active" : ""
                } md:px-3 lg:px-[18px] py-2 hover:text-[#2CCBFF] transition duration-300`}
              >
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router";
import { FaDownload } from "react-icons/fa";
import "./header.css";
import logo from "./../../assets/about/logo.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "about", label: "About" },
  { path: "education", label: "Education" },
  { path: "experience", label: "Experience" },
  { path: "portfolio", label: "Gallery" },
  { path: "contact", label: "Contact" },
];

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar fixed top-2 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-gradient-to-r from-yellow-100/40 to-yellow-200/30 shadow-md text-gray-800 transition-all duration-300 w-[95%] max-w-[1500px] mx-auto rounded-box md:rounded-[50px] px-5 md:px-10 justify-between">
        {/* Start */}
        <div className="navbar-start w-fit">
          <div className="lg:hidden">
            <button onClick={toggleSidebar} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <Link
            to="/"
            className="text-xl  font-extrabold tracking-wide flex items-center space-x-1"
          >
            <img
              className="w-[50px] h-[30px] rounded-2xl "
              src={logo}
              alt="artist logo"
            />
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center w-fit hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <ScrollLink
                  to={item.path}
                  smooth={true}
                  
                  duration={500}
                  offset={-80}
                  className="cursor-pointer custom-nav-link font-semibold"
                  activeClass="text-primary"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end w-fit">
          {/* Desktop: Button | Mobile: Icon */}
          <a
            href="#"
            target=""
            rel="noopener noreferrer"
            className="btn text-[#F4B400] rounded-full hidden md:inline-flex"
          >
            See Resume
          </a>
          <a
            href="#"
            target=""
            rel="noopener noreferrer"
            className="btn btn-ghost text-lg text-success md:hidden"
          >
            <FaDownload />
          </a>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed bg-amber-100 text-black top-16  left-0 z-[999] rounded w-35 shadow-md transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={sidebarRef}
      >
        <ul className="menu pt-5 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer custom-nav-link"
                onClick={closeSidebar}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;

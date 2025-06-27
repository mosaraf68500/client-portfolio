import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router";
import "./header.css";
import { IoClose } from "react-icons/io5";

const navItems = [
  { path: "about", label: "About" },
  { path: "skills", label: "Skills" },
  { path: "education", label: "Education" },
  { path: "experience", label: "Experience" },
  { path: "portfolio", label: "Portfolio" },
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
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar fixed top-2 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-base-100/40 shadow-md transition-all duration-300 w-[95%] max-w-[1500px] mx-auto rounded-box md:rounded-[50px] px-5 md:px-10">
        <div className="navbar-start">
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
            className="text-xl font-extrabold tracking-wide flex items-center space-x-1"
          >
            <span className="text-primary">Belal</span>
            <span className="text-base-content">Hossen</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <ScrollLink
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer custom-nav-link"
                  activeClass="text-primary"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-success rounded-full">Resume</button>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 pt-10 left-0 z-40 h-full w-64 bg-base-100 shadow-md transform transition-transform duration-300 ${
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

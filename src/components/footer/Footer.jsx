import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-8 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between shadow-lg gap-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FDFAF2 0%, #F8EDE3 50%, #F2E8D9 100%)",
        borderTop: "2px solid rgba(232, 197, 71, 0.3)",
      }}
    >
      {/* Artistic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-12 h-12 bg-[#E8C547]/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#D68910]/30 rounded-full blur-lg"></div>
      </div>

      {/* Text section: 2 line centered */}
      <div className="text-center sm:text-left relative z-10">
        <p className="text-lg font-serif font-semibold text-[#5D4037] mb-1">
          Designed & Created by Tamanna Akter
        </p>
        <p className="text-sm text-[#6B4423] leading-relaxed">
          © 2023 - {new Date().getFullYear()} Tamanna Akter , all rights
          reserved.
        </p>
      </div>

      {/* Links section */}
      <div className="flex gap-6 relative z-10">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3 rounded-full bg-[#E8C547]/20 border border-[#E8C547]/30 hover:bg-[#E8C547]/40 transition-all duration-300 hover:shadow-md"
          style={{ color: "#5D4037" }}
        >
          <FaGithub className="text-lg group-hover:scale-110 transition-transform duration-200" />
          <span className="font-medium hidden sm:inline">GitHub</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3 rounded-full bg-[#D68910]/20 border border-[#D68910]/30 hover:bg-[#D68910]/40 transition-all duration-300 hover:shadow-md"
          style={{ color: "#5D4037" }}
        >
          <FaLinkedin className="text-lg group-hover:scale-110 transition-transform duration-200" />
          <span className="font-medium hidden sm:inline">LinkedIn</span>
        </a>
      </div>

      {/* Artistic signature line */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-[#E8C547]/60 via-[#D68910]/40 to-[#A0522D]/30 rounded-full opacity-70"></div>
    </footer>
  );
};

export default Footer;

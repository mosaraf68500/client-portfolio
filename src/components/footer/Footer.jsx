import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between shadow-md gap-4">
      
      {/* Text section: 2 line centered */}
      <div className="text-center sm:text-left">
        <p>Designed & Developed by MOSARAF</p>
        <p>© 2023 - {new Date().getFullYear()} MOSARAF, all rights reserved.</p>
      </div>

      {/* Links section */}
      <div className="flex gap-6">
        <a
          href="https://github.com/mosaraf68500"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mosaraf-hossen-a02553311/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;

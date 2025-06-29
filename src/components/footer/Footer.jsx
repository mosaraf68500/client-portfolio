import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-6 flex flex-col sm:flex-row items-center justify-center gap-3">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Belal Hossen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

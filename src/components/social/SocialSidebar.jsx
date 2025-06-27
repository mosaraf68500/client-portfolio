import React from 'react';
import { FaGithub, FaFacebookF, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 left-5 -translate-y-1/2 flex flex-col items-center gap-3 z-50">
      {[
        {
          icon: <FaGithub />,
          link: 'https://github.com/web-developer-belal',
        },
        {
          icon: <FaFacebookF />,
          link: 'https://facebook.com/belal.hossen.freelancer',
        },
        {
          icon: <FaWhatsapp />,
          link: 'https://wa.me/8801752751232',
        },
        {
          icon: <FaPhone />,
          link: 'tel:+8801752751232',
        },
      ].map((item, index, arr) => (
        <React.Fragment key={index}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-base-100 text-base-content hover:text-primary p-3 rounded-full shadow transition"
          >
            {item.icon}
          </a>
          {index < arr.length - 1 && <div className="w-px h-6 bg-gray-400" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialSidebar;


import React from 'react';
import { FaGithub, FaFacebookF, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialSidebar = () => {
  const socials = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/web-developer-belal',
      bg: 'bg-gray-800/30 text-white hover:bg-gray-700',
    },
    {
      icon: <FaFacebookF />,
      link: 'https://facebook.com/belal.hossen.freelancer',
      bg: 'bg-blue-600/30 text-white hover:bg-blue-500',
    },
    {
      icon: <FaWhatsapp />,
      link: 'https://wa.me/8801752751232',
      bg: 'bg-green-500/30 text-white hover:bg-green-400',
    },
    {
      icon: <FaPhone />,
      link: 'tel:+8801752751232',
      bg: 'bg-rose-500/30 text-white hover:bg-rose-400',
    },
  ];

  return (
    <div className="fixed top-1/2 left-5 -translate-y-1/2 flex flex-col items-center gap-3 z-30">
      {socials.map((item, index, arr) => (
        <React.Fragment key={index}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full shadow-lg transition duration-300 transform hover:scale-110 ${item.bg}`}
          >
            {item.icon}
          </a>
          {index < arr.length - 1 && <div className="w-px h-6 bg-gray-300" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialSidebar;



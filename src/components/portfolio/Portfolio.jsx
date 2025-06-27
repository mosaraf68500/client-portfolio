import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    image: 'https://source.unsplash.com/featured/?ecommerce',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    image: 'https://source.unsplash.com/featured/?portfolio',
    link: '#',
  },
  {
    title: 'Dashboard UI',
    image: 'https://source.unsplash.com/featured/?dashboard',
    link: '#',
  },
  {
    title: 'Mobile App Design',
    image: 'https://source.unsplash.com/featured/?app',
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[230px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

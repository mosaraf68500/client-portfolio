import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: 'Senior Laravel & MERN Developer',
    company: 'Softexel',
    period: 'Jun 2020 – Present',
    desc: `Over 3 years of dedicated work at Softexel, leading backend and frontend development.
    Developed robust Laravel applications and MERN stack projects with scalable architecture.
    Integrated multiple third-party APIs, payment gateways, and optimized performance.`,
  },
  {
    role: 'Full Stack Developer (MERN)',
    company: 'Freelance & Projects',
    period: 'Jun 2019 – May 2020',
    desc: `1 year of hands-on MERN stack experience building dynamic, responsive web apps.
    Focused on React frontend, Node.js/Express backend, and MongoDB databases.`,
  },
  {
    role: 'Laravel Developer',
    company: 'Various Clients',
    period: 'Jun 2017 – May 2020',
    desc: `3 years of Laravel development experience prior to Softexel.
    Built e-commerce, booking, and SaaS platforms.
    Specialized in RESTful APIs, Livewire components, and database design.`,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-base-200 text-base-content"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold mb-2">Experience</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            My professional journey and the impactful projects I've contributed to.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l-4 border-primary ml-6 pl-8 space-y-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Icon */}
              <div className="absolute -left-9 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
              <h4 className="text-lg font-semibold mt-1">{exp.company}</h4>
              <p className="text-sm text-gray-400 italic">{exp.period}</p>
              <p className="mt-3 text-gray-700 leading-relaxed whitespace-pre-line">{exp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

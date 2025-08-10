import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: 'Volunteer',
    company: 'Manush Manusher Jonno Foundation, Barishal Division',
    period: 'Present',
    desc: `Led and coordinated a team of volunteers for various community service initiatives.
Organized and executed events such as food drives and medical camps.
Contributed to local outreach programs focused on education, healthcare, and poverty alleviation.`,
  },
  {
    role: 'Campus Hero',
    company: 'Programming Hero, University of Barishal',
    period: 'During University',
    desc: `Represented Programming Hero as a Campus Hero at the University of Barishal.
Promoted programming learning and engaged fellow students in coding activities and community events.
Assisted in organizing workshops and coding challenges to encourage peer learning and foster collaboration.`,
  },
  {
    role: 'Programming Teacher',
    company: 'Freelance / Various Institutions',
    period: 'Ongoing',
    desc: `Teaching programming to students, guiding them to learn coding concepts and practical development.
Focused on creating an interactive and supportive learning environment.`,
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
          <p className="text-gray-300 max-w-xl mx-auto">
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
              <div className="absolute -left-12 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
              <h4 className="text-lg font-semibold mt-1">{exp.company}</h4>
              <p className="text-sm text-gray-400 italic">{exp.period}</p>
              <p className="mt-3 text-gray-400 leading-relaxed whitespace-pre-line">{exp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

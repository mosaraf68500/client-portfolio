import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationList = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Dhaka University of Engineering & Technology',
    period: '2018 – 2022',
    desc: 'Focused on software engineering, algorithms, and web development. Completed capstone project in MERN stack.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dhaka College',
    period: '2016 – 2018',
    desc: 'Science stream with emphasis on Mathematics and Physics.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Ideal School and College',
    period: '2014 – 2016',
    desc: 'Completed school education with strong performance in core science subjects.',
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Education</h2>
          <p className="text-gray-500">My academic background</p>
        </motion.div>

        <div className="relative border-l-4 border-primary ml-4 pl-6 space-y-10">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[34px] top-1">
                <FaGraduationCap className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
              <h4 className="text-lg font-medium">{edu.institution}</h4>
              <p className="text-sm text-gray-400">{edu.period}</p>
              <p className="mt-2 text-gray-600">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

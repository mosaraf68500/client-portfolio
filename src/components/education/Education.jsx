import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPalette, FaPaintBrush, FaBookOpen } from 'react-icons/fa';

const educationList = [
  
  {
    degree: 'Higher Secondary Certificate (HSC) - Science',
    institution: 'Chandpur Govt girls college,Chandpur',
    period: 'Passing Year: 2022',
    desc: 'Achieved GPA: 5.00 out of 5. Focused on science subjects with strong academic performance.',
    icon: FaPaintBrush,
  },
  {
    degree: 'Secondary school Certificate, Science',
    institution: 'Awinpur High school,Chandpur',
    period: 'Passing Year: 2019',
    desc: 'Achieved GPA: 5.00 out of 5. Focused on science subjects with strong academic performance.',
    icon: FaBookOpen,
  },
];

const Education = () => {
  return (
    <section 
      id="education" 
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDFAF2 0%, #F8EDE3 50%, #F2E8D9 100%)'
      }}
    >
      {/* Subtle artistic background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#E8C547]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-[#D68910]/20 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-[#E8C547]/20 border border-[#E8C547]/30 rounded-full">
            <FaGraduationCap className="text-[#D68910] text-xl" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5D4037]">
              Artistic Journey
            </h2>
          </div>
          <p className="text-lg text-[#6B4423] max-w-2xl mx-auto leading-relaxed">
            My educational path that shaped my artistic vision and creative expression
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#E8C547]/60 to-[#D68910]/60 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Artistic Timeline */}
        <div className="relative ml-8">
          {/* Artistic Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E8C547] to-[#D68910] rounded-full"></div>
          
          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[6px] top-2 w-4 h-4 bg-gradient-to-r from-[#E8C547] to-[#D68910] rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 z-10"></div>

                  {/* Artistic Card */}
                  <div className="ml-8 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-[#E8C547]/20 shadow-lg group-hover:shadow-xl transition-all duration-300 hover:-translate-x-2">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-gradient-to-br from-[#E8C547]/20 to-[#D68910]/20 rounded-xl border border-[#E8C547]/30 flex-shrink-0">
                        <IconComponent className="text-[#D68910] text-xl group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-semibold text-[#5D4037] mb-1 leading-tight">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-medium text-[#D68910] mb-2">
                          {edu.institution}
                        </h4>
                        <p className="text-sm font-medium text-[#8B4513] bg-[#F8EDE3]/50 px-3 py-1 rounded-full inline-block">
                          {edu.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-[#6B4423] leading-relaxed pr-4">
                      {edu.desc}
                    </p>

                    {/* Artistic accent line */}
                    <div className="absolute right-4 top-6 w-px h-20 bg-gradient-to-b from-[#E8C547]/30 to-transparent"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Artistic Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-[#E8C547]/20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-serif font-semibold text-[#5D4037] mb-3">
              "Education is the foundation of every artist's journey"
            </h3>
            <p className="text-sm text-[#8B4513] italic">
              Each stage of learning has been a brushstroke in the canvas of my artistic development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
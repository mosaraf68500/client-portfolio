import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaPalette, FaPaintBrush, FaUsers, FaAward } from 'react-icons/fa';

const experiences = [
  {
    role: 'Art Workshop Coordinator',
    company: 'University Arts Collective, Barishal',
    period: 'Present',
    desc: `Lead creative workshops for students and community members, teaching painting techniques and color theory. 
Organized 5+ art exhibitions showcasing student works. 
Developed curriculum focusing on expressive painting and mixed media approaches.`,
    icon: FaPalette,
  },
  {
    role: 'Resident Artist',
    company: 'Local Art Gallery Network, Barishal Division',
    period: '2023 - Present',
    desc: `Create and exhibit original paintings in local galleries. 
Collaborated with 3 community art projects to create public installations. 
Participated in artist residencies exploring landscape painting and environmental themes.`,
    icon: FaPaintBrush,
  },
  {
    role: 'Freelance Illustrator & Commission Artist',
    company: 'Independent Artist',
    period: 'Ongoing',
    desc: `Create custom artwork commissions for clients including portraits, landscapes, and abstract pieces. 
Developed digital illustration skills alongside traditional painting techniques. 
Completed 25+ client projects with focus on personalized storytelling through visual art.`,
    icon: FaAward,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, y: 30 },
  show: { opacity: 1, x: 0, y: 0 },
};

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
       background: 'linear-gradient(135deg, #FFF8F0 0%, #FFF5EB 0%, #FFF3E8 100%)'

      }}
    >
      {/* Subtle artistic background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/3 left-5 w-12 h-12 bg-[#E8C547]/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-5 w-10 h-10 bg-[#D68910]/20 rounded-full blur-md"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-[#E8C547]/15 border border-[#E8C547]/25 rounded-full max-w-max mx-auto">
            <FaBriefcase className="text-[#D68910] text-xl" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5D4037]">
              Creative Experience
            </h2>
          </div>
          <p className="text-lg text-[#6B4423] max-w-2xl mx-auto leading-relaxed">
            My artistic journey through exhibitions, workshops, and creative collaborations
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#E8C547]/50 to-[#D68910]/50 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Artistic Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative ml-6"
        >
          {/* Artistic Timeline Line */}
          <div className="absolute left-3 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#E8C547]/60 via-[#D68910]/40 to-[#A0522D]/30 rounded-full"></div>
          
          <div className="space-y-14">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#E8C547] to-[#D68910] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 z-10 border-2 border-white/20">
                    <IconComponent className="text-[#5D4037] text-sm group-hover:rotate-6 transition-transform duration-300" />
                  </div>

                  {/* Artistic Content Card */}
                  <div className="ml-12 p-6 rounded-2xl bg-white/8 backdrop-blur-sm border border-[#E8C547]/15 shadow-lg group-hover:shadow-xl transition-all duration-400 hover:-translate-y-1 hover:-translate-x-2">
                    {/* Header Section */}
                    <div className="flex items-start gap-4 mb-4 pb-3 border-b border-[#E8C547]/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E8C547]/15 to-[#D68910]/15 rounded-xl border border-[#E8C547]/20 flex items-center justify-center mt-1">
                        <IconComponent className="text-[#D68910] text-lg group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-serif font-semibold text-[#5D4037] mb-1 leading-tight">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg font-medium text-[#D68910] truncate">
                          {exp.company}
                        </h4>
                        <p className="text-sm font-medium text-[#8B4513] bg-[#F8EDE3]/40 px-3 py-1 rounded-full inline-block mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      {exp.desc.split('\n').map((line, lineIndex) => (
                        <p 
                          key={lineIndex} 
                          className="text-base text-[#6B4423] leading-relaxed pl-1"
                        >
                          {lineIndex === 0 ? (
                            <span className="inline-block w-2 h-2 bg-[#E8C547]/60 rounded-full mr-2 align-middle"></span>
                          ) : null}
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Artistic accent */}
                    <div className="absolute top-6 right-4 w-20 h-0.5 bg-gradient-to-r from-[#E8C547]/20 to-[#D68910]/20 rounded-full"></div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/5 to-[#D68910]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Artistic Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-[#E8C547]/15"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-serif font-semibold text-[#5D4037] mb-3">
              "Every experience is a new color on my palette"
            </h3>
            <p className="text-base text-[#8B4513] italic leading-relaxed">
              Each project, workshop, and collaboration adds depth and perspective to my artistic voice, 
              creating a rich tapestry of creative expression that continues to evolve.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-12 h-0.5 bg-[#E8C547]/40 rounded-full"></div>
              <div className="w-8 h-0.5 bg-[#D68910]/40 rounded-full"></div>
              <div className="w-12 h-0.5 bg-[#A0522D]/40 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
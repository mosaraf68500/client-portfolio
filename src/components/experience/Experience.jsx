import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaHandshake, FaHeart } from 'react-icons/fa';

const experiences = [
  {
    role: 'Community Service (Volunteer)',
    position: 'Founder and President',
    organization: 'Voices Against Child Marriage (VACM)',
    period: 'Grade 11-12 & Post Graduate',
    description: `Launched college-to-college campaign raising awareness about child marriage prevention. 
Built a 2K+ members network and mobilized volunteers for grassroots activism. 
Partnered with Bangladeshi police to successfully stop 50+ child marriages through community interventions.`,
    icon: FaUsers,
  },
  {
    role: 'Human Rights Advocate',
    position: 'Campaign Coordinator',
    organization: 'Student Action for Social Justice',
    period: 'Grade 12 & Post Graduate',
    description: `Organized awareness campaigns reaching 5,000+ students across 10 colleges. 
Coordinated with local NGOs to establish safe spaces for at-risk youth. 
Developed educational materials distributed to 15 schools in rural areas, focusing on gender equality and child rights.`,
    icon: FaHandshake,
  },
  {
    role: 'Community Outreach Volunteer',
    position: 'Team Leader',
    organization: 'Youth for Change Network',
    period: 'Grade 11-12',
    description: `Led weekly community outreach programs serving 200+ underprivileged children. 
Organized educational workshops and skill-building sessions for marginalized communities. 
Collaborated with local government officials to establish community learning centers in 3 villages.`,
    icon: FaHeart,
  },
  {
    role: 'Social Impact Coordinator',
    position: 'Project Manager',
    organization: 'Empower Youth Initiative',
    period: 'Post Graduate',
    description: `Managed a year-long social impact project benefiting 1,500+ students through literacy programs. 
Secured funding and partnerships with 5 international NGOs for educational resources. 
Trained 50+ volunteer teachers and established monitoring systems for program effectiveness.`,
    icon: FaBriefcase,
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
       background: 'linear-gradient(135deg, #FFF8F0 0%, #FFF5EB 50%, #FFF3E8 100%)'
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
              Social Impact Journey
            </h2>
          </div>
          <p className="text-lg text-[#6B4423] max-w-2xl mx-auto leading-relaxed">
            My commitment to community service and creating positive social change through volunteer leadership
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
                        <h4 className="text-lg font-medium text-[#D68910] mb-1 truncate">
                          <span className="text-base text-[#8B4513]">{exp.position}</span> at {exp.organization}
                        </h4>
                        <p className="text-sm font-medium text-[#6B4423] bg-[#F8EDE3]/40 px-3 py-1 rounded-full inline-block">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      {exp.description.split('\n').map((line, lineIndex) => (
                        <div key={lineIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-[#E8C547]/60 rounded-full mt-2.5"></div>
                          <p className="text-base text-[#6B4423] leading-relaxed flex-1">
                            {line}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Impact Stats */}
                    <div className="mt-4 pt-4 border-t border-[#E8C547]/10">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="px-3 py-1 bg-[#E8C547]/20 text-[#D68910] rounded-full font-medium">
                          Community Impact
                        </span>
                        <span className="px-3 py-1 bg-[#D68910]/20 text-[#8B4513] rounded-full font-medium">
                          Volunteer Leadership
                        </span>
                      </div>
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
              "Service is the rent we pay for living on this earth"
            </h3>
            <p className="text-base text-[#8B4423] italic leading-relaxed">
              Through community service, I've learned that true leadership comes from lifting others up. 
              Each initiative has been a journey of growth, connection, and meaningful impact that continues to shape my purpose.
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
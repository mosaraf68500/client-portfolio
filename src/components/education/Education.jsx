import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaPaintBrush, FaBookOpen } from "react-icons/fa";

const educationList = [
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Chandpur Govt. Girls College, Chandpur",
    period: "Passing Year: 2022",
    desc: "Achieved GPA 5.00/5.00 with distinction. Specialized in core science subjects and developed a strong analytical foundation.",
    icon: FaPaintBrush,
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "Awinpur High School, Chandpur",
    period: "Passing Year: 2019",
    desc: "Achieved GPA 5.00/5.00 with excellence. Focused on mathematics, physics, and chemistry, building curiosity and problem-solving skills.",
    icon: FaBookOpen,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAF9F6 0%, #F3ECE3 50%, #EFE6DA 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-24 left-12 w-20 h-20 bg-[#E8C547]/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-16 w-14 h-14 bg-[#D68910]/30 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-[#E8C547]/15 border border-[#E8C547]/30 rounded-full">
            <FaGraduationCap className="text-[#D68910] text-xl" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3C31]">
              Education
            </h2>
          </div>
          <p className="text-[12px] md:text-[15px] text-[#5C4033] max-w-2xl mx-auto leading-relaxed">
            A solid academic foundation that has shaped my discipline,
            creativity, and professional vision — empowering me to grow with
            knowledge and purpose.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#E8C547]/70 to-[#D68910]/70 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-6 sm:ml-12">
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
                  {/* Dot */}
                  <div className="absolute left-[6px] top-2 w-4 h-4 bg-gradient-to-r from-[#E8C547] to-[#D68910] rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>

                  {/* Card */}
                  <div className="ml-8 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-[#E8C547]/20 shadow-md group-hover:shadow-lg transition-all duration-300 hover:-translate-x-1">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                      <div className="p-3 hidden md:block bg-gradient-to-br from-[#E8C547]/20 to-[#D68910]/20 rounded-lg border border-[#E8C547]/30 flex-shrink-0">
                        <IconComponent className="text-[#D68910]  text-xl group-hover:rotate-12 transition-transform duration-300" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-serif font-semibold text-[#4A3C31] mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-md md:text-lg  font-medium text-[#D68910] mb-2">
                          {edu.institution}
                        </h4>
                        <p className="text-xs md:text-sm font-medium text-[#8B5E3C] bg-[#F8EDE3]/60 px-3 py-1 rounded-full inline-block">
                          {edu.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-[10px] md:text-[14px] text-[#5C4033] leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-[#E8C547]/20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-serif font-semibold text-[#4A3C31] mb-3">
              "Education is the foundation of growth and success."
            </h3>
            <p className="text-sm text-[#6B4423] italic">
              Each milestone has contributed to building resilience,
              professionalism, and creative thinking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

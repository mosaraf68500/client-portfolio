import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaHandshake, FaHeart } from "react-icons/fa";

const experiences = [
  {
    role: "Community Service (Volunteer)",
    position: "Founder & President",
    organization: "Voices Against Child Marriage (VACM)",
    period: "Grade 11–12 & Post Graduate",
    description: [
      "Launched college-to-college campaign raising awareness about child marriage prevention.",
      "Built a 2K+ members network and mobilized volunteers for grassroots activism.",
      "Partnered with Bangladeshi police to successfully stop 50+ child marriages.",
    ],
    icon: FaUsers,
    impact: ["2K+ Members", "50+ Marriages Stopped"],
  },
  {
    role: "Art Club President",
    position: "President",
    organization: "CGGC Art Club",
    period: "Grades 9-12",
    description: [
      "Organized 8+ themed traditional art & illustration competitions",
      "Launched 3 art fundamentals bootcamps",
      "Built beginner skills development programs",
    ],
    activityType: "Art",
    participationGrades: [9, 10, 11, 12],
    icon: FaUsers,
    impact: ["8+ Competitions Organized", "3 Bootcamps Launched"],
  },
  {
    role: "Digital Marketing Intern",
    position: "Digital Marketing",
    organization: "Delta Dev",
    period: "Post-Graduate",
    description: [
      "Ran IG/FB/Google ads campaigns that lifted traffic by 45%",
      "Generated 1M impressions and secured 600 SQLs through targeted campaigns",
      "Optimized ad performance and analyzed campaign metrics for maximum ROI",
    ],
    activityType: "Internship",
    participationGrades: ["Post-Graduate"],
    icon: FaUsers,
    impact: ["45% Traffic Increase", "1M Impressions"],
  },
  {
    role: "SEO Executive Junior",
    position: "SEO Executive (Junior)",
    organization: "Delta Dev",
    period: "Post-Graduate",
    description: [
      "Worked on 20+ SEO projects improving traffic/rankings via audits & strategy",
      "Recognized for outstanding results and performance",
      "Collaborated closely with web designers for integrated SEO implementation",
    ],
    activityType: "Work (Paid)",
    participationGrades: ["Post-Graduate"],
    icon: FaUsers,
    impact: ["20+ SEO Projects", "Performance Recognition"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFF5EB] to-[#FFF3E8]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#E8C547]/20 border border-[#E8C547]/30 rounded-full">
          <FaBriefcase className="text-[#D68910]" />
          <span className="text-[#5D4037] font-semibold">Experience</span>
        </div>
        <h2 className="text-2xl lg:text-4xl font-serif font-bold text-[#5D4037] mt-4">
          Social Impact Journey
        </h2>
        <p className="mt-4 text-[12px] md:text-[15px] text-[#6B4423] max-w-2xl mx-auto leading-relaxed">
          My commitment to community service and creating positive change
          through volunteer leadership and grassroots activism.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#E8C547] to-[#D68910] mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E8C547] via-[#D68910] to-[#A0522D] hidden md:block rounded-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                } gap-6`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="z-10 flex  items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#E8C547] to-[#D68910] shadow-lg border border-white/20"
                >
                  <Icon className="text-[#5D4037] text-lg" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-[#E8C547]/20 p-6 transition"
                >
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-[#5D4037] mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-[#D68910] font-medium text-md md:text-lg mb-1">
                    {exp.position}{" "}
                    <span className="text-[#6B4423]">• {exp.organization}</span>
                  </h4>
                  <p className="text-[12px] text-[#8B4513] bg-[#F8EDE3]/60 px-3 py-1 inline-block rounded-full mb-4">
                    {exp.period}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((line, idx) => (
                      <li
                        key={idx}
                        className="text-[12px] md:text-[14px] text-[#6B4423] leading-relaxed flex gap-2"
                      >
                        <span className="w-2 h-2 bg-[#E8C547] rounded-full mt-2"></span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  {/* Impact */}
                  <div className="flex flex-wrap gap-2">
                    {exp.impact.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-[#D68910] bg-[#E8C547]/20 rounded-full border border-[#E8C547]/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Closing Note */}
    </section>
  );
};

export default Experience;

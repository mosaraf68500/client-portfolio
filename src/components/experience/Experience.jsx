import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaUsers,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";

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
    role: "Human Rights Advocate",
    position: "Campaign Coordinator",
    organization: "Student Action for Social Justice",
    period: "Grade 12 & Post Graduate",
    description: [
      "Organized awareness campaigns reaching 5,000+ students across 10 colleges.",
      "Coordinated with NGOs to create safe spaces for at-risk youth.",
      "Developed educational materials for 15 rural schools on gender equality.",
    ],
    icon: FaHandshake,
    impact: ["5K+ Students Reached", "15 Rural Schools"],
  },
  {
    role: "Community Outreach Volunteer",
    position: "Team Leader",
    organization: "Youth for Change Network",
    period: "Grade 11–12",
    description: [
      "Led weekly outreach programs serving 200+ underprivileged children.",
      "Organized workshops and skill-building sessions.",
      "Worked with govt. officials to establish 3 village learning centers.",
    ],
    icon: FaHeart,
    impact: ["200+ Children", "3 Learning Centers", "Weekly Programs"],
  },
  {
    role: "Social Impact Coordinator",
    position: "Project Manager",
    organization: "Empower Youth Initiative",
    period: "Post Graduate",
    description: [
      "Managed literacy project benefiting 1,500+ students.",
      "Secured funding with 5 international NGOs.",
      "Trained 50+ volunteer teachers with monitoring system.",
    ],
    icon: FaBriefcase,
    impact: ["1.5K+ Students", "50+ Teachers Trained"],
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
                    {exp.position} <span className="text-[#6B4423]">• {exp.organization}</span>
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

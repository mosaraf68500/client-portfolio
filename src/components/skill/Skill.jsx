import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaWindows,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiC,
  SiCplusplus,
  SiBootstrap,
  SiMui,
  SiFirebase,
  SiJsonwebtokens,
  SiFigma,
  SiNetlify,
  SiMongoose,
  SiVercel,
} from "react-icons/si";
import Particles from "../../animation/Particles";

const skills = [
  // Operating System
  // { name: "Windows", icon: <FaWindows />, textColor: "text-blue-500", bgColor: "#1e3a8a", lightBgColor: "#1e3a8a1a", level: 95 },

  // Programming Languages
  { name: "C", icon: <SiC />, textColor: "text-blue-600", bgColor: "#1e3a8a", lightBgColor: "#1e3a8a1a", level: 60 },
  { name: "C++", icon: <SiCplusplus />, textColor: "text-blue-500", bgColor: "#1e40af", lightBgColor: "#1e40af1a", level: 55 },
  { name: "JavaScript", icon: <FaJs />, textColor: "text-yellow-400", bgColor: "#854d0e", lightBgColor: "#854d0e1a", level: 90 },
  { name: "Java (Basic)", icon: <FaJava />, textColor: "text-red-500", bgColor: "#991b1b", lightBgColor: "#991b1b1a", level: 40 },
  { name: "PHP (Basic)", icon: <FaPhp />, textColor: "text-indigo-600", bgColor: "#3730a3", lightBgColor: "#3730a31a", level: 60 },

  // Backend
  { name: "Node.js", icon: <FaNodeJs />, textColor: "text-green-600", bgColor: "#166534", lightBgColor: "#1665341a", level: 65 },
  { name: "Express.js", icon: <SiExpress />, textColor: "text-gray-400", bgColor: "#4b5563", lightBgColor: "#4b55631a", level: 75 },
  { name: "Mongoose", icon: <SiMongoose />, textColor: "text-red-600", bgColor: "#991b1b", lightBgColor: "#991b1b1a", level: 70 },
  { name: "MySQL", icon: <SiMysql />, textColor: "text-blue-700", bgColor: "#1e40af", lightBgColor: "#1e40af1a", level: 70 },
  { name: "MongoDB", icon: <SiMongodb />, textColor: "text-green-500", bgColor: "#166534", lightBgColor: "#1665341a", level: 70 },

  // Frontend
  { name: "ReactJS", icon: <FaReact />, textColor: "text-sky-500", bgColor: "#0369a1", lightBgColor: "#0369a11a", level: 80 },

  // Design / Styling
  { name: "HTML", icon: <FaHtml5 />, textColor: "text-orange-500", bgColor: "#9a3412", lightBgColor: "#9a34121a", level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, textColor: "text-blue-500", bgColor: "#1e3a8a", lightBgColor: "#1e3a8a1a", level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap />, textColor: "text-purple-500", bgColor: "#5b21b6", lightBgColor: "#5b21b61a", level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, textColor: "text-cyan-400", bgColor: "#0e7490", lightBgColor: "#0e74901a", level: 95 },
  { name: "Material UI", icon: <SiMui />, textColor: "text-blue-500", bgColor: "#1e40af", lightBgColor: "#1e40af1a", level: 85 },

  // Version Control
  { name: "Git", icon: <FaGitAlt />, textColor: "text-orange-600", bgColor: "#9a3412", lightBgColor: "#9a34121a", level: 90 },
  { name: "GitHub", icon: <FaGithub />, textColor: "text-gray-800", bgColor: "#3f3f46", lightBgColor: "#3f3f461a", level: 85 },

  // Authentication
  { name: "Firebase", icon: <SiFirebase />, textColor: "text-yellow-500", bgColor: "#854d0e", lightBgColor: "#854d0e1a", level: 95 },
  { name: "JWT", icon: <SiJsonwebtokens />, textColor: "text-red-500", bgColor: "#991b1b", lightBgColor: "#991b1b1a", level: 70 },

  // Tools
  { name: "Figma", icon: <SiFigma />, textColor: "text-pink-500", bgColor: "#9d174d", lightBgColor: "#9d174d1a", level: 70 },
  { name: "Pixso", icon: <SiFigma />, textColor: "text-green-500", bgColor: "#166534", lightBgColor: "#1665341a", level: 65 },
  { name: "Vercel", icon: <SiVercel />, textColor: "text-black", bgColor: "#3f3f46", lightBgColor: "#3f3f461a", level: 85 },
  { name: "Netlify", icon: <SiNetlify />, textColor: "text-cyan-500", bgColor: "#0e7490", lightBgColor: "#0e74901a", level: 80 },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skill = () => {
  return (
    <section
      id="skills"
      className="   bg-base-100 text-base-content relative overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0  ">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Section Content */}
      <div className="text-center mb-12 z-10 relative">
        <h2 className="text-4xl font-bold mb-2">My Skills</h2>
        <p className="text-lg text-gray-300">Tech Stack & Proficiencies</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-6  relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-base-200/80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <div
              className={`p-4 rounded-full mb-3 ${skill.textColor} text-4xl`}
              style={{ backgroundColor: skill.lightBgColor }}
            >
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
              <div
                className="h-full rounded"
                style={{
                  backgroundColor: skill.bgColor,
                  width: `${skill.level}%`,
                }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-gray-400">
              {skill.level}% Proficiency
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaHtml5,
  FaGitAlt,
  FaVuejs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiLivewire,
  SiAlpinedotjs,
  SiNuxtdotjs,
} from "react-icons/si";
import Particles from "../../animation/Particles";
// import Aurora from "./Aurora";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    textColor: "text-sky-500",
    bgColor: "#0369a1", // Darker sky blue
    level: 90,
  },
  {
    name: "Laravel",
    icon: <FaLaravel />,
    textColor: "text-red-500",
    bgColor: "#991b1b", // Darker red
    level: 90,
  },
  {
    name: "Livewire",
    icon: <SiLivewire />,
    textColor: "text-pink-500",
    bgColor: "#9d174d", // Darker pink
    level: 85,
  },
  {
    name: "Alpine.js",
    icon: <SiAlpinedotjs />,
    textColor: "text-green-700",
    bgColor: "#166534", // Darker green
    level: 80,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    textColor: "text-green-600",
    bgColor: "#166534", // Darker green
    level: 80,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    textColor: "text-gray-400",
    bgColor: "#4b5563", // Darker gray
    level: 75,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    textColor: "text-green-500",
    bgColor: "#166534", // Darker green
    level: 75,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    textColor: "text-blue-700",
    bgColor: "#1e40af", // Darker blue
    level: 70,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    textColor: "text-cyan-400",
    bgColor: "#0e7490", // Darker cyan
    level: 95,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    textColor: "text-yellow-400",
    bgColor: "#854d0e", // Darker yellow (brownish)
    level: 90,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
    textColor: "text-indigo-600",
    bgColor: "#3730a3", // Darker indigo
    level: 85,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    textColor: "text-black",
    bgColor: "#3f3f46", // Darker gray (not pure black)
    level: 70,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    textColor: "text-purple-500",
    bgColor: "#5b21b6", // Darker purple
    level: 70,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    textColor: "text-orange-600",
    bgColor: "#9a3412", // Darker orange
    level: 80,
  },
  {
    name: "Vue.js",
    icon: <FaVuejs />,
    textColor: "text-green-500",
    bgColor: "#166534", // Darker green
    level: 80,
  },
  {
    name: "Nuxt.js",
    icon: <SiNuxtdotjs />,
    textColor: "text-green-700",
    bgColor: "#166534", // Darker green
    level: 70,
  },
];
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
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
      className="min-h-screen py-20 bg-base-100 text-base-content relative overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 ">
        {/* <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        /> */}

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
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-6 max-w-6xl mx-auto relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-base-200/80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <div
              className={`p-4 rounded-full mb-3 ${skill.textColor} text-4xl`}
              style={{ backgroundColor: skill.bgColor }}
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

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaDownload } from "react-icons/fa";
import aboutImage from "../../assets/about/mui.webp";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-base-100 text-base-content"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="About Belal"
            className="rounded-3xl w-full shadow-xl object-cover max-h-[500px] border-4 border-primary/20"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-4">
            👋 I'm <span className="text-primary">Md. Mosaraf Hossen</span>
          </h2>
          <h4 className="text-xl font-semibold text-accent mb-6">
            Frontend Developer (MERN)
          </h4>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            I’m a passionate and dedicated web developer specializing in
            building responsive, user-friendly, and efficient web applications
            using
            <span className="text-primary font-medium">
              {" "}
              React, Node.js, Express.js,
            </span>
            and <span className="text-primary font-medium">MongoDB</span>. I
            focus on creating clean, maintainable code and delivering modern
            UI/UX experiences with tools like{" "}
            <span className="text-primary font-medium">Tailwind CSS</span>. I’m
            constantly learning new technologies to grow as a full-stack
            developer and bring innovative ideas to life.
          </p>

          {/* Countup stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex flex-col items-start">
              <h3 className="text-4xl font-bold text-primary">
                <CountUp end={30} duration={2} />+
              </h3>
              <span className="text-sm text-gray-400">Projects Completed</span>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-4xl font-bold text-primary">
                <CountUp end={1} duration={2} />+
              </h3>
              <span className="text-sm text-gray-400">Years Experience</span>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-4xl font-bold text-primary">
                <CountUp end={6} duration={2} />+
              </h3>
              <span className="text-sm text-gray-400">
                Technologies Mastered
              </span>
            </div>
          </div>

          {/* Download Button */}
          <a
            href="cv/mosaraf_resume (1).pdf"
            download
            className="btn btn-primary rounded-full inline-flex items-center gap-2"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

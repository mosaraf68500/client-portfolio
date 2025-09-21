import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaDownload, FaPalette, FaPaintBrush, FaImage, FaMedal } from "react-icons/fa";
import aboutImage from "../../assets/banner/banner3.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDFAF2 0%, #F8EDE3 50%, #F2E8D9 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-6 w-14 h-14 bg-[#E8C547]/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-6 w-12 h-12 bg-[#D68910]/30 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 group w-full"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#E8C547]/20 to-[#D68910]/20 rounded-2xl blur-sm opacity-70"></div>
            <div className="relative overflow-hidden rounded-2xl w-full">
              <img
                src={aboutImage}
                alt="Artist Portrait"
                className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[460px] xl:h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4037]/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#E8C547]/90 text-[#5D4037] px-4 py-2 rounded-full text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              View Gallery
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6 text-center lg:text-left"
          >
            {/* Title */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#E8C547]/10 border border-[#E8C547]/30 rounded-full mx-auto lg:mx-0">
                <FaPalette className="text-[#D68910] text-xl" />
                <span className="text-sm font-medium text-[#8B4513] uppercase tracking-wide">
                  Visual Artist
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl flex gap-1.5 justify-center items-center md:flex-col lg:items-start  font-serif font-extrabold leading-tight mb-3">
                <span className="text-[#5D4037] block">Creative</span>
                <span className="text-[#D68910]">Visionary</span>
              </h2>
              <div className="absolute -bottom-3 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-0.5 bg-gradient-to-r from-[#E8C547]/60 to-[#D68910]/60 rounded-full"></div>
            </div>

            {/* Subtitle */}
            <div className="text-start">
              <h4 className=" text-lg lg:text-xl font-medium text-[#5D4037] flex lg:items-center gap-2  lg:justify-start">
              <FaPaintBrush className="text-[#D68910] text-xl" />
              Tamanna Akter
            </h4>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              <p className="text-[12px] md:text-[15px] leading-relaxed text-[#6B4423] font-light">
                I am a <span className="font-semibold text-[#D68910]">visual artist</span> inspired by the relationship between nature, emotion, and human experience. My paintings seek to capture beauty in fleeting moments while expressing depth through color and form.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-[#6B4423] font-light">
                Blending <span className="font-semibold text-[#A0522D]">traditional techniques</span> with modern innovation, I create meaningful pieces that speak both personally and universally. Each artwork is an invitation to connect with the soul.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-3 gap-3 md:gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: FaImage, number: 50, label: "Artworks", color: "#E8C547" },
                { icon: FaPaintBrush, number: 5, label: "Exhibitions", color: "#D68910" },
                { icon: FaMedal, number: 3, label: "Awards", color: "#A0522D" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-[#E8C547]/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <stat.icon className="text-2xl mb-2" style={{ color: stat.color }} />
                  <div className="text-2xl lg:text-3xl font-bold" style={{ color: stat.color }}>
                    <CountUp end={stat.number} duration={2.5} />+
                  </div>
                  <span className="text-sm text-[#8B4513] font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="#cv"
                download
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#E8C547] to-[#D68910] text-[#5D4037] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden border border-[#E8C547]/30 text-[12px] md:text-base"
              >
                <FaDownload className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="relative z-10">Download Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </motion.div>

            {/* Signature */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 pt-6 opacity-80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-6 h-0.5 bg-gradient-to-r from-[#E8C547]/40 to-[#D68910]/40 rounded-full"></div>
              <span className="text-sm text-[#8B4513] italic font-serif">
                "Art speaks where words are unable to explain."
              </span>
              <div className="w-6 h-0.5 bg-gradient-to-l from-[#E8C547]/40 to-[#D68910]/40 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

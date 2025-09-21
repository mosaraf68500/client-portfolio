import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaDownload, FaPalette, FaPaintBrush, FaImage } from "react-icons/fa";
import aboutImage from "../../assets/banner/artist.jpg"


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDFAF2 0%, #F8EDE3 50%, #F2E8D9 100%)'
      }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#E8C547]/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-[#D68910]/30 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E8C547]/20 to-[#D68910]/20 rounded-2xl blur-sm opacity-70"></div>
            <img
              src={aboutImage}
              alt="Artist Portrait"
              className="rounded-2xl w-full shadow-lg object-cover max-h-[500px] border-2 border-[#E8C547]/30 relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Subtle frame elements */}
            <div className="absolute top-3 left-3 w-6 h-6 border border-[#D68910]/40 rounded-full bg-white/10"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border border-[#A0522D]/40 rounded-full bg-white/10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Clean artistic title */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold mb-3 leading-tight">
                <span className="text-[#5D4037] block">Visual</span>
                <span className="text-[#D68910]">Artist</span>
              </h2>
              <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-[#E8C547]/60 rounded-full"></div>
            </div>

            {/* Clean subtitle */}
            <div className="relative">
              <h4 className="text-xl font-medium text-[#5D4037] mb-6 flex items-center gap-2">
                <FaPaintBrush className="text-[#D68910] text-2xl" />
                Tamanna Akter
              </h4>
            </div>

            {/* Clean description */}
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-[#6B4423] font-light max-w-xl">
                I'm a dedicated <span className="font-medium text-[#D68910]">visual artist</span> who creates paintings that capture the beauty of nature and human emotion. My work explores warm earth tones and golden light, inspired by sunsets and natural landscapes.
              </p>
              <p className="text-base leading-relaxed text-[#6B4423] font-light max-w-xl">
                Blending <span className="font-medium text-[#A0522D]">traditional techniques</span> with contemporary approaches, I create pieces that tell stories through color and form. Each artwork is a thoughtful exploration of light, texture, and emotion.
              </p>
            </div>

            {/* Clean stats with subtle styling */}
           

            {/* Clean download button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="#cv"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#E8C547] text-[#5D4037] font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-[#E8C547]/30 overflow-hidden"
              >
                <FaDownload className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
                <span>View Portfolio</span>
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </a>
            </motion.div>

            {/* Subtle signature */}
            <div className="flex items-center gap-2 pt-4 opacity-70">
              <div className="w-6 h-0.5 bg-[#E8C547]/50 rounded"></div>
              <span className="text-xs text-[#8B4513] italic font-serif">"Art captures what words cannot"</span>
              <div className="w-6 h-0.5 bg-[#E8C547]/50 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
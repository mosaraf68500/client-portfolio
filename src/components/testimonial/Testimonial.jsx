import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Md. Mosaraf Hossen",
    role: "Programming Teacher & Developer",
    image: "https://i.ibb.co.com/Hf7vW5md/sathi.jpg",
    quote:
      "As a passionate programming teacher, I strive to create an engaging and supportive environment that helps students unlock their full potential and build real-world skills.",
  },
  {
    name: "Md. Mosaraf Hossen",
    role: "Volunteer & Community Organizer",
    image: "https://i.ibb.co.com/tThYVPV2/callgirl.png",
    quote:
      "I lead volunteer initiatives focused on education and healthcare, working tirelessly to make a positive impact in our local community through meaningful outreach programs.",
  },
  {
    name: "Md. Mosaraf Hossen",
    role: "Freelance Developer",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
    quote:
      "Delivering clean, scalable code and efficient solutions is my priority. I enjoy collaborating with clients to transform ideas into functional and user-friendly applications.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-20 bg-base-200 text-base-content">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop={testimonials.length > 1}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-base-100 p-8 rounded-xl shadow-xl max-w-xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
                />
                <h4 className="text-xl font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.role}</p>
                <p className="mt-4 text-gray-400 italic">"{t.quote}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

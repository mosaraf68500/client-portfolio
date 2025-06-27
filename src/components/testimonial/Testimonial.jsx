import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at StartupX',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'Belal is an exceptional developer. He delivered our platform ahead of time with high quality and responsiveness.',
  },
  {
    name: 'Jane Smith',
    role: 'Product Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'His attention to detail and React expertise made our UI shine. Highly recommend working with him!',
  },
  {
    name: 'Michael Lee',
    role: 'Tech Lead at DevHouse',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote:
      'Professional, fast, and reliable. Delivered a clean full-stack solution with Laravel backend.',
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
          loop
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
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="mt-4 text-gray-700 italic">"{t.quote}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import banner1 from '../../assets/banner/banner-1.jpeg';
import banner2 from '../../assets/banner/banner-2.jpeg';
import banner3 from '../../assets/banner/banner-3.jpeg';
import { Link as ScrollLink } from "react-scroll";

const slides = [
  {
    image: banner1,
    typeText: [
      'Senior Laravel Developer',
      'MERN Stack Specialist',
      'API Integration Expert',
    ],
  },
  {
    image: banner2,
    typeText: [
      'Full Stack Web Developer',
      'React & Tailwind CSS Enthusiast',
      'Clean & Scalable Code',
    ],
  },
  {
    image: banner3,
    typeText: [
      'Passionate Freelancer',
      '3+ Years at Softexel',
      'Delivering Quality Solutions',
    ],
  },
];


const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section id="herosection" className="relative min-h-[97vh]">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[97vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                  {activeIndex === index && (
                    <Typewriter
                      words={slide.typeText}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  )}
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6">
                  <span className="text-primary">MERN</span> &{' '}
                  <span className="text-accent">Laravel</span> Based Solutions
                </p>
                <ScrollLink  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80} className="btn btn-primary rounded-full">About Me</ScrollLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2">
        <button ref={prevRef} className="btn btn-circle bg-white text-black shadow hover:scale-105 transition">❮</button>
      </div>
      <div className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2">
        <button ref={nextRef} className="btn btn-circle bg-white text-black shadow hover:scale-105 transition">❯</button>
      </div>
    </section>
  );
};

export default HeroSection;

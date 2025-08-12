import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { Link as ScrollLink } from "react-scroll";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import banner1 from './../../assets/banner/IMG20240728181630.jpg';
import banner2 from '../../assets/banner/IMG20240728181647.jpg';
import banner3 from '../../assets/banner/sathi.jpg';

const slides = [
  {
    image: banner1,
    typeText: [
      'Aspiring MERN Stack Developer',
      'Passionate About Learning',
      'Focused on Real-World Projects',
    ],
  },
  {
    image: banner2,
    typeText: [
      'Front-End & Back-End Learner',
      'Exploring React & Next.js',
      'Building Skills Step by Step',
    ],
  },
  {
    image: banner3,
    typeText: [
      'Future Full Stack Developer',
      'Creative Problem Solver',
      'Committed to Continuous Growth',
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
              className="relative h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Darker Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
                
                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-extrabold mb-4 drop-shadow-lg animate-fadeIn">
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

                {/* Subheading */}
                <p className="text-xl md:text-2xl font-medium mb-6 drop-shadow-md">
                  <span className="text-primary font-bold">MERN</span> Based Solutions
                </p>

                {/* Button */}
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn btn-primary rounded-full px-8 py-3 shadow-lg hover:scale-105 transition-transform"
                >
                  About Me
                </ScrollLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2">
        <button
          ref={prevRef}
          className="btn btn-circle bg-white text-black shadow hover:scale-105 transition"
        >
          ❮
        </button>
      </div>
      <div className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2">
        <button
          ref={nextRef}
          className="btn btn-circle bg-white text-black shadow hover:scale-105 transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

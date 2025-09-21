import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { Link as ScrollLink } from "react-scroll";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import banner1 from './../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import banner3 from '../../assets/banner/banner1.jpg';

const slides = [
  {
    image: banner1,
    typeText: [
      'Creative Visual Artist',
      'Exploring Modern Art Styles',
      'Bringing Imagination to Life',
    ],
  },
  {
    image: banner2,
    typeText: [
      'Painter & Illustrator',
      'Coloring the World with Ideas',
      'Capturing Emotions in Art',
    ],
  },
  {
    image: banner3,
    typeText: [
      'Digital & Traditional Art',
      'Storytelling Through Colors',
      'Committed to Artistic Growth',
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
      <style jsx>{`
        :global(.hero-gradient) {
          background: linear-gradient(135deg, 
            rgba(244, 180, 0, 0.9) 0%, 
            rgba(230, 126, 34, 0.8) 50%, 
            rgba(139, 69, 19, 0.7) 100%);
        }
        :global(.btn-artistic) {
          background: linear-gradient(45deg, #F4B400, #E67E22);
          border: 2px solid #F5F5DC;
          color: #4A2C0B;
          font-weight: 700;
          text-shadow: none;
          box-shadow: 0 4px 15px rgba(244, 180, 0, 0.4);
        }
        :global(.btn-artistic:hover) {
          background: linear-gradient(45deg, #E67E22, #F4B400);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(139, 69, 19, 0.4);
        }
        :global(.nav-btn-artistic) {
          background: linear-gradient(45deg, #F5F5DC, #F4B400);
          border: 2px solid #E67E22;
          color: #4A2C0B;
          box-shadow: 0 4px 15px rgba(244, 180, 0, 0.3);
        }
        :global(.nav-btn-artistic:hover) {
          background: linear-gradient(45deg, #E67E22, #F4B400);
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(139, 69, 19, 0.5);
        }
        :global(.text-glow) {
          text-shadow: 0 0 10px rgba(244, 180, 0, 0.8), 0 0 20px rgba(230, 126, 34, 0.6);
        }
      `}</style>

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
              <div className="absolute inset-0 hero-gradient flex flex-col justify-center items-center text-center px-6 md:px-16">
                
                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-extrabold mb-4 text-glow animate-fadeIn">
                  {activeIndex === index && (
                    <Typewriter
                      words={slide.typeText}
                      loop={false}
                      cursor
                      cursorStyle="|"
                      cursorColor="#F5F5DC"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  )}
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl font-medium mb-6 drop-shadow-md text-[#F5F5DC]">
                  <span className="text-[#F4B400] font-bold text-glow">Art</span> Portfolio & Creations
                </p>

                {/* Button */}
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn btn-artistic rounded-full px-8 py-3 shadow-lg transition-all duration-300 uppercase tracking-wide"
                >
                  Explore My World
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
          className="nav-btn-artistic btn btn-circle shadow-lg hover:scale-110 transition-all duration-300"
        >
          ❮
        </button>
      </div>
      <div className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2">
        <button
          ref={nextRef}
          className="nav-btn-artistic btn btn-circle shadow-lg hover:scale-110 transition-all duration-300"
        >
          ❯
        </button>
      </div>

      {/* Artistic accent - floating color orbs */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#F4B400] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#E67E22] rounded-full opacity-50 animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-[#8B4513] rounded-full opacity-40 animate-ping delay-2000"></div>
    </section>
  );
};

export default HeroSection;
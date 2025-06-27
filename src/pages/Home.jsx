import React from "react";
import HeroSection from "../components/herosection/HeroSection";
import Skill from "../components/skill/Skill";
import About from "../components/about/About";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import SocialSidebar from "../components/social/SocialSidebar";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <About></About>
      <Skill></Skill>
      <Education></Education>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <SocialSidebar></SocialSidebar>
    </>
  );
};

export default Home;

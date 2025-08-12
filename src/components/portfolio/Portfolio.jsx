import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaTools,
  FaGlobe,
  FaCodeBranch,
  FaTags,
  FaAngleLeft,
  FaAngleRight,
  FaLock,
} from "react-icons/fa";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Squares from "../../animation/Squares";

Modal.setAppElement("#root");

const allProjects = [
  {
    id: 1,
    title: "EduConnect",
    thumbnail: "allProjectImage/Educonnect1.png",
    slider: [
      "allProjectImage/Educonnect1.png",
      "allProjectImage/Educonnect.png",
    ],
    category: "Online Tutor Booking",
    description:
      "EduConnect is a comprehensive online tutor booking platform that connects language learners with qualified tutors worldwide. Features include secure authentication, category-based tutor search, real-time statistics, booking system, tutorial management, review system, and responsive UI/UX with dark/light mode support.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "DaisyUI",
      "MambaUI",
      "React Router",
      "React Hook Form",
      "React Query",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
    ],
    liveLink: "https://educonnect-9e2c7.web.app/",
    repo_type: "private",
    repo_link: null,
  },
  {
    id: 2,
    title: "ScholarBridge",
    thumbnail: "allProjectImage/scholarship1.png",
    slider: [
     "allProjectImage/scholarship1.png",
      "allProjectImage/scholarship2.png",
      "allProjectImage/scholarship2.png",
    ],
    category: "Scholarship Management System",
    description:
      "A comprehensive scholarship management platform connecting students with global opportunities. Features include advanced scholarship search, filtering, application management, review system, secure payments, and role-based access for students, moderators, and administrators.",
    technologies: [
      "React.js 14",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Lucide React",
      "Firebase Authentication",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Vercel",
      "Stripe",
      "React Hook Form",
      "Zod",
      "Date-fns",
      "React Hot Toast",
    ],
    liveLink: "https://assignment-12-7e17d.web.app/",
    repo_type: "private",
    repo_link: null,
    demoAccounts: {
      admin: {
        email: "mosaraf.bu@gmail.com",
        password: "123456789",
      },
      moderator: {
        email: "mosa@rof.com",
        password: "123456789",
      },
    },
  },
  {
    id: 3,
    title: "Recipe Book App",
    thumbnail: "allProjectImage/recipe1.png",
    slider: [
     "allProjectImage/recipe1.png",
    ],
    category: "Recipe Sharing ",
    description:
      "A platform for food enthusiasts to share and discover recipes from around the world. Features include secure authentication, recipe management, discovery by cuisine type, like system for popular dishes, responsive design, and dark/light mode toggle for a personalized viewing experience.",
    technologies: [
      "React.js",
      "Mamba UI",
      "Tailwind CSS",
      "DaisyUI",
      "shadcn/ui",
      "Firebase Authentication",
      "React Simple Typewriter",
      "React Awesome Reveal",
      "RESTful API",
      "Fetch API",
      "CRUD Operations",
    ],
    liveLink: "https://assignment-10-cbed7.web.app/",
    repo_type: "private",
    repo_link: null,
  },
  {
    id: 4,
    title: "Event Explorer",
    thumbnail: "allProjectImage/event1.png",
    slider: [
      "allProjectImage/event1.png",
    ],
    category: "Event Explorer ",
    description:
      "Event Explorer is a platform that enables users to discover, explore, and get details about upcoming local events such as conferences, workshops, sports events, art exhibitions, and more. Features include user authentication, event browsing, category filtering, seat reservation, user profiles, community interaction, and password reset functionality, all within a fully responsive design.",
    technologies: [
      "React.js 14",
      "Tailwind CSS",
      "shadcn/ui",
      "Firebase Authentication",
      "Firebase Firestore",
      "Swiper",
      "AOS (Animate On Scroll)",
    ],
    liveLink: "https://merry-choux-87146b.netlify.app/",
    repo_type: "private",
    repo_link: null,
  },
  {
    id: 5,
    title: "Peddy Adoption",
    thumbnail: "allProjectImage/paddy1.png",
    slider: [
      "allProjectImage/paddy1.png",
    ],
    category: "Pet Adoption ",
    description:
      "Peddy Adoption is a responsive platform built with REST API integration that allows users to browse, search, and adopt pets. Features include dynamic category filtering, sorting by price, detailed pet info modals, an adoption process, and disabling the adopt button after adoption to prevent duplicates.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "React Hook Form",
      "Framer Motion",
      "Firebase Authentication",
      "MongoDB",
      "Express.js",
      "Node.js",
      "RESTful API",
    ],
    liveLink: "https://frolicking-gelato-a9235e.netlify.app/",
    repo_type: "private",
    repo_link: null,
  },
];

const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-base-100 text-base-content relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-15">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#605dff"
          hoverFillColor="green"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Works
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(3);
              }}
              className={`px-4 py-2 cursor-pointer rounded-full font-semibold border transition ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-base-200 border-gray-300 hover:bg-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id + index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-[230px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center px-4 text-white text-center">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm mb-3 flex items-center gap-1">
                  <FaTags /> {project.category}
                </p>
                <button
                  onClick={() => openModal(project)}
                  className="bg-primary cursor-pointer rounded-full p-3 hover:bg-primary-dark transition"
                >
                  <FaEye size={22} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="btn btn-outline btn-primary px-8"
            >
              Show More
            </button>
          </div>
        )}

        {/* Modal */}
        <Modal
          isOpen={!!modalProject}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          className="bg-base-100 rounded-lg max-w-3xl mx-4 p-6 relative shadow-xl max-h-[90vh] overflow-auto"
        >
          {modalProject && (
            <>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-400 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4">{modalProject.title}</h2>

              {/* Image Slider */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-cs-button-next",
                  prevEl: ".swiper-cs-button-prev",
                }}
                className="mb-4"
              >
                {modalProject.slider.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${modalProject.title} screenshot ${i + 1}`}
                      className="rounded w-full h-64 object-cover"
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper-cs-button-prev !btn !btn-primary !btn-soft !btn-sm !rounded-full absolute top-1/2 -translate-y-1/2 left-2 z-10">
                  <FaAngleLeft size={20} />
                </div>
                <div className="swiper-cs-button-next !btn !btn-primary !btn-soft !btn-sm !rounded-full absolute top-1/2 -translate-y-1/2 right-2 z-10">
                  <FaAngleRight size={20} />
                </div>
              </Swiper>

              {/* Description */}
              <p className="mb-4 text-gray-400 whitespace-pre-line">
                {modalProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <FaTools /> Technologies Used:
                </h4>
                <ul className="list-disc list-inside flex flex-wrap gap-2 text-sm">
                  {modalProject.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Demo Accounts */}
              {modalProject.demoAccounts && (
                <div className="mt-6 w-full">
                  <h4 className="font-semibold mb-3">Demo Login Accounts:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {modalProject.demoAccounts.admin && (
                      <div className="border rounded-lg p-4 bg-primary/10">
                        <h5 className="font-bold text-primary mb-1">Admin</h5>
                        <p className="text-sm">
                          <strong>Email:</strong>{" "}
                          {modalProject.demoAccounts.admin.email}
                        </p>
                        <p className="text-sm">
                          <strong>Password:</strong>{" "}
                          {modalProject.demoAccounts.admin.password}
                        </p>
                      </div>
                    )}
                    {modalProject.demoAccounts.moderator && (
                      <div className="border rounded-lg p-4 bg-secondary/10">
                        <h5 className="font-bold text-secondary mb-1">
                          Moderator
                        </h5>
                        <p className="text-sm">
                          <strong>Email:</strong>{" "}
                          {modalProject.demoAccounts.moderator.email}
                        </p>
                        <p className="text-sm">
                          <strong>Password:</strong>{" "}
                          {modalProject.demoAccounts.moderator.password}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 items-center flex-wrap mt-6">
                {modalProject.liveLink && (
                  <a
                    href={modalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <FaGlobe /> Live Site
                  </a>
                )}
                {modalProject.repo_type === "private" ? (
                  <span className="btn btn-outline btn-primary flex items-center gap-2">
                    <FaLock /> Private Repository
                  </span>
                ) : (
                  modalProject.repo_link && (
                    <a
                      href={modalProject.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary flex items-center gap-2"
                    >
                      <FaCodeBranch /> Repository
                    </a>
                  )
                )}
              </div>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Portfolio;

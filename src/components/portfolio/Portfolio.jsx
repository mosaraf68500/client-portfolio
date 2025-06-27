import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import Modal from "react-modal";
import Squares from "../../animation/Squares";

Modal.setAppElement("#root");

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web App",
    description:
      "A full-featured e-commerce platform with payment integration and admin dashboard.",
    technologies: ["React", "Laravel", "Stripe", "MySQL"],
    liveLink: "https://ecommerce.example.com",
    caseStudyLink: "https://ecommerce.example.com/case-study",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web App",
    description:
      "Personal portfolio site with smooth animations and responsive design.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    liveLink: "https://portfolio.example.com",
  },
  {
    id: 3,
    title: "Dashboard UI",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "UI/UX",
    description: "Clean and modern dashboard UI for analytics applications.",
    technologies: ["React", "Chakra UI"],
  },
  {
    id: 4,
    title: "Mobile App Design",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Design",
    description:
      "Conceptual mobile app design focused on user experience and interaction.",
    technologies: ["Figma", "Adobe XD"],
    caseStudyLink: "https://design.example.com/case-study",
  },
  {
    id: 5,
    title: "Blog CMS",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web App",
    description:
      "Custom content management system for blogging with markdown support.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    id: 6,
    title: "Marketing Website",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Design",
    description:
      "Responsive marketing website designed to increase conversions.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://marketing.example.com",
  },
  {
    id: 7,
    title: "Admin Panel",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "UI/UX",
    description:
      "User-friendly admin panel for managing app content and users.",
    technologies: ["React", "Material UI"],
  },
  {
    id: 8,
    title: "Social Network App",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web App",
    description:
      "A social network with real-time chat and media sharing features.",
    technologies: ["MERN Stack", "Socket.io"],
    liveLink: "https://social.example.com",
  },
  // Add more projects here...
];

// Extract unique categories from projects
const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [modalProject, setModalProject] = useState(null);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  // Show only visibleCount projects
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Handlers
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
      {/* Background Animation - behind everything */}
      <div className="absolute inset-0 opacity-15">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#605dff"
          hoverFillColor="green"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>

        {/* Category Filters */}
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[230px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center px-4">
                <h3 className="text-white text-lg font-bold mb-3 text-center">
                  {project.title}
                </h3>
                <button
                  onClick={() => openModal(project)}
                  className="text-white bg-primary cursor-pointer rounded-full p-3 hover:bg-primary-dark transition"
                  aria-label={`View details of ${project.title}`}
                >
                  <FaEye size={22} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
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
          className="bg-base-100 rounded-lg max-w-xl mx-4 p-6 relative shadow-xl max-h-[90vh] overflow-auto"
        >
          {modalProject && (
            <>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-400 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-3">{modalProject.title}</h2>
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-52 object-cover rounded mb-4"
              />
              <p className="mb-4 text-gray-400 whitespace-pre-line">
                {modalProject.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Technologies Used:</h4>
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
              <div className="flex gap-4">
                {modalProject.liveLink && (
                  <a
                    href={modalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Site
                  </a>
                )}
                {modalProject.caseStudyLink && (
                  <a
                    href={modalProject.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary"
                  >
                    Case Study
                  </a>
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

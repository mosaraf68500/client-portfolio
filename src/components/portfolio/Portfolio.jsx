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
    title: "Kuhely.com",
    thumbnail: "portfolio/kuhely.png",
    slider: [
      "portfolio/kuhely.png",
      "portfolio/kuhely-2.png",
      "portfolio/kuhely-3.png",
    ],
    category: "Multi-vendor Ecommerce",
    description:
      "Robust multi-vendor e-commerce platform with Pathao courier integration, Stripe payment, and full-featured admin dashboard.",
    technologies: ["Livewire", "Laravel", "Stripe", "MySQL", "Pathao courier"],
    liveLink: "https://kuhely.com",
    repo_type: "private",
    repo_link: null,
  },
  {
    id: 2,
    title: "Mobiledokan",
    thumbnail: "portfolio/mobiledokan.png",
    slider: [
      "portfolio/mobiledokan.png",
      "portfolio/mobiledokan-2.png",
      "portfolio/mobiledokan-3.png",
      "portfolio/mobiledokan-4.png",
    ],
    category: "Tech Product Listing",
    description:
      "Informative product listing platform for mobile, laptop, and tablet specs with dynamic UI and API-driven content.",
    technologies: ["Livewire", "Laravel", "MySQL", "Laravel Passport"],
    liveLink: "https://mobiledokan.com",
    repo_type: "private",
    repo_link: null,
  },
  {
    id: 3,
    title: "Xpfreelancer",
    thumbnail: "portfolio/xpfreelancer.png",
    slider: [
      "portfolio/xpfreelancer.png",
      "portfolio/xpfreelancer-2.png",
      "portfolio/xpfreelancer-3.png",
    ],
    category: "Freelance Platform",
    description:
      "Modern freelance platform with user dashboards, project bidding, real-time messaging, and secure authentication.",
    technologies: ["Livewire", "Laravel", "MySQL", "Laravel Passport"],
    liveLink: "https://mobiledokan.com",
    repo_type: "private",
    repo_link: null,
  },
  {
    id: 4,
    title: "Ponnomela",
    thumbnail: "portfolio/ponnomela.png",
    slider: [
      "portfolio/ponnomela.png",
      "portfolio/ponnomela-2.png",
      "portfolio/ponnomela-3.png",
    ],
    category: "Vendor Ecommerce",
    description:
      "Multi-vendor store with Vue.js frontend powered by Inertia.js and Laravel backend. Admin panel included.",
    technologies: ["Livewire", "Laravel", "Inertia", "Vue"],
    liveLink: "https://ponnomela.shop",
    repo_type: "private",
    repo_link: null,
  },
  {
    id: 5,
    title: "Asklocal",
    thumbnail: "portfolio/asklocal.png",
    slider: ["portfolio/asklocal.png", "portfolio/asklocal-2.png"],
    category: "Real Estate",
    description:
      "Real estate lead platform with integrated tools like Moxo and Mortgage Coach for user engagement.",
    technologies: ["Livewire", "Laravel", "MySQL", "Moxo", "Mortgage Coach"],
    liveLink: "https://asklocal.com",
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
          Portfolio
        </motion.h2>

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

              <p className="mb-4 text-gray-400 whitespace-pre-line">
                {modalProject.description}
              </p>
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
              <div className="flex gap-4 items-center flex-wrap">
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

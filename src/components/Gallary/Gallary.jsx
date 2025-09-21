import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaPalette,
  FaPaintBrush,
  FaImage,
  FaTags,
  FaAngleLeft,
  FaAngleRight,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

Modal.setAppElement("#root");

const allArtworks = [
  {
    id: 1,
    title: "Sunset Symphony",
    thumbnail: "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    slider: [
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    ],
    category: "Landscape",
    medium: "Oil on Canvas",
    description:
      "A vibrant sunset landscape capturing the golden hour's warm embrace. This piece explores the interplay of light and shadow as the sun dips below the horizon, painting the sky with fiery oranges and soft purples. 24x36 inches, 2024.",
    dimensions: "24x36 inches",
    year: "2024",
    materials: "Oil on Canvas",
    techniques: ["Wet-on-wet technique", "Impasto", "Glazing"],
    availability: "Available for purchase",
    price: "$850",
    processNotes: "Created over 3 weeks with daily plein air studies",
  },
  {
    id: 2,
    title: "Whispers of the Forest",
    thumbnail: "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    slider: [
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    ],
    category: "Nature",
    medium: "Acrylic on Wood Panel",
    description:
      "An intimate exploration of forest textures and light filtering through ancient trees. This piece captures the quiet majesty of nature's cathedral with layered greens and golden highlights. 18x24 inches, 2023.",
    dimensions: "18x24 inches",
    year: "2023",
    materials: "Acrylic on Wood Panel",
    techniques: ["Layering", "Dry brush", "Sgraffito"],
    availability: "Sold",
    price: "SOLD",
    processNotes: "Inspired by a morning hike in the local forest reserve",
  },
  {
    id: 3,
    title: "Urban Reverie",
    thumbnail: "https://i.ibb.co.com/bgK4c6FN/fb.jpg",
    slider: [
      "https://i.ibb.co.com/bgK4c6FN/fb.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    ],
    category: "Abstract",
    medium: "Mixed Media on Canvas",
    description:
      "An abstract interpretation of city life and human connection, blending geometric forms with organic textures. This piece explores the rhythm of urban existence through bold contrasts and layered compositions. 30x40 inches, 2024.",
    dimensions: "30x40 inches",
    year: "2024",
    materials: "Mixed Media on Canvas",
    techniques: ["Collage", "Acrylic pouring", "Charcoal sketching"],
    availability: "Commission Available",
    price: "Contact for pricing",
    processNotes: "Developed from urban photography studies and memory",
  },
  {
    id: 4,
    title: "Ocean's Memory",
    thumbnail: "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    slider: [
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    ],
    category: "Seascape",
    medium: "Watercolor on Paper",
    description:
      "A delicate watercolor study of ocean waves and their eternal dance with the shore. This piece captures the fluidity and movement of water through translucent layers and careful wet-on-dry techniques. 16x20 inches, 2023.",
    dimensions: "16x20 inches",
    year: "2023",
    materials: "Watercolor on Paper",
    techniques: ["Wet-on-dry", "Salt technique", "Negative painting"],
    availability: "Available for purchase",
    price: "$450",
    processNotes: "Painted en plein air during coastal residency",
  },
  {
    id: 5,
    title: "Midnight Garden",
    thumbnail: "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    slider: [
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    ],
    category: "Floral",
    medium: "Oil on Canvas",
    description:
      "A nocturnal floral study illuminated by soft moonlight, exploring the mystery and beauty of night-blooming flowers. Rich blues and silvers create a dreamlike atmosphere. 20x24 inches, 2024.",
    dimensions: "20x24 inches",
    year: "2024",
    materials: "Oil on Canvas",
    techniques: ["Glazing", "Scumbling", "Soft blending"],
    availability: "Private Collection",
    price: "N/A",
    processNotes: "Painted under full moonlight for authentic lighting",
  },
  {
    id: 6,
    title: "Golden Horizon",
    thumbnail: "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    slider: [
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
      "https://i.ibb.co.com/LdWyscjc/download-22.jpg",
    ],
    category: "Landscape",
    medium: "Acrylic on Canvas",
    description:
      "A majestic landscape capturing the golden hour over rolling hills. This piece celebrates the warmth of sunlight and the infinite possibilities of the horizon. 22x28 inches, 2024.",
    dimensions: "22x28 inches",
    year: "2024",
    materials: "Acrylic on Canvas",
    techniques: ["Palette knife", "Wet blending", "Layering"],
    availability: "Available for purchase",
    price: "$650",
    processNotes: "Inspired by early morning landscape studies",
  },
];

const categories = ["All", ...new Set(allArtworks.map((p) => p.category))];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalArtwork, setModalArtwork] = useState(null);
  const itemsPerPage = 4;

  const filteredArtworks =
    selectedCategory === "All"
      ? allArtworks
      : allArtworks.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArtworks = filteredArtworks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const openModal = (artwork) => setModalArtwork(artwork);
  const closeModal = () => setModalArtwork(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Reset to first page when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <section
      id="gallery"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FDFAF2 0%, #F8EDE3 50%, #F2E8D9 100%)",
      }}
    >
      {/* Artistic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#E8C547]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#D68910]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-serif font-bold text-center mb-4 text-[#5D4037]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>

        <motion.p
          className="text-[12px] md:text-[15px] text-center text-[#6B4423] mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A curated collection of my recent paintings and mixed media works
        </motion.p>

      {/* Category Buttons */}
<div className="grid grid-cols-3 md:grid-cols-6 gap-3 lg:w-2/3 mx-auto mb-12">
  {categories.map((cat) => (
    <motion.button
      key={cat}
      onClick={() => handleCategoryChange(cat)}
      className={`px-6 py-3 cursor-pointer rounded-full font-[12px] border-2 transition-all duration-300 relative overflow-hidden group ${
        selectedCategory === cat
          ? "bg-[#E8C547] text-[#5D4037] border-[#E8C547] shadow-lg"
          : "bg-white/50 border-[#E8C547]/30 text-[#6B4423] hover:bg-[#E8C547]/10 hover:border-[#E8C547]/50"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{cat}</span>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#E8C547] to-[#D68910] opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>
    </motion.button>
  ))}
</div>


        {/* Artwork Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {currentArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id + index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-sm border border-[#E8C547]/20"
              onClick={() => openModal(artwork)}
            >
              {/* Artwork Image */}
              <div className="relative overflow-hidden">
                <img
                  src={artwork.thumbnail}
                  alt={artwork.title}
                  className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Artistic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D4037]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Quick info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5D4037]/90 via-[#5D4037]/70 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-serif font-semibold mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <FaImage className="text-[#E8C547]" /> {artwork.medium}
                  </p>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#D68910]/80 text-white text-xs font-medium rounded-full">
                  {artwork.category}
                </span>
              </div>

              {/* View button */}
              <motion.button
                className="absolute top-4 right-4 w-12 h-12 bg-[#E8C547]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#5D4037] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEye className="text-sm" />
              </motion.button>

              {/* Artistic frame effect */}
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-[#E8C547]/30 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6">
            {/* Pagination Info */}
            <div className="text-center text-[#6B4423]">
              <span className="text-sm">
                Showing {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, filteredArtworks.length)}{" "}
                of {filteredArtworks.length} artworks
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <motion.button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-100/50 text-gray-400 cursor-not-allowed"
                    : "bg-[#E8C547]/20 text-[#6B4423] border border-[#E8C547]/30 hover:bg-[#E8C547]/30 hover:shadow-md"
                }`}
                whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
              >
                <FaChevronLeft size={16} />
                Previous
              </motion.button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, index) => (
                  <motion.button
                    key={index}
                    onClick={() =>
                      typeof page === "number" && handlePageChange(page)
                    }
                    className={`w-10 h-10 rounded-full font-medium transition-all duration-300 flex items-center justify-center ${
                      page === currentPage
                        ? "bg-[#E8C547] text-[#5D4037] shadow-lg"
                        : "bg-white/50 text-[#6B4423] border border-[#E8C547]/20 hover:bg-[#E8C547]/10 hover:shadow-md"
                    }`}
                    whileHover={!isNaN(page) ? { scale: 1.05 } : {}}
                    whileTap={!isNaN(page) ? { scale: 0.95 } : {}}
                  >
                    {page === "..." ? "..." : page}
                  </motion.button>
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-100/50 text-gray-400 cursor-not-allowed"
                    : "bg-[#E8C547]/20 text-[#6B4423] border border-[#E8C547]/30 hover:bg-[#E8C547]/30 hover:shadow-md"
                }`}
                whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
              >
                Next
                <FaChevronRight size={16} />
              </motion.button>
            </div>

            {/* Jump to Category Total */}
            <div className="text-center">
              <span className="text-sm text-[#8B4513] bg-[#F8EDE3]/50 px-3 py-1 rounded-full">
                {filteredArtworks.length} pieces in "{selectedCategory}"
                collection
              </span>
            </div>
          </div>
        )}

        {/* Modal */}
        <Modal
          isOpen={!!modalArtwork}
          onRequestClose={closeModal}
          contentLabel="Artwork Details"
          overlayClassName="fixed inset-0 bg-[#5D4037]/80 backdrop-blur-sm flex items-center justify-center z-50"
          className="bg-white/95 backdrop-blur-sm rounded-3xl max-w-4xl mx-4 p-0 relative shadow-2xl max-h-[95vh] overflow-hidden border border-[#E8C547]/20"
        >
          {modalArtwork && (
            <div className="p-0 h-full flex flex-col">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 text-[#6B4423] hover:text-[#D68910] text-2xl font-bold bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
              >
                ×
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-[#E8C547] to-[#D68910] p-6 text-white relative overflow-hidden">
                <h2 className="text-3xl font-serif font-bold mb-2">
                  {modalArtwork.title}
                </h2>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <FaPalette className="text-white/80" />
                    {modalArtwork.medium}
                  </span>
                  <span>•</span>
                  <span>{modalArtwork.year}</span>
                  <span>•</span>
                  <span>{modalArtwork.dimensions}</span>
                </div>
              </div>

              {/* Image Slider */}
              <div className="p-6 pb-4">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".artwork-prev",
                    prevEl: ".artwork-next",
                  }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                  style={{ height: "400px" }}
                >
                  {modalArtwork.slider.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="h-full flex items-center justify-center">
                        <img
                          src={img}
                          alt={`${modalArtwork.title} - View ${i + 1}`}
                          className="w-full h-full object-contain max-w-full max-h-full"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="artwork-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                  <FaAngleLeft size={16} className="text-[#6B4423]" />
                </div>
                <div className="artwork-next absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                  <FaAngleRight size={16} className="text-[#6B4423]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 overflow-y-auto">
                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-serif text-xl font-semibold text-[#5D4037] mb-3 flex items-center gap-2">
                    <FaImage className="text-[#D68910]" />
                    About This Piece
                  </h4>
                  <p className="text-[#6B4423] leading-relaxed text-base">
                    {modalArtwork.description}
                  </p>
                </div>

                {/* Materials & Techniques */}
                <div className="mb-6">
                  <h4 className="font-serif text-xl font-semibold text-[#5D4037] mb-3 flex items-center gap-2">
                    <FaPaintBrush className="text-[#D68910]" />
                    Materials & Process
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-[#8B4513] mb-2">
                        Materials:
                      </h5>
                      <p className="text-[#6B4423]">{modalArtwork.materials}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-[#8B4513] mb-2">
                        Techniques:
                      </h5>
                      <ul className="text-[#6B4423] space-y-1 list-disc list-inside">
                        {modalArtwork.techniques.map((tech, idx) => (
                          <li key={idx} className="text-sm">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {modalArtwork.processNotes && (
                    <div className="mt-4 p-3 bg-[#F8EDE3]/50 rounded-lg">
                      <p className="text-sm text-[#8B4513] italic">
                        "{modalArtwork.processNotes}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Availability */}
                <div className="mb-6 p-4 rounded-xl border-2 border-[#E8C547]/20">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-semibold text-[#5D4037] flex items-center gap-2">
                      <FaTags className="text-[#D68910]" />
                      Availability
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        modalArtwork.availability === "Available for purchase"
                          ? "bg-[#E8C547]/20 text-[#D68910] border border-[#E8C547]/30"
                          : "bg-gray-100/50 text-gray-500"
                      }`}
                    >
                      {modalArtwork.availability}
                    </span>
                  </div>
                  {modalArtwork.price && modalArtwork.price !== "SOLD" && (
                    <div className="mt-3 pt-3 border-t border-[#E8C547]/10">
                      <p className="text-2xl font-serif font-bold text-[#5D4037]">
                        {modalArtwork.price}
                      </p>
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                {modalArtwork.availability === "Available for purchase" && (
                  <div className="text-center mt-6 pt-4 border-t border-[#E8C547]/10">
                    <button className="px-8 py-3 bg-gradient-to-r from-[#E8C547] to-[#D68910] text-[#5D4037] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                      <FaPalette className="text-sm" />
                      Inquire About This Piece
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;

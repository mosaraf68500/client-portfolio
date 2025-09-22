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
  FaRulerCombined,
  FaCalendarAlt,
  FaBrush,
  FaQuoteLeft,
  FaHeart,
  FaShareAlt,
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

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
                whileTap={{ scale: 0.95 }}
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

        {/* Enhanced Professional Modal */}
        <Modal
          isOpen={!!modalArtwork}
          onRequestClose={closeModal}
          contentLabel="Artwork Details"
          overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          className="bg-white rounded-3xl max-w-6xl max-h-[95vh] w-full flex flex-col outline-none shadow-2xl overflow-hidden"
        >
          {modalArtwork && (
            <div className="h-full flex flex-col">
              {/* Enhanced Header */}
              <div className="relative">
                <div className="bg-gradient-to-r from-[#2C1810] via-[#5D4037] to-[#8B4513] px-8 py-6 text-white relative overflow-hidden">
                  {/* Subtle background pattern - Simplified */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25%_25%,#E8C547_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#D68910_0%,transparent_50%)]"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h1 className="text-2xl md:text-4xl font-serif font-bold mb-2 leading-tight">
                          {modalArtwork.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm opacity-90">
                          <span className="flex items-center gap-2">
                            <FaPalette className="text-[#E8C547]" />
                            {modalArtwork.medium}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaRulerCombined className="text-[#E8C547]" />
                            {modalArtwork.dimensions}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaCalendarAlt className="text-[#E8C547]" />
                            {modalArtwork.year}
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                            {modalArtwork.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Close button */}
                      <motion.button
                        onClick={closeModal}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-xl font-bold">×</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex overflow-hidden">
                {/* Left Side - Image Gallery */}
                <div className="w-full lg:w-2/3 p-8 bg-gradient-to-br from-white/80 to-[#FDFAF2]/80">
                  <div className="relative">
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        nextEl: ".artwork-prev",
                        prevEl: ".artwork-next",
                      }}
                      className="rounded-3xl overflow-hidden shadow-2xl"
                      style={{ height: "500px" }}
                      spaceBetween={20}
                      grabCursor={true}
                    >
                      {modalArtwork.slider.map((img, i) => (
                        <SwiperSlide key={i}>
                          <div className="h-full flex items-center justify-center p-2 pb-2">
                            <motion.div
                              className="relative w-full h-full max-w-md mx-auto"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <img
                                src={img}
                                alt={`${modalArtwork.title} - View ${i + 1}`}
                                className="w-full h-full object-contain rounded-3xl shadow-2xl border-8 border-white/50"
                              />
                              {/* Image number indicator */}
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {i + 1} / {modalArtwork.slider.length}
                              </div>
                            </motion.div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Navigation buttons */}
                    <motion.button
                      className="artwork-prev absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaAngleLeft size={16} className="text-[#5D4037]" />
                    </motion.button>
                    
                    <motion.button
                      className="artwork-next absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaAngleRight size={16} className="text-[#5D4037]" />
                    </motion.button>

                    {/* Thumbnail navigation */}
                    <div className="flex gap-2 mt-6 justify-center overflow-x-auto pb-2">
                      {modalArtwork.slider.map((_, i) => (
                        <motion.button
                          key={i}
                          className={`w-16 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                            i === 0 ? 'border-[#E8C547] shadow-md' : 'border-gray-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={modalArtwork.slider[i]}
                            alt={`Thumbnail ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Detailed Content */}
                <div className="w-full lg:w-1/3 p-8 bg-white/95 border-l border-[#E8C547]/20 overflow-y-auto">
                  {/* Description Section */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-bold text-[#5D4037] mb-4 flex items-center gap-3">
                      <FaImage className="text-[#D68910] text-xl" />
                      About This Piece
                    </h3>
                    <div className="space-y-4">
                      <p className="text-[#6B4423] leading-relaxed text-lg">
                        {modalArtwork.description}
                      </p>
                      {modalArtwork.processNotes && (
                        <div className="p-4 bg-gradient-to-r from-[#F8EDE3]/50 to-[#E8C547]/10 rounded-2xl border border-[#E8C547]/20">
                          <div className="flex items-start gap-3">
                            <FaQuoteLeft className="text-[#D68910] mt-1 flex-shrink-0" />
                            <p className="text-[#8B4513] italic text-sm leading-relaxed">
                              {modalArtwork.processNotes}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="mb-8">
                    <h3 className="text-xl font-serif font-semibold text-[#5D4037] mb-4 flex items-center gap-2">
                      <FaPaintBrush className="text-[#D68910]" />
                      Technical Details
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <h4 className="font-medium text-[#8B4513] flex items-center gap-2">
                            <FaBrush className="text-[#D68910]" />
                            Materials
                          </h4>
                          <p className="text-[#6B4423] bg-[#F8EDE3]/30 px-3 py-2 rounded-lg">
                            {modalArtwork.materials}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-[#8B4513] flex items-center gap-2">
                            Techniques
                          </h4>
                          <div className="space-y-1">
                            {modalArtwork.techniques.map((tech, idx) => (
                              <span
                                key={idx}
                                className="inline-block bg-white/50 px-3 py-1 rounded-full text-xs text-[#6B4423] border border-[#E8C547]/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Availability & Pricing */}
                  <div className="mb-8 p-6 rounded-2xl border-2 bg-gradient-to-br from-[#FDFAF2] to-[#F8EDE3] border-[#E8C547]/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-serif font-semibold text-[#5D4037] flex items-center gap-2">
                        <FaTags className="text-[#D68910]" />
                        Availability
                      </h3>
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        modalArtwork.availability === "Available for purchase"
                          ? "bg-[#E8C547] text-[#5D4037] shadow-md"
                          : modalArtwork.availability === "Sold"
                          ? "bg-gray-100 text-gray-500"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {modalArtwork.availability}
                      </div>
                    </div>
                    
                    {modalArtwork.price && modalArtwork.price !== "SOLD" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center pt-4 border-t border-[#E8C547]/20"
                      >
                        <p className="text-3xl font-serif font-bold text-[#5D4037] mb-2">
                          {modalArtwork.price}
                        </p>
                        <p className="text-sm text-[#8B4513] opacity-75">
                          Includes certificate of authenticity
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {modalArtwork.availability === "Available for purchase" && (
                      <motion.button
                        className="w-full py-4 bg-gradient-to-r from-[#E8C547] to-[#D68910] text-[#5D4037] font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaHeart className="text-sm" />
                        Inquire About This Piece
                      </motion.button>
                    )}
                    
                    <motion.button
                      className="w-full py-3 bg-white/80 border-2 border-[#E8C547]/30 text-[#6B4423] font-medium rounded-2xl hover:bg-[#E8C547]/10 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaShareAlt className="text-sm" />
                      Share This Artwork
                    </motion.button>
                  </div>

                  {/* Social proof */}
                  <div className="mt-6 pt-4 border-t border-[#E8C547]/20">
                    <p className="text-center text-sm text-[#8B4513] opacity-75 flex items-center justify-center gap-2">
                      <FaHeart className="text-[#D68910]" />
                      Loved by 127 collectors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
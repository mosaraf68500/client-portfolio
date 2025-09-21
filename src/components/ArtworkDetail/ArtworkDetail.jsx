import React from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  FaPalette,
  FaPaintBrush,
  FaImage,
  FaTags,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const allArtworks = [
  {
    id: 1,
    title: "Sunset Symphony",
    thumbnail: "https://i.ibb.co/LdWyscjc/download-22.jpg",
    slider: [
      "https://i.ibb.co/LdWyscjc/download-22.jpg",
      "https://i.ibb.co/LdWyscjc/download-22.jpg",
      "https://i.ibb.co/LdWyscjc/download-22.jpg",
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
  // এখানে আরও artworks add করতে পারো
];

const ArtworkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = allArtworks.find((art) => art.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FDFAF2] to-[#F2E8D9] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#5D4037] mb-4">
            Artwork Not Found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#E8C547] text-[#5D4037] rounded-full font-semibold hover:bg-[#D68910] transition-colors"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFAF2] to-[#F2E8D9] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#E8C547]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#D68910]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#E8C547]/30 text-[#6B4423] font-medium hover:bg-[#E8C547]/10 transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronLeft size={16} />
          Back to Gallery
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="sticky top-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-[#E8C547]/20">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".artwork-next-detail",
                    prevEl: ".artwork-prev-detail",
                  }}
                  className="rounded-2xl overflow-hidden"
                  style={{ height: "500px" }}
                >
                  {artwork.slider.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="h-full flex items-center justify-center">
                        <img
                          src={img}
                          alt={`${artwork.title} - View ${i + 1}`}
                          className="w-full h-full object-contain max-w-full max-h-full"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation */}
                <div className="artwork-prev-detail absolute top-1/2 -translate-y-1/2 left-4 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                  <FaChevronLeft size={18} className="text-[#6B4423]" />
                </div>
                <div className="artwork-next-detail absolute top-1/2 -translate-y-1/2 right-4 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                  <FaChevronRight size={18} className="text-[#6B4423]" />
                </div>

                {/* Image Count */}
                <div className="mt-4 text-center text-sm text-[#8B4513]">
                  {artwork.slider.length} images
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Artwork Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#E8C547] to-[#D68910] p-6 rounded-2xl text-white relative overflow-hidden">
              <h1 className="text-4xl font-serif font-bold mb-3">
                {artwork.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-lg opacity-90">
                <span className="flex items-center gap-2">
                  <FaPalette className="text-white/80" />
                  {artwork.medium}
                </span>
                <span className="text-white/70">•</span>
                <span className="text-white/70">{artwork.year}</span>
                <span className="text-white/70">•</span>
                <span className="text-white/70">{artwork.dimensions}</span>
                <span className="text-white/70">•</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {artwork.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E8C547]/20">
              <h3 className="font-serif text-2xl font-semibold text-[#5D4037] mb-4 flex items-center gap-2">
                <FaImage className="text-[#D68910]" />
                About This Piece
              </h3>
              <p className="text-[#6B4423] leading-relaxed text-lg">
                {artwork.description}
              </p>
            </div>

            {/* Materials & Techniques */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E8C547]/20">
              <h3 className="font-serif text-2xl font-semibold text-[#5D4037] mb-6 flex items-center gap-2">
                <FaPaintBrush className="text-[#D68910]" />
                Materials & Process
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-[#8B4513] mb-3 text-lg">
                    Materials:
                  </h4>
                  <div className="bg-[#F8EDE3]/50 p-3 rounded-lg">
                    <p className="text-[#6B4423] font-medium">{artwork.materials}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#8B4513] mb-3 text-lg">
                    Techniques:
                  </h4>
                  <div className="bg-[#F8EDE3]/50 p-3 rounded-lg space-y-2">
                    {artwork.techniques.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#6B4423]">
                        <div className="w-2 h-2 bg-[#D68910] rounded-full"></div>
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {artwork.processNotes && (
                <div className="p-4 bg-gradient-to-r from-[#E8C547]/10 to-[#D68910]/10 rounded-xl border border-[#E8C547]/20">
                  <p className="text-sm text-[#8B4513] italic font-serif">
                    "{artwork.processNotes}"
                  </p>
                </div>
              )}
            </div>

            {/* Availability & Price */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-[#E8C547]/20">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-2xl font-semibold text-[#5D4037] flex items-center gap-2">
                  <FaTags className="text-[#D68910]" />
                  Availability
                </h3>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    artwork.availability === "Available for purchase"
                      ? "bg-[#E8C547]/20 text-[#D68910] border border-[#E8C547]/30"
                      : "bg-gray-100/50 text-gray-500"
                  }`}
                >
                  {artwork.availability}
                </span>
              </div>

              {artwork.price &&
                artwork.price !== "SOLD" &&
                artwork.price !== "N/A" && (
                  <div className="text-center py-6 bg-gradient-to-r from-[#E8C547]/10 to-[#D68910]/10 rounded-xl">
                    <p className="text-4xl font-serif font-bold text-[#5D4037] mb-2">
                      {artwork.price}
                    </p>
                    <p className="text-sm text-[#8B4513] uppercase tracking-wide">
                      Original Artwork
                    </p>
                  </div>
                )}

              {artwork.availability === "Available for purchase" && (
                <div className="text-center mt-6 pt-4 border-t border-[#E8C547]/20">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-[#E8C547] to-[#D68910] text-[#5D4037] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPalette className="text-sm" />
                    Inquire About This Piece
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;

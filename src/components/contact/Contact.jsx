import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiUser, FiSend } from "react-icons/fi";
import Aurora from "../../animation/Aurora";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    setMessage("Sending...");

    try {
      const res = await fetch("https://my-portfolio-kappa-five-45.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Your message sent successfully. Thanks for contacting me.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setMessage("Error: " + (data.error || "Something went wrong"));
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDFAF2 0%, #F8EDE3 50%, #F2E8D9 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <Aurora
          colorStops={["#E8C547", "#D68910", "#A0522D"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-extrabold mb-3 text-[#5D4037]">Contact Me</h2>
          <p className="text-[#6B4423] max-w-lg mx-auto leading-relaxed">
            I’m always open to new opportunities and collaborations. Feel free
            to reach out via the form or my contact details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[
              {
                icon: <FiUser className="text-[#D68910] text-3xl" />,
                label: "Name",
                value: "Tamanna Akter",
              },
              {
                icon: <FiMail className="text-[#D68910] text-3xl" />,
                label: "Email",
                value: "tamanna@gmail.com",
              },
              {
                icon: <FiMapPin className="text-[#D68910] text-3xl" />,
                label: "Location",
                value: "Chandpur, Bangladesh",
              },
              {
                icon: (
                  <FiMail className="text-[#A0522D] text-3xl rotate-45" />
                ),
                label: "WhatsApp",
                value: "+88017777777",
                link: "https://wa.me/8801777777",
              },
            ].map(({ icon, label, value, link }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 bg-white/20 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-[#E8C547]/20"
                onClick={() => link && window.open(link, "_blank")}
                style={{
                  background: 'linear-gradient(135deg, rgba(253, 250, 242, 0.8) 0%, rgba(248, 237, 227, 0.8) 100%)'
                }}
              >
                <div>{icon}</div>
                <div>
                  <p className="text-sm font-semibold text-[#8B4513]">{label}</p>
                  <p className="text-lg font-medium text-[#5D4037] text-wrap break-all">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8 p-8 rounded-2xl shadow-lg border border-[#E8C547]/20"
            onSubmit={handelSubmit}
            style={{
              background: 'linear-gradient(135deg, rgba(253, 250, 242, 0.9) 0%, rgba(248, 237, 227, 0.9) 100%)'
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-lg focus:border-[#D68910] focus:ring-2 focus:ring-[#E8C547]/30 transition bg-white/80 border-[#E8C547]/30 text-[#5D4037] placeholder-[#8B4513]"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-lg focus:border-[#D68910] focus:ring-2 focus:ring-[#E8C547]/30 transition bg-white/80 border-[#E8C547]/30 text-[#5D4037] placeholder-[#8B4513]"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full rounded-lg focus:border-[#D68910] focus:ring-2 focus:ring-[#E8C547]/30 transition bg-white/80 border-[#E8C547]/30 text-[#5D4037] placeholder-[#8B4513]"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full min-h-[140px] rounded-lg focus:border-[#D68910] focus:ring-2 focus:ring-[#E8C547]/30 transition resize-none bg-white/80 border-[#E8C547]/30 text-[#5D4037] placeholder-[#8B4513]"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {message && (
              <p className={`w-full p-2 rounded-lg text-center font-medium ${
                message.includes("successfully") 
                  ? "bg-[#E8C547]/20 text-[#D68910] border border-[#E8C547]/30" 
                  : "bg-red-50/80 text-red-600 border border-red-200/50"
              }`}>
                {message}
              </p>
            )}
            <button
              type="submit"
              className="btn rounded-full w-full flex items-center justify-center gap-3 font-semibold text-lg hover:gap-5 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #E8C547 0%, #D68910 100%)',
                color: '#5D4037',
                border: '2px solid rgba(232, 197, 71, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Send Message <FiSend className="text-xl" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
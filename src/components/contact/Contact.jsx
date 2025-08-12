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
      className="min-h-screen py-20 bg-base-100 text-base-content relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <Aurora
          colorStops={["#007aff", "#00d390", "#FF3232"]}
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
          <h2 className="text-4xl font-extrabold mb-3">Contact Me</h2>
          <p className="text-gray-300 max-w-lg mx-auto">
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
                icon: <FiUser className="text-primary text-3xl" />,
                label: "Name",
                value: "Mosaraf Hossen",
              },
              {
                icon: <FiMail className="text-primary text-3xl" />,
                label: "Email",
                value: "mosaraf.cse8.bu@gmail.com",
              },
              {
                icon: <FiMapPin className="text-primary text-3xl" />,
                label: "Location",
                value: "Barishal, Bangladesh",
              },
              {
                icon: (
                  <FiMail className="text-green-500 text-3xl rotate-45" />
                ),
                label: "WhatsApp",
                value: "+8801783176838",
                link: "https://wa.me/8801783176838",
              },
            ].map(({ icon, label, value, link }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => link && window.open(link, "_blank")}
              >
                <div>{icon}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">{label}</p>
                  <p className="text-lg font-medium text-base-content text-wrap break-all">
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
            className="space-y-8 bg-base-200 p-8 rounded-2xl shadow-lg"
            onSubmit={handelSubmit}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full min-h-[140px] rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition resize-none"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {message && (
              <p className="btn btn-success btn-soft w-full p-2 rounded-lg">
                {message}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary rounded-full w-full flex items-center justify-center gap-3 font-semibold text-lg hover:gap-5 transition-all duration-300"
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

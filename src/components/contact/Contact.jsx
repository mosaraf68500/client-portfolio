import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiUser, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-base-100 text-base-content"
    >
      <div className="max-w-6xl mx-auto px-6">
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
            I’m always open to new opportunities and collaborations. Feel free to
            reach out via the form or my contact details.
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
                label: 'Name',
                value: 'Belal Hossen',
              },
              {
                icon: <FiMail className="text-primary text-3xl" />,
                label: 'Email',
                value: 'programmer.m.belal@gmail.com',
              },
              {
                icon: <FiMapPin className="text-primary text-3xl" />,
                label: 'Location',
                value: 'Dhaka, Bangladesh',
              },
              {
                icon: (
                  <FiMail className="text-green-500 text-3xl rotate-45" />
                ),
                label: 'WhatsApp',
                value: '+8801752751232',
                link: 'https://wa.me/8801752751232',
              },
              
            ].map(({ icon, label, value, link }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => link && window.open(link, '_blank')}
              >
                <div>{icon}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">{label}</p>
                  <p className="text-lg font-medium text-base-content">{value}</p>
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
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                'Thank you for reaching out! This is a demo form submission alert.'
              );
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition"
              required
            />
            
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition"
              required
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full min-h-[140px] rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition resize-none"
              required
            ></textarea>
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

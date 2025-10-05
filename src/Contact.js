// OPTION 1: Using EmailJS (Recommended - Free & Easy)
// 1. Install EmailJS: npm install @emailjs/browser
// 2. Sign up at https://www.emailjs.com/
// 3. Create an email template and get your credentials

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';
import emailjs from '@emailjs/browser';
import myPhoto from "./MyPhoto.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  const { isDark } = useTheme();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // EMAILJS METHOD
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace with your EmailJS credentials
    const SERVICE_ID = 'service_4asggqp';      // New service ID
    const TEMPLATE_ID = 'template_kshtx93';     // Keep same
    const PUBLIC_KEY = '6ELO3bV3GWRwyk_AY';     // Keep sameconst SERVICE_ID = 'service_4asggqp';      // New service ID

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'jiyahajare62@gmail.com', // Your email
      },
      PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Thank you! Your message has been sent successfully.");
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setSubmitStatus('error');
      alert("Oops! Something went wrong. Please try again or email me directly.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactItems = [
    { icon: "📧", label: "Email", value: "jiyahajare62@gmail.com", href: "mailto:jiyahajare62@gmail.com" },
    { icon: "📞", label: "Phone", value: "+91 8767010097", href: "tel:+918767010097" },
    { icon: "📍", label: "Location", value: "Vita, Maharashtra" },
    { icon: "💼", label: "Status", value: "Open to Opportunities" },
  ];

  const socialLinks = [
    { href: "https://github.com/Mrunali-66", icon: "github" },
    { href: "https://www.linkedin.com/in/mrunali-hajare-368052312/", icon: "linkedin" },
    {
      href: "https://leetcode.com/u/Mrunali_Hajare/",
      svg: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className={`w-6 h-6 ${isDark ? 'invert' : ''}`}
        />
      ),
    },
  ];

  return (
    <section 
      id="contact" 
      className={`min-h-screen py-20 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 12 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-center mb-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 10 }}
            className="flex flex-col items-center md:items-start space-y-8"
          >
            <motion.img
              src={myPhoto}
              alt="Mrunali Hajare"
              className="w-44 h-44 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-6 w-full"
            >
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 80 }}
                  className={`flex items-center space-x-4 p-3 rounded-xl transition duration-300 ${
                    isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="bg-blue-500 p-3 rounded-lg text-xl text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-lg hover:text-blue-400 transition duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Connect With Me</h3>
              <div className="flex space-x-5">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.25,
                      rotate: 8,
                      backgroundColor: "#3b82f6",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`p-3 rounded-lg transition duration-300 flex items-center justify-center ${
                      isDark ? 'bg-gray-800 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-500'
                    }`}
                  >
                    {link.icon ? (
                      <i className={`fab fa-${link.icon} text-2xl ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}></i>
                    ) : (
                      link.svg
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 10 }}
            className={`rounded-2xl p-8 shadow-2xl space-y-6 ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            {["name", "email", "subject"].map((field, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <label className={`block mb-2 font-semibold capitalize ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ${
                    isDark
                      ? 'bg-gray-900 border border-gray-700 text-white'
                      : 'bg-white border border-gray-300 text-gray-900'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                />
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.03 }}>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 resize-none transition duration-300 ${
                  isDark
                    ? 'bg-gray-900 border border-gray-700 text-white'
                    : 'bg-white border border-gray-300 text-gray-900'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder="Your message here..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? {
                scale: 1.07,
                backgroundColor: "#2563eb",
                boxShadow: "0px 0px 15px rgba(37,99,235,0.5)",
              } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              transition={{ type: "spring", stiffness: 200 }}
              className={`w-full bg-blue-500 text-white font-bold py-3 rounded-lg transition duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center font-semibold"
              >
                Message sent successfully!
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center font-semibold"
              >
                Failed to send. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
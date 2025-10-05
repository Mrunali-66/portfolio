import React from "react";
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';

function About() {
  const { isDark } = useTheme();
  
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      id="about" 
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-500">Education</h3>
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}
                variants={fadeInUp}
                viewport={{ once: false, amount: 0.4 }}
              >
                <h4 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  B.Tech in Computer Science Engineering
                </h4>
                <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Adarsh Institute of Technology & Research Center
                </p>
                <p className={`mb-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Current: Final Year Engineering | Vita, Maharashtra
                </p>
                <p className="text-blue-400 text-sm">MHT-CET Percentile: 88</p>
                <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Relevant Coursework: Data Structures, Algorithms, DBMS, OS, Computer Networks
                </p>
              </motion.div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-500">Experience</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Python Development Intern",
                    company: "RD INFRO TECHNOLOGY",
                    duration: "Oct 2025 - Present",
                    points: [
                      "Developing automation scripts and APIs using Python & Flask",
                      "Working on AI-based solutions and scalable web applications",
                    ],
                  },
                  {
                    title: "Full Stack Web Developer Intern",
                    company: "RKR WebTechz",
                    duration: "Apr 2025 - May 2025",
                    points: [
                      "Developed responsive web applications",
                      "Collaborated on user-friendly interfaces and UX",
                    ],
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    className={`p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ${
                      isDark ? 'bg-gray-900' : 'bg-white'
                    }`}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <h4 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h4>
                    <p className="text-blue-400 mb-2">{exp.company}</p>
                    <p className={`mb-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {exp.duration}
                    </p>
                    <ul className={`text-sm space-y-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.points.map((point, j) => (
                        <li key={j}>• {point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Personal Info */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-500">Personal Information</h3>
              <motion.div
                className={`p-6 rounded-lg space-y-4 shadow-lg hover:shadow-xl transition ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}
                variants={fadeInUp}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div>
                  <p className={isDark ? 'text-gray-400 mb-1' : 'text-gray-600 mb-1'}>Location</p>
                  <p className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Vita, Maharashtra
                  </p>
                </div>
                <div>
                  <p className={isDark ? 'text-gray-400 mb-1' : 'text-gray-600 mb-1'}>Email</p>
                  <p className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    jiyahajare62@gmail.com
                  </p>
                </div>
                <div>
                  <p className={isDark ? 'text-gray-400 mb-1' : 'text-gray-600 mb-1'}>Phone</p>
                  <p className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    +91 8767010097
                  </p>
                </div>
                <div>
                  <p className={isDark ? 'text-gray-400 mb-1' : 'text-gray-600 mb-1'}>Languages</p>
                  <p className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    English (Proficient), Hindi (Proficient), Marathi (Native)
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Key Strengths</h3>
              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {[
                  "Leadership",
                  "Problem-Solving",
                  "AI & Prompt Engineering",
                  "Team Collaboration",
                  "Continuous Learning",
                ].map((skill, i) => (
                  <motion.span
                    key={i}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      isDark
                        ? 'bg-blue-500 bg-opacity-20 text-blue-400 hover:bg-opacity-30'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                    variants={fadeInUp}
                    custom={i}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Achievements</h3>
              <motion.div
                className={`p-6 rounded-lg space-y-3 text-sm shadow-lg hover:shadow-xl transition ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {[
                  "🏆 UK Design Patent (2024) - Alert System on Curvy Roads",
                  "🏅 Finalist at DIPEX 2025 (Safety Theme)",
                  "🥇 Top-10 in Ideathon 2024",
                  "💻 Solved 100+ coding problems on LeetCode",
                ].map((ach, i) => (
                  <motion.p
                    key={i}
                    className={isDark ? 'text-gray-300' : 'text-gray-700'}
                    variants={fadeInUp}
                    custom={i}
                  >
                    {ach}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
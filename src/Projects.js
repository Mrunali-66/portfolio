import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

function Projects() {
  const { isDark } = useTheme();
  
  const projects = [
    {
      title: "Student Management System",
      description: "A full-stack application built with MEAN stack to efficiently manage 100+ student records with comprehensive CRUD operations and secure authentication.",
      tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
      features: ["CRUD Operations for 100+ records", "Role-based Authentication", "Responsive Angular UI", "RESTful APIs", "Search & Filter Features"],
      color: "from-blue-500 to-blue-700",
      emoji: "🎓"
    },
    {
      title: "BharatLaw - Multilingual Legal Search",
      description: "An innovative IPC search application supporting 12 Indian languages with intelligent autocomplete and optimized performance for accessibility.",
      tech: ["React.js", "JavaScript", "JSON"],
      features: ["12 Indian Language Support", "Autocomplete Search", "Lazy Loading (25% faster)", "Responsive UI", "Bookmarking Features"],
      color: "from-green-500 to-green-700",
      emoji: "⚖️"
    },
    {
      title: "AI Voice Assistant",
      description: "A voice-controlled AI assistant supporting bilingual commands with integrated web search, reminders, media playback, and AI image generation capabilities.",
      tech: ["Python", "NLP", "APIs", "Multi-threading"],
      features: ["English & Hindi Voice Commands", "Web Search Integration", "Reminders & Media Playback", "AI Image Generation", "30% Performance Improvement"],
      color: "from-purple-500 to-purple-700",
      emoji: "🤖"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    <section 
      id="projects" 
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <motion.p
          className={`text-center mb-16 max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          Here are some projects that demonstrate my skills and experience in full-stack development, AI integration, and problem-solving
        </motion.p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-900 hover:shadow-2xl' 
                  : 'bg-gray-50 hover:shadow-xl'
              }`}
              custom={index * 0.2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              whileHover={cardHover}
              viewport={{ once: false, amount: 0.25 }}
            >
              {/* Project Header with Emoji */}
              <motion.div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-6xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.emoji}
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-500 mb-2">Key Features:</h4>
                  <motion.ul
                    className={`text-sm space-y-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        variants={fadeInUp}
                        custom={i}
                      >
                        • {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        isDark
                          ? 'bg-blue-500 bg-opacity-20 text-blue-400 hover:bg-opacity-40'
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                      variants={fadeInUp}
                      custom={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
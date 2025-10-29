import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock ThemeContext for demo
const ThemeContext = React.createContext({ isDark: false });
const useTheme = () => React.useContext(ThemeContext);

function Projects() {
  const { isDark } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  
const projects = [
  {
    title: "Student Management System",
    description: "A robust full-stack application developed using the MEAN stack to manage student data efficiently. The system supports CRUD operations for over 100+ records, secure role-based authentication, and responsive Angular interfaces for both administrators and users. Designed with RESTful APIs and optimized query performance for seamless management of student records.",
    tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
    features: [
      "Comprehensive CRUD Functionality for 100+ Records",
      "Role-Based Authentication & Access Control",
      "Responsive Angular Frontend",
      "RESTful API Integration for Scalable Communication",
      "Advanced Search, Sort, and Filter Operations"
    ],
    color: "from-blue-500 to-blue-700",
    emoji: "🎓"
  },
  {
    title: "AI Voice Assistant",
    description: "A bilingual, voice-controlled AI assistant built in Python with NLP and multithreading capabilities. It handles real-time web searches, reminders, media playback, and AI image generation through external APIs. Designed for natural, conversational interactions in English and Hindi, with an optimized speech recognition pipeline for 30% faster response times.",
    tech: ["Python", "NLP", "APIs", "Multi-threading"],
    features: [
      "Dual Language Support (English & Hindi)",
      "Web Search & AI Image Generation Integration",
      "Reminders, Media Playback, and Automation Commands",
      "Optimized Voice Recognition Pipeline (30% Faster)",
      "Thread-Safe Event Handling for Real-Time Performance"
    ],
    color: "from-purple-500 to-purple-700",
    emoji: "🤖"
  },
  {
    title: "BharatLaw – Multilingual Legal Search Engine",
    description: "A multilingual legal search platform designed to make the Indian Penal Code (IPC) accessible in 12 Indian languages. Features include intelligent autocomplete, localized search optimization, and performance-focused lazy loading. Engineered for inclusivity, speed, and cross-language accuracy in legal queries.",
    tech: ["React.js", "JavaScript", "JSON"],
    features: [
      "Support for 12 Indian Languages",
      "Intelligent Autocomplete for IPC Keywords",
      "Optimized Lazy Loading (25% Faster Rendering)",
      "Responsive Cross-Device UI",
      "Bookmarking & Quick Access Features"
    ],
    color: "from-green-500 to-green-700",
    emoji: "⚖️"
  },
  {
    title: "Image Classification with Convolutional Neural Networks",
    description: "An end-to-end deep learning project focused on training a CNN to classify images across multiple categories. Implemented using TensorFlow and Keras, featuring custom architecture design, transfer learning from VGG16/ResNet, and visual performance tracking. Demonstrates expertise in model evaluation, regularization, and GPU-accelerated training.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "scikit-learn"],
    features: [
      "Custom CNN Architecture Design for Image Classification",
      "Data Augmentation & Preprocessing Pipelines",
      "Transfer Learning using Pretrained Models (VGG16/ResNet)",
      "Comprehensive Model Evaluation & Visualization",
      "Confusion Matrix, Accuracy & Loss Tracking",
      "GPU-Accelerated Training & Batch Normalization"
    ],
    color: "from-purple-500 to-indigo-600",
    emoji: "🧠"
  },
  {
    title: "Alert Warning on Curvy Road – IoT Safety System",
    description: "An IoT-based real-time road safety solution that detects curvy roads and warns drivers using sensor data. Designed with Arduino/Raspberry Pi and embedded systems integration to enhance road safety through automated detection and visual/auditory alerts.",
    tech: ["IoT", "Sensors", "Arduino/Raspberry Pi", "Embedded Systems"],
    features: [
      "Real-Time Curve Detection via Ultrasonic & Gyro Sensors",
      "Instant Driver Alerts (Visual & Audio)",
      "Sensor Calibration for Accuracy in Varied Terrains",
      "Data Logging for Performance Analysis",
      "Low-Power Embedded System Implementation"
    ],
    color: "from-yellow-500 to-orange-600",
    emoji: "🚗"
  },
  {
    title: "Dangerous Writing App",
    description: "A productivity and focus-enhancing writing application that motivates users by deleting their text after a period of inactivity. Built with Python and Tkinter, it leverages event-driven programming to enforce creative discipline and eliminate writer’s block.",
    tech: ["Python", "Tkinter", "Event-Driven Programming"],
    features: [
      "Customizable Inactivity Timeout (3–15 seconds)",
      "Progressive Visual Warning System",
      "Live Word Count & Performance Tracking",
      "Configurable Save Formats (TXT, DOCX, RTF)",
      "100ms Timer Precision for Real-Time Monitoring"
    ],
    color: "from-red-500 to-orange-600",
    emoji: "✍️"
  },
  {
    title: "Kanban Task Manager",
    description: "A Trello-inspired, full-stack task management platform built with Flask and modern JavaScript. Features a real-time drag-and-drop Kanban board, analytics dashboard, and glassmorphism UI design for a sleek, modern user experience.",
    tech: ["Python", "Flask", "JavaScript", "RESTful API", "Pillow"],
    features: [
      "Interactive Drag-and-Drop Kanban Interface",
      "Real-Time Task Updates & Analytics Dashboard",
      "Priority Tagging and Task Categorization",
      "RESTful API for Modular Expansion",
      "Modern Glassmorphism UI with Responsive Design"
    ],
    color: "from-blue-500 to-cyan-600",
    emoji: "📋"
  },
  {
    title: "Permalist / To-Do List App",
    description: "A full-stack to-do list web application that supports CRUD operations with PostgreSQL integration. Built with Node.js and Express.js, it features persistent task storage, dynamic EJS rendering, and a structured backend architecture.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "EJS", "pgAdmin4"],
    features: [
      "Persistent Task Management with PostgreSQL",
      "Full CRUD Operations & Validation",
      "Dynamic Rendering using EJS Templates",
      "Secure Database Connectivity with pgAdmin4",
      "Version-Controlled Development Workflow"
    ],
    color: "from-green-500 to-emerald-600",
    emoji: "✅"
  },
  {
    title: "Blog Management System",
    description: "A content management platform for creating, editing, and publishing blogs with Node.js and Express. Implements MVC architecture, dynamic EJS templates, and secure post handling with a clean, responsive frontend.",
    tech: ["Node.js", "Express.js", "EJS", "Git", "MVC Architecture"],
    features: [
      "Rich Text Blog Creation & Editing",
      "Secure Post Deletion & Session Handling",
      "Real-Time Content Rendering",
      "Responsive & Mobile-First UI",
      "Clean MVC Code Organization"
    ],
    color: "from-purple-500 to-pink-600",
    emoji: "📝"
  },
  {
    title: "Wanderlust Hotel Booking",
    description: "A modern, responsive frontend for hotel discovery and booking. Designed with HTML, CSS, and JavaScript to deliver an intuitive user journey for browsing, comparing, and booking accommodations.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Interactive Hotel Browsing & Booking Interface",
      "Search & Filter Capabilities for Destinations",
      "Responsive UI with Modern Animations",
      "Optimized User Experience for Mobile Devices",
      "Travel-Focused Minimalist Design"
    ],
    color: "from-indigo-500 to-blue-600",
    emoji: "🏨"
  },
  {
    title: "Real-Time Collaboration Platform",
    description: "A full-featured, Slack-inspired communication platform enabling real-time team collaboration using WebSocket technology. Built for scalability with Redis Pub/Sub and a MongoDB backend, it supports multi-channel messaging, file sharing, user presence tracking, and rich interaction features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    features: [
      "Instant Real-Time Messaging via WebSockets",
      "Multi-Channel Organization & Direct Chats",
      "Typing Indicators & Online Presence Tracking",
      "File Uploads with Cloud Storage & Preview",
      "Message Search, Threads, and Emoji Reactions",
      "Scalable Architecture with Redis Pub/Sub"
    ],
    color: "from-indigo-500 to-purple-600",
    emoji: "💬"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform providing a complete shopping experience with secure payment integration, dynamic inventory management, and a powerful admin dashboard. Implements Stripe for payments, JWT for authentication, and automated order tracking with real-time notifications.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS S3"],
    features: [
      "Stripe Payment Gateway Integration",
      "Dynamic Product Catalog & Advanced Filtering",
      "Persistent Cart & Wishlist Functionality",
      "Admin Dashboard for Product & Order Management",
      "Order Tracking with Real-Time Email Notifications",
      "JWT-Based Secure Authentication System"
    ],
    color: "from-green-500 to-emerald-600",
    emoji: "🛒"
  },
  {
    title: "Microservices Architecture System",
    description: "A production-grade distributed system showcasing modern microservices design principles. Implements API Gateway, asynchronous message queuing with RabbitMQ, containerization via Docker, and orchestration with Kubernetes for scalable, fault-tolerant deployments.",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL"],
    features: [
      "Independent Microservices with API Gateway Pattern",
      "Service Discovery, Load Balancing & Rate Limiting",
      "Asynchronous Messaging with RabbitMQ",
      "Containerized Deployment using Docker & Kubernetes",
      "Distributed Tracing, Logging & Monitoring",
      "Fault Tolerance via Circuit Breaker Implementation"
    ],
    color: "from-cyan-500 to-blue-600",
    emoji: "🔧"
  },
  {
    title: "Data Automation & Analytics Pipeline",
    description: "An intermediate Python project for automating data workflows — from extraction to visualization. Uses Pandas for ETL operations, Matplotlib/Seaborn for analytics, and scheduling mechanisms for automated refreshes. Designed for modularity, performance, and maintainability.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "SQLite", "Requests"],
    features: [
      "End-to-End ETL Pipeline Automation",
      "API & CSV Data Ingestion Modules",
      "Interactive Data Visualizations & Reports",
      "Caching for Improved Execution Speed",
      "Comprehensive Logging & Error Management",
      "Automated Scheduling with Cron/APScheduler"
    ],
    color: "from-blue-500 to-cyan-600",
    emoji: "🐍"
  },
  {
    title: "Code Snippet Manager with AI",
    description: "An intelligent developer productivity tool that integrates AI-powered search and organization for code snippets. Uses OpenAI API for semantic understanding and ElasticSearch for ultra-fast retrieval. Supports version tracking, team collaboration, and IDE integrations for a seamless developer experience.",
    tech: ["React", "Node.js", "OpenAI API", "ElasticSearch", "PostgreSQL", "Redis"],
    features: [
      "AI-Powered Semantic Code Search & Explanation",
      "Automatic Snippet Tagging & Categorization",
      "Multi-Language Syntax Highlighting (50+)",
      "Version Control & Rollback Capabilities",
      "Team Collaboration & Secure Sharing",
      "Browser Extension & IDE Integration"
    ],
    color: "from-violet-500 to-purple-600",
    emoji: "💾"
  }
];


  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }, [currentPage, totalPages]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handlePrevious, handleNext]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { duration: 0.3 }
    }
  };

  const cardHover = {
    scale: 1.05,
    y: -10,
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
          Here are some projects that demonstrate my skills in full-stack development, IoT systems, Python automation, and problem-solving
        </motion.p>

        {/* Projects Grid */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  custom={index}
                  variants={cardVariants}
                  whileHover={cardHover}
                  className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-900 hover:shadow-2xl' 
                      : 'bg-gray-50 hover:shadow-xl'
                  }`}
                >
                  {/* Project Header with Emoji */}
                  <motion.div
                    className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <motion.div
                      className="text-6xl"
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
                    <p className={`mb-4 text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-500 mb-2">Key Features:</h4>
                      <ul className={`text-xs space-y-1 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                            isDark
                              ? 'bg-blue-500 bg-opacity-20 text-blue-400 hover:bg-opacity-40'
                              : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full transition-all duration-300 ${
              currentPage === 1
                ? isDark
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : isDark
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </motion.button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <motion.button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    currentPage === pageNumber
                      ? 'bg-blue-500 text-white shadow-lg'
                      : isDark
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {pageNumber}
                </motion.button>
              );
            })}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full transition-all duration-300 ${
              currentPage === totalPages
                ? isDark
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : isDark
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </motion.button>
        </motion.div>

        {/* Page Indicator */}
        <motion.p
          className={`text-center mt-6 text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Page {currentPage} of {totalPages} • Use arrow keys to navigate
        </motion.p>
      </div>
    </section>
  );
}

// Demo wrapper with theme
export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark }}>
      <div className="relative">
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
        <Projects />
      </div>
    </ThemeContext.Provider>
  );
}
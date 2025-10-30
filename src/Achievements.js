import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "./ThemeContext"; // ✅ use global theme

function Achievements() {
  const { isDark } = useTheme(); // ✅ get global theme
  const scrollContainerRef = useRef(null);

  const achievements = [
    {
      icon: "🏆",
      title: "UK Design Patent (2024)",
      description:
        "Awarded UK Design Patent for innovative 'Alert System on Curvy Roads' - a safety solution designed to prevent accidents on dangerous road curves.",
      category: "Patent",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "💡",
      title: "DIPEX 2025 Finalist",
      description:
        "Selected as finalist at DIPEX 2025 under the Safety Theme, competing with innovative safety solutions from across the region.",
      category: "Competition",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: "🚀",
      title: "National Level Innovation Competition",
      description:
        "Participated in prestigious national level innovation competition, showcasing cutting-edge solutions and competing with top innovators across the country.",
      category: "Competition",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "👩🏻‍💻",
      title: "Full Stack Web Development",
      description:
        "Completed comprehensive Full Stack Web Development certification, mastering modern web technologies, frameworks, and best practices for building scalable applications.",
      category: "Certification",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🐍",
      title: "Full Stack Python Development",
      description:
        "Achieved Full Stack Python Development certification, gaining expertise in Python frameworks, backend development, and database management.",
      category: "Certification",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "💻",
      title: "100+ LeetCode Problems Solved",
      description:
        "Active problem solver on LeetCode with 100+ coding challenges completed, demonstrating strong algorithmic and data structure skills.",
      category: "Coding",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "🌟",
      title: "Open Source Contributor",
      description:
        "Active contributor on GitHub with multiple open-source projects, collaborating with developers worldwide and giving back to the community.",
      category: "Development",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Manual scroll
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 400;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Auto scroll every 3 seconds
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="achievements" className="min-h-screen py-20 transition-all">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          Achievements & <span className="text-blue-500">Recognition</span>
        </motion.h2>

        <motion.p
          className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          Milestones and accomplishments that reflect my dedication to
          innovation, learning, and excellence.
        </motion.p>

        {/* Scrollable Cards */}
        <div className="relative">
          {/* Left Scroll */}
          <motion.button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              isDark
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Right Scroll */}
          <motion.button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              isDark
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className={`flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 text-white hover:shadow-2xl"
                    : "bg-white text-gray-900 hover:shadow-xl"
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  className={`h-32 bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                >
                  <motion.div
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement.icon}
                  </motion.div>
                </motion.div>

                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark
                          ? "bg-blue-500 bg-opacity-20 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {achievement.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hint */}
        <motion.p
          className={`text-center mt-6 text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          ← Auto-scroll enabled | You can scroll manually too →
        </motion.p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

function Achievements() {
  const { isDark } = useTheme();
  
  const achievements = [
    {
      icon: "🏆",
      title: "UK Design Patent (2024)",
      description: "Awarded UK Design Patent for innovative 'Alert System on Curvy Roads' - a safety solution designed to prevent accidents on dangerous road curves.",
      category: "Patent",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "💡",
      title: "DIPEX 2025 Finalist",
      description: "Selected as finalist at DIPEX 2025 under the Safety Theme, competing with innovative safety solutions from across the region.",
      category: "Competition",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: "💻",
      title: "100+ LeetCode Problems Solved",
      description: "Active problem solver on LeetCode with 100+ coding challenges completed, demonstrating strong algorithmic and data structure skills.",
      category: "Coding",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "🌟",
      title: "Open Source Contributor",
      description: "Active contributor on GitHub with multiple open-source projects, collaborating with developers worldwide and giving back to the community.",
      category: "Development",
      color: "from-indigo-500 to-blue-500"
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
      id="achievements" 
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
          Achievements & <span className="text-blue-500">Recognition</span>
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
          Milestones and accomplishments that reflect my dedication to innovation, learning, and excellence
        </motion.p>
        
        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
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
              {/* Achievement Header with Icon */}
              <motion.div
                className={`h-32 bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-6xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.icon}
                </motion.div>
              </motion.div>

              {/* Achievement Content */}
              <div className="p-6">
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
                    isDark
                      ? 'bg-blue-500 bg-opacity-20 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {achievement.category}
                  </span>
                </motion.div>

                <motion.h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {achievement.title}
                </motion.h3>

                <motion.p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {achievement.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          className={`mt-16 rounded-lg p-8 text-center transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-r from-blue-900 to-purple-900'
              : 'bg-gradient-to-r from-blue-100 to-purple-100'
          }`}
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h3
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Continuous Learning & Growth
          </motion.h3>

          <motion.p
            className={`max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            These achievements represent my commitment to innovation, problem-solving, and continuous improvement. 
            I'm always seeking new challenges and opportunities to grow as a developer and contribute to meaningful projects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
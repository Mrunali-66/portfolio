import React from "react";
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';

function Skills() {
  const { isDark } = useTheme();
  
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript (ES6+)", "SQL"],
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "React.js", "Angular", "Responsive Design"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Flask", "RESTful APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "NPM", "VS Code", "PyCharm", "Jupyter", "Bash/WSL"],
    },
    {
      title: "CS Fundamentals",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "Operating Systems",
        "DBMS",
        "Computer Networks",
      ],
    },
    {
      title: "Specialized Skills",
      skills: [
        "AI Tools & Prompt Engineering",
        "API Integration",
        "Multi-threading",
        "Database Optimization",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Leadership",
        "Team Collaboration",
        "Problem-Solving",
        "Critical Thinking",
        "Communication",
        "Adaptability",
      ],
    },
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

  return (
    <section 
      id="skills" 
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          My <span className="text-blue-500">Skills</span>
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
          Technologies and tools I work with to bring ideas to life
        </motion.p>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-lg shadow-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 hover:shadow-2xl' 
                  : 'bg-white hover:shadow-xl'
              }`}
              custom={index * 0.2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              viewport={{ once: false, amount: 0.25 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-500">
                {category.title}
              </h3>

              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-900 hover:bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800'
                    }`}
                    variants={fadeInUp}
                    custom={i}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
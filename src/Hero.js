import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from './ThemeContext';

function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}
      style={{ overflow: 'hidden', maxWidth: '100%', width: '100%' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center" style={{ maxWidth: '100%' }}>
        
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl font-bold transition-all duration-300 text-white ${
            isDark 
              ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
              : 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30'
          }`}
        >
          MH
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 px-4"
          style={{ maxWidth: '100%' }}
        >
          Hi, I'm <span className={`transition-colors duration-300 ${
            isDark ? 'text-blue-500' : 'text-blue-600'
          }`}>Mrunali Hajare</span>
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-lg sm:text-xl md:text-2xl mb-6 px-4 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
          style={{ maxWidth: '100%' }}
        >
          <Typewriter
            words={[
              "Full-Stack Web Developer",
              "Python Developer",
              "AI Enthusiast",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </motion.p>

        {/* Skills Badges */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-wrap gap-3 justify-center mb-12 px-4"
          style={{ maxWidth: '100%' }}
        >
          {[
            "React.js",
            "Angular",
            "Node.js",
            "Python",
            "MongoDB",
            "Flask",
            "PostgreSQL",
          ].map((skill, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                isDark
                  ? 'bg-blue-500 bg-opacity-20 text-white hover:bg-blue-500 hover:text-white'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white shadow-sm'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-4 sm:gap-6 justify-center flex-wrap px-4"
          style={{ maxWidth: '100%' }}
        >
          <motion.a
            href="#projects"
            className={`px-6 py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className={`px-6 py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${
              isDark
                ? 'border border-blue-500 hover:bg-blue-500 hover:text-white text-white'
                : 'border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
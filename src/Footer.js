import React from 'react';
import { useTheme } from './ThemeContext';

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 transition-all duration-500 ${
      isDark 
        ? 'bg-gray-950 text-white' 
        : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Copyright */}
        <p className={`transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          © {new Date().getFullYear()} <span className={`font-semibold transition-colors duration-300 ${
            isDark ? 'text-blue-500' : 'text-blue-600'
          }`}>Mrunali Hajare</span>. All rights reserved.
        </p>

        {/* Tech Stack */}
        <p className={`mt-2 transition-colors duration-300 ${
          isDark ? 'text-gray-500' : 'text-gray-500'
        }`}>
          Built with <span className={`transition-colors duration-300 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>React.js</span> & <span className={`transition-colors duration-300 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>Tailwind CSS</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a 
            href="https://github.com/Mrunali-66" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition duration-300 ${
              isDark 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/mrunali-hajare-368052312/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition duration-300 ${
              isDark 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            LinkedIn
          </a>
          <a 
            href="mailto:jiyahajare62@gmail.com" 
            className={`transition duration-300 ${
              isDark 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
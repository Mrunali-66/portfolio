import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen overflow-x-hidden w-full transition-colors duration-500 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

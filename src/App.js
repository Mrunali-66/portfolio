import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Achievements from './Achievements';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden w-full" style={{ maxWidth: '100%' }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
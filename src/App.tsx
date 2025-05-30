import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import RegisterForm from './components/RegisterForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Header scrolled={scrolled} />
        <Hero />
        <Features />
        <HowItWorks />
        <RegisterForm />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
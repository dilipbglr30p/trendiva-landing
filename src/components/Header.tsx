import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingCart className="h-8 w-8 text-green-500 mr-2" />
          <span className="font-bold text-xl">GroupBuy</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition">Features</a>
          <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition">How It Works</a>
          <a href="#register" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition">Register</a>
          <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition">FAQ</a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a href="#register" className="btn btn-primary">Get Started</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#register" 
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#register" 
              className="btn btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
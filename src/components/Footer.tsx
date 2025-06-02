import React from 'react';
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-8 w-8 text-green-500 mr-2" />
              <span className="font-bold text-xl">GroupBuy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing group buying through WhatsApp. Save money and build community through collaborative shopping.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-green-500 transition">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-green-500 transition">How It Works</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-green-500 transition">Register</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-green-500 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/terms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">Terms of Service</a></li>
              <li><a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">Privacy Policy</a></li>
              <li><a href="/refund" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">Refund Policy</a></li>
              <li><a href="/data-deletion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">Data Deletion Instructions</a></li>
              <li><a href="/contact" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <a href="mailto:hello@groupbuy.com" className="text-gray-400 hover:text-green-500 transition">hello@groupbuy.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-green-500 transition">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span className="text-gray-400">123 Shopping Street<br />Buyville, BUY 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} GroupBuy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/terms" className="text-gray-500 hover:text-green-500 text-sm transition" target="_blank" rel="noopener noreferrer">Terms</a>
            <a href="/privacy" className="text-gray-500 hover:text-green-500 text-sm transition" target="_blank" rel="noopener noreferrer">Privacy</a>
            <a href="/refund" className="text-gray-500 hover:text-green-500 text-sm transition" target="_blank" rel="noopener noreferrer">Cookies</a>
            <a href="/data-deletion" className="text-gray-500 hover:text-green-500 text-sm transition" target="_blank" rel="noopener noreferrer">Data Deletion</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

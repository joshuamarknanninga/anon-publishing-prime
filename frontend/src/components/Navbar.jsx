// frontend/src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg'; // Ensure you have a logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'The Hub', path: '/' },
    { name: 'Submissions', path: '/submissions' },
    { name: 'Books', path: '/books' },
    { name: 'Articles', path: '/articles' },
    { name: 'Chat', path: '/chat' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Facebook', path: '/facebook' },
    { name: 'YouTube', path: '/youtube' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-75 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold text-green-500">AnonPub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-green-400 border-b-2 border-green-400'
                        : 'text-green-500 hover:text-green-400 transition-colors duration-300'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-500 hover:text-green-400 focus:outline-none focus:text-green-400"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black bg-opacity-90"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? 'block px-3 py-2 rounded-md text-base font-medium text-green-400 border-l-4 border-green-400'
                        : 'block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:text-green-400 transition-colors duration-300'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

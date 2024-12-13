// frontend/src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
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
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">AnonPub</span>
          </div>
          <div>
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-green-400'
                        : 'text-green-500 hover:text-green-400 transition-colors duration-300'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

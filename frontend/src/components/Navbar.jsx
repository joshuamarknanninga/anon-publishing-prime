// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Anonymous Publishing</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/authors" className="hover:text-primary">
              Authors
            </Link>
          </li>
          <li>
            <Link to="/join" className="hover:text-primary">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

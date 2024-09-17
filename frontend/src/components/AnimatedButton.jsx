// frontend/src/components/AnimatedButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, type = 'button' }) => {
  return (
    <motion.button
      type={type}
      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;

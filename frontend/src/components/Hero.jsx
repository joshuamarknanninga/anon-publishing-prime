// frontend/src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <motion.h1
        className="text-6xl font-extrabold text-green-500 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to AnonPub
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl text-green-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Dive into the shadows, share your thoughts anonymously, and explore a world of untapped creativity.
      </motion.p>
    </div>
  );
};

export default Hero;

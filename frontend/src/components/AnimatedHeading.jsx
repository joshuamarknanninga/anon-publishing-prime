// frontend/src/components/AnimatedHeading.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = () => {
  return (
    <motion.h1
      className="text-5xl font-extrabold text-primary"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to the Shadows
    </motion.h1>
  );
};

export default AnimatedHeading;

// frontend/src/components/AnimatedBackground.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPosition = `${x}% ${y}%`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={backgroundRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      initial={{ background: 'linear-gradient(135deg, #000000, #0f0f0f)' }}
      animate={{
        background: [
          'linear-gradient(135deg, #000000, #0f0f0f)',
          'linear-gradient(45deg, #0f0f0f, #1a1a1a)',
          'linear-gradient(135deg, #1a1a1a, #000000)',
        ],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    ></motion.div>
  );
};

export default AnimatedBackground;

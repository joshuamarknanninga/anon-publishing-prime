// frontend/src/components/AnimatedBackground.jsx

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const themes = [
  'linear-gradient(135deg, #000000, #0f0f0f)',
  'linear-gradient(45deg, #0f0f0f, #1a1a1a)',
  'linear-gradient(135deg, #1a1a1a, #000000)',
  'linear-gradient(60deg, #0f0f0f, #2a2a2a)',
];

const AnimatedBackground = () => {
  const [theme, setTheme] = useState(themes[0]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const backgroundPosition = useTransform([x, y], ([latestX, latestY]) => {
    return `${latestX}% ${latestY}%`;
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const posX = (clientX / innerWidth) * 100;
      const posY = (clientY / innerHeight) * 100;
      x.set(posX);
      y.set(posY);

      // Change theme based on cursor position quadrant
      if (clientX < innerWidth / 2 && clientY < innerHeight / 2) {
        setTheme(themes[0]);
      } else if (clientX >= innerWidth / 2 && clientY < innerHeight / 2) {
        setTheme(themes[1]);
      } else if (clientX < innerWidth / 2 && clientY >= innerHeight / 2) {
        setTheme(themes[2]);
      } else {
        setTheme(themes[3]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        background: theme,
        backgroundPosition,
        backgroundSize: '200% 200%',
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Particle Effects */}
      <ParticleLayer />
    </motion.div>
  );
};

// Additional component for particle effects (optional)
const ParticleLayer = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const numParticles = 150;
    const tempParticles = [];

    for (let i = 0; i < numParticles; i++) {
      tempParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.2,
        speed: Math.random() * 0.5 + 0.5,
      });
    }

    setParticles(tempParticles);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-green-500 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
          animate={{
            y: [particle.y, particle.y - 20, particle.y],
            opacity: [particle.opacity, 0.1, particle.opacity],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: Math.random(),
          }}
        />
      ))}
    </>
  );
};

export default AnimatedBackground;

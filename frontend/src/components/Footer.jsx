// frontend/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 p-4 text-center text-gray-400">
      <p>&copy; {currentYear} Anonymous Publishing</p>
    </footer>
  );
};

export default Footer;

// frontend/src/pages/YouTube.jsx
import React from 'react';

const YouTube = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">YouTube</h1>
      <p className="text-lg">Check out our YouTube channel.</p>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:underline"
      >
        Go to YouTube
      </a>
    </div>
  );
};

export default YouTube;

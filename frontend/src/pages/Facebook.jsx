// frontend/src/pages/Facebook.jsx
import React from 'react';

const Facebook = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Facebook</h1>
      <p className="text-lg">Visit our Facebook page.</p>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Go to Facebook
      </a>
    </div>
  );
};

export default Facebook;

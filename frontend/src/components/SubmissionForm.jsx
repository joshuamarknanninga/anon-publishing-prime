// frontend/src/components/SubmitForm.jsx
import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import AnimatedButton from './AnimatedButton';
import { motion } from 'framer-motion';

const SubmitForm = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const socket = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim().length < 10) {
      setError('Content must be at least 10 characters long.');
      return;
    }
    setError('');
    socket.emit('newSubmission', { content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <textarea
        className="w-full p-4 bg-gray-800 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows="5"
        placeholder="Share your thoughts anonymously..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      {error && (
        <motion.p
          className="text-red-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
      <div className="mt-4 flex justify-end">
        <AnimatedButton type="submit">Publish</AnimatedButton>
      </div>
    </form>
  );
};

export default SubmitForm;

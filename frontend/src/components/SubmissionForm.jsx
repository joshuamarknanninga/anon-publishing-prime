// frontend/src/components/SubmissionForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const SubmissionForm = ({ refreshSubmissions }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim().length < 10) {
      setError('Submission must be at least 10 characters long.');
      return;
    }

    try {
      await axios.post('/api/submissions', { content });
      setContent('');
      setError('');
      refreshSubmissions();
    } catch (err) {
      console.error('Error submitting:', err);
      setError('Failed to submit. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className="p-3 rounded-md bg-gray-700 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="5"
          placeholder="Share your thoughts anonymously..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        {error && (
          <motion.span
            className="text-red-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.span>
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;

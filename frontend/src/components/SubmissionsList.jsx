// frontend/src/components/SubmissionsList.jsx

import React from 'react';
import { motion } from 'framer-motion';

const SubmissionsList = ({ submissions }) => {
  return (
    <div className="w-full max-w-lg mt-8">
      <h2 className="text-2xl font-bold text-green-400 mb-4">Recent Submissions</h2>
      <ul>
        {submissions.map((submission) => (
          <motion.li
            key={submission.id}
            className="mb-4 p-4 bg-gray-800 rounded-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-green-300">{submission.content}</p>
            <small className="text-gray-400">
              Posted on {new Date(submission.createdAt).toLocaleString()}
            </small>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionsList;

// frontend/src/components/RecentSubmissions.jsx
import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { SocketContext } from '../context/SocketContext';

const RecentSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    // Fetch initial submissions
    fetch('/api/submissions')
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch((err) => console.error(err));

    // Listen for real-time updates
    socket.on('updateSubmissions', (data) => {
      setSubmissions((prev) => [data, ...prev.slice(0, 9)]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('updateSubmissions');
    };
  }, [socket]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Authors</h2>
      <ul>
        {submissions.map((submission) => (
          <motion.li
            key={submission.id}
            className="mb-4 p-4 bg-gray-800 rounded-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg">{submission.content}</p>
            <small className="text-gray-400">
              Posted on {new Date(submission.createdAt).toLocaleString()}
            </small>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSubmissions;

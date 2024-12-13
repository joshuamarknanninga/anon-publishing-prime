// frontend/src/pages/Submissions.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SubmissionForm from '../components/SubmissionForm';
import SubmissionsList from '../components/SubmissionsList'; // Ensure this path is correct

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await axios.get('/api/submissions');
      setSubmissions(res.data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Submissions</h1>
      <SubmissionForm refreshSubmissions={fetchSubmissions} />
      <SubmissionsList submissions={submissions} /> {/* Ensure this component is correctly imported */}
    </div>
  );
};

export default Submissions;

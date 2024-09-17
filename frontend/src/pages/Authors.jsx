// frontend/src/pages/Authors.jsx
import React, { useEffect, useState } from 'react';

const Authors = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('/api/submissions')
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Authors</h1>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id} className="mb-4 p-4 bg-gray-800 rounded-md">
            <p className="text-lg">{submission.content}</p>
            <small className="text-gray-400">
              Posted on {new Date(submission.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;

// frontend/src/pages/Join.jsx
import React from 'react';
import SubmitForm from '../components/SubmitForm';

const Join = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Join Us</h1>
      <p>Share your thoughts anonymously by submitting your content below.</p>
      <SubmitForm />
    </div>
  );
};

export default Join;

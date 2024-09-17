// frontend/src/pages/Home.jsx
import React from 'react';
import AnimatedHeading from '../components/AnimatedHeading';
import SubmitForm from '../components/SubmitForm';
import RecentSubmissions from '../components/RecentSubmissions';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <AnimatedHeading />
      <p className="mt-4">Explore the unknown and share your thoughts anonymously.</p>
      <SubmitForm />
      <RecentSubmissions />
    </div>
  );
};

export default Home;

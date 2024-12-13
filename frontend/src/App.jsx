// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import TheHub from './pages/TheHub';
import Submissions from './pages/Submissions';
import Books from './pages/Books';
import Articles from './pages/Articles';
import ChatPage from './pages/ChatPage';
import Podcasts from './pages/Podcasts';
import Facebook from './pages/Facebook';
import YouTube from './pages/YouTube';

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<TheHub />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/books" element={<Books />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/youtube" element={<YouTube />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

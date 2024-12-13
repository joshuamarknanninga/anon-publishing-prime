// frontend/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import TheHub from './pages/TheHub';
import Submissions from './pages/Submissions';
import Books from './pages/Books';
import Articles from './pages/Articles';
import ChatPage from './pages/ChatPage';
import Podcasts from './pages/Podcasts';
import Facebook from './pages/Facebook';
import YouTube from './pages/YouTube';
import { SocketProvider } from './context/SocketContext';

function App() {
  return (
    <SocketProvider>
      <Router>
        {/* Dynamic Background */}
        <AnimatedBackground />

        {/* Navigation Menu */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-16"> {/* Padding to offset fixed Navbar */}
          <Routes>
            <Route path="/" element={<TheHub />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/books" element={<Books />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/youtube" element={<YouTube />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </SocketProvider>
  );
}

export default App;

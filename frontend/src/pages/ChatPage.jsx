// frontend/src/pages/ChatPage.jsx
import React from 'react';
import Chat from '../components/Chat';

const ChatPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Chat</h1>
      <Chat />
    </div>
  );
};

export default ChatPage;

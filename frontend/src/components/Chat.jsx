// frontend/src/components/Chat.jsx
import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { motion } from 'framer-motion';

const Chat = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const message = { content: input, timestamp: new Date() };
      socket.emit('sendMessage', message);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-green-500">Live Chat</h2>
      </div>
      <div className="h-64 overflow-y-scroll mb-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className="mb-2 p-2 bg-gray-700 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <p className="text-white">{msg.content}</p>
            <span className="text-xs text-gray-400">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </motion.div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          className="flex-grow p-2 rounded-l bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;

// frontend/src/context/SocketContext.jsx

import React, { createContext } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(); // Connects to the server that served the page

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

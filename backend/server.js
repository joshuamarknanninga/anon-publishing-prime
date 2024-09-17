// backend/server.js
const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const { sequelize } = require('./models');
const apiRouter = require('./routes/api');
const rateLimiter = require('./middleware/rateLimiter');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // Adjust as needed
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimiter);

// API Routes
app.use('/api', apiRouter);

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// The "catchall" handler: for any request that doesn't match above, send back React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// WebSockets
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('newSubmission', async (data) => {
    try {
      const submission = await Submission.create({ content: data.content });
      io.emit('updateSubmissions', {
        id: submission.id,
        content: submission.content,
        createdAt: submission.createdAt,
      });
    } catch (error) {
      console.error(error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Sync Database and Start Server
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

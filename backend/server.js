// backend/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const apiRoutes = require('./routes/api/submissions');
const chatRoutes = require('./routes/api/chat');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/submissions', apiRoutes);
app.use('/api/chat', chatRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

// WebSockets for Chat
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});


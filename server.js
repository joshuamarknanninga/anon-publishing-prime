// server.js
const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const exphbs = require('express-handlebars');
const { sequelize, Submission } = require('./models');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars Setup
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const authorsRouter = require('./routes/authors');
const joinRouter = require('./routes/join');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/authors', authorsRouter);
app.use('/join', joinRouter);

// WebSockets
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('newSubmission', async (data) => {
    try {
      const submission = await Submission.create({ content: data.content });
      io.emit('updateSubmissions', { content: submission.content, createdAt: submission.createdAt });
    } catch (error) {
      console.error(error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Sync Database and Start Server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

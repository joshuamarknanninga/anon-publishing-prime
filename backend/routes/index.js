// routes/index.js
const express = require('express');
const router = express.Router();

// Predefined themes
const themes = ['theme1', 'theme2', 'theme3'];

// Home Route
router.get('/', (req, res) => {
  // Select a random theme
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  res.render('home', { theme: selectedTheme });
});

module.exports = router;

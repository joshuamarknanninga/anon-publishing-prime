// routes/join.js
const express = require('express');
const router = express.Router();

// Predefined themes
const themes = ['theme1', 'theme2', 'theme3'];

// Join Route
router.get('/', (req, res) => {
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  res.render('join', { theme: selectedTheme });
});

module.exports = router;

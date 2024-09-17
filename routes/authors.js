// routes/authors.js
const express = require('express');
const router = express.Router();
const { Submission } = require('../models');

// Predefined themes
const themes = ['theme1', 'theme2', 'theme3'];

// Authors Route
router.get('/', async (req, res) => {
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  const submissions = await Submission.findAll({
    order: [['createdAt', 'DESC']],
    limit: 10
  });
  res.render('authors', { theme: selectedTheme, submissions });
});

module.exports = router;

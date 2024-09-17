// backend/routes/api.js
const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// POST /api/submissions
router.post('/submissions', submissionController.createSubmission);

// GET /api/submissions
router.get('/submissions', submissionController.getSubmissions);

module.exports = router;

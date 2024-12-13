// backend/routes/api/submissions.js
const express = require('express');
const router = express.Router();
const submissionsController = require('../../controllers/submissionsController');

// POST /api/submissions
router.post('/', submissionsController.createSubmission);

// GET /api/submissions
router.get('/', submissionsController.getSubmissions);

module.exports = router;

// backend/controllers/submissionController.js
const { Submission } = require('../models');

// Create a new submission
exports.createSubmission = async (req, res) => {
  const { content } = req.body;
  try {
    const submission = await Submission.create({ content });
    res.status(201).json(submission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create submission.' });
  }
};

// Get recent submissions
exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
    });
    res.status(200).json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch submissions.' });
  }
};

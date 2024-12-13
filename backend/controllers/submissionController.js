// backend/controllers/submissionsController.js
const { Submission } = require('../models');

exports.createSubmission = async (req, res) => {
  try {
    const { content } = req.body;
    const submission = await Submission.create({ content });
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create submission.' });
  }
};

exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
    });
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions.' });
  }
};


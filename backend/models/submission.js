// backend/models/submission.js
module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Submission;
};

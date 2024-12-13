// backend/models/submission.js
module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  return Submission;
};


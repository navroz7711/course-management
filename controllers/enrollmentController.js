const enrollmentService = require("../services/enrollmentService");

exports.getEnrollments = async (req, res) => {
  const enrollments = await enrollmentService.getAllEnrollments();
  res.json(enrollments);
};

exports.createEnrollment = async (req, res) => {
  const enrollment = await enrollmentService.createEnrollment(req.body);
  res.json(enrollment);
};

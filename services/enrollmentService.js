const Enrollment = require("../models/enrollment");

exports.getAllEnrollments = async () => {
  return await Enrollment.findAll();
};

exports.createEnrollment = async (data) => {
  return await Enrollment.create(data);
};

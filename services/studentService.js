const Student = require("../models/student");

exports.getAllStudents = async () => {
  return await Student.findAll();
};

exports.createStudent = async (data) => {
  return await Student.create(data);
};

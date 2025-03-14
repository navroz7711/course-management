const studentService = require("../services/studentService");

exports.getStudents = async (req, res) => {
  const students = await studentService.getAllStudents();
  res.json(students);
};

exports.createStudent = async (req, res) => {
  const student = await studentService.createStudent(req.body);
  res.json(student);
};

const courseService = require("../services/courseService");

exports.getCourses = async (req, res) => {
  const courses = await courseService.getAllCourses();
  res.json(courses);
};

exports.createCourse = async (req, res) => {
  const course = await courseService.createCourse(req.body);
  res.json(course);
};

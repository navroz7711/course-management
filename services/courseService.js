const Course = require("../models/course");

exports.getAllCourses = async () => {
  return await Course.findAll();
};

exports.createCourse = async (data) => {
  return await Course.create(data);
};

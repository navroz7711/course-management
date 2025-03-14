const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Course = require("./course");
const Student = require("./student");

const Enrollment = sequelize.define("Enrollment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  progress: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // O‘zlashtirish foizi
});

Course.hasMany(Enrollment);
Enrollment.belongsTo(Course);

Student.hasMany(Enrollment);
Enrollment.belongsTo(Student);

module.exports = Enrollment;

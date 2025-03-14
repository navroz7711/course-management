const db = require("../config/db");

/**
 * O‘zlashtirish foizini hisoblash
 * @returns {Promise<Array>}
 */
async function getCompletionRates() {
  const result = await db.query(`
    SELECT 
      e.courseId, 
      c.title, 
      COUNT(e.studentId) AS total_students, 
      SUM(CASE WHEN e.completed = true THEN 1 ELSE 0 END) AS completed_students,
      (SUM(CASE WHEN e.completed = true THEN 1 ELSE 0 END) * 100.0 / COUNT(e.studentId)) AS completion_rate
    FROM enrollments e
    JOIN courses c ON e.courseId = c.id
    GROUP BY e.courseId, c.title
  `);
  return result.rows;
}

/**
 * Eng ommabop kurslar (ko‘p yozilgan talabalar soni bo‘yicha)
 * @returns {Promise<Array>}
 */
async function getPopularCourses() {
  const result = await db.query(`
    SELECT 
      c.id, 
      c.title, 
      COUNT(e.studentId) AS total_enrollments
    FROM enrollments e
    JOIN courses c ON e.courseId = c.id
    GROUP BY c.id, c.title
    ORDER BY total_enrollments DESC
    LIMIT 5
  `);
  return result.rows;
}

module.exports = { getCompletionRates, getPopularCourses };

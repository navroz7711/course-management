const express = require("express");
const { getCompletionRates, getPopularCourses } = require("../services/analyticsService");
const router = express.Router();

/**
 * @swagger
 * /analytics/completion-rates:
 *   get:
 *     summary: O‘zlashtirish foizini olish
 *     description: Har bir kurs bo‘yicha o‘zlashtirish foizini qaytaradi
 *     responses:
 *       200:
 *         description: Kurslar va ularning o‘zlashtirish foizi
 */
router.get("/completion-rates", async (req, res) => {
  try {
    const data = await getCompletionRates();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /analytics/popular-courses:
 *   get:
 *     summary: Eng ommabop kurslarni olish
 *     description: Eng ko‘p yozilgan kurslar ro‘yxatini qaytaradi
 *     responses:
 *       200:
 *         description: Ommabop kurslar ro‘yxati
 */
router.get("/popular-courses", async (req, res) => {
  try {
    const data = await getPopularCourses();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

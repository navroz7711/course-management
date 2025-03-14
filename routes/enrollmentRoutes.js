const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /enrollments:
 *   get:
 *     summary: Kursga yozilgan talabalarni olish
 *     description: Talabalar va kurslar bog‘liqligini ko‘rsatadi
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli
 */
router.get("/", (req, res) => {
  res.json([{ id: 1, studentId: 1, courseId: 1 }]);
});

/**
 * @swagger
 * /enrollments:
 *   post:
 *     summary: Talabani kursga yozish
 *     description: Berilgan `studentId` va `courseId` orqali kursga yozish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: integer
 *                 example: 1
 *               courseId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Talaba kursga yozildi
 */
router.post("/", (req, res) => {
  res.status(201).json({ message: "Talaba kursga yozildi" });
});

module.exports = router;

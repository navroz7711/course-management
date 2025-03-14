const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Barcha talabalarni olish
 *     description: Talabalar ro‘yxatini qaytaradi
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli
 */
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Ali", email: "ali@example.com" }]);
});

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Yangi talaba qo‘shish
 *     description: Talaba ma’lumotlarini saqlash
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ali"
 *               email:
 *                 type: string
 *                 example: "ali@example.com"
 *     responses:
 *       201:
 *         description: Talaba qo‘shildi
 */
router.post("/", (req, res) => {
  res.status(201).json({ message: "Talaba qo‘shildi" });
});

module.exports = router;


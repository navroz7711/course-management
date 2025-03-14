const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Barcha kurslarni olish
 *     description: Barcha mavjud kurslarni qaytaradi
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli
 */
router.get("/", (req, res) => {
  res.json([{ id: 1, title: "Node.js Darslari" }]);
});

module.exports = router;

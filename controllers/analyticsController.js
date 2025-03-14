const analyticsService = require("../services/analyticsService");

const getCompletionRates = async (req, res) => {
  try {
    const data = await analyticsService.getCompletionRates();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPopularCourses = async (req, res) => {
  try {
    const data = await analyticsService.getPopularCourses();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getCompletionRates, getPopularCourses };

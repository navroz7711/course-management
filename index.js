const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const courseRoutes = require("./routes/courseRoutes");
const studentRoutes = require("./routes/studentRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const swaggerDocs = require("./swagger/swagger");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/courses", courseRoutes);
app.use("/students", studentRoutes);
app.use("/enrollments", enrollmentRoutes);
app.use("/analytics", analyticsRoutes);
swaggerDocs(app);

const PORT = process.env.PORT || 3001;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Course Management API",
      version: "1.0.0",
      description: "Kurslar boshqaruvi uchun RESTful API",
    },
    servers: [{ url: "http://localhost:3001" }],
  },
  apis: ["./routes/*.js"], // Yo‘nalishlar fayllarini o‘qi
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Swagger UI: http://localhost:3001/api-docs");
};

module.exports = swaggerDocs;

const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();

const apiRoutes = require("./routes/apiRoutes");

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Server Setup Configuration
app.listen(PORT, () =>
  console.log(`Starting server on http://localhost:${PORT}`)
);

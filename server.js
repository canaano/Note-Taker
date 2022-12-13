const { application } = require("express");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Server Setup Configuration
app.listen(PORT, () =>
  console.log(`Starting server on http://localhost:${PORT}`)
);

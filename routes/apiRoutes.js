const router = require("express").Router();

// get notes from the database
router.get("/", (req, res) => {
  res.json(`Got your ${req.method} Request`);
});

// adding notes to the database
router.post("/", (req, res) => {
  res.json(`Got your ${req.method} Request`);
});

module.exports = router;

const router = require("express").Router();
// setup handler for random id's
const uuid = require("../helpers/uuid");
// load fs to write files
const fs = require("fs");

// get notes from the database
router.get("/", (req, res) => {
  console.info(`Got your ${req.method} Request`);
  const dataFromJson = fs.readFileSync("./db/db.json", "utf8");
  res.json(JSON.parse(dataFromJson));
});

// adding notes to the database
router.post("/", (req, res) => {
  res.json(`Got your ${req.method} Request`);
});

module.exports = router;

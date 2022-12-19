const router = require("express").Router();
// setup handler for random id's
const uuid = require("../helpers/uuid");
// load fs to write files
const fs = require("fs");

// get old notes from the database
router.get("/", (req, res) => {
  console.info(`Got your ${req.method} Request`);
  const dataFromJson = fs.readFileSync("./db/db.json", "utf8");
  res.json(JSON.parse(dataFromJson));
});

// adding new notes to the database
router.post("/", function (req, res) {
  // add notes to the database
  console.info(`Received your ${req.method} request`);
  const { title, text } = req.body;
  if (title && text) {
    const newNote = { title, text, id: uuid() };
    const currentNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    currentNotes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(currentNotes), (err) =>
      err
        ? console.err(err)
        : console.log(`Your New Note for ${newNote.title} has been saved`)
    );
    const response = {
      status: "Saved Note",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Your note was not Saved");
  }
});

//  Removal of deleted notes from db

module.exports = router;

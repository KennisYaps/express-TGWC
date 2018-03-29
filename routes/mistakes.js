const express = require("express");
const router = express.Router();
const MistakesArray = require("../mistakesArray");

router.get("/", (req, res, next) => {
  res.json(MistakesArray);
});

router.get("/:date", (req, res, next) => {
  const MistakeDate = req.params.date;
  const reqestedMistakeData = MistakesArray.filter(
    mistake => mistake.date === MistakeDate
  );
  res.status(200);
  res.send(reqestedMistakeData);
});
module.exports = router;

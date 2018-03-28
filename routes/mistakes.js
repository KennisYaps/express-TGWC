const express = require("express");
const router = express.Router();
const MistakesArray = require("../mistakesArray");

router.get("/", function(req, res, next) {
  res.json(MistakesArray);
});

router.get("/:date", function(req, res, next) {
  const encodeMistakeDate = encodeURIComponent(req.params.date);
  const reqestedMistakeData = MistakesArray.filter(
    mistake => mistake.date === decodeURIComponent(encodeMistakeDate)
  );
  res.status(200);
  res.send(reqestedMistakeData);
});
module.exports = router;

const TimelinesArray = require("../timelinesArray");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(TimelinesArray);
});
router.post("/", (req, res, next) => {
  const timeline = req.body;
  TimelinesArray.push(timeline);
  res.status(200);
  res.json("timeline created");
});

router.get("/:timelineDate", (req, res, next) => {
  const encodeTimelineDate = encodeURIComponent(req.params.timelineDate);
  // console.log(encodeTimelineDate)
  const requestedTimelineData = TimelinesArray.filter(
    timeline => timeline.date === decodeURIComponent(encodeTimelineDate)
  );
  res.status(200);
  res.send(requestedTimelineData);
});

router.get("/timelineDate/:eventDate", (req, res, next) => {
  const encodeEventDate = encodeURIComponent(req.params.eventDate);
  console.log(encodeEventDate);
  const requestedEvent = TimelinesArray.map(timeline =>
    timeline.events.filter(
      event => event.date === decodeURIComponent(encodeEventDate)
    )
  );
  res.status(200);
  res.send(requestedEvent);
});

module.exports = router;

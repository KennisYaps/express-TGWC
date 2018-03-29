const TimelinesArray = require("../timelinesArray");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(TimelinesArray);
});

router.get("/:timelineDate", (req, res, next) => {
  const TimelineDate = req.params.timelineDate;
  const requestedTimelineData = TimelinesArray.filter(
    timeline => timeline.date === TimelineDate
  );
  res.status(200);
  res.send(requestedTimelineData);
});

router.get("/timelineDate/:eventDate", (req, res, next) => {
  const EventDate = req.params.eventDate;
  console.log(EventDate);
  console.log(EventDate);
  const requestedEvent = TimelinesArray.map(timeline =>
    timeline.events.filter(event => event.date === EventDate)
  ).filter(array => array.length > 0);
  res.status(200);
  res.send(requestedEvent);
});

module.exports = router;

// router.post("/", (req, res, next) => {
//   const timeline = req.body;
//   TimelinesArray.push(timeline);
//   res.status(200);
//   res.json("timeline created");
// });

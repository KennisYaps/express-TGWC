const TimelinesArray = require("../../timelinesArray");
const app = require("../../app");
const request = require("supertest");

describe("routes/timelines", () => {
  test("GET /timeline should return an array of timelines", () => {
    return request(app)
      .get("/timelines")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true);
      });
  });
  test("GET /timeline/:timelineDate should return an array of the specific timeline Date", () => {
    return request(app)
      .get("/timelines/1-June")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toEqual(1);
        expect(response.body[0].date).toEqual("1-June");
      });
  });
  test("GET /timeline/timelineDate/:eventDate should return an array of the specific event date", () => {
    return request(app)
      .get("/timelines/timelineDate/1-June-2018")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true); 
        expect(response.body.length).toEqual(1);
        expect((response.body[0])[0].date).toEqual("1-June-2018")
      });
  });
});

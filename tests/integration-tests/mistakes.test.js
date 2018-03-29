const app = require("../../app");
const request = require("supertest");
const MistakesArray = require("../../mistakesArray");

describe("routes/mistakes", () => {
  test("GET /mistakes should return an array of mistakes", () => {
    return request(app)
      .get("/mistakes")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true);
      });
  });
  test("routes/mistakes/:date should return an array of the particular mistake", () => {
    // need to return because this is a promise. so you need to return the promise
    return request(app)    // request(app) -> to start the server
      .get("/mistakes/1-May-2018")   // get() -> to send request to the server to get reponse
      .then(response => {
        expect(response.status).toEqual(200);
        console.log(response.body);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toEqual(1)
        expect(response.body[0].date).toEqual("1-May-2018")
      });
  });
});

const app = require("../../app");
const request = require("supertest");
const MistakesArray = require('../../mistakesArray')

describe("routes/mistakes", () => {
  it("GET /mistakes should return an array of mistakes", () => {
    return request(app)
      .get("/mistakes")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body.MistakesArray)).toBe(true);
      });
  });
});

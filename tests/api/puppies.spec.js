const app = require("../../app");
const request = require("supertest");

describe("Puppies", () => {
  describe("GET /api/puppies", async () => {
    it("Gets an array of puppy Objects", async () => {
      const { body } = await request(app).get("/api/puppies").expect(200);
      expect(body.length).toEqual(7);
    });
  });
});

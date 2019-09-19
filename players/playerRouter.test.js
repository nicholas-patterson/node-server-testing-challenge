const request = require("supertest");
const server = require("../api/server");

describe("playerRouter.js", () => {
  describe("GET /", () => {
    it("returns status 200 OK", async () => {
      const res = await request(server).get("/players");
      expect(res.status).toBe(200);
    });

    it("returns array of all players", async () => {
      const res = await request(server).get("/players");

      expect(typeof res.body).toBe("object");
    });
  });

  describe("GET /:id", () => {
    it("returns status(200)", async () => {
      const res = await request(server).get("/players/5");
      console.log("RES", res);

      expect(res.status).toBe(200);
    });
  });

  describe("POST /", () => {
    it("returns status(201)", async () => {
      const res = await request(server)
        .post("/players")
        .send({ last_name: "patterson", player_number: 19 });

      expect(res.status).toBe(201);
    });

    it("returns JSON", async () => {
      const res = await request(server)
        .post("/players")
        .send({ last_name: "Williams", player_number: 87 });

      expect(res.type).toMatch(/json/i);
    });
  });

  describe("DELETE /:id", () => {
    it("returns status(202)", async () => {
      const res = await request(server).delete("/players/3");

      expect(res.status).toBe(202);
    });

    it("returns 1 if deleted", async () => {
      const res = await request(server).delete("/players/4");

      expect(res.body).toBe(0);
    });
  });
});

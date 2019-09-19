const Players = require("./player-helpers");
const db = require("../data/db-config");

describe("Players Helpers", () => {
  beforeEach(async () => {
    await db("players").truncate();
  });

  describe("find()", () => {
    it("should return all list of players in db", async () => {
      const playerOne = await Players.add({
        last_name: "Voracek",
        player_number: 93
      });
      const playerTwo = await Players.add({
        last_name: "Riemsdyke",
        player_number: 25
      });
      const playerThree = await Players.add({
        last_name: "Frost",
        player_number: 20
      });

      const allPlayers = await db("players");

      expect(allPlayers).toHaveLength(3);
    });
  });

  describe("add()", () => {
    it("should insert player into db", async () => {
      // insert a record
      await Players.add({ last_name: "Provorov", player_number: 9 });

      let players = await db("players");
      console.log(players);
      // assert the record onserted

      expect(players).toHaveLength(1);
    });
  });

  describe("findById()", () => {
    it("should return list of the player with the ID", async () => {
      const newPlayer = await Players.add({
        last_name: "Hart",
        player_number: 79
      });

      let player = await db("players")
        .where({ id: newPlayer.id })
        .first();

      expect(player.last_name).toBe("Hart");
    });
  });

  describe("remove()", () => {
    it("should delete the player with the given id", async () => {
      const newPlayer = await Players.add({
        last_name: "Couterier",
        player_number: 14
      });

      let player = await db("players")
        .where({ id: newPlayer.id })
        .first();

      const removePlayer = await Players.remove(player.id);

      console.log(removePlayer);

      expect(removePlayer).toBe(1);
    });
  });
});

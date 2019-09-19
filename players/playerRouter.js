const express = require("express");
const router = express.Router();

const Players = require("./player-helpers");

router.get("/", (req, res) => {
  Players.find()
    .then(players => {
      res.status(200).json(players);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get list of players" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Players.findById(id)
    .then(player => {
      if (player) {
        res.status(200).json(player);
      } else {
        res
          .status(400)
          .json({ Error: "Server could not find player with the given ID" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get list of players" });
    });
});

router.post("/", (req, res) => {
  const newPlayer = req.body;
  Players.add(newPlayer)
    .then(player => {
      res.status(201).json(player);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get list of players" });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Players.remove(id)
    .then(deleted => {
      res.status(202).json(deleted);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get list of players" });
    });
});

module.exports = router;

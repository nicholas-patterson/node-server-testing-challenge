const express = require("express");
const playerRouter = require("../players/playerRouter");
const server = express();

server.use(express.json());
server.use("/players", playerRouter);

module.exports = server;

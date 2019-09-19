const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  remove
};

function find() {
  return db("players");
}

function findById(id) {
  return db("players")
    .where({ id })
    .first();
}

function add(newPlayer) {
  return db("players")
    .insert(newPlayer)
    .then(([id]) => {
      return findById(id);
    });
}

function remove(id) {
  return db("players")
    .where({ id })
    .del();
}

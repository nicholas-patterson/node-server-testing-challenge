exports.up = function(knex) {
  return knex.schema.createTable("players", players => {
    players.increments();

    players
      .string("last_name", 128)
      .notNullable()
      .unique();
    players.integer("player_number").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("players");
};

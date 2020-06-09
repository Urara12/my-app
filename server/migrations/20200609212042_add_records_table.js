exports.up = function (knex) {
  return knex.schema.createTable("records", (t) => {
    t.increments().index().primary();

    t.string("name", 15).notNullable().index();

    t.integer("training").index();

    t.integer("interval").index();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("records");
};

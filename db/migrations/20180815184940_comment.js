
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table)=> {
    table.increments();
    table.string('name');
    table.text('content');
    table.integer('book_id')
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment')
};

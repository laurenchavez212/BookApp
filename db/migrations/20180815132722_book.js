
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table)=> {
    table.increments();
    table.string('title');
    table.text('imgURL');
    table.text('description');
    table.string('author');
    table.integer('author_id')
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book')
};

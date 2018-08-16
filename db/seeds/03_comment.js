
exports.seed = function(knex, Promise) {
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {name: 'Albert', content: 'I like this a lot', book_id: 1},
      ]);
    });
};

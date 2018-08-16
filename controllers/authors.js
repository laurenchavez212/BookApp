const knex = require('../db/knex');

module.exports = {

  getAuthors: (req, res) => {
    knex('author').then((results) => {
      res.render('authors', {
        author: results
      })
    })
  },

  newAuthor: (req, res) => {
    knex('author').then((results) => {
      res.render('newAuthor', {
        author: results
      })
    })
  },

  addAuthor: (req, res) => {
    knex('author').insert({
        name: req.body.name,
        bio: req.body.bio
      })
      .then(() => {
        res.redirect('/authors')
      })
  },

  delAuthor: (req, res) => {
    knex("author").del().where('id', req.params.id).then(() => {
      res.redirect("/authors")
    })
  }

}

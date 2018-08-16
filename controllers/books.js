const knex = require('../db/knex');

module.exports = {

  getBooks: (req, res) => {
    knex('book').then((results) => {
      res.render('index', {
        book: results
      })
    })
  },

  newBook: (req, res) => {
    knex('book').then((bookResults) => {
      knex('author').then((authorResults)=> {
        res.render('newBook', {book: bookResults, author:authorResults})
      })
    })
  },

  addBook: (req, res) => {
    knex('book').insert({
        title: req.body.title,
        imgURL: req.body.imgURL,
        description: req.body.description,
        author: req.body.author
      })
      .then(() => {
        res.redirect('/books')
      })
  },

  discussBook: (req, res) => {
    knex('book').where('id', req.params.id)
      .then((bookRes) => {
        knex('comment').where('book_id', req.params.id)
          .then((commentRes) => {
            res.render('discussBook', {
              book: bookRes[0],
              comment: commentRes
            });
          })
      })
  },

  delBook: (req, res) => {
    knex("book").del().where('id', req.params.id).then(() => {
      res.redirect("/books")
    })
  }



}

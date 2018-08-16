const knex = require('../db/knex');

module.exports = {

  postComment: (req, res) => {
    knex('comment').insert({
        name: req.body.name,
        content: req.body.content,
        book_id: req.params.id,
      })
      .then(() => {
        res.redirect('back')
      })
  },

  delComment: (req, res) => {
    knex("comment").del().where('id', req.params.id).then(() => {
      res.redirect("back")
    })
  }


}

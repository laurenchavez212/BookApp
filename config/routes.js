//Update the name of the controller below and rename the file.
const books_controller = require('../controllers/books.js');
const authors_controller = require('../controllers/authors.js')

module.exports = function(app){

  app.get('/books', books_controller.getBooks);

  app.get('/authors', authors_controller.getAuthors);

  app.get('/newBook', books_controller.newBook);

  app.post('/newBook', books_controller.addBook);

  app.get('/newAuthor', authors_controller.newAuthor);

  app.post('/newAuthor', authors_controller.addAuthor);

  app.get('/discussBook/:id', books_controller.discussBook);

  app.get('/del/book/:id', books_controller.delBook);

  app.get('/del/author/:id', authors_controller.delAuthor)

}

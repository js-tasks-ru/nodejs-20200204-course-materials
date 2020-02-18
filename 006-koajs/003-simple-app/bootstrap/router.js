const Router = require('koa-router');
const booksController = require('./../controllers/books');

const router = new Router();

router.get('/books', booksController.booksList);
router.get('/books/:id', booksController.bookById);
router.post('/books/', booksController.createBook);

module.exports = router;

// switch (req.url) {
//   case '/books': handler1
//   case '/books/:id': handler2,
//   ...
// }

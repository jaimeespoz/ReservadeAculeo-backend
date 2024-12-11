const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/booksController');
// const BooksController = require('../controllers/pruebaFetch');

router
    .route('')
    .get(BooksController.getAll)
    .post(BooksController.add)
    .put(BooksController.update)
    .delete(BooksController.del);

router.route('/:id').get(BooksController.get);

module.exports = router;

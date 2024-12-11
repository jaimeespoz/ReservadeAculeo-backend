const { Schema, model } = require('mongoose');

const BooksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
});

// BooksSchema.clearIndex({ title: -1 });

module.exports = model('Books', BooksSchema);

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  booktitle: {
    type: String,
    required: true,
  },
  PubYear: Number,
  author: String,
  Topic: String,
  format: String, // Fixed typo from "formate" to "format"
});

const Books = mongoose.model('bookmodel', BookSchema, 'BookCollection2');
module.exports = Books;

const express = require("express");
const Books = require('./bookschema');
const mongodbConnected = require('./bookdb'); // Renamed import for clarity
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

console.log("BOOKS", Books);


app.get('/', (req, res) => {
  res.send("Welcome to the Books API");
});


app.get('/about', async (req, res) => {
  res.send("MongoDB Express React and Mongoose app. React runs in another application.");

  try {
    const count = await Books.countDocuments().exec();
    console.log("Total documents count before addition:", count);
  } catch (err) {
    console.error(err);
  }
});


app.get('/allbooks1', async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching books' });
  }
});


app.get('/getbook/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Books.findById(id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching book' });
  }
});


app.post('/addbooks', async (req, res) => {
  console.log("Ref", req.body);

  const newBook = new Books(req.body);

  try {
    await newBook.save();
    res.status(200).json({ message: 'Book added successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Adding new book failed' });
  }
});


app.post('/updatebook/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBook = await Books.findByIdAndUpdate(
      id,
      {
        booktitle: req.body.booktitle,
        PubYear: req.body.PubYear,
        author: req.body.author,
        Topic: req.body.Topic,
        format: req.body.format, // Correct key "format"
      },
      { new: true } // Return the updated document
    );

    if (updatedBook) {
      res.status(200).json({ message: 'Book updated successfully' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Updating book failed' });
  }
});

// Delete book by ID
app.post('/deleteBook/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedBook = await Books.findByIdAndDelete(id);
    if (deletedBook) {
      res.status(200).send('Book deleted');
    } else {
      res.status(404).send('Book not found');
    }
  } catch (err) {
    res.status(500).json({ error: 'Deleting book failed' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

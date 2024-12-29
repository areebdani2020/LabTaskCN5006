const mongoose = require('mongoose');
const MONG_URI = 'mongodb://localhost:27017/BooksData'; // Update the URI as needed

mongoose.connect(MONG_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error occurred:', err);
});

db.once('open', () => {
  console.log(`Current version of Mongoose installed: ${mongoose.version}`);
  console.log(`Connection is successful to ${MONG_URI}`);
});

module.exports = db;

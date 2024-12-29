import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Book_Form from "./AddBook";
import Book_UpDateForm from "./BookUpdate";
import DeleteBook from "./Delete_Book";
import FncDisplayBooks from "./Displayfuncomp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Add Book</Link></li>
            <li><Link to="/DisplayBooksF1">Display Books</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Book_Form />} />
          <Route path="/edit/:id" element={<Book_UpDateForm />} />
          <Route path="/Delete/:id" element={<DeleteBook />} />
          <Route path="/DisplayBooksF1" element={<FncDisplayBooks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

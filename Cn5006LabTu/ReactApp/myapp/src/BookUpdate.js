import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Book_UpDateForm() {
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const url = "http://localhost:5000/";
  const params = useParams();

  useEffect(() => {
    axios.get(url + "getbook/" + params.id)
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.error("Error fetching book:", err));
  }, [params.id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(url + "updatebook/" + params.id, state)
      .then(res => console.log(res.data))
      .catch(err => console.error("Error updating book:", err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book</h3>
      <form onSubmit={onSubmit} method="POST">
        <div className="form-group">
          <label>Book Title:</label>
          <input
            className="form-control"
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Book Authors:</label>
          <input
            className="form-control"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>
        {/* Other fields like Topic, format, PubYear here */}
        <div className="form-group">
          <center>
            <input type="submit" value="Update" className="btn btn-primary" />
          </center>
        </div>
      </form>
    </div>
  );
}

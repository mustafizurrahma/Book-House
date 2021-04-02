import React, {useEffect, useState } from "react";
import BookPD from "../BookPD/BookPD";
const Home = () => {
  document.title = "Book House Home Page"
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4500/showbook')
    .then(res => res.json())
    .then(data => setBook(data))
  },[])
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-content-wrap">
          <div className="row">
          {
            books.map(book => <BookPD book={book}></BookPD>)
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


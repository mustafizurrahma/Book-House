import React, {useEffect, useState } from "react";
import BookPD from "../BookPD/BookPD";
const Home = () => {
  document.title = "Book House Home Page"
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch('https://ancient-springs-78289.herokuapp.com/showbook')
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


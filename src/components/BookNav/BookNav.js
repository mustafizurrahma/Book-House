import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faPen } from "@fortawesome/free-solid-svg-icons";
const addBook = <FontAwesomeIcon icon={faBook} />;
const bars = <FontAwesomeIcon icon={faBars} />;
const editBook = <FontAwesomeIcon icon={faPen} />;

const BookNav = () => {
    return (
        <div className="book-wrapper">
        <div className="section-title">
          <h2>Book House Shop</h2>
        </div>
        <div className="book-content">
          <div className="book-icon">

            <Link to="/mangebook">
            <i>{addBook}</i>manage books
            </Link>

            <Link to="/addbook">
                <i>{bars}</i>add book
            </Link>

            <Link to="/editbook">
                <i>{editBook}</i>Edit book
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BookNav;
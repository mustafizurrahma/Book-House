import React, { useEffect, useState } from "react";
import BookNav from "../BookNav/BookNav";
import { Table } from "react-bootstrap";
import ControlManageBook from "../ControlManageBook/ControlManageBook";

const ManageBook = (props) => {
  document.title = "Book House ! Book Control Page";
  const [books, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/showbook")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div className="manage-book">
      <div className="container">
        <div className="row">
          <BookNav></BookNav>

          <div className="manage-book-section">
            <div className="add-title">
              <h2 className="adminPanels">Add Your book</h2>
            </div>
            <div className="manage-book-wrapper">
              <div className="manage-content">
                <div className="manage-book-content">
                  <div className="row">
                    <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>Book Name Name</th>
                          <th>Book Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {books.map((books) => (
                          <ControlManageBook books={books}></ControlManageBook>
                        ))}
                      </tbody>
                    </Table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBook;

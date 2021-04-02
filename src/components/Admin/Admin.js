import React from "react";
import BookNav from "../BookNav/BookNav";
const Admin = () => {
  return (
    <div className="bookshop-section">
      <div className="container">
        <div className="row">
          <BookNav></BookNav>
          <h2 className='adminPanel'>Welcome To Book House Admin Panel</h2>
        </div>
      </div>
    </div>
  );
};
export default Admin;

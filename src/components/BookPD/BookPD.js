import React from 'react';
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
const BookPD = (props) => {
  const {productUrl, _id, productName, productPrice, productDescription} = props.book
    return (
        
        <div className="col-md-4">
        <div className="ride-item">
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={productUrl} />
            <Card.Body>
              <Card.Title>{productName}</Card.Title>
              <Card.Text>{productDescription}</Card.Text>
              <h3 className="price">${productPrice}</h3>

              <Button><Link to={`/checkOut/${_id}`}>Buy Now</Link></Button>

            </Card.Body>
          </Card>
        </div>
      </div>

    );
};

export default BookPD;
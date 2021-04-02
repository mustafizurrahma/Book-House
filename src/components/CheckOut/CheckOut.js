import React, {useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {pdKey} = useParams();
  const [product, setProduct] = useState([]);

useEffect(() => {
  fetch('http://localhost:4500/showbook')
  .then(res => res.json())
  .then(data => {
    const selectedProduct = data.find((pd => pd._id === pdKey))
    setProduct(selectedProduct)
  })

},[pdKey])

const { productName, productPrice, productDescription, productUrl} = product
const newProduct = {
  name:productName,
  price:productPrice,
  productImg:productUrl
}

const handleOrder = () => {
  const productInfo = {...loggedInUser, ...newProduct}
  fetch('http://localhost:4500/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data))
}

  return (
    <div class="checkout-section">
      <div class="container">
        <div class="checkout-title">
          <h2>checkout</h2>
        </div>
        <div class="checkout-wrapper">
          <div class="checkout-content">
            <div class="row">
              <div class="col-lg-6">
                <div class="checkout-des">
                  <h3>Book Name</h3>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="checkout-des">
                  <h3>Book Description</h3>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="checkout-des">
                  <h3>Book price</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-content">
            <div class="row">
              <div class="col-lg-6">
                <div class="content-area">
                  <p>{productName}</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="content-area">
                  <p>{productDescription}</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="content-area">
                  <p>${productPrice}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="checkout">
            <div class="row">
              <div class="col-lg-9">
                <div class="content-area">
                  <p>Total</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="content-area">
                <p>${productPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-btn">
          <button class="btn checkout-btn" onClick={handleOrder}><Link to={'/order'}>Order Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

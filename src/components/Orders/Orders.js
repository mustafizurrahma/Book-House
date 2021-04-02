import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import OrderList from "../OrderList/OrderList";

const Orders = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4500/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

const totalPrice = orders.reduce((total, product) => total+ Number(product.price), 0)


  return (
    <div className="container">
      <div class="userProfile d-flex py-3">
        <div class="img">
          <img src={loggedInUser.userProfile} alt={loggedInUser.name} />
        </div>
        <div class="card-content mt-2 ml-3">
          <h4>{loggedInUser.name}</h4>
          <p>{loggedInUser.email}</p>
        </div>
      </div>
      <div className="table">
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Book Images</th>
              <th>Book Name</th>
              <th>Book Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderList order={order}></OrderList>
            ))}
          </tbody>
          <tr>
            <td colSpan="2">Total Price</td>
            <td>{totalPrice}</td>
          </tr>
        </Table>
      </div>
    </div>
  );
};

export default Orders;

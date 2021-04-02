import React from 'react';

const OrderList = (props) => {
   const {name, price, productImg} = props.order
    return (
             <tr>
              <td><img src={productImg} alt=""/></td>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
    );
};

export default OrderList;
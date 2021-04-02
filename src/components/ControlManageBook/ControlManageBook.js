import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const fatrash = <FontAwesomeIcon icon={faTrash} />;

const ControlManageBook = (props) => {
    const {productName, productPrice, } = props.books

    const handleDelete = (id) => {
     
        fetch(`http://localhost:4500/delete/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
        });
  
    }

    return (
        <tr>
        <td>{productName}</td>
        <td>{productPrice}</td>
        <td> <button className="delete-color" onClick={() => handleDelete(props.books._id)}>{fatrash}</button> </td>
      </tr>
    );
};

export default ControlManageBook;